using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApp.Repositories;
using WebApp.Models;
using System.Net.Http;
using RestSharp;
using RestSharp.Authenticators;
using Newtonsoft.Json;

namespace WebApp.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class IssuesController : ControllerBase
    {
        private string UserName = "wazedrifat@gmail.com";
        private string Password = "naro7TtxmyoIzKBzzZOND848";
        private string Url = "https://wazedrifat.atlassian.net/rest/api/3/";




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
            JiraIssue obj = new JiraIssue(issue);

            var data = JsonConvert.SerializeObject(obj).ToString();

            //Console.WriteLine("data = " + data + "\n\n");

            var client = new RestClient(Url);
            client.Authenticator = new HttpBasicAuthenticator(UserName, Password);
            var request = new RestRequest("issue", Method.POST);
            request.AddJsonBody(data);
            //client.Execute(request);

            var response = client.Post(request);

            //Console.WriteLine("response : \n" + response.StatusCode.ToString() + "\n" + response.Content.ToString() + "\n\n\n\n");


            return CreatedAtAction(nameof(GetIssues), new { id = newIssue.id }, newIssue);
        }
    }
}
