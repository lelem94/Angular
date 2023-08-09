import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css'],
})
export class LoginPage {
  @ViewChild('f') form!: NgForm;
  error = undefined;

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.signin(this.form.value).subscribe(
      (data) => {
        console.log(data);
        this.error = undefined;
        //this.router.navigate(['/login']);
        localStorage.setItem('userLogin', JSON.stringify(data));
      },
      (err) => {
        console.log(err);
        this.error = err.error;
      }
    );
  }
}
