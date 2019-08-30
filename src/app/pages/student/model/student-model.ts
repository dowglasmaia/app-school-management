import { BaseResourceModel } from 'src/app/shared/model/base_resource.model';
import { SchoolgradeModel } from '../../schoolgrade/model/schoolgrade-model';
import { InstitutionModel } from '../../institution/model/institution-model';
import { StudentNoteModel } from '../../studentnote/model/studentNote-model';
import { CityModel } from '../../city/model/city-model';

export class StudentModel extends BaseResourceModel {

    constructor(
        name?: string,
        genero?: string,
        cpf?: string,
        dateOfBirth?: Date,
        dateOfEnrollment?: Date,
        trasferDate?: Date,
        dateOfDeparture?: Date,
        responsible?: string,
        email?: string,
        password?: string,
        telephone?: string,
        schoolLevel?: string,
        schoolGrade?: SchoolgradeModel,
        institution?: InstitutionModel,
        street?: string,
        district?:string,
        postalCode?:string,
        number?:string,
        complement?:string,
        pointOfReference?:string,
        city?:CityModel,
        notes: StudentNoteModel[] = [],
       

    ) {
        super();
    }
    /* jsonData*/
    static fromJson(jsonData: any): StudentModel {
        return Object.assign(new StudentModel(), jsonData)
    }

}
