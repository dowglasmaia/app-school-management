import { BaseResourceModel } from '../model/base_resource.model';
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';
import { Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


/**
 * @author Dowglas Maia  
 * @augments classe Base de Serviços 
 * */

export abstract class BaseResourceServices<T extends BaseResourceModel> {

    protected http: HttpClient;

    constructor(
        protected urlPath,
        protected injector: Injector,
        protected jsonDataToResourceFn: (jsonData) => T
    ) {
        //injetando o HttpClient
        this.http = injector.get(HttpClient);
    }

    //getAll
    public getAll(): Observable<T[]> {
        return this.http.get(`${environment.url_api}/${this.urlPath}`).pipe(
            map(this.jsonDataToResources.bind(this))
        );
    }

    //getById
    public getById(id: number): Observable<T> {
        return this.http.get(`${environment.url_api}/${this.urlPath}/${id}`).pipe(
            map(this.jsonDataToResorce.bind(this))
        );
    }

    //save
    public save(resorce: T): Observable<T> {
        return this.http.post<T>(`${environment.url_api}/${this.urlPath}`, resorce).pipe(
            map(this.jsonDataToResorce.bind(this))
        );
    }
    //update
    public update(resource: T): Observable<T> {
        return this.http.put<T>(`${environment.url_api}/${this.urlPath}/${resource.id}`, resource).pipe(
            map(this.jsonDataToResorce.bind(this))
        );
    }

    //delete

    // getByName

    //PROTECTED METHODS
    protected jsonDataToResources(jsonData: any[]): T[] {
        const resorce: T[] = [];
        jsonData.forEach(
            element => resorce.push(this.jsonDataToResourceFn(element))
        );
        return resorce;
    }

    protected jsonDataToResorce(jsonData: any): T {
        return this.jsonDataToResourceFn(jsonData);
    }

}