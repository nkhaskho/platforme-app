import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './components/employees/user/users/users.component';
import { ProjectsComponent } from './components/employees/project/projects/projects.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SoftwaresComponent } from './components/tools/software/softwares/softwares.component';
import { HardwaresComponent } from './components/tools/hardware/hardwares/hardwares.component';
import { GenericFunctionsComponent } from './components/tools/generic-function/generic-functions/generic-functions.component';
import { DocumentsComponent } from './components/tools/document/documents/documents.component';
import { ReservationsComponent } from './components/reservations/reservations/reservations.component';
import { EditUserComponent } from './components/employees/user/edit-user/edit-user.component';
import { EditProjectComponent } from './components/employees/project/edit-project/edit-project.component';
import { EditDocumentComponent } from './components/tools/document/edit-document/edit-document.component';
import { EditSoftwareComponent } from './components/tools/software/edit-software/edit-software.component';
import { EditHardwareComponent } from './components/tools/hardware/edit-hardware/edit-hardware.component';
import { EditGenericFunctionComponent } from './components/tools/generic-function/edit-generic-function/edit-generic-function.component';
import { EditReservationComponent } from './components/reservations/edit-reservation/edit-reservation.component';

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
    EditUserComponent,
    EditProjectComponent,
    EditDocumentComponent,
    EditSoftwareComponent,
    EditHardwareComponent,
    EditGenericFunctionComponent,
    EditReservationComponent
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
