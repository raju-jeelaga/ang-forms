import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-super-hero",
  templateUrl: "./super-hero.component.html",
  styleUrls: ["./super-hero.component.css"],
})
export class SuperHeroComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  powers: ["Mathew", "Yakob", "James", "Jhon", "David"];

  hero = {
    name: "",
    alterEgo: "",
    power: "",
  };

  onSubmit(heroForm) {
    console.log(this.hero);
    console.log(heroForm);
    console.log(heroForm.valid);
    console.log(heroForm.controls);
    console.log(heroForm.controls.name.value);
    console.log(heroForm.value);
  }
}
