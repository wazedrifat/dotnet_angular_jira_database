using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApp.Models;

namespace WebApp.Repositories
{
    public class IssueRepository : IIssueRepository
    {
        private readonly IssueContext _context;
        public IssueRepository(IssueContext context)
        {
            _context = context;
        }

        public async Task<Issue> Create(Issue issue)
        {
            _context.issues.Add(issue);
            await _context.SaveChangesAsync();

            return issue;
        }

        public async Task<IEnumerable<Issue>> Get()
        {
            return await _context.issues.ToListAsync();
        }
    }
}
