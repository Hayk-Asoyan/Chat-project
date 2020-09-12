import React from 'react';
import {Route} from "react-router-dom"

import {Auth, Home} from "./pages";




function App() {
  return (
    <div className="App">
        <Route exact path={["/", "/login"]} component={Auth} />
        <Route exact path='/register' component={Auth} />
        <Route exact path="/index" component={Home} />



    </div>
  );
}

export default App;
