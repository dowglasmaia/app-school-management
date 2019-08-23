import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgxMaskModule} from 'ngx-mask-2'



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxMaskModule.forRoot(),

  ],

  exports: [
    CommonModule,
    NgxMaskModule
  ],

  providers: [   
   
]
})
export class SharedModule { }
