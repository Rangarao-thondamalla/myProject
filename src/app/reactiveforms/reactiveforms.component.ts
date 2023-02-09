import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup , UntypedFormControl, Validators, UntypedFormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {

 
  studentForm:UntypedFormGroup;
  submitted = false;
  constructor(private formBuilder: UntypedFormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.studentForm = this.formBuilder.group({
      name:new UntypedFormControl('',[Validators.required,Validators.minLength(3)]),
      email:new UntypedFormControl('',[Validators.required]),
      password:new UntypedFormControl('',[Validators.required]),
      gender:new UntypedFormControl('',[Validators.required]),
      checkbox:new UntypedFormControl('',[Validators.required]),
      });
  }
  validateForm() { 

    for(let i in this.studentForm.controls)
        this.studentForm.controls[i].markAsTouched();
    
    }
  get f() { return this.studentForm.controls; }
  register(user: any): void{
    if (this.studentForm.valid) {
      let url = "https://5df7ba4a4fdcb20014a483cc.mockapi.io/reactiveforms";     
          const headers = new HttpHeaders()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        this.http.post(url, user).subscribe(res => console.log("Data Post Done"));
      
    }
    else{this.validateForm()}
    }

  onReset() {
    this.submitted = false;
    this.studentForm.reset();
}

}
