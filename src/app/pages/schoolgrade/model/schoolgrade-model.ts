import { BaseResourceModel } from 'src/app/shared/model/base_resource.model';

export class SchoolgradeModel extends BaseResourceModel {

    constructor(
        grade?:string,
        clasS?:string,
        

    ){
        super();
    }


      /* jsonData*/
      static fromJson(jsonData: any): SchoolgradeModel {
        return Object.assign(new SchoolgradeModel(), jsonData)
    }


}
