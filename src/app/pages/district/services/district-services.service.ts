import { Injectable, Injector } from '@angular/core';
import { BaseResourceServices } from 'src/app/shared/services/base-resource.service';
import { DistrictModel } from '../model/district-model';

@Injectable({
  providedIn: 'root'
})
export class DistrictServicesService extends BaseResourceServices<DistrictModel> {

  constructor(
    protected injector: Injector,
  ) {
    super("districts",injector, DistrictModel.fromJson);
  }
}
