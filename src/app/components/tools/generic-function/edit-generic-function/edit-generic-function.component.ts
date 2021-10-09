import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/employees/user';
import { GenericFunction } from 'src/app/models/tools/generic-function';
import { UserService } from 'src/app/services/employees/user.service';
import { GenericFunctionService } from 'src/app/services/tools/generic-function.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-generic-function',
  templateUrl: './edit-generic-function.component.html',
  styleUrls: ['./edit-generic-function.component.scss']
})
export class EditGenericFunctionComponent implements OnInit {

  genFunction: GenericFunction = new GenericFunction();
  languages = environment.LANGUAGES;
  documentStates = environment.DOCUMENT_STATES;
  loggedUser = localStorage.getItem("userId")
  functionAuthor: User = new User();
  projects = JSON.parse(localStorage.getItem("projects") || "{}");
  keywords: string[] = [];
  messages = {
    message: "",
    error: ""
  }

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private genFunctionService: GenericFunctionService) { }

  async ngOnInit() {
    let genFunctionId = this.activatedRoute.snapshot.params["id"];
    await this.genFunctionService.getGenFunctionById(genFunctionId).subscribe(
      response => this.genFunction = response
    )
    await this.userService.getUserById(this.loggedUser).subscribe(
      response => this.functionAuthor = response
    )
  }

  saveChange() {
    this.genFunctionService.updateGenFunction(this.genFunction).subscribe(
      response => {
        this.genFunction = response;
        this.messages = {
          message: `Generic function "${this.genFunction.title}" updated.`,
          error: ""
        }
      },
      error => {
        this.messages = {
          message: "",
          error: "Error while updating generic function."
        }
      }
    )
  }

}
