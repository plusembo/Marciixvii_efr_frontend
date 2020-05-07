import { Component } from '@angular/core';
import { AuthenticationService } from '@shared/services/authentication.service';

@Component({
  selector: 'app-user-panel',
  template: `
    <div class="matero-user-panel" fxLayout="column" fxLayoutAlign="center center">
      <img class="matero-user-panel-avatar" [src]="photosrc" alt="avatar" width="64" />
      <h4 class="matero-user-panel-name">{{username}}</h4>
      <h5 class="matero-user-panel-email">{{email}}</h5>
      <div class="matero-user-panel-icons">
        <a routerLink="/profile/overview" mat-icon-button>
          <mat-icon>account_circle</mat-icon>
        </a>
        <a routerLink="/profile/settings" mat-icon-button>
          <mat-icon>settings</mat-icon>
        </a>
        <a routerLink="/auth/login" mat-icon-button (click)="logout()">
          <mat-icon>exit_to_app</mat-icon>
        </a>
      </div>
    </div>
  `,
})
export class UserPanelComponent {

  constructor(private auth: AuthenticationService) {}

  public get username(): string {
    return this.auth.currentUserValue.username;
  }

  public get email(): string {
    return this.auth.currentUserValue.email;
  }

  public get photosrc() {
    return this.auth.currentUserValue.photosrc;
  }

  logout() {
    this.auth.disconnect();
  }

}
