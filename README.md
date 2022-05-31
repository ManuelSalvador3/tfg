# tfg
TFG realizado por: Manuel Salvador

Este TFG se ha basado en la creacion de una aplicacion movil con la que el usuario es capaz de ver los trayectos que ha realizado en coche a partir de las ubicaciones que se van extrayendo del telefono del usuario cada cierto tiempo.


Con esto permitimos que el usuaro vea de donde a donde ha realizado los trayectos.
También se ha implementeado la funcionalidad de añadir una mapa a la aplicación con la que el usuario puede observar su ubicacion y puede realizar busquedas de diferentes lugares en su entorno para ver el tiempo estimado del trayecto, la distancia y la ruta que debe tomar en coche para llegar hasta el destino


A su vez que se avisará a los usuarios del tiempo estimado del trayecto que va a realizar en base a los trayectos que realiza rutinariamente como ir a trabajar.

Ej: Si el usuario va a trabajar en coche todos los dias a las 8 de la mañana desde su casa a la oficina a 20 minutos, 30 minutos antes de que salga a realiza el trayecto se le informa del tiempo estimado de cuanto tardara en el trayecto.



El proyecto se distribuye en dos carpetas diferentes donde encontramos una carpeta de components dentro de src en la cual vamos a encontrar todos los componentes del backend
Por ejemplo: 
1. La obtencion de la ubicacion cuando la aplicacion esta cerrada.
2. La creacion de las notificaciones al usuario.
3. La autenticacion del usuario para llevarle a una pagina u otra
4. La Navbar que el usuario puede ver en la aplicacion cuando esta logeado.

A su vez tambien se encuentra la carpeta scenes dentro de src en la cual encontramos todas las pantallas que tiene la aplicacion.
Desde la pantalla de login hasta el perfil de usuario.
Todas estas pantallas son diferenciables debido al nombre la cual representa que hace cada pantalla, por ejemplo la pantalla de MapScreen representa la pantalla donde el usuario ve el mapa y donde se encuentra.
