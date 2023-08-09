import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.css'],
})
export class RegisterPage {
  @ViewChild('f') form!: NgForm;
  error = undefined;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.signup(this.form.value).subscribe(
      (data) => {
        console.log(data);
        this.error = undefined;
        this.router.navigate(['/login']);
      },
      (err) => {
        console.log(err);
        this.error = err.error;
      }
    );
  }
}
