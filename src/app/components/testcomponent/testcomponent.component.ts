import {Component, ViewChild, OnInit} from '@angular/core';
import {TributeOptions} from 'tributejs';
import {UntypedFormBuilder} from '@angular/forms';
import {NgxTributeDirective} from '../../../../node_modules/ngx-tribute/lib/ngx-tribute.directive';
import { AngularEditorConfig } from '@kolkov/angular-editor';


@Component({
  selector: 'app-testcomponent',
  templateUrl: './testcomponent.component.html',
  styleUrls: ['./testcomponent.component.css']
})

export class TestcomponentComponent implements OnInit {
  name = 'Angular 6';
  htmlContent = '';

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
      ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };
  @ViewChild('tributeDirective') tributeDirectiveInComponent: NgxTributeDirective<TributeValue>;

  options: TributeOptions<TributeValue> = {
      values: [
          { key: 'foo', value: 'Foo' },
          { key: 'bar', value: 'Bar' },
          { key: 'baz', value: 'Baz' }
      ]
  };
  options2 = {
    values: [
        { key: 'foo', value: 'Foo' },
        { key: 'bar', value: 'Bar' },
        { key: 'baz', value: 'Baz' }
    ],
    positionMenu: false
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
form = this.fb.group({
    control: ['']
});
customControl = this.fb.control('Initial state');

  constructor(private fb: UntypedFormBuilder) { }

  ngOnInit(): void {
    
  }

}
interface TributeValue {
  key: string;
  value: string;
}