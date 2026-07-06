import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { InicioPage } from "./components/InicioPage";
import { Talleres } from "./components/Talleres";
import { Proyectos } from "./components/Proyectos";
import { Imprenta } from "./components/Imprenta";
import { ImprentaDetalle } from "./components/ImprentaDetalle";
import { Nosotrxs } from "./components/Nosotrxs";
import { ContactoPage } from "./components/ContactoPage";
import { TiendaPage } from "./components/TiendaPage";
import { TiendaDetalle } from "./components/TiendaDetalle";
import { AdminPage } from "./components/AdminPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: InicioPage },
      { path: "talleres", Component: Talleres },
      { path: "proyectos", Component: Proyectos },
      { path: "imprenta", Component: Imprenta },
      { path: "imprenta/:id", Component: ImprentaDetalle },
      { path: "nosotrxs", Component: Nosotrxs },
      { path: "tienda", Component: TiendaPage },
      { path: "tienda/:id", Component: TiendaDetalle },
      { path: "contacto", Component: ContactoPage },
    ],
  },
  {
    path: "/admin",
    Component: AdminPage,
  },
]);
