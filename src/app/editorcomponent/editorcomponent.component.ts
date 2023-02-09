import { Component, OnInit } from '@angular/core';
import { Editor } from 'ngx-editor';

@Component({
  selector: 'app-editorcomponent',
  templateUrl: './editorcomponent.component.html',
  styleUrls: ['./editorcomponent.component.css']
})
export class EditorcomponentComponent implements OnInit {

  constructor() { }

  editor: Editor;
  html: '';

  ngOnInit(): void {
    this.editor = new Editor();
  }

  // make sure to destory the editor
  ngOnDestroy(): void {
    this.editor.destroy();
  }

}
