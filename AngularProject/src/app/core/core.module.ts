import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { AdminHeaderComponent } from './adminHeader/adminHeader.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    FooterComponent,
    AdminHeaderComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    AdminHeaderComponent,
    HeaderComponent
  ]
})
export class CoreModule { }
