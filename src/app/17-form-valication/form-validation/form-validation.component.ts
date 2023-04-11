import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent {
  nameInp: string = "";

  validationForm = new FormGroup({
    name: new FormControl(this.nameInp, [
      Validators.minLength(4),
      Validators.required,
    ])
  });


  get name() {
    return this.validationForm.get('name');
  }

}
