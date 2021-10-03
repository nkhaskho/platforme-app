import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectsComponent } from './components/employees/projects/projects.component';
import { UsersComponent } from './components/employees/users/users.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReservationsComponent } from './components/reservations/reservations/reservations.component';
import { DocumentsComponent } from './components/tools/documents/documents.component';
import { GenericFunctionsComponent } from './components/tools/generic-functions/generic-functions.component';
import { HardwaresComponent } from './components/tools/hardwares/hardwares.component';
import { SoftwaresComponent } from './components/tools/softwares/softwares.component';
import { LoginForm } from './models/login-form';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "",
    component: DashboardComponent
  },
  {
    path: "users",
    component: UsersComponent
  },
  {
    path: "projects",
    component: ProjectsComponent
  },
  {
    path: "reservations",
    component: ReservationsComponent
  },
  {
    path: "softwares",
    component: SoftwaresComponent
  },
  {
    path: "hardwares",
    component: HardwaresComponent
  },
  {
    path: "documents",
    component: DocumentsComponent
  },
  {
    path: "generic-functions",
    component: GenericFunctionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
