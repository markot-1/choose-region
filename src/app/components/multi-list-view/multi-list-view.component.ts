import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIcon } from '@angular/material/icon';
import { RegionsService } from '../../regions.service';
import { map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-multi-list-view',
  imports: [MatSidenavModule, MatIcon, AsyncPipe, MatCheckboxModule],
  templateUrl: './multi-list-view.component.html',
  styleUrl: './multi-list-view.component.scss'
})
export class MultiListViewComponent {
  @Input() visible: boolean = false;
  @Output() onClick: EventEmitter<boolean> = new EventEmitter<boolean>();
  regions$: Observable<any>;

  constructor(private regionsService: RegionsService) {
    this.regions$ = this.regionsService.getRegions().pipe(
      map(data => data.data)
    )
  }

  toggleDrawer(value: boolean) {
    this.onClick.emit(value);
  }
}
