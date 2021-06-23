using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApp.Models
{
    public class Issue
    {
        public int id { get; set; }
        public string summary { get; set; }
        public string projectID { get; set; }
        public string issueID { get; set; }
    }
}
