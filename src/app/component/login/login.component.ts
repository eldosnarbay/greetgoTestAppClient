import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit{
  username: string;
  password: string;
  errorMessage: string;
  constructor(private authService: AuthService,
              private router: Router) {
  }



  ngOnInit() {
  }

  login() {
    this.authService.logIn(this.username, this.password)
      .subscribe(data => {
        console.log('success')
          this.router.navigate(['/pupils']);
        }, err => {
          this.errorMessage = 'Username or password is incorrect';
        }
      );
  }
}
