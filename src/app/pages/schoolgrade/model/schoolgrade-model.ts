import { BaseResourceModel } from 'src/app/shared/model/base_resource.model';
import { SchoolTimeModel } from '../../schoolTime/model/school-model';
import { LevelEducationModel } from '../../level-education/model/level-education';
import { RoomModel } from '../../room/model/room-model';
import { CourseModel } from '../../course/model/course-model';
import { TeacherModel } from '../../teacher/model/teacher-model';
import { StudentModel } from '../../student/model/student-model';

export class SchoolgradeModel extends BaseResourceModel {

    constructor(
        grade?: string,
        clasS?: string,
        maxStudent?: number,
        currentStudent?: number,
        levelEducation?: LevelEducationModel,
        schoolTime?: SchoolTimeModel,
        room?: RoomModel,
        students?: StudentModel,
        teacher?: TeacherModel,
        courses: CourseModel[] = [],
    ) {
        super();
    }


    /* jsonData*/
    static fromJson(jsonData: any): SchoolgradeModel {
        return Object.assign(new SchoolgradeModel(), jsonData)
    }


}
