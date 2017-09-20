import { Component } from '@angular/core';
import { MenuController, NavParams } from 'ionic-angular';
import { UserModel } from '../../models';
import { ProfileService, StorageService } from '../../services/index';

@Component({
  selector: 'followers-page',
  templateUrl: 'followers.html'
})
export class FollowersPage {
  list: Array<UserModel> = [];
  constructor(public menu: MenuController, public navParams: NavParams, public profileService: ProfileService, public storage: StorageService) {
    this.storage.get("auth.user")
      .then(o => {
        var FollowersPromisse = this.profileService.getProfileFollowers(o.uid)
          .then(followers => {
            this.list = followers;
          });
      });
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on this page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }
}
