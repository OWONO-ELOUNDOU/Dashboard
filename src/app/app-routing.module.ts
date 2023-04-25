import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentsComponent } from './screens/documents/documents.component';
import { LinksComponent } from './screens/links/links.component';
import { TasksComponent } from './screens/tasks/tasks.component';
import { TransactionsComponent } from './screens/transactions/transactions.component';
import { UsersComponent } from './screens/users/users.component';
import { HomeComponent } from './screens/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'app', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'document', component: DocumentsComponent },
  { path: 'links', component: LinksComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'users', component: UsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
