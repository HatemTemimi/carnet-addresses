import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { Router, RouterModule } from '@angular/router';

import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [

    CommonModule,
    RouterModule,
    MatToolbarModule, 
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
       
  ],
  exports: [
    
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ]

})
export class LayoutModule { }
