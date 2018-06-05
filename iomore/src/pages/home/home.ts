import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  debug():void{
    let tmp = 16;
    console.log(tmp,'This is Home Page!');
    tmp;
  }

}
