import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorcomponentComponent } from './editorcomponent.component';

describe('EditorcomponentComponent', () => {
  let component: EditorcomponentComponent;
  let fixture: ComponentFixture<EditorcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
