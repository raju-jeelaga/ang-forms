import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-nested-form-group",
  templateUrl: "./nested-form-group.component.html",
  styleUrls: ["./nested-form-group.component.css"],
})
export class NestedFormGroupComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.profileFormGroup.valueChanges.subscribe((changeObj) => {
      console.log(changeObj);
    });
  }

  profileFormGroup = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    address: new FormGroup({
      street: new FormControl(""),
      city: new FormControl(""),
      state: new FormControl(""),
      zip: new FormControl(""),
    }),
  });

  onSubmit() {
    console.log(this.profileFormGroup.value);
    console.log(this.profileFormGroup.status);
    console.log(this.profileFormGroup.valid);
  }

  updateFewProfileValues() {
    this.profileFormGroup.patchValue({
      firstName: "Jeelaga",
      address: {
        street: "Mangalagiri",
      },
    });
  }

  updateAllProfileValues() {
    this.profileFormGroup.setValue({
      firstName: "Raju",
      lastName: "Jeelaga",
      address: {
        street: "KBR Park",
        city: "Hyderbad",
        state: "Telengana",
        zip: "",
      },
    });
  }
}
