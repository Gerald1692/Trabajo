using Microsoft.AspNetCore.Mvc;

namespace Centro_de_Estudio.Controllers
{
    public class MenuPrincipalController : Controller
    {
        public IActionResult MenuPrincipal()
        {
            return View();
        }
    }
}
