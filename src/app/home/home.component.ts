import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  loginStatus: boolean;
  loginFormVal: Object;
  loginForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
    this.loginStatus = true;
    this.loginFormVal = {};
  }

  onLogin() {
    this.router.navigate(['dashboard']);
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")]],
      password: ['', [
        Validators.required,
        Validators.minLength(3)]],
    });
  }

}
