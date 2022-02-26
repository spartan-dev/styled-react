import "./App.css";
import { ButtonStyled, Container } from "./components";

function App() {
  return (
    <div className="App">
      <h2>Hell ooo man 💀</h2>
      <Container>
        <ButtonStyled primary texto="soy el boton uno" />
        <ButtonStyled secondary texto="yo soy secundario" />
      </Container>
    </div>
  );
}

export default App;
