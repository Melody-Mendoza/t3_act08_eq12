import { useState } from "react";
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard";
function App() {
  const [usuarioLogueado, setUsuarioLogueado] = useState (null);
  if(!usuarioLogueado)
  {
    return <Login onLogin={setUsuarioLogueado} />;
  }

  return <Dashboard user={usuarioLogueado} setUser={setUsuarioLogueado}/>;
}
export default App;