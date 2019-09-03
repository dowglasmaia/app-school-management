import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { LevelEducationComponent } from './pages/level-education/level-education-form/level-education.component';

@NgModule({
  declarations: [
    AppComponent,
    LevelEducationComponent,
  
  ],
  imports: [
   CoreModule,
   AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
