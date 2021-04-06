import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListEmpComponents from './components/ListEmpComponents';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmpComponent from './components/CreateEmpComponent';
import UpdateEmpComponent from './components/UpdateEmpComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route exact path="/" component={ListEmpComponents}></Route>
            <Route path="/employees" exact component={ListEmpComponents}></Route>
            <Route path="/add-employee" component={CreateEmpComponent}></Route>
            <Route path="/update-employee/:id" component={UpdateEmpComponent}></Route>
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
