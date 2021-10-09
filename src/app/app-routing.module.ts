import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditProjectComponent } from './components/employees/project/edit-project/edit-project.component';
import { ProjectsComponent } from './components/employees/project/projects/projects.component';
import { EditUserComponent } from './components/employees/user/edit-user/edit-user.component';
import { UserComponent } from './components/employees/user/user/user.component';
import { UsersComponent } from './components/employees/user/users/users.component';
import { EditReservationComponent } from './components/reservations/edit-reservation/edit-reservation.component';
import { ReservationsComponent } from './components/reservations/reservations/reservations.component';
import { DocumentsComponent } from './components/tools/document/documents/documents.component';
import { EditDocumentComponent } from './components/tools/document/edit-document/edit-document.component';
import { EditGenericFunctionComponent } from './components/tools/generic-function/edit-generic-function/edit-generic-function.component';
import { GenericFunctionsComponent } from './components/tools/generic-function/generic-functions/generic-functions.component';
import { EditHardwareComponent } from './components/tools/hardware/edit-hardware/edit-hardware.component';
import { HardwaresComponent } from './components/tools/hardware/hardwares/hardwares.component';
import { EditSoftwareComponent } from './components/tools/software/edit-software/edit-software.component';
import { SoftwaresComponent } from './components/tools/software/softwares/softwares.component';

const routes: Routes = [
  {
    path: "home",
    component: DashboardComponent
  },
  {
    path: "users/:id",
    component: UserComponent
  },
  {
    path: "users/edit/:id",
    component: EditUserComponent
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
    path: "projects/:id",
    component: EditProjectComponent
  },
  {
    path: "reservations",
    component: ReservationsComponent
  },
  {
    path: "reservations/:id",
    component: EditReservationComponent
  },
  {
    path: "softwares",
    component: SoftwaresComponent
  },
  {
    path: "softwares/:id",
    component: EditSoftwareComponent
  },
  {
    path: "hardwares",
    component: HardwaresComponent
  },
  {
    path: "hardwares/:id",
    component: EditHardwareComponent
  },
  {
    path: "documents",
    component: DocumentsComponent
  },
  {
    path: "documents/:id",
    component: EditDocumentComponent
  },
  {
    path: "generic-functions",
    component: GenericFunctionsComponent
  },
  {
    path: "generic-functions/:id",
    component: EditGenericFunctionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
