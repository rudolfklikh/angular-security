import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";


@Component({
  selector: "signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css", "../common/forms.css"],
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  errors: string[] = [];

  messagesPerErrorCode = {
    min: "The minimum length is 10 characters",
    uppercase: "At least one upper case character",
    digits: "At least one numeric character",
  };

  public get email(): FormControl | AbstractControl {
    return this.form.controls.email;
  }

  public get password(): FormControl | AbstractControl {
    return this.form.controls.password;
  }

  public get confirm(): FormControl | AbstractControl {
    return this.form.controls.confirm;
  }

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.form = this.fb.group({
      email: ["test@gmail.com", Validators.required],
      password: ["Password10", Validators.required],
      confirm: ["Password10", Validators.required],
    });
  }

  ngOnInit() {}

  public signUp(): void {
    if (this.validateSignUpForm()) {
      this.authService.signUp(this.email.value, this.password.value).subscribe(
        () => this.router.navigateByUrl('/'),
        (response) => (this.errors = response.error.errors)
      );
    }
  }

  private validateSignUpForm(): boolean {
    const isAllRequiredFieldsNotEmpty = this.email.value && this.password.value;
    const isPasswordsEqual = this.password.value === this.confirm.value;

    return isAllRequiredFieldsNotEmpty && isPasswordsEqual;
  }
}
