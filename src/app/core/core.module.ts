import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TemplateComponent } from './components/template/template.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({

  declarations: [
    TemplateComponent,
    FooterComponent,
    NavComponent,
    HeaderComponent
  ],

  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
  ],

  exports: [   
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,

    // core components
    TemplateComponent,
    FooterComponent,
    NavComponent,
    HeaderComponent
  ]

})
export class CoreModule { }
