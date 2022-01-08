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
import * as fromFirmReducer from './firm/store/firm/firm.reducer';
import { FirmEffects } from './firm/store/firm/firm.effect';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

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
    CoreModule,
    ScheduleModule,
    OptionsModule,
    FirmModule,
    LoginModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({firm: fromFirmReducer.firmReducer}, {}),
    EffectsModule.forRoot([FirmEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
