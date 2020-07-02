import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-form-array",
  templateUrl: "./form-array.component.html",
  styleUrls: ["./form-array.component.css"],
})
export class FormArrayComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.profileFormGroup.valueChanges.subscribe((changesObj) => {
      console.log(changesObj);
    });
  }

  profileFormGroup = this.fb.group({
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    address: this.fb.group({
      street: [""],
      city: [""],
      state: [""],
      zip: [""],
    }),
    aliases: this.fb.array([this.fb.control("")]),
  });

  get aliases() {
    console.log(this.profileFormGroup.get("aliases"));
    return this.profileFormGroup.get("aliases") as FormArray;
  }

  addAliases() {
    this.aliases.push(this.fb.control(""));
  }

  onSubmit() {
    console.log(this.profileFormGroup.value);
    console.log(this.profileFormGroup.status);
    console.log(this.profileFormGroup.valid);
  }

  updateFewValues() {
    this.profileFormGroup.patchValue({
      firstName: "Jeelagas",
      address: {
        street: "benzcircle",
        city: "Vijayawada",
        state: "Andhra Pradesh",
        zip: "123456",
      },
    });
  }

  updateAllValues() {
    this.profileFormGroup.setValue({
      firstName: "Jeelagas",
      lastName: "123456",
      address: {
        street: "No Street",
        city: "Yes City",
        state: "My Pradesh",
        zip: "78956",
      },
      aliases: ["John", "Doe", "Dude"],
    });
  }
}
