import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatchesTableComponent } from './matches-table/matches-table.component';
import { MatchService } from './shared/services/match.service';
import { MatchDurationPipe } from './shared/pipes/match-duration.pipe';
import { IconSvgComponent } from './icon-svg/icon-svg.component';
import { TableFilterComponent } from './table-filter/table-filter.component';


@NgModule({
  declarations: [
    AppComponent,
    MatchesTableComponent,
    MatchDurationPipe,
    IconSvgComponent,
    TableFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule, 
    MatPaginatorModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
