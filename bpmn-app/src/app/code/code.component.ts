import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {
  editorOptions = { theme: 'vs-dark', language: 'typescript' };
  code: string= 'function x() {\n   console.log("Hello world!");\n}';
  problemStatement: string = 'Write a method which will remove any given character from a String.';

  constructor() { }

  ngOnInit(): void {
  }

  handleExport() {
    console.log(this.code);
  }

}
