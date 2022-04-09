import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loginn from './Loginn';
import Main from './Main';
import Signup from './Signup';

function App() {
  return (
    <Router>
      <div className="App">
      
      
        <Switch>

                    <Route exact path="/">
                                <Main />
                    </Route>
          
                    <Route path="/Loginn">
                                 <Loginn />
                    </Route>


                    <Route path="/Signup">
                                 <Signup/>
                    </Route>

        </Switch>

      </div>
    </Router>
  );
}

export default App;
