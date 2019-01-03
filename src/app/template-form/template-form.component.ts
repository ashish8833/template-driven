import { Component, OnInit } from "@angular/core";
import { User } from "./user";

@Component({
  selector: "app-template-form",
  templateUrl: "./template-form.component.html",
  styleUrls: ["./template-form.component.css"]
})
export class TemplateFormComponent implements OnInit {
  user = new User("", "");
  constructor() {}
  ngOnInit() {}
  onSubmit(userForm) {
    console.log(userForm.valid);
  }
}
