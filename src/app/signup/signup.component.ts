import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
   private readonly nameMaxLength = 16;

   firstname = new FormControl('',[
    Validators.required,
    Validators.maxLength(this.nameMaxLength)
  ]);

  lastname = new FormControl('',[
    Validators.required,
    Validators.maxLength(this.nameMaxLength)
  ]);

  email = new FormControl('',[
    Validators.required,
    Validators.email
  ]);

  password = new FormControl('',[
    Validators.required,
    Validators.pattern("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$")
  ]);

  confirmedpassword = new FormControl('',[
    Validators.required,
    
  ])
}

