import Navigation from './context/Navigation';
import Container from "@material-ui/core/Container";
import { Cards } from "./ui/components/Card/Cards";
function App() {
  return (
    <div className="App">
      <Container>
        <Navigation />
        <Cards />
      </Container>
    </div>
  );
}

export default App;
