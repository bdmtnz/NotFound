import { Component, OnInit, ChangeDetectionStrategy, ɵmarkDirty as markDirty  } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { IntersectionStatus } from './form-intersection-observer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  list = [];
  visibilityStatus: {[key: number]: IntersectionStatus} = {};
  intersectionStatus = IntersectionStatus;
  
  ngOnInit() {
    for (let n = 0; n < 1000; n++) {
      this.list.push(n);
    }
  }

  onVisibilityChanged(index: number, status: IntersectionStatus) {
    this.visibilityStatus[index] = status;
  }

  trackByIndex(index: number) {
    return index;
  }

}