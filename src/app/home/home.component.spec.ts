import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule }   from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

import { Location } from "@angular/common";
import { Router } from "@angular/router";


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let location: Location;
  let router: Router;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, DashboardComponent],
      imports: [
        ReactiveFormsModule,    
        FormsModule,
        RouterTestingModule.withRoutes([])    
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router = TestBed.get(Router);
    location = TestBed.get(Location);
    router.initialNavigation();
  });



  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('created a form with username and password input and login button', () => {
    // const fixture = TestBed.createComponent(LoginComponent);
    const usernameContainer = fixture.debugElement.nativeElement.querySelector('#username-container');
    const passwordContainer = fixture.debugElement.nativeElement.querySelector('#password-container');
    const loginBtnContainer = fixture.debugElement.nativeElement.querySelector('#login-btn-container');
    expect(usernameContainer).toBeDefined();
    expect(passwordContainer).toBeDefined();
    expect(loginBtnContainer).toBeDefined();
  });

  it('login form invalid at initial state', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('username field validity', () => {
    let username = component.loginForm.controls['username'];
    expect(username.valid).toBeFalsy();
    let errors = {};

    // Email field is required
    errors = username.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set email to something
    username.setValue("test");
    errors = username.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['pattern']).toBeTruthy();

    // Set email to something correct
    username.setValue("test@example.com");
    errors = username.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['pattern']).toBeFalsy();

  });

  it('password field validity', () => {
    let errors = {};
    let password = component.loginForm.controls['password'];

    // Email field is required
    errors = password.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set email to something
    password.setValue("12");
    errors = password.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeTruthy();

    // Set email to something correct
    password.setValue("123456789");
    errors = password.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeFalsy();
});
 
it('submitting a form redirected to dashboard page', () => {
  expect(component.loginForm.valid).toBeFalsy();
  component.loginForm.controls['username'].setValue("test@test.com");
  component.loginForm.controls['password'].setValue("123");
  expect(component.loginForm.valid).toBeTruthy();

  // Trigger the login function
  component.onLogin();

});

it('navigate to dashboard redirects you to /dashboard', fakeAsync(() => {
  expect(component.loginForm.valid).toBeFalsy();
  component.loginForm.controls['username'].setValue("test@test.com");
  component.loginForm.controls['password'].setValue("123");
  expect(component.loginForm.valid).toBeTruthy();

  // Trigger the login function
  component.onLogin();

  router.navigate(["dashboard"]).then(() => {
    expect(location.path()).toBe("/dashboard");
  });
  
}));



});
