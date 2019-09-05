import { BaseResourceModel } from 'src/app/shared/model/base_resource.model';
import { DistrictModel } from '../../district/model/district-model';

export class CityModel extends BaseResourceModel {

    constructor(
        name?: string,
        district?:DistrictModel
       
    ) {
        super();
    }
    
    /* jsonData*/
    static fromJson(jsonData: any): CityModel {
        return Object.assign(new CityModel(), jsonData)
    }
}



