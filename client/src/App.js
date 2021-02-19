import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';

function App() {
    return(
        <div id="App">
        <Router>
            <div>
            <Route exact path="/" component={HomePage} />
            </div>
        </Router>
        </div>
    );
}

export default App;
