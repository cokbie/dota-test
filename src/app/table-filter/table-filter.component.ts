import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.css']
})
export class TableFilterComponent {
	
	@Output() filterEntered: EventEmitter<string> = new EventEmitter<string>();

  	constructor() {}

  	applyFilter(value): void {
  		this.filterEntered.emit(value);
  	}


}
