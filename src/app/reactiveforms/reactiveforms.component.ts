import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {

 
  studentForm:FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.studentForm = this.formBuilder.group({
      name:new FormControl('',[Validators.required,Validators.minLength(3)]),
      email:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required]),
      gender:new FormControl('',[Validators.required]),
      checkbox:new FormControl('',[Validators.required]),
      });
  }
  get f() { return this.studentForm.controls; }
  register(){
    this.submitted = true;

        // stop here if form is invalid
        if (this.studentForm.invalid) {
            return;
        }

        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.studentForm.value, null, 4));
  }
  onReset() {
    this.submitted = false;
    this.studentForm.reset();
}

}
