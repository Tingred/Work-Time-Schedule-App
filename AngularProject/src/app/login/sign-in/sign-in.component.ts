import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/security/auth.service';
import { TokenStorageService } from 'src/app/services/security/token-storage.service';
import * as fromSelectorsAuth from '../../store/auth/auth.selectors';
import * as fromActionsAuth from '../../store/auth/auth.actions';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/interfaces/store';
import { Roles } from 'src/app/interfaces/employee';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  isLoggedIn: Observable<boolean> = this.store$.pipe(select(fromSelectorsAuth.selecIsLoggedIn));
  isLoginFailed: Observable<boolean> = this.store$.pipe(select(fromSelectorsAuth.selectIsLoginFailed));
  errorMessage = '';
  roles$: Observable<Array<Roles>> = this.store$.pipe(select(fromSelectorsAuth.selectUserRoles));
  signInForm: FormGroup = this.fb.group({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  constructor(
    private store$: Store<AppState>,
    private authService: AuthService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    // if (this.tokenStorage.getToken()) {
    //   this.isLoggedIn = true;
    //   this.roles = this.tokenStorage.getUser().roles;
    // }
  }

  onSubmit(): void {
    this.store$.dispatch(fromActionsAuth.loginUser({
      username: this.signInForm.controls.username.value,
      password: this.signInForm.controls.password.value
    }))
    // this.authService.login(this.signInForm.value).subscribe(
    //   data => {
    //     // this.tokenStorage.saveToken(data.accessToken);
    //     // this.tokenStorage.saveUser(data);
    //     // this.reloadPage();
    //   },
    //   err => {
    //     this.errorMessage = err.error.message;
    //   }
    // );
  }

  // reloadPage(): void {
  //   window.location.reload();
  // }

}