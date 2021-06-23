import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SvcService {
	readonly APIURL = "https://localhost:44397/api";
	readonly JIRA_API = "https://wazedrifat.atlassian.net/rest/api/3/issue";
	
	

	constructor(private http:HttpClient) { }

	getIssueList():Observable<any[]> {
		return this.http.get<any>(this.APIURL + '/Issues');
	}

	addIssue(val:any) {
		return this.http.post(this.APIURL + '/Issues', val);
	}

	addToJira(val:any) {
		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type':  'application/json',
				'Authorization': 'Basic ' + btoa('wazedrifat@gmail.com:naro7TtxmyoIzKBzzZOND848'),
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Credentials': 'true'
			})
		};

		return this.http.post(this.JIRA_API, val, httpOptions);;
	}
}
