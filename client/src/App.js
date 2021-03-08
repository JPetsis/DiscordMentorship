import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './components/pages/HomePage';
import NavBar from './components/navigation/NavBar';
import Footer from './components/navigation/Footer';

function App() {

    const _NavBarRoutes = [
        "/"
    ];

    return(
        <div id="App">
        <Router>
            <div>
            <Route exact path={_NavBarRoutes} component={NavBar} />
            <Route exact path="/" component={HomePage} />
            <Footer />
            </div>
        </Router>
        </div>
    );
}

export default App;
