import {ApplicationRef, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {NgElementsBase} from '../../../utils/ng-elements.base';
import {MatSort, MatTableDataSource} from '@angular/material';
import {EmmitComponentLoad} from '../../../decorators/component-load.decorator';
import {StateService} from '../../../services/state.service';

/*
* In this example we can't disable automatic change detection due to Angular Material requires it.
* */
@Component({
  selector: 'app-material-component',
  templateUrl: './material-component.component.html',
  styleUrls: ['./material-component.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class MaterialComponentComponent extends NgElementsBase implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  @EmmitComponentLoad
  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  toggleChange(event: any) {
    console.log(event);
    this.appRef.tick();
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
