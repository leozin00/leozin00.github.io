import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,

    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatTooltipModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
