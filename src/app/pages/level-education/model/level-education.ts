import { BaseResourceModel } from 'src/app/shared/model/base_resource.model';

export class LevelEducationModel extends BaseResourceModel {

    constructor(
        description?: string,
    ) {
        super();
    }
    
    /* jsonData*/
    static fromJson(jsonData: any): LevelEducationModel {
        return Object.assign(new LevelEducationModel(), jsonData)
    }


}
