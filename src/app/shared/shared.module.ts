import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SearchComponent } from './components/search/search.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SidebarComponent,
    ContactPageComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    SidebarComponent,
    SearchComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
