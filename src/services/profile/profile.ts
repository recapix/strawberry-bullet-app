import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { ProfileModel } from '../../pages/profile/profile.model';

@Injectable()
export class ProfileService {
  constructor(public http: HttpClient) {}

  getData(): Promise<ProfileModel> {
    return this.http.get('./assets/example_data/profile.json')
     .toPromise()
     .then(response => {
        return response as ProfileModel
      })
     .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
