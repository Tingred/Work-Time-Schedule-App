import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from './core/core.module';
import { ScheduleModule } from './schedule/schedule.module';
import { OptionsModule } from './options/options.module';
import { FirmModule } from './firm/firm.module';
import { LoginModule } from './login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ValueArrayPipe } from './pipes/value-array.pipe';
import { EffectsModule } from '@ngrx/effects';
import * as fromOptionsReducer from './store/options/options.reducer';
import * as fromFirmReducer from './store/firm/firm.reducer';
import * as fromSchedulesReducer from './store/schedules/schedules.reducer';
import { FirmEffects } from './store/firm/firm.effect';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { OptionsEffects } from './store/options/options.effect';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateAdapter } from '@angular/material/core';
import { SchedulesEffects } from './store/schedules/schedules.effect';
import { UserViewComponent } from './user/user-view/user-view.component';
import { authInterceptorProviders } from './security/_helpers/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    ValueArrayPipe,
    UserViewComponent,

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
    CoreModule,
    ScheduleModule,
    OptionsModule,
    FirmModule,
    LoginModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({firm: fromFirmReducer.firmReducer, options: fromOptionsReducer.optionsReducer, schedules: fromSchedulesReducer.schedulesReducer}, {}),
    EffectsModule.forRoot([FirmEffects, OptionsEffects,SchedulesEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    NgxMaterialTimepickerModule,
    BrowserAnimationsModule,
    NgxMaterialTimepickerModule,

  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
