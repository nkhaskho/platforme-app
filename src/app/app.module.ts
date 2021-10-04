import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './components/employees/users/users.component';
import { ProjectsComponent } from './components/employees/projects/projects.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SoftwaresComponent } from './components/tools/softwares/softwares.component';
import { HardwaresComponent } from './components/tools/hardwares/hardwares.component';
import { GenericFunctionsComponent } from './components/tools/generic-functions/generic-functions.component';
import { DocumentsComponent } from './components/tools/documents/documents.component';
import { ReservationsComponent } from './components/reservations/reservations/reservations.component';
import { UserComponent } from './components/employees/users/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    UsersComponent,
    ProjectsComponent,
    DashboardComponent,
    SoftwaresComponent,
    HardwaresComponent,
    GenericFunctionsComponent,
    DocumentsComponent,
    ReservationsComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
