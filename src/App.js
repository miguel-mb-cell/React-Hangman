import './App.css';
import Container from './components/Container';
import Fireworks from './components/Fireworks';
import Navbar from './components/Navbar';

function App() {

    return (
        <div className="App">
            <Navbar/>
            <Container/>
            <Fireworks/>
        </div>
    );
}

export default App;
