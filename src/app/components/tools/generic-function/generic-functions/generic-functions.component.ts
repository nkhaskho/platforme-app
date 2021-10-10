import { Component, OnInit } from '@angular/core';
import { GenericFunction } from 'src/app/models/tools/generic-function';
import { UserService } from 'src/app/services/employees/user.service';
import { GenericFunctionService } from 'src/app/services/tools/generic-function.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-generic-functions',
  templateUrl: './generic-functions.component.html',
  styleUrls: ['./generic-functions.component.scss']
})
export class GenericFunctionsComponent implements OnInit {

  genFunctions: GenericFunction[] = [];
  newGenFunction: GenericFunction = new GenericFunction();
  selectedGenFunction: GenericFunction = new GenericFunction();
  loggedUserId = parseInt(localStorage.getItem("userId") || "0");
  loggedUserProject: number = 0;
  languages = environment.LANGUAGES;
  documentStates = environment.DOCUMENT_STATES;
  users: Record<string,string> = {}
  projects: Record<string,string> = {}
  errors: Record<string,string> = {};

  constructor(private genFunctionService: GenericFunctionService,
              private userService: UserService) { }

  async ngOnInit() {
    this.newGenFunction.author = parseInt(localStorage.getItem("user") || '0');
    this.newGenFunction.updated_by = parseInt(localStorage.getItem("user") || '0');
    this.newGenFunction.project = parseInt(localStorage.getItem("project") || '0');
    await this.genFunctionService.getAllGenFunctions().subscribe(
      httpResponse => {
        this.genFunctions = httpResponse
      },
      httpError => {
        console.log(httpError);
      }
    );
    await this.userService.getAllUsers().subscribe(
      response => response.forEach(user => this.users[user.id.toString()]=user.username)
    );
    this.projects = await JSON.parse(localStorage.getItem("projects") || "{}");
    this.newGenFunction.project = await parseInt(localStorage.getItem("project") || "0");
    this.newGenFunction.author = parseInt(localStorage.getItem("userId") || "0");
    console.log(this.projects);
    
  }

  selectGenFunction(index: number) {
    this.selectedGenFunction = this.genFunctions[index];
  }

  addnewGenFunction() {
    this.errors = {};
    console.log(this.newGenFunction);
    this.genFunctionService.addGenFunction(this.newGenFunction).subscribe(
      response => {
        this.genFunctions.push(response);
        document.getElementById("cancel-add-genfunction")?.click();
        this.newGenFunction = new GenericFunction();
      },
      httpError => {
        Object.keys(httpError.error).forEach(key => this.errors[key]=httpError.error[key]);
      }
    )
  }

  deleteGenFunction() {}

}
