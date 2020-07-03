import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-super-hero",
  templateUrl: "./super-hero.component.html",
  styleUrls: ["./super-hero.component.css"],
})
export class SuperHeroComponent implements OnInit {
  constructor() {}

  powers = ["Really Smart", "Super Flexible", "Weather Changer", "Honest"];

  hero = {
    name: "",
    alterEgo: "",
    power: "",
  };

  ngOnInit() {}

  onSubmit(heroForm) {
    console.log(this.hero);
    console.log(heroForm);
    console.log(heroForm.valid);
    console.log(heroForm.controls);
    console.log(heroForm.controls.name.value);
    console.log(heroForm.value);
  }
}
