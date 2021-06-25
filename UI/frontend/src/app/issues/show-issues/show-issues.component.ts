import { Component, OnInit } from '@angular/core';
import { SvcService } from 'src/app/svc.service';

@Component({
  selector: 'app-show-issues',
  templateUrl: './show-issues.component.html',
  styleUrls: ['./show-issues.component.css']
})

export class ShowIssuesComponent implements OnInit {

	constructor(private service:SvcService) { }

	issueList:any = [];

	ActivateAddEditIssueComp:boolean=false;
	issue:any;

	DepartmentIdFilter:string="";
	DepartmentNameFilter:string="";
	DepartmentListWithoutFilter:any=[];

	ngOnInit(): void {
		this.refreshList();
	}

	createClick() {
		this.issue = {
			summary:"",
			projectID:"",
			issueID:""
		}
		this.ActivateAddEditIssueComp = true;
	}

	closeClick() {
		this.ActivateAddEditIssueComp=false;
    	this.refreshList();
	}

	refreshList() {
		this.service.getIssueList().subscribe(data=>{
			this.issueList=data;
		  });
	}

}
