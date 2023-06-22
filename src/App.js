import "./App.css";
import { Footer } from "./layouts/Footer";
import { Header } from "./layouts/header/Header";
import { AllRoutes } from "./routing/AllRoutes";

function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
