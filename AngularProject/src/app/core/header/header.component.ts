import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/security/token-storage.service';
import * as fromSelectorsAuth from '../../store/auth/auth.selectors';
import * as fromActionsAuth from '../../store/auth/auth.actions';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/interfaces/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private tokenStorageService: TokenStorageService,
    private store$: Store<AppState>,

  ) { }
  
  isLoggedIn$: Observable<boolean> = this.store$.pipe(select(fromSelectorsAuth.selecIsLoggedIn));

  ngOnInit(): void {
  }
  logout(): void {
    this.tokenStorageService.signOut();
    
    window.location.reload();
  }
}
