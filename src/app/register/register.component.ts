import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  model: any = {};
  onSubmit() {
    console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
  }
}
