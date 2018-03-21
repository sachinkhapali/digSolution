import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent }      from './contactus/contactus.component';

const routes: Routes = [
  { path: 'contactUs', component: ContactusComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule]

})
export class AppRoutingModule { }
