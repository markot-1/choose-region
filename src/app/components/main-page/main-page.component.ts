import { Component } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ListViewComponent } from "../list-view/list-view.component";
import { ScrollingModule } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [ReactiveFormsModule, ListViewComponent, ScrollingModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {
  visibleList: boolean = false;
  form: UntypedFormGroup = new UntypedFormGroup({});

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      regionsArray: [{}, Validators.required],
      region: [{}, Validators.required],
    });
  }

  toggleVisibilityList(value: boolean) {
    this.visibleList = value;
  }
}
