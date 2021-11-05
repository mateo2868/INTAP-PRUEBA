import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  msgError = null;

  constructor(private formBuilder: FormBuilder, private userSrv: UserService, private router: Router) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      userName: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    })
  }

  logIn() {
    this.userSrv.logIn(this.formLogin.value).subscribe(a => {
      if(a.status) {
        localStorage.setItem('userId', a.userId);
        this.router.navigateByUrl('/actividad')
      } else {
        this.msgError = a.msg;
        setTimeout(() => {
          this.msgError = null;
        }, 2000);
      }
    })
  }

}
