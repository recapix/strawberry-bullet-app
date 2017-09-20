import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { UserModel, ProfileModel, ProfilePostModel } from '../../models';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class ProfileService {
  constructor(public http: HttpClient, private db: AngularFireDatabase) { }

  getData(): Promise<ProfileModel> {
    return this.http.get('./assets/example_data/profile.json')
      .toPromise()
      .then(response => {
        return response as ProfileModel
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    // for demo purposes only
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getProfileUser(uidProfile: string): Promise<any> {
    return new Promise<UserModel>((resolve, reject) => {
      this.db.object("/profile/" + uidProfile + "/user").subscribe(o => {
        resolve(o as UserModel);
      }, e => {
        reject(e);
      });
    });
  }

  getProfileFollowers(uidProfile: string) {
    return new Promise<UserModel[]>((resolve, reject) => {
      this.db.list("/profile/" + uidProfile + "/followers").subscribe(o => {
        resolve(o as UserModel[]);
      }, e => {
        reject(e);
      });
    });
  }

  getProfileFollowing(uidProfile: string) {
    return new Promise<UserModel[]>((resolve, reject) => {
      this.db.list("/profile/" + uidProfile + "/following").subscribe(o => {
        resolve(o as UserModel[]);
      }, e => {
        reject(e);
      });
    });
  }

  getProfilePosts(uidProfile: string) {
    return new Promise<ProfilePostModel[]>((resolve, reject) => {
      this.db.list("/profile/" + uidProfile + "/posts").subscribe(o => {
        resolve(o as ProfilePostModel[]);
      }, e => {
        reject(e);
      });
    });
  }

  deleteProfileFollowing(uidProfile: string, postId) {
    return new Promise<void>((resolve, reject) => {
      this.db.object("/profile/" + uidProfile + "/following/" + postId).remove()
        .then(o => {
          resolve()
        })
        .catch(e => {
          reject(e);
        });
    });
  }


}
