import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { AdminHeaderComponent } from './adminHeader/adminHeader.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    FooterComponent,
    AdminHeaderComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule
  ],
  exports: [
    FooterComponent,
    AdminHeaderComponent,
    HeaderComponent
  ]
})
export class CoreModule { }
