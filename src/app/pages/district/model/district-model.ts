import { BaseResourceModel } from 'src/app/shared/model/base_resource.model';
import { CityModel } from '../../city/model/city-model';

export class DistrictModel extends BaseResourceModel {

    constructor(
        name?: string,
        initials?: string,
        cities: CityModel[]= []
    ) {
        super();
    }
    
    /* jsonData*/
    static fromJson(jsonData: any): DistrictModel {
        return Object.assign(new DistrictModel(), jsonData)
    }
}
