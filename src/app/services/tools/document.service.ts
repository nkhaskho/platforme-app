import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Document } from 'src/app/models/tools/document';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  API_URL = environment.API_URL + "/tools/documents";

  constructor(private http: HttpClient) { }

  addDocument(document: Document) {
    return this.http.post<Document>(`${this.API_URL}/`, document);
  }

  getDocumentById(documentId: any) {
    return this.http.get<Document>(`${this.API_URL}/${documentId}/`);
  }

  updateDocument(document: Document) {
    return this.http.put<Document>(`${this.API_URL}/${document.id}/`, document);
  }

  getAllDocuments() {
    return this.http.get<Document[]>(`${this.API_URL}/`);
  }

}
