import { Component } from '@angular/core';
import { MenuController, SegmentButton, App, NavParams, LoadingController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { ProfileModel } from '../../models';
import { ProfileService, StorageService } from '../../services';
import 'rxjs/Rx';

@Component({
  selector: 'profile-page',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  display: string;
  profile: ProfileModel = new ProfileModel();
  loading: any;

  constructor(
    public menu: MenuController,
    public app: App,
    public navParams: NavParams,
    public profileService: ProfileService,
    public loadingCtrl: LoadingController,
    public storage: StorageService
  ) {
    this.display = "list";

    this.loading = this.loadingCtrl.create();
  }

  ionViewDidLoad() {
    this.updatePage();
  }

  goToFollowersList() {

  }

  goToFollowingList() {

  }

  updatePage() {
    this.profile = new ProfileModel();
    this.showLoading();
    this.storage.get("auth.user")
      .then(o => {

        var UserPromisse = this.profileService.getProfileUser(o.uid)
          .then(user => {
            this.profile.user = user;
          });

        var FollowersPromisse = this.profileService.getProfileFollowers(o.uid)
          .then(followers => {
            this.profile.followers = followers;
          });

        var FollowingPromisse = this.profileService.getProfileFollowing(o.uid)
          .then(following => {
            this.profile.following = following;
          });

        var PostPromisse = this.profileService.getProfilePosts(o.uid)
          .then(posts => {
            this.profile.posts = posts;
          });

        Promise
          .all([UserPromisse, FollowersPromisse, FollowingPromisse, PostPromisse])
          .then(() => {
            this.closeLoading();
          });

      })
      .catch(error => {

      });

  }

  doRefresh(refresher) {
    this.profile = new ProfileModel();
    this.showLoading();
    this.storage.get("auth.user")
      .then(o => {

        var UserPromisse = this.profileService.getProfileUser(o.uid)
          .then(user => {
            this.profile.user = user;
          });

        var FollowersPromisse = this.profileService.getProfileFollowers(o.uid)
          .then(followers => {
            this.profile.followers = followers;
          });

        var FollowingPromisse = this.profileService.getProfileFollowing(o.uid)
          .then(following => {
            this.profile.following = following;
          });

        var PostPromisse = this.profileService.getProfilePosts(o.uid)
          .then(posts => {
            this.profile.posts = posts;
          });

        Promise
          .all([UserPromisse, FollowersPromisse, FollowingPromisse, PostPromisse])
          .then(() => {
            this.closeLoading();
            refresher.complete();
          });

      })
      .catch(error => {

      });

  }


  goToSettings() {
    // close the menu when clicking a link from the menu
    this.menu.close();
    this.app.getRootNav().push(SettingsPage);
  }

  onSegmentChanged(segmentButton: SegmentButton) {
    // console.log('Segment changed to', segmentButton.value);
  }

  onSegmentSelected(segmentButton: SegmentButton) {
    // console.log('Segment selected', segmentButton.value);
  }

  sharePost(post) {
  }


  showLoading() {
    this.loading = this.loadingCtrl.create();
    this.loading.present();
  }
  closeLoading() {
    this.loading.dismiss();
  }
}
