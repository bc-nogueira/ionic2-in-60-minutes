import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DetailsPage } from '../details/details';

import { RedditService } from '../../app/services/reddit.service';

@Component({
  selector: 'reddits',
  templateUrl: 'reddits.html'
})
export class RedditsPage implements OnInit {
  items: any;
  category: string;
  limit: number;

  constructor(public navCtrl: NavController, private redditService: RedditService) {
    this.getDefaults();
  }

  ngOnInit() {
    this.getPosts(this.category, this.limit);
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

  getPosts(category: string, limit: number) {
    this.redditService.getPosts(category, limit).subscribe(response => {
      this.items = response.data.children;
    });
  }

  viewItem(item) {
    this.navCtrl.push(DetailsPage, {
      item: item
    });
  }

  changeCategory() {
    this.getPosts(this.category, this.limit);
  }
}
