import {Component, OnInit, ViewChild} from '@angular/core';
import {BpmnEditorComponent} from 'ng-bpmn';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {
  @ViewChild('ucBpmn') ucBpmn: BpmnEditorComponent | undefined;
  constructor(private http: HttpClient) { }

  fileContent: string = '';

  ngOnInit(): void {
    const url = '/assets/teodora.html';
    this.http.get(url, {
      headers: {observe: 'response'}, responseType: 'text'
    }).subscribe(
      (x: any) => {
        if (this.ucBpmn) {
          this.ucBpmn.el.nativeElement.innerHTML = x;
        }
      },
    );
  }

}
