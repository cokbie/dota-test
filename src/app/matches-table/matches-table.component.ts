import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ProMatch } from './../shared/interfaces/pro-match';
import { MatchService } from './../shared/services/match.service';

@Component({
	selector: 'app-matches-table',
	templateUrl: './matches-table.component.html',
	styleUrls: ['./matches-table.component.css']
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
		this.data.getProMatches().subscribe(
		  (MatchesTable) => {
		  	this.dataSource = new MatTableDataSource<ProMatch>(MatchesTable);
		  	this.dataSource.sort = this.sort;
		  	this.dataSource.paginator = this.paginator;
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