import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIcon } from '@angular/material/icon';
import { RegionsService } from '../../regions.service';
import { map, Observable } from 'rxjs';
import { MatRadioModule } from '@angular/material/radio';
import { AsyncPipe } from '@angular/common';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-single-list-view',
  imports: [MatSidenavModule, MatIcon, AsyncPipe, MatRadioModule, FormsModule],
  templateUrl: './single-list-view.component.html',
  styleUrl: './single-list-view.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SingleListViewComponent,
      multi: true,
    },
  ],
})
export class SingleListViewComponent implements ControlValueAccessor {
  @Input() visible: boolean = false;
  @Output() onClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  regions$: Observable<any[]>;
  selectedRegion: {id: string, name: string} | null = null;
  onChange: (value: { id: string; name: string } | null) => void = () => {};
  onTouched: () => void = () => {};

  constructor(private regionsService: RegionsService) {
    this.regions$ = this.regionsService
      .getRegions()
      .pipe(map((data) => data.data));
  }

  writeValue(value: any): void {
    this.selectedRegion = value || null;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  isSelected(regionId: string): boolean {
    return this.selectedRegion?.id === regionId;
  }

  toggleSelection(region: {id: string, name: string}) {
    this.selectedRegion = region;
  }

  updateFormData() {
    this.onChange(this.selectedRegion);
    this.onClick.emit(false);
  }

  toggleDrawer(value: boolean) {
    this.selectedRegion = null;
    this.onChange(this.selectedRegion);
    this.onClick.emit(value);
  }
}
