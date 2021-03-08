import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './components/pages/HomePage';
import NavBar from './components/navigation/NavBar';
import Footer from './components/navigation/Footer';
import Error404 from './components/navigation/Error404';

function App() {

    return(
        <div id="App">
            <Router>
            <div>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route component={Error404} />
                </Switch>
                <Footer />
            </div>
            </Router>
        </div>
    );
}

export default App;
