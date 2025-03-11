import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-list-view',
  imports: [MatSidenavModule, MatIcon],
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.scss',
})
export class ListViewComponent {
  @Input() visible: boolean = false;
  @Output() onClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  toggleDrawer(value: boolean) {
    this.onClick.emit(value);
  }
}
