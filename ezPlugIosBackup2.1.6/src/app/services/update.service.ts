import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AlertController, Platform } from '@ionic/angular';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Market } from '@ionic-native/market/ngx';

interface AppUpdate {
  current: string;
  enabled: boolean;
  majorMsg? : {
    title: string;
    message: string;
    button: string
  };
  minorMsg? : {
    title: string;
    message: string;
    button: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  updateUrl = 'https://ztriciotstorage.blob.core.windows.net/mobile-app-update/app-version-ios.json'
  constructor(private http: HttpClient, private alertCtrl: AlertController, private appVersion: AppVersion, private iab: InAppBrowser,
    private platform: Platform, public market: Market) { 

  }

  async checkForUpdate() {
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json'
      })
    }
    this.http.get(this.updateUrl, httpOptions ).subscribe(async (info: AppUpdate) => {
      if(!info.enabled) {
        this.presentAlert(info.majorMsg.title, info.majorMsg.message)
      }
      else {
        // const versionNumber = "0.2";
        if(this.platform.is('android') || this.platform.is('ios')) {
          const versionNumber = await this.appVersion.getVersionNumber();
          const splittedVersion = versionNumber.split('.');
          const serverVersion = info.current.split('.');
          if(serverVersion[0] > splittedVersion[0]) {
            this.presentAlert(info.majorMsg.title, info.majorMsg.message, info.majorMsg.button)
          }
          else if(serverVersion[1] > splittedVersion[1]) {
            this.presentAlert(info.minorMsg.title, info.minorMsg.message, info.minorMsg.button, false)
          }
        }
      }
    })
  }

  openAppStoreEntry() {
    if(this.platform.is('android')) {
      this.market.open('io.ev.eZCharge');
    }
    else {
      //ezPlug id 1557855933 sku 738SDJT4GA
      // window.open('itms-apps://itunes.apple.com/app/1557855933');
      // this.market.open('itms-apps://itunes.apple.com/app/1557855933');
      const browser = this.iab.create('itms-apps://itunes.apple.com/app/1557855933', '_blank')
      browser.show();
    }
  }

  async presentAlert(header, message, buttonText = '', allowClose = false) {
    const buttons = [];
    if(buttonText != '') {
      buttons.push({
        text : buttonText, 
        handler : () => {
          this.openAppStoreEntry()
        }
      })
    }
    if(allowClose) {
      buttons.push({text : 'Close', role: 'cancel'})
    }
    const alert = await this.alertCtrl.create({
      header, message, buttons, backdropDismiss: allowClose
    });
    await alert.present();

  }

}
