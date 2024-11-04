import { Routes } from "./Routes";
import { GlobalStyle } from "./Styles/global";
import { ThemeContext } from "./Providers/Theme";
import { useContext } from "react";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="App">
      <GlobalStyle teme={theme}/>
      <Routes />
    </div>
  );
}

export default App;
