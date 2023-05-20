import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css", "../common/forms.css"],
})
export class SignupComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.form = this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
        confirm: ['', Validators.required]
    })
  }

  ngOnInit() {}


  public signUp(): void {
    console.log(this.form.value);
    this.authService.isLoggedIn$.subscribe(res => console.log(res));
  }
}
