import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListContactsComponent from './components/ListContactsComponent';
import AddContactComponent from './components/AddContactComponent';

function App() {
  //  <ListContactsComponent/>
  return (
    <div>
    <Router>
      <HeaderComponent/>
      <div>
        <Switch>
          <Route exact path="/" component = {ListContactsComponent}></Route>
          <Route path="/contacts" component = {ListContactsComponent}></Route>
          <Route path="/add-contact" component = {AddContactComponent}></Route>
          <Route path="/update-contact/:id" component = {AddContactComponent}></Route>
        </Switch>
      </div>
      <FooterComponent/>
    </Router>
    </div>
  );
}

export default App;
