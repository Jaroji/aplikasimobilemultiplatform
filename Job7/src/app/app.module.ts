import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthProvider } from '../providers/auth/auth';
import { AlertProvider } from '../providers/alert/alert';
import { ProductProvider } from '../providers/product/product';
import { EnvProvider } from '../providers/env/env';
import { MyfavoritePage } from '../pages/myfavorite/myfavorite';
import { SQLite } from '@ionic-native/sqlite';

import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { HttpClientModule } from '@angular/common/http';
import { MyproductPage } from '../pages/myproduct/myproduct';
import { FormproductPage } from '../pages/formproduct/formproduct';
import { CovidinfoProvider } from '../providers/covidinfo/covidinfo';
import { CovidinfoPage } from '../pages/covidinfo/covidinfo';
import { MyprofilePage } from '../pages/myprofile/myprofile';
import { DatabaseProvider } from '../providers/database/database';
import { SearchPage } from '../pages/search/search';
import { ProductfavoriteProvider } from '../providers/productfavorite/productfavorite';
import { Camera } from '@ionic-native/camera';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { FilePath } from '@ionic-native/file-path';

import { FCM } from '@ionic-native/fcm/ngx';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    LoginPage,
    TabsPage,
    MyproductPage,
    FormproductPage,
    CovidinfoPage,
    MyprofilePage,
    MyfavoritePage,
    SearchPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    LoginPage,
    TabsPage,
    MyproductPage,
    FormproductPage,
    CovidinfoPage,
    MyprofilePage,
    MyfavoritePage,
    SearchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    AlertProvider,
    ProductProvider,
    EnvProvider,
    ProductProvider,
    CovidinfoProvider,
    DatabaseProvider,
    ProductfavoriteProvider,
    SQLite,
    FileTransfer, 
    FileTransferObject,
    File,
    FilePath,
    Camera,
    FCM
  ]
})
export class AppModule {}
