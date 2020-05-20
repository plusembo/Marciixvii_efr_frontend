import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '@shared/services/authentication.service';
import { Utilisateur } from '@shared/models/entities/utilisateur.entity';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  authForm: FormGroup;
  hide = true;
  constructor(private fb: FormBuilder,
              private auth: AuthenticationService,
              private router: Router) {

    this.authForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    try {
      if (this.auth.currentUserValue.username !== undefined) {
        this.router.navigateByUrl('/dashboard');
      }
    } catch (error) {

    }

  }

  login() {
    if(this.authForm.valid) {
      this.auth.authenticate(this.authForm.value.username, this.authForm.value.password);
    }
  }

}
