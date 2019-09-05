import { Injectable, Injector } from '@angular/core';
import { BaseResourceServices } from 'src/app/shared/services/base-resource.service';
import { CityModel } from '../model/city-model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CityServicesService extends BaseResourceServices<CityModel> {

  constructor(
    protected injector: Injector,
  ) {
    super("cities", injector, CityModel.fromJson);
  }


  //buscar Todas as cidades por estados
  public getCitiesByUF(districtID: number):Observable<CityModel[]>{
    return this.http.get<CityModel[]>(`${environment.url_api}/${this.urlPath}/${districtID}/cities`);
  }


}
