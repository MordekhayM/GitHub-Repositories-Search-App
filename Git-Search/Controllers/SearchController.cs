using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Git_Search.Controllers
{
    public class SearchController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult DisplayAll()
        {
            return View();
        }
    }
}