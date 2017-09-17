import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RedditsPage } from '../reddits/reddits';

@Component({
  selector: 'settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  category: string;
  limit: number;

  constructor(public navCtrl: NavController) {
    this.getDefaults();
  }

  getDefaults() {
    if(localStorage.getItem('category') != null) {
      this.category = localStorage.getItem('category');
    } else {
      this.category = 'sports';
    }

    if(localStorage.getItem('limit') != null) {
      this.limit = Number(localStorage.getItem('limit'));
    } else {
      this.limit = 10;
    }
  }

  setDefaults() {
    console.log('passou aqui');
    localStorage.setItem('category', this.category);
    localStorage.setItem('limit', this.limit.toString());
    this.navCtrl.setRoot(RedditsPage);
  }
}
