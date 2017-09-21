import { Component, ViewChild } from "@angular/core";
import { NavController, Slides, AlertController } from "ionic-angular";
import { TranslateService } from "@ngx-translate/core";
import { AngularFireAuth } from "angularfire2/auth";

import { TabsNavigationPage, WalkthroughPage } from "../";

@Component({
    selector: "blank-page",
    templateUrl: "blank.html"
})
export class BlankPage {
    constructor(
        public nav: NavController,
        public afAuth: AngularFireAuth
    ) {
        afAuth.authState.subscribe(user =>{
            if(user!= null){
                this.nav.setRoot(TabsNavigationPage);
            }else {
                this.nav.setRoot(WalkthroughPage);
            }
        },error =>{
            this.nav.setRoot(WalkthroughPage);
        });
    }



}