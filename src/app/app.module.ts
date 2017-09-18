import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Import HttpClientModule from @angular/common/http
import {HttpClientModule, HttpClient} from '@angular/common/http';

//Application
import { MyApp } from './app.component';

// Pages
import { HomePage, WalkthroughPage } from '../pages';

// Components
import { PreloadImage, BackgroundImage, NewItemComponent, ShowHideContainer, ShowHideInput, ColorRadio, CounterInput, Rating } from "../components";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

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
