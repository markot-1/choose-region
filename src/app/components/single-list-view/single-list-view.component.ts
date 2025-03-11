import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIcon } from '@angular/material/icon';
import { RegionsService } from '../../regions.service';
import { map, Observable } from 'rxjs';
import { MatRadioModule } from '@angular/material/radio';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-single-list-view',
  imports: [MatSidenavModule, MatIcon, AsyncPipe, MatRadioModule],
  templateUrl: './single-list-view.component.html',
  styleUrl: './single-list-view.component.scss',
})
export class SingleListViewComponent {
  @Input() visible: boolean = false;
  @Output() onClick: EventEmitter<boolean> = new EventEmitter<boolean>();
  regions$: Observable<any>;

  constructor(private regionsService: RegionsService) {
    this.regions$ = this.regionsService
      .getRegions()
      .pipe(map((data) => data.data));
  }

  toggleDrawer(value: boolean) {
    this.onClick.emit(value);
  }
}
