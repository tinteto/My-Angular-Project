import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    
   
  ],
  imports: [
    CommonModule,
    RouterModule, //! IMPORTANT
    FormsModule,
  ],
  exports: [
  HeaderComponent, 
  HomeComponent, 
  FooterComponent, 
 
 ],
})
export class CoreModule { }
