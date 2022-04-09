import { Component, OnInit, Renderer2  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LocalNotifications} from '@capacitor/local-notifications'

import { DashBoardService } from '../../dashboard/dashboard.service';
import { constString } from '../../constString';

import { PopoverController, Platform, AlertController, ModalController} from '@ionic/angular';
import { LoaderService } from '../../services/loading.service'
import { AlertService } from '../../services/alert.service'

import { CallNumber } from '@ionic-native/call-number/ngx';
import * as moment from 'moment';
import { WalletModal } from '../wallet-modal/wallet.page';

@Component({
  selector: 'app-station-details-ble',
  templateUrl: './station-details-ble.page.html',
  styleUrls: ['./station-details-ble.page.scss'],
})
export class StationDetailsBlePage implements OnInit {
  userID: any = "";
  stationDetails: any = {}
  stationDetailsStorage: any = {}

  backButtonSubscription:any
  routedFromNearby: any = false;
  subscription: any;
  
  constructor(public router: Router, private dashboardService: DashBoardService,
    public popoverController: PopoverController, public loaderService: LoaderService,public route: ActivatedRoute,
    private callNumber: CallNumber, public alertService: AlertService, private platform: Platform,
    public alertController: AlertController, public modalController: ModalController
  ) {
  }

  isEmpty(obj) {
    return !Object.keys(obj).length;
  }

  async ionViewDidEnter() {
    this.subscription = this.platform.backButton.subscribeWithPriority(9999, () => {
      if (this.router.url === '/app/station-details') {
        if(this.routedFromNearby) {
          this.router.navigate(['app/search-near-by'])
        }
        else {
          this.router.navigate(['app/dashboard'])
        }
      }
        
    })    
    this.dashboardService.getObject(constString.OTP_SESSION).then(data => {
      this.userID = data.user.userId;
    })
    let tempUser = await this.dashboardService.getObject(constString.OTP_SESSION)
    this.userID = tempUser.user.userId;
 
    this.stationDetailsStorage = await this.dashboardService.getObject(constString.STATION_DETAILS)
    this.loadStationDetails();

  }

  async presentAlert(msg, route) {
		const alert = await this.alertController.create({
      header: 'Warning!',
      message: msg,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'Okay',
          handler: () => {
            // this.unlockBox('abort',route)
          }
        }
      ]
    });

    await alert.present();
	}

  async ngOnInit() {
    
    if(this.router.getCurrentNavigation().extras.state) {
      this.router.getCurrentNavigation().extras.state.nearby ? this.routedFromNearby = true : this.routedFromNearby = false
    }
     
  }
  async loadStationDetails() {
    let userLocation = await this.dashboardService.getObject(constString.USER_LOCATION);
    if (userLocation == null) {
      userLocation = { "Lattitude": 0, "Longitude": 0 } 
    }
    this.loaderService.showLoader('Loading...');
    this.dashboardService.getStationDetails(this.stationDetailsStorage.stationId, userLocation, this.userID).subscribe(data => {
      if (data.hasError === false) {
        
        this.stationDetails = data;
        this.loaderService.hideLoader();
        this.dashboardService.setObject(data, constString.STATION_DETAILS_INFO)

        if(!data.isConnectedToIoTHub) {
          this.alertService.presentToast(constString.STATION_AVAILABILITY_MESSAGE)
        }
      }
    }, (error: any) => {
      this.loaderService.hideLoader();
      this.alertService.presentToast(constString.HTTP_RESPONSE_ERROR)
    }) 
  }


  convertToTimeFormat(time: any) {
    return moment().startOf('day').seconds(time).format('HH:mm:ss')
    // return moment().startOf('day').seconds((time * 3600)).format('HH:mm:ss')
  }
  returnNumber(number) {
    if (number === null)
      return 0.000
    return parseFloat(number).toFixed(3)
  }
  returnNumberPrice(number) {
    if (number === null)
      return 0.00
    return parseFloat(number).toFixed(2)
  }

  proceed() {
    this.router.navigate(['app/charge-ble'])
  }

  callStation(number) {
    this.callNumber.callNumber(number, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => {
        this.alertService.presentToast(err)
      });
  }

  markAsFavourite() {
    let serverData = {"userId": this.userID, "stationId": this.stationDetailsStorage.stationId, 
      "stationName": this.stationDetailsStorage.stationName,"connectorNumber": 1}
    this.dashboardService.addStationToFavourite(serverData).subscribe(data => {
      if (data.hasError === false) {
        
        this.loadStationDetails();
        if(this.stationDetails.isMarkedAsFavourite) {
          this.alertService.presentToast("Removed from favourite")
        }
        else {
          this.alertService.presentToast("Marked as favourite")
        }
      }
    }, (error: any) => {
      this.alertService.presentToast(constString.HTTP_RESPONSE_ERROR)
    })
  }

  async showWalletModal() {
    const modal = await this.modalController.create({
      component: WalletModal,
      cssClass: 'my-custom-modal-css-wallet',
      backdropDismiss: true,
    });
    return await modal.present();
  }
}