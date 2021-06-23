using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApp.Models;

namespace WebApp.Repositories
{
    public interface IIssueRepository
    {
        Task<IEnumerable<Issue>> Get();
        //Task<Issue> Get(int id);
        Task<Issue> Create(Issue issue);
        //Task Update(Issue issue);
        //Task Delete(int id);
    }
}
