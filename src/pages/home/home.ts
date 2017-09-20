import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  item: FirebaseObjectObservable<any>;
  constructor(public navCtrl: NavController, db: AngularFireDatabase) {
    this.item = db.object('/padroes/12345');
  }

}
