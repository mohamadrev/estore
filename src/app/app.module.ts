import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './common/app-header.component';
import { AppFooterComponent } from './common/app-footer.component';
import { LoginComponent } from './pages/login.component';
import { DashboardComponent } from './pages/dashboard.component';
import { AppBannerComponent } from './common/app-banner.component';



@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    LoginComponent,
    DashboardComponent,
    AppBannerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent, AppHeaderComponent, AppFooterComponent, AppBannerComponent]
})
export class AppModule { }
