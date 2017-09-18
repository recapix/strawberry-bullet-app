import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage , WalkthroughPage } from '../pages';

import { PreloadImage, BackgroundImage, NewItemComponent, ShowHideContainer, ShowHideInput, ColorRadio, CounterInput, Rating } from "../components";

@NgModule({
  declarations: [
    // Application
    MyApp,
    // Pages
    HomePage,
    WalkthroughPage,
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
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WalkthroughPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
