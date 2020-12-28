import Home from "./Components/Home";
import Nav from "./Components/Nav";
import { AuthProvider } from "./contexts/AuthContext";
function App() {
  return (
    <AuthProvider>
      <div className="App" style={{ height: "100vh" }}>
        <Nav />
        <Home />
      </div>
    </AuthProvider>
  );
}

export default App;
