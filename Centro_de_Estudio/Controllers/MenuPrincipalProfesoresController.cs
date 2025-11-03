using Microsoft.AspNetCore.Mvc;

namespace Centro_de_Estudio.Controllers
{
    public class MenuPrincipalProfesoresController : Controller
    {
        public IActionResult MPProfesores()
        {
            return View();
        }
    }
}
