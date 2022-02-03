import {useState, useEffect} from "react";
import Detail from "./routes/Detail.js";
import Home from "./routes/Home.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/movie/:id">
          <Detail />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
