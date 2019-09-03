import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgxMaskModule} from 'ngx-mask-2'
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    RouterModule,

  ],

  exports: [
    CommonModule,
    ReactiveFormsModule,
    NgxMaskModule,
    RouterModule
  ],

  providers: [   
   
]
})
export class SharedModule { }
