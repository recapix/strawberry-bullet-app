import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, LoadingController, Platform, AlertController } from 'ionic-angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { StorageService } from "../../services";

import { SignupPage, ForgotPasswordPage, TabsNavigationPage } from '../';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'login-page',
  templateUrl: 'login.html'
})
export class LoginPage {
  login: FormGroup;
  main_page: { component: any };
  loading: any;

  constructor(
    private plt: Platform,
    public nav: NavController,
    public afAuth: AngularFireAuth,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private storage: StorageService
  ) {
    this.main_page = { component: TabsNavigationPage };

    if(!plt.is('cordova')) {
      this.login = new FormGroup({
        email: new FormControl('renan.leite@globo.com', Validators.required),
        password: new FormControl('N2N6x6x4', Validators.required)
      });
    }else{
      this.login = new FormGroup({
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
      });
    }   
  }

  doLogin() {
    this.showLoading();
    this.afAuth.auth
      .signInWithEmailAndPassword(this.login.value.email, this.login.value.password)
      .then(resolve => {
        this.storage.set("auth.user", { uid: resolve.uid, email: resolve.email }).then(() => {
          this.closeLoading();
          this.nav.setRoot(this.main_page.component);
        });
      })
      .catch((a: any) => {
        this.closeLoading();
        var msg = "";
        switch (a.code) {
          case "auth/user-not-found":
            msg = "User not found";
            break;
          default:

            break;
        }
        debugger;
        let alert = this.alertCtrl.create({
          title: 'Auth Error',
          subTitle: msg,
          buttons: ['Close']
        });
        alert.present();
      });
  }

  doFacebookLogin() {

  }

  goToSignup() {
    this.nav.push(SignupPage);
  }

  goToForgotPassword() {
    this.nav.push(ForgotPasswordPage);
  }

  ionViewDidEnter() {

  }

  showLoading() {
    this.loading = this.loadingCtrl.create();
    this.loading.present();
  }
  closeLoading() {
    this.loading.dismissAll();
  }
}
