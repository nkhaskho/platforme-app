import { Component, OnInit } from '@angular/core';
import { LoggedUser } from 'src/app/models/auth/logged-user';
import { Document } from 'src/app/models/tools/document';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/employees/user.service';
import { DocumentService } from 'src/app/services/tools/document.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {

  documents: Document[] = []
  selectedDocument: Document = new Document();
  selectedIndex: number = 0;
  newDocument: Document = new Document();
  documentTypes = environment.DOCUMENT_TYPES;
  documentStates = environment.DOCUMENT_STATES;
  loggedUser: LoggedUser = new LoggedUser();
  users: Record<string, string> = {};
  errors: Record<string,string> = {}

  constructor(private documentService: DocumentService,
              private userService: UserService,
              private authService: AuthService) { }

  async ngOnInit() {
    await this.documentService.getAllDocuments().subscribe(
      data => this.documents = data
    );
    this.newDocument.author = parseInt(localStorage.getItem("userId") || "0");
    this.newDocument.updated_by = this.newDocument.author;
    this.newDocument.status = "DRAFT";
    await this.userService.getAllUsers().subscribe(
      users => {
        console.log(users)
        users.forEach(user => this.users[user.id]=user.username)
      }
    );
    this.loggedUser = await this.authService.getLoggedUser();
  }

  selectDocument(index: number) {
    this.selectedDocument = this.documents[index];
    this.selectedIndex = index; 
  }

  addNewDocument() {
    this.errors = {};
    this.documentService.addDocument(this.newDocument).subscribe(
      data => {
        this.documents.push(data);
        document.getElementById("cancel-add-document")?.click();
      },
      httpError => {
        Object.keys(httpError.error).forEach(key => this.errors[key]=httpError.error[key])
      }
    )
  }

  deleteDocument() {
    this.documentService.deleteDocument(this.selectedDocument.id).subscribe(
      httpResponse => {
        this.documents.splice(this.selectedIndex, 1);
        document.getElementById("cancel-delete-document")?.click();
      }
    )
  }

}
