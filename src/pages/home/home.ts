import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var WLResourceRequest;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  balance;
  constructor(public navCtrl: NavController) {

  }
  getBalance() {
    var resourceRequest = new WLResourceRequest("/adapters/getSomething/getValue", WLResourceRequest.GET);

    resourceRequest.send().then((response) => {
      let res = JSON.parse(response.responseText);
      this.balance = res.result;
      console.log('balance from adapter',this.balance);
    },
      function (error) {
        console.log(error);
      });
  }

}
