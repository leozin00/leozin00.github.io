import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarModule } from './layout/toolbar/toolbar.module';
import { FooterModule } from './layout/footer/footer.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavbarModule } from './layout/navbar/navbar.module';
import { HomeModule } from './pages/home/home.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,

    ToolbarModule,
    FooterModule,
    NavbarModule,
    HomeModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
