import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-form-group",
  templateUrl: "./form-group.component.html",
  styleUrls: ["./form-group.component.css"],
})
export class FormGroupComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.profileFormGroup.valueChanges.subscribe((changeObj) => {
      console.log(changeObj);
    });
  }

  profileFormGroup = new FormGroup({
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl(""),
  });

  onSubmit() {
    console.log(this.profileFormGroup.value);
    console.log(this.profileFormGroup.status);
    console.log(this.profileFormGroup.valid);
  }
}
