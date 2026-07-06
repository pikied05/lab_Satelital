import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { productos as productosIniciales, Producto } from "../components/tiendaData";

const KEYS = {
  session: "lab_admin_session",
  productos: "lab_productos",
  tiendaActiva: "lab_tienda_activa",
};

const CREDENCIALES = { usuario: "admin", password: "satelital2025" };

type AdminContextType = {
  isLoggedIn: boolean;
  login: (u: string, p: string) => boolean;
  logout: () => void;
  productos: Producto[];
  addProducto: (p: Omit<Producto, "id">) => void;
  updateProducto: (id: string, changes: Partial<Producto>) => void;
  deleteProducto: (id: string) => void;
  tiendaActiva: boolean;
  setTiendaActiva: (v: boolean) => void;
};

const AdminContext = createContext<AdminContextType | null>(null);

export function AdminProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => localStorage.getItem(KEYS.session) === "true"
  );

  const [productos, setProductos] = useState<Producto[]>(() => {
    const stored = localStorage.getItem(KEYS.productos);
    return stored ? JSON.parse(stored) : productosIniciales;
  });

  const [tiendaActiva, setTiendaActivaState] = useState(
    () => localStorage.getItem(KEYS.tiendaActiva) !== "false"
  );

  useEffect(() => {
    localStorage.setItem(KEYS.productos, JSON.stringify(productos));
  }, [productos]);

  useEffect(() => {
    localStorage.setItem(KEYS.tiendaActiva, String(tiendaActiva));
  }, [tiendaActiva]);

  const login = (u: string, p: string) => {
    if (u === CREDENCIALES.usuario && p === CREDENCIALES.password) {
      setIsLoggedIn(true);
      localStorage.setItem(KEYS.session, "true");
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem(KEYS.session);
  };

  const addProducto = (p: Omit<Producto, "id">) => {
    const id = String(Date.now());
    setProductos((prev) => [...prev, { ...p, id }]);
  };

  const updateProducto = (id: string, changes: Partial<Producto>) =>
    setProductos((prev) => prev.map((p) => (p.id === id ? { ...p, ...changes } : p)));

  const deleteProducto = (id: string) =>
    setProductos((prev) => prev.filter((p) => p.id !== id));

  return (
    <AdminContext.Provider
      value={{
        isLoggedIn, login, logout,
        productos, addProducto, updateProducto, deleteProducto,
        tiendaActiva, setTiendaActiva: setTiendaActivaState,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const ctx = useContext(AdminContext);
  if (!ctx) throw new Error("useAdmin fuera de AdminProvider");
  return ctx;
}
