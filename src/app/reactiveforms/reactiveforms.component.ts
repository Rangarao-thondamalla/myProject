import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {

 
  studentForm:FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.studentForm = this.formBuilder.group({
      name:new FormControl('',[Validators.required,Validators.minLength(3)]),
      email:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required]),
      gender:new FormControl('',[Validators.required]),
      checkbox:new FormControl('',[Validators.required]),
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
