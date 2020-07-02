import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-form-builder",
  templateUrl: "./form-builder.component.html",
  styleUrls: ["./form-builder.component.css"],
})
export class FormBuilderComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.profileFormGroup.valueChanges.subscribe((changesObj) => {
      console.log(changesObj);
    });
  }

  profileFormGroup = this.fb.group({
    firstName: ["", Validators.required],
    lastName: [""],
    address: this.fb.group({
      street: [""],
      city: [""],
      state: [""],
      zip: [""],
    }),
  });

  onSubmit() {
    console.log(this.profileFormGroup.valid);
    console.log(this.profileFormGroup.status);
    console.log(this.profileFormGroup.value);
  }

  updateFewValues() {
    this.profileFormGroup.patchValue({
      firstName: "Rirhvik",
      address: {
        city: "Rehamth Nagar",
      },
    });
  }

  updateAllValues() {
    this.profileFormGroup.setValue({
      firstName: "Jeelaga",
      lastName: "Rithvik",
      address: {
        street: "BZA",
        city: "USA",
        state: "Germany",
        zip: "123456",
      },
    });
  }
}
