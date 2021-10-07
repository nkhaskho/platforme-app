import { Component, Input, OnInit } from '@angular/core';
import { Document } from 'src/app/models/tools/document';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {

  @Input() document: Document = new Document();

  constructor() { }

  ngOnInit(): void {
  }

}
