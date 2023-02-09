import { Component, OnDestroy, OnInit, ViewEncapsulation,ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Validators, Editor, Toolbar } from 'ngx-editor';
import jsonDoc from './doc';
import {TributeOptions} from 'tributejs';
import {NgxTributeDirective} from '../../../node_modules/ngx-tribute/lib/ngx-tribute.directive';

@Component({
  selector: 'app-editorcomponent',
  templateUrl: './editorcomponent.component.html',
  styleUrls: ['./editorcomponent.component.css']
})
export class EditorcomponentComponent implements OnInit {

  constructor() { }
  @ViewChild('tributeDirective') tributeDirectiveInComponent: NgxTributeDirective<TributeValue>;

  options: TributeOptions<TributeValue> = {
      values: [
          { key: 'foo', value: 'Foo' },
          { key: 'bar', value: 'Bar' },
          { key: 'baz', value: 'Baz' }
      ]
  };
  advancedOptions = {
    values: [
        { key: 'foo', value: 'Foo', id: '1'},
        { key: 'bar', value: 'Bar', id: '2' },
        { key: 'baz', value: 'Baz', id: '3' }
    ]
};

showInput = true; // On showInput = false, the tribute container gets cleaned up.
lastMention;
advancedMention;
ngModelValue;
  editordoc = jsonDoc;

  editor: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  form = new FormGroup({
    editorContent: new FormControl(
      { value: jsonDoc, disabled: false },
      Validators.required()
    ),
  });

  get doc(): AbstractControl {
    return this.form.get('editorContent');
  }

  ngOnInit(): void {
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
interface TributeValue {
  key: string;
  value: string;
}