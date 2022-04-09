import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { ModalController, Platform } from '@ionic/angular';
import { LoaderService } from '../../../services/loading.service'
import * as moment from 'moment';
import { DashBoardService } from '../../../dashboard/dashboard.service';
import { AlertService } from '../../../services/alert.service'

import { constString } from '../../../constString';
import { SignalRService } from '../../../services/signalr.service'

import { LocalNotifications} from '@capacitor/local-notifications'

@Component({
  selector: 'app-charge-ble',
  templateUrl: './charge-ble.page.html',
  styleUrls: ['./charge-ble.page.scss'],
})
export class ChargeBlePage implements OnInit {
  stationDetails: any = [];
  stationDetailsStorage: any;

  charge: boolean = false;
  loaderMsg: string = ""

  time: any = "00:00:00";
  kwh: any = 0;
  cost: any = 0;

  transactionID: any;

  btnPayment: any = true;
  btnUnlock: any = true;
  btnUnlockLoader: any = false;
  btnPlugged: any = true;

  transactionStatus: any = false;
  stopRequest: any = true;

  userID: any = "";
  price: any = 0;

  chargingOptions: any;
  startInterval: any;
  interval: number = 1000;
  estimatedData: any;
  subscription: any;
  refreshLoaded: boolean;
  @ViewChild('refresh', {static: false}) refresh:ElementRef;
  stopClicked: string;

  constructor(public activatedRoute: ActivatedRoute, public router: Router, private callNumber: CallNumber,
    private loaderService: LoaderService,
    private dashboardService: DashBoardService,
    public modalController: ModalController,
    public alertService: AlertService,
    public signalRService: SignalRService,
    private platform: Platform,
    private renderer2: Renderer2
  ) {
  }

  async localNotification(time) {
    let endTime = moment(moment.now()).add(time * 60, 'minutes').format();
    const notifs = await LocalNotifications.schedule({
      notifications: [
        {
          title: "eZCharge Notification",
          body: "Estimated time reached",
          id: 1,
          schedule: { at: moment(endTime, moment.defaultFormat).toDate() },
          attachments: [
            { id: 'face', url: 'http://placekitten.com/g/300/20', options: {} }
          ],
          actionTypeId: "",
          extra: null
        }
      ]
    });
  }
  ngOnInit() {

  }

  async ionViewWillEnter() {
    this.stationDetails = await this.dashboardService.getObject(constString.STATION_DETAILS_INFO)
  }

  

  callStation(number) {
    this.callNumber.callNumber(number, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => {
        this.alertService.presentToast(err)
      });
  }

  
  ionViewDidEnter() {
    this.subscription = this.platform.backButton.subscribeWithPriority(9999, () => {
      this.router.navigate(['app/station-details'])    
    })
  }

  proceed()
  {

  }

}
