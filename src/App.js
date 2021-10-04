import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Switch>
        <Route path="/home"></Route>
      </Switch>
      <Switch>
        <Route path="/home"></Route>
      </Switch>
      <Switch>
        <Route path="/home"></Route>
      </Switch>
      <Switch>
        <Route path="/home"></Route>
      </Switch>
    </Router>
  );
}

export default App;
