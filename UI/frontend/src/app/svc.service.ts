import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class SvcService {
	readonly APIURL = "https://localhost:44397/api";
	readonly JIRA_API = "http://wazedrifat.atlassian.net/rest/api/3/issue";
	// readonly JIRA_API = "/apiCall/api/3/issue";

	constructor(private http:HttpClient) { }

	getIssueList():Observable<any[]> {
		return this.http.get<any>(this.APIURL + '/Issues');
	}

	addIssue(val:any) {
		return this.http.post(this.APIURL + '/Issues', val);
	}

	addToJira(val:any) {
		let data = `{
			"fields" : {
				"project": {
					"key" : "${val.projectID}"
				},
				"summary" : "${val.summary}",
				"issuetype" : {
					"name" : "${val.issueID}"
				}
			}
		}`;
		
		console.log(data);

		fetch(this.JIRA_API, {
			method: 'POST',
			headers: {
				'Authorization': `Basic ${btoa(
					'wazedrifat@gmail.com:DhhVFGIsizA3BcfECQRv46E5'
				).toString()}`,
				'Access-Control-Allow-Origin': '*',
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Access-Control-Allow-Credentials': 'true',
				'Access-Control-Allow-Methods' : 'GET,HEAD,OPTIONS,POST,PUT',
				'Access-Control-Allow-Headers' : 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
			},
			body: data
		})
		.then(response => {
			console.log(
				`jira Response: ${response.status} ${response.statusText}`
			);
			return response.text();
		})
		.then(text => console.log(text))
		.catch(err => console.error(err));
	}

	// addToJira(val:any) {
		// let data = {
		// 	"fields" : {
		// 		"project": {
		// 			"key" : val.projectID
		// 		},
		// 		"summary" : val.summary,
		// 		"issuetype" : {
		// 			"name" : val.issueID
		// 		}
		// 	}
		// };

	// 	const httpOptions = {
	// 		headers: new HttpHeaders({
	// 			'Content-Type':  'application/json',
	// 			'Authorization': 'Basic ' + btoa('wazedrifat@gmail.com:DhhVFGIsizA3BcfECQRv46E5'),
	// 			'Access-Control-Allow-Origin': '*',
	// 			'Access-Control-Allow-Credentials': 'true',
	// 			'Access-Control-Allow-Methods' : 'GET,HEAD,OPTIONS,POST,PUT',
	// 			'Access-Control-Allow-Headers' : 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
	// 		})
	// 	};

	// 	return this.http.post(this.JIRA_API, data, httpOptions);;
	// }
}
