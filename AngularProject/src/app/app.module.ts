import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { CoreModule } from './core/core.module';
import { ScheduleModule } from './schedule/schedule.module';
import { OptionsModule } from './options/options.module';
import { FirmModule } from './firm/firm.module';
import { LoginModule } from './login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ValueArrayPipe } from './pipes/value-array.pipe';



@NgModule({
  declarations: [
    AppComponent,
    ValueArrayPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    CoreModule,
    ScheduleModule,
    OptionsModule,
    FirmModule,
    LoginModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
