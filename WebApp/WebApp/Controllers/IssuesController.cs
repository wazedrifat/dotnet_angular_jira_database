using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApp.Repositories;
using WebApp.Models;

namespace WebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IssuesController : ControllerBase
    {
        private readonly IIssueRepository issueRepository;

        public IssuesController(IIssueRepository issueRepository)
        {
            this.issueRepository = issueRepository;
        }

        [HttpGet]
        public async Task<IEnumerable<Issue>> GetIssues()
        {
            return await issueRepository.Get();
        }

        [HttpPost]
        public async Task<ActionResult<Issue>> PostIssue([FromBody] Issue issue)
        {
            var newIssue = await issueRepository.Create(issue);
            return CreatedAtAction(nameof(GetIssues), new { id = newIssue.id }, newIssue);
        }
    }
}
