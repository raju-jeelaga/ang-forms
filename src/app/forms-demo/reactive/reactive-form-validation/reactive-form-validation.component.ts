import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormArray, FormGroup, Validators } from "@angular/forms";
import { UniqueUserNameValidator } from "../../../shared/validators/unique-user-name.async-validator";
import { forbiddenNameValidator } from "../../../shared/validators/forbidden-name";
import { checkboxRequiredValidator } from "../../../shared/validators/checkbox-required.validator";

@Component({
  selector: "app-reactive-form-validation",
  templateUrl: "./reactive-form-validation.component.html",
  styleUrls: ["./reactive-form-validation.component.css"],
})
export class ReactiveFormValidationComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private uniqueUserNameValidator: UniqueUserNameValidator
  ) {}

  powers = ["Jhon", "Jesus", "Paul", "Mathew", "King"];

  heorFormGroup: FormGroup;

  vehiclesArr = [
    { label: "Two Wheeler", value: "two-wheeler", selected: false },
    { label: "Four Wheeler", value: "four-wheeler", selected: false },
    { label: "Private Chopper", value: "private-chopper", selected: false },
    { label: "Private Plain", value: "private-plain", selected: false },
  ];

  ngOnInit(): void {
    this.heorFormGroup = this.fb.group({
      name: [
        "",
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(10),
        ],
      ],
      alterEgo: [""],
      power: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      secondaryEmail: [
        "",
        [Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")],
      ],
      avalaible: ["yes", Validators.required],
      nickName: [
        "",
        [
          Validators.required,
          forbiddenNameValidator(["Raju", "Jeelaga", "Jesus"]),
        ],
      ],
      userName: [
        "",
        [Validators.required],
        this.uniqueUserNameValidator.validate.bind(
          this.uniqueUserNameValidator
        ),
      ],
      vehicles: this.buildVehicleCheckBoxControls(),
    });
  }

  buildVehicleCheckBoxControls() {
    let vehicleCheckBoxControls = [];
    this.vehiclesArr.forEach((vehicle) => {
      let control = this.fb.control(vehicle.selected);
      vehicleCheckBoxControls.push(control);
    });

    return new FormArray(vehicleCheckBoxControls, checkboxRequiredValidator());
  }

  get name() {
    return this.heorFormGroup.get("name");
  }

  get power() {
    return this.heorFormGroup.get("power");
  }

  get email() {
    return this.heorFormGroup.get("email");
  }

  get secondaryEmail() {
    return this.heorFormGroup.get("secondaryEmail");
  }

  get nickName() {
    return this.heorFormGroup.get("nickName");
  }

  get userName() {
    return this.heorFormGroup.get("userName");
  }

  get vehicles() {
    return this.heorFormGroup.get("vehicles");
  }

  onSubmit() {
    console.log(this.heorFormGroup.value);
    let payload = { ...this.heorFormGroup.value };
    payload.vehicles = this.getVehicleValues(payload.vehicles);
    console.log(payload);
  }

  getVehicleValues(checkboxValues: Boolean[]) {
    let values: string[] = [];
    checkboxValues.forEach((val, index) => {
      if (val) {
        values.push(this.vehiclesArr[index].value);
      }
    });
    return values;
  }
}
