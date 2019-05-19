import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';


import {UserModel} from '../../../models/user.model';
import {LoginService} from '../../../providers/services/apis/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  // tslint:disable-next-line:new-parens
  user: UserModel = new class implements UserModel {
    password: string;
    username: string;
  };
  loginForm: FormGroup;
  load: boolean;

  constructor(
    private service: LoginService,
    private router: Router) {
    this.load = false;
  }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.loginForm = new FormGroup({
      // tslint:disable-next-line
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  login() {
    this.load = true;
    this.service.login(this.user).subscribe(
      res => {
        localStorage.setItem('authentication', 'barer' + res.token);
        this.router.navigate(['/app/liquidation']);
      },
      err => console.error(err)
    );
  }

  ngOnDestroy(): void {
    this.load = false;
  }

}
