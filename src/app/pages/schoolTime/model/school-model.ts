import { BaseResourceModel } from 'src/app/shared/model/base_resource.model';

export class SchoolTimeModel extends BaseResourceModel {

    constructor(
        description?: string,
    ) {
        super();
    }

    /* jsonData*/
    static fromJson(jsonData: any): SchoolTimeModel {
        return Object.assign(new SchoolTimeModel(), jsonData)
    }


}
