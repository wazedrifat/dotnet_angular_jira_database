import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SvcService {
	readonly APIURL = "https://localhost:44397/api";

	constructor(private http:HttpClient) { }

	getIssueList():Observable<any[]> {
		return this.http.get<any>(this.APIURL + '/Issues');
	}

	addIssue(val:any) {
		return this.http.post(this.APIURL + '/Issues', val);
	}
}
