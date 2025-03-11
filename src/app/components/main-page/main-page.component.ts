import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SingleListViewComponent } from '../single-list-view/single-list-view.component';
import { MultiListViewComponent } from '../multi-list-view/multi-list-view.component';
import { minArrayLength } from '../../validators/array-validators';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [ReactiveFormsModule, ScrollingModule, SingleListViewComponent, MultiListViewComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})

export class MainPageComponent {
  visibleMultiChoice: boolean = false;
  visibleSingleChoice: boolean = false;
  form: FormGroup = this.fb.group({
    regionsArray: [[], [Validators.required, minArrayLength(2)]],
    region: [{ id: null, name: '' }, Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  toggleMultiChoice(value: boolean) {
    this.visibleMultiChoice = value;
  }

  toggleSingleChoice(value: boolean) {
    this.visibleSingleChoice = value;
  }
}
