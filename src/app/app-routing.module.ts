import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './contacts/add-contact/add-contact.component';
import { DeleteContactComponent } from './contacts/delete-contact/delete-contact.component';
import { EditContactComponent } from './contacts/edit-contact/edit-contact.component';
import { ListContactsComponent } from './contacts/list-contacts/list-contacts.component';
import { ViewContactComponent } from './contacts/view-contact/view-contact.component';

const routes: Routes = [
  {path: '',  redirectTo: 'list', pathMatch: 'full'  },
  {path: 'add', component: AddContactComponent},
  {path: 'view/:id', component: ViewContactComponent},
  {path: 'delete/:id', component: DeleteContactComponent},
  {path: 'list', component: ListContactsComponent},
  {path: 'edit/:id', component: EditContactComponent},
  {path:'**'   , component: ListContactsComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
