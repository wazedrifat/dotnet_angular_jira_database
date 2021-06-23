import { Component, OnInit, Input } from '@angular/core';
import { SvcService } from 'src/app/svc.service';

@Component({
  selector: 'app-add-issues',
  templateUrl: './add-issues.component.html',
  styleUrls: ['./add-issues.component.css']
})
export class AddIssuesComponent implements OnInit {

	constructor(private service : SvcService) { }

	@Input() issue:any;
	summary:string="";
	projectID:string="";
	issueID:string="";

	ngOnInit(): void {
		this.summary = this.issue.summary;
		this.projectID = this.issue.projectID;
		this.issueID = this.issue.issueID;
	}

	addIssue() {
		var val = {
			summary : this.summary,
			projectID : this.projectID,
			issueID : this.issueID
		}
		console.log("s = " + val.summary + "//");

		if (val.summary == "" || val.projectID == "" || val.issueID == "") {
			alert("Fill up all information");
		}
		else {
			this.service.addIssue(val).subscribe(res=> {
				alert("Created Successfully");
			});
		}
	}
}	
