import { Injectable, Injector } from '@angular/core';
import { BaseResourceServices } from 'src/app/shared/services/base-resource.service';
import { StudentModel } from '../model/student-model';
import { Observable } from 'rxjs';
import { SchoolgradeModel } from '../../schoolgrade/model/schoolgrade-model';
import { LevelEducationModel } from '../../level-education/model/level-education';
import { environment } from 'src/environments/environment';

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
public getEscolaridade():Observable<LevelEducationModel[]>{
  return this.http.get<LevelEducationModel[]>(`${environment.url_api}/level-educations`);
}

//get Turnos


  //buscar serie pela escolaridade e turno
  public getSerieByEscolaridadeAndTurno(escolaridade: number, turno: number): Observable<SchoolgradeModel> {
    return null;
  }
}
