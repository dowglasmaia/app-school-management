import { Component, OnInit, Injector } from '@angular/core';
import { BaseResourceForm } from 'src/app/shared/components/base-resource-form.component';
import { StudentModel } from '../../model/student-model';
import { StudentService } from '../../services/student.service';
import { Validators } from '@angular/forms';
import { LevelEducationComponent } from 'src/app/pages/level-education/level-education-form/level-education.component';
import { LevelEducationModel } from 'src/app/pages/level-education/model/level-education';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})


export class StudentFormComponent extends BaseResourceForm<StudentModel> implements OnInit {

  levelEducations: LevelEducationModel[];

  constructor(
    protected studentService: StudentService,
    protected injector: Injector
  ) {
    super(injector, new StudentModel(), studentService, StudentModel.fromJson)
  }

  ngOnInit() {
    this.getLevelEducations();


    super.ngOnInit();
  }

  /* Criando o Formulario de Estudante*/
  protected buildResourceForm(): void {
    this.formGroup = this.formBuild.group({
      id: [null],
      name: ['', [Validators.required]],
      genero: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
      ndateOfEnrollmentame: [null],
      trasferDate: [null],
      dateOfDeparture: [null],
      responsible: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: [null],
      telephone: ['', [Validators.required]],
      schoolLevel: ['', [Validators.required]],
      schoolGrade: ['', [Validators.required]],
      institution: ['', [Validators.required]],
      street: ['', [Validators.required]],
      district: ['', [Validators.required]],
      postalCode: ['', [Validators.required]],
      number: ['', [Validators.required]],
      complement: ['', [Validators.required]],
      pointOfReference: ['', [Validators.required]],
      city: ['', [Validators.required]],
      notes: [null],

    })
  }

  public getLevelEducations() {
    this.studentService.getEscolaridade().subscribe(
      result => this.levelEducations = result

    );

  }


  //Escolaridade
  //getLevelEducation():
  //Serie - Classe

  //Cidades por Estado



}
