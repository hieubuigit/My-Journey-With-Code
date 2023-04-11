import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Pet } from 'src/app/models/Pet.model';

@Component({
  selector: 'app-my-learn-form',
  templateUrl: './my-learn-form.component.html',
  styleUrls: ['./my-learn-form.component.css']
})

export class MyLearnFormComponent implements OnInit {

  // Template driven form
  species = ["Dog", "Fish", "Reptile"];
  petModel = new Pet(1, "Genifer", this.species[0]);
  submitted = false;
  // --------------

  // Reactive form
  name = new FormControl("");

  profileForm = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
  })

  // --------------

  constructor() {
  }

  ngOnInit(): void {

  }

  updateName() {
    this.name.setValue("Test reactive value");
  }

  onSubmit() {
    this.submitted = !this.submitted;
  }

  onSubmitReactiveForm() {

    console.warn(this.profileForm.value);

  }

}
