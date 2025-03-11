import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIcon } from '@angular/material/icon';
import { RegionsService } from '../../regions.service';
import { map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-multi-list-view',
  imports: [MatSidenavModule, MatIcon, AsyncPipe, MatCheckboxModule],
  templateUrl: './multi-list-view.component.html',
  styleUrl: './multi-list-view.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: MultiListViewComponent,
      multi: true,
    },
  ],
})
export class MultiListViewComponent implements ControlValueAccessor {
  @Input() visible: boolean = false;
  @Output() onClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  regions$: Observable<any[]>;
  selectedRegions: Array<any> = [];
  onChange: (value: Array<any>) => void = () => {};
  onTouched: () => void = () => {};

  constructor(private regionsService: RegionsService) {
    this.regions$ = this.regionsService
      .getRegions()
      .pipe(map((data) => data.data));
  }

  writeValue(value: any): void {
    this.selectedRegions = value || [];
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  isSelected(regionId: string): boolean {
    return this.selectedRegions.includes(regionId);
  }

  toggleSelection(region: {id: string, name: string}, isChecked: boolean) {
    if (isChecked) {
      this.selectedRegions = [...this.selectedRegions, region];
    } else {
      this.selectedRegions = this.selectedRegions.filter(
        (elem) => elem.id !== region.id
      );
    }
  }

  updateFormData() {
    this.onChange(this.selectedRegions);
    this.onClick.emit(false);
  }

  toggleDrawer(value: boolean) {
    this.selectedRegions = [];
    this.onChange(this.selectedRegions);
    this.onClick.emit(value);
  }
}
