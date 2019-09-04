import { Injectable, Injector } from '@angular/core';
import { BaseResourceServices } from 'src/app/shared/services/base-resource.service';
import { StudentModel } from '../model/student-model';
import { Observable } from 'rxjs';
import { SchoolgradeModel } from '../../schoolgrade/model/schoolgrade-model';
import { LevelEducationModel } from '../../level-education/model/level-education';
import { environment } from 'src/environments/environment';
import { SchoolTimeModel } from '../../schoolTime/model/school-model';

@Injectable({
  providedIn: 'root'
})
export class StudentService extends BaseResourceServices<StudentModel>{

  constructor(
    protected injector: Injector,

  ) {
    super("students", injector, StudentModel.fromJson);
  }

  //get Escolaridades
  public getEscolaridade(): Observable<LevelEducationModel[]> {
    return this.http.get<LevelEducationModel[]>(`${environment.url_api}/level-educations`);
  }

  //get Horarios
  public getHorarios(): Observable<SchoolTimeModel[]> {
    return this.http.get<SchoolTimeModel[]>(`${environment.url_api}/schooltimes`);
  }

  //get Series
  public getSeries(): Observable<SchoolgradeModel[]> {
    return this.http.get<SchoolgradeModel[]>(`${environment.url_api}/grades`);
  }


}
