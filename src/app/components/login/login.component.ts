import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors, Form , FormBuilder} from '@angular/forms';
import { ValidationService } from '../services/validation.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  montoTransferenciaGrp: FormGroup;
  emailForm: FormGroup;
  myForm: FormGroup;
  usernameCtrl: FormControl;
  passwordCtrl: FormControl;

  constructor() { }

  ngOnInit() {
    this.usernameCtrl = new FormControl(null,Validators.required);
    this.passwordCtrl = new FormControl(null,Validators.required);

    this.myForm = new FormGroup({
      username: this.usernameCtrl,
      password: this.passwordCtrl
    });
  }

 



  }

