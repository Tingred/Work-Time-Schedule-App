import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/interfaces/store';
import { AuthService } from 'src/app/services/security/auth.service';
import * as fromAuthActions from '../../store/auth/auth.actions';
import * as fromSelectorsAuth from '../../store/auth/auth.selectors';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  isSuccessful: Observable<boolean> = this.store$.pipe(select(fromSelectorsAuth.selectIsSuccessful));
  isSignUpFailed: Observable<boolean> = this.store$.pipe(select(fromSelectorsAuth.selectIsSignUpFailed));
  errorMessage = '';

  registerForm: FormGroup = this.fb.group({
    username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),

  })

  constructor(
    private store$: Store<AppState>,
    private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.store$.dispatch(fromAuthActions.registerUser({
      username: this.registerForm.controls.username.value,
      email: this.registerForm.controls.email.value,
      password: this.registerForm.controls.password.value,
    }))
  }

}
