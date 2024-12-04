import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { ListNotesComponent } from './list-notes/list-notes.component';
import { DetailNoteComponent } from './detail-note/detail-note.component';

export const routes: Routes = [
  { path: '', title: 'Home', component: HomeComponent },
  { path: 'home', title: 'Home', component: HomeComponent },
  { path: 'contacts', title: 'Contacts', component: ContactsComponent },
  { path: 'note', title: 'Note', component: AddNoteComponent },
  { path: 'note/:id', title: 'Details', component: DetailNoteComponent },
  { path: 'listNotes', title: 'Notes', component: ListNotesComponent },
  { path: '**', title: 'Page Not Found', component: NotFoundComponent },
];
