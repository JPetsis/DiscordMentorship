import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';

import { faCogs, faSignOutAlt, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import HomePage from './components/pages/HomePage';
import NavBar from './components/navigation/NavBar';
import Footer from './components/navigation/Footer';
import Error404 from './components/navigation/Error404';

library.add(fab);
library.add(faUserAlt, faSignOutAlt, faCogs);

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
