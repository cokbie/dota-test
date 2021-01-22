import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ProMatch } from './../shared/interfaces/pro-match';
import { MatchService } from './../shared/services/match.service';

@Component({
	selector: 'app-matches-table',
	templateUrl: 'matches-table.component.html',
	styleUrls: ['matches-table.component.css']
})
export class MatchesTableComponent implements OnInit {
	
	dataSource: MatTableDataSource<ProMatch>;
	displayedColumns: string[];
	@ViewChild(MatSort) sort: MatSort;
	@ViewChild(MatPaginator) paginator: MatPaginator;
	
	constructor(private data: MatchService) { 
		this.displayedColumns = [
			'league_name',
			'duration',
			'radiant_name',
			'dire_name',
			'match_id'
		];
	}

	ngOnInit() {
		// Load Table 
		this.data.getProMatches().subscribe(
		  (MatchesTable) => {
		  	// Get Data Source
		  	this.dataSource = new MatTableDataSource<ProMatch>(MatchesTable);
		  	// Sorting using Material
		  	this.dataSource.sort = this.sort;
		  	// Pagination using Material
		  	this.dataSource.paginator = this.paginator;
		  	// Filtering/Searching for League Name
		  	this.dataSource.filterPredicate = (data: ProMatch, filter: string) => {
		  		let regex = new RegExp(`^${filter}`);
		  		return regex.test(data.league_name.toLowerCase());
		  	}
		  }
		);
	}

	applyFilter(filterValue: string) {
		filterValue = filterValue.trim().toLocaleLowerCase();
		this.dataSource.filter = filterValue;
	}

}