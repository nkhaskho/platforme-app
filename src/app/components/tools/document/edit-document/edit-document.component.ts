import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/employees/user';
import { Document } from 'src/app/models/tools/document';
import { UserService } from 'src/app/services/employees/user.service';
import { DocumentService } from 'src/app/services/tools/document.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-document',
  templateUrl: './edit-document.component.html',
  styleUrls: ['./edit-document.component.scss']
})
export class EditDocumentComponent implements OnInit {

  document: Document = new Document();
  documentTypes = environment.DOCUMENT_TYPES;
  documentStates = environment.DOCUMENT_STATES;
  documentAuthor: User = new User();
  projects = JSON.parse(localStorage.getItem("projects") || "{}");
  messages = {
    message: "",
    error: ""
  }

  constructor(private documentService: DocumentService,
              private activatedRoute: ActivatedRoute,
              private userService: UserService) { }

  async ngOnInit() {
    let docId = this.activatedRoute.snapshot.params["id"];
    await this.documentService.getDocumentById(docId).subscribe(
      data => {
        this.document = data
      }
    );
    await this.userService.getUserById(localStorage.getItem("userId")).subscribe(
      res => this.documentAuthor = res
    )
  }

  saveChange() {
    this.documentService.updateDocument(this.document).subscribe(
      data => {
        this.document = data;
        this.messages.error = "";
        this.messages.message = `Document "${data.title}" updated successfully.`
      },
      httpError => {
        this.messages.error = "Error while updating this dpcument";
        this.messages.message = ""
      }
    )
  }

}
