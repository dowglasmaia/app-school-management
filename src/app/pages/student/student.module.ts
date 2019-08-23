import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

import {InputMaskModule} from 'primeng/inputmask';

@NgModule({
  declarations: [
    StudentFormComponent,
    StudentListComponent
  ],
  imports: [
   SharedModule,
    StudentRoutingModule,
    InputMaskModule
  ]
})
export class StudentModule { }
