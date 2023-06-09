import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LinksComponent } from './screens/links/links.component';
import { DocumentsComponent } from './screens/documents/documents.component';
import { UsersComponent } from './screens/users/users.component';
import { TransactionsComponent } from './screens/transactions/transactions.component';
import { TasksComponent } from './screens/tasks/tasks.component';
import { HomeComponent } from './screens/home/home.component';
import { LoaderComponent } from './screens/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    LinksComponent,
    DocumentsComponent,
    UsersComponent,
    TransactionsComponent,
    TasksComponent,
    HomeComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
