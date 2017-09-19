import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Import HttpClientModule from @angular/common/http
import { HttpClientModule, HttpClient } from '@angular/common/http';

//Application
import { MyApp } from './app.component';

// Pages
import { ForgotPasswordPage, HomePage, LoginPage, PrivacyPolicyPage, SignupPage, WalkthroughPage, TermsOfServicePage } from '../pages';

// Components
import { PreloadImage, BackgroundImage, NewItemComponent, ShowHideContainer, ShowHideInput, ColorRadio, CounterInput, Rating } from "../components";

// Firebase
import { environment } from "./app.environment";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireModule } from "angularfire2";
import { FirebaseProvider } from "./../providers/firebase/firebase";
import { AngularFireAuthModule } from 'angularfire2/auth';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    // Application
    MyApp,
    // Pages
    ForgotPasswordPage,
    HomePage,
    LoginPage,
    PrivacyPolicyPage,
    SignupPage,
    WalkthroughPage,
    TermsOfServicePage,
    // Components
    PreloadImage,
    BackgroundImage,
    NewItemComponent,
    ShowHideContainer,
    ShowHideInput,
    ColorRadio,
    CounterInput,
    Rating
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ForgotPasswordPage,
    HomePage,
    LoginPage,
    PrivacyPolicyPage,
    SignupPage,
    WalkthroughPage,
    TermsOfServicePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    FirebaseProvider
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
