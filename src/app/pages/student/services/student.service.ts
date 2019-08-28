import { Injectable, Injector } from '@angular/core';
import { BaseResourceServices } from 'src/app/shared/services/base-resource.service';
import { StudentModel } from '../model/student-model';

@Injectable({
  providedIn: 'root'
})
export class StudentService extends BaseResourceServices<StudentModel>{

  constructor(
    protected injector: Injector,

  ) {
    super("students", injector, StudentModel.fromJson);
  }
}
