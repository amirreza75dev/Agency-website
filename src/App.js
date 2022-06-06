import NavBar from "./Navbar";
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Main from "./main";
import Section from "./Sections";
import Services from "./services";
import Sign from "./Sign";
import Footer from "./Footer";
import Form from "./Form";

function App() {
  return (
    <Router>
    <div className="app">

     
      <Switch>
        <Route exact path="/">
        <NavBar />
          <Main />
          <Section />
          <Services />
          <Sign />
          <Footer />
        </Route>
        <Route exact path="/form">
          <Form />

        </Route>




      </Switch>
        
    </div>
    </Router>
  );
}

export default App;
