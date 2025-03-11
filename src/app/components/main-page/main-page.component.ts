import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, UntypedFormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu'; 

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
    form: UntypedFormGroup = new UntypedFormGroup({});
  
    constructor(private fb: FormBuilder) {}
  
    ngOnInit(): void {
      this.form = this.fb.group({
        regionsArray: [{}, Validators.required],
        region: [{}, Validators.required],
      });
    }
}
