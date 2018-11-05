import { Injectable } from '@angular/core';
import { ProMatch } from './../interfaces/pro-match';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

// Get API from Host
export class MatchService {

  constructor(private http: HttpClient) { }

  getProMatches() {
  	return this.http.get<ProMatch[]>('https://api.opendota.com/api/proMatches');
  }
}