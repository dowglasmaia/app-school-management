import { BaseResourceModel } from 'src/app/shared/model/base_resource.model';
import { SchoolgradeModel } from '../../schoolgrade/model/schoolgrade-model';
import { InstitutionModel } from '../../institution/model/institution-model';
import { AddressModel } from '../../address/model/address-model';
import { StudentNoteModel } from '../../studentnote/model/studentNote-model';
import { SchoolQuaterModel } from '../../schoolquarter/model/schoolquater-model';

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
        address?: AddressModel,
        notes: StudentNoteModel[] = [],
        quarters: SchoolQuaterModel[] = []

    ) {
        super();
    }
    /* jsonData*/
    static fromJson(jsonData: any): StudentModel {
        return Object.assign(new StudentModel(), jsonData)
    }

}
