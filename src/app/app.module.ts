import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NativeStorage } from "@ionic-native/native-storage";
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Import HttpClientModule from @angular/common/http
import { HttpClientModule, HttpClient } from '@angular/common/http';

//Application
import { MyApp } from './app.component';

// Pages
import {
  BlankPage,
  FollowersPage,
  FollowingPage,
  ForgotPasswordPage,
  HomePage,
  LoginPage,
  PrivacyPolicyPage,
  ProfilePage,
  SearchPage,
  SettingsPage,
  SignupPage,
  WalkthroughPage,
  TabsNavigationPage,
  TermsOfServicePage
} from '../pages';

// Components
import { PreloadImage, BackgroundImage, NewItemComponent, ShowHideContainer, ShowHideInput, ColorRadio, CounterInput, Rating } from "../components";

// Firebase
import { environment } from "./app.environment";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireModule } from "angularfire2";
import { FirebaseProvider } from "./../providers/firebase/firebase";
import { AngularFireAuthModule } from 'angularfire2/auth';

// Services
import { ProfileService, StorageService } from "../services";


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    // Application
    MyApp,
    // Pages
    BlankPage,
    FollowersPage,
    FollowingPage,
    ForgotPasswordPage,
    HomePage,
    LoginPage,
    PrivacyPolicyPage,
    ProfilePage,
    SearchPage,
    SettingsPage,
    SignupPage,
    WalkthroughPage,
    TabsNavigationPage,
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
    }),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    BlankPage,
    MyApp,
    FollowersPage,
    FollowingPage,
    ForgotPasswordPage,
    HomePage,
    LoginPage,
    PrivacyPolicyPage,
    ProfilePage,
    SearchPage,
    SettingsPage,
    SignupPage,
    WalkthroughPage,
    TabsNavigationPage,
    TermsOfServicePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeStorage,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    FirebaseProvider,
    ProfileService,
    StorageService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
