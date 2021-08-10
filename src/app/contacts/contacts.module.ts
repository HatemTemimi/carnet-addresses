import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListContactsComponent } from './list-contacts/list-contacts.component';
import { ViewContactsComponent } from './view-contacts/view-contacts.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { DeleteContactComponent } from './delete-contact/delete-contact.component';
import { AddContactComponent } from './add-contact/add-contact.component';



@NgModule({
  declarations: [
    ListContactsComponent,
    ViewContactsComponent,
    ViewContactComponent,
    EditContactComponent,
    DeleteContactComponent,
    AddContactComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContactsModule { }
