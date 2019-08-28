import { BaseResourceModel } from '../model/base_resource.model';
import { OnInit, AfterContentChecked, Injector } from '@angular/core';

import toastr from "toastr"; /* Para Exibir as Mensagens  */
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseResourceServices } from '../services/base-resource.service';
import { switchMap } from 'rxjs/operators';

/*Class Generica para Components de Formulario*/

// personalizando o toasrt (Mensagens)
toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-center",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "3000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}

export abstract class BaseResourceForm<T extends BaseResourceModel> implements OnInit, AfterContentChecked {

    currentAction: string;
    pageTitle: string;
    submitingForm: boolean = false;

    formGroup: FormGroup;
    protected route: ActivatedRoute;
    protected router: Router;
    protected formBuild: FormBuilder;

    //constructor
    constructor(
        protected injector: Injector,
        protected resource: T,
        protected resourceServices: BaseResourceServices<T>,
        protected jsonDataToResourceFn: (jsonData) => T, /* converte Obj para Json*/
    ) {
        this.route = this.injector.get(ActivatedRoute);
        this.router = this.injector.get(Router);
        this.formBuild = this.injector.get(FormBuilder);
    }


    ngOnInit(): void {


    }

    /* carregar logo após todos os componentes da pagina serem carregados,*/
    ngAfterContentChecked(): void {

    }

    /* Submissão do Formulario*/
    submitForm() {
        this.submitingForm = true;
        if (this.currentAction == 'new' || this.resource.id == null) {
            this.createResource();
        } else {
            this.updateResource();
        }
    }

    //Create - Save
    protected createResource() {
        const resource: T = this.jsonDataToResourceFn(this.formGroup.value);
        this.resourceServices.save(resource).subscribe(obj => this.actionsFormSuccess(obj),
            error => { }
        );
    }

    //update
    protected updateResource() {
        const resource: T = this.jsonDataToResourceFn(this.formGroup.value);

        this.resourceServices.update(resource).subscribe(obj => this.actionsFormSuccess(obj),
            error => { }
        );
    }

    /* Success*/
    protected actionsFormSuccess(obj: T): void {
        toastr.success("Operação realizada com sucesso!");

        /* pegando o path da rota Dinamicamente */
        const urlPath: string = this.route.snapshot.parent.url[0].path;

        this.router.navigate([urlPath]);
    }


    /* verificando o tipode operção*/
    protected setCurrentAction() {
        if (this.route.snapshot.url[0].path == 'new') {
            this.currentAction = 'new'
        } else {
            this.currentAction = 'edit'
        }
    }

    /* loadResource*/
    protected loadResource() {
        if (this.currentAction == 'edit') {
            this.route.paramMap.pipe(
                switchMap(params => this.resourceServices.getById(+params.get("id")))
            ).subscribe((obj) => {
                this.resource = obj;
                this.formGroup.patchValue(obj);
            },
                error => { })
        }
    }

    /* Definindo Titulo da Pagina de acrodo com a Operação */
    protected setPageTitle() {
        if (this.currentAction == "new") {
            this.pageTitle = this.createTitle();
        } else {
            this.pageTitle = this.editionTitle();
        }
    }

    // Title -  Novo
    protected createTitle(): string {
        return "Novo";
    }

    //Title - Edição
    protected editionTitle(): string {
        return "Edição";
    }

    protected abstract buildResourceForm(): void;


}
