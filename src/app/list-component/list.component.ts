import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { KioskService } from '../servicies/kiosk.service';

@Component({
  selector: 'list-component',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  private readonly unsubscribe$: Subject<void> = new Subject();

  kiosks: any = [];
  dataSelected: any = [];
  @Output() checkedData = new EventEmitter<any>();

  constructor(private kioskService: KioskService) {}

  ngOnInit() {
    this.kioskService
      .getListKiosk()
      .pipe(map((a) => a.slice(0, 20)))
      .subscribe((data) => {
        this.kiosks = data;
        console.log(data, 'data');
      });

    this.kioskService.getListKioskkk().subscribe((data) => {
      console.log(data, 'candvaaaaa');
    });
  }

  pushData(data) {
    if (
      this.dataSelected.find((number) => number.locationId === data.locationId)
    ) {
      console.log('ceva');
      this.dataSelected.pop(data);
    } else {
      this.dataSelected.push(data);
    }

    this.checkedData.emit(this.dataSelected);
  }
}
