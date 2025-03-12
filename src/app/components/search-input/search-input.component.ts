import { Component, EventEmitter, Output } from '@angular/core';
import { BehaviorSubject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-search-input',
  imports: [],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.scss',
})
export class SearchInputComponent {
  searchQuery$ = new BehaviorSubject<string>('');
  @Output() searchChange = new EventEmitter<string>();

  constructor() {
    this.searchQuery$.pipe(debounceTime(300)).subscribe((value) => {
      this.searchChange.emit(value);
    });
  }

  onInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.searchQuery$.next(inputElement.value);
  }
}
