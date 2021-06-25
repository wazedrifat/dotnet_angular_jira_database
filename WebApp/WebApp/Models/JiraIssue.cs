using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApp.Models
{
    public class IssueType
    {
        public IssueType(string name)
        {
            this.name = name;
        }

        public string name { get; set; }
    }

    public class Project
    {
        public Project(string key)
        {
            this.key = key;
        }

        public string key { get; set; }
    }

    public class Fields {
        public Fields(string p, string s, string i)
        {
            this.project = new Project(p);
            this.summary = s;
            this.issuetype = new IssueType(i);
        }

        public Fields(Project project, string summary, IssueType issueType)
        {
            this.project = project;
            this.summary = summary;
            this.issuetype = issueType;
        }

        public Project project { get; set; }
        public string summary { get; set; }
        public IssueType issuetype { get; set; }
    }

    public class JiraIssue
    {
        public Fields fields { get; set; }
        
        public JiraIssue(Issue issue)
        {
            this.fields = new Fields(issue.projectID, issue.summary, issue.issueID);
        }
    }

}
