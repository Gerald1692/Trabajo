using Microsoft.AspNetCore.Mvc;

namespace Centro_de_Estudio.Controllers
{
    public class InicioController : Controller
    {
        public IActionResult V_Inicio()
        {
            return View();
        }

        public IActionResult V_contrasena()
        {
            return View();
        }

        // Agregado: acción para la vista de registro
        public IActionResult V_Registrarse()
        {
            return View();
        }

    }
}
