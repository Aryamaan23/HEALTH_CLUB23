import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import About from './About';
import Error from './Error';
import Home from './Home';
import Diabetes from './Diabetes';
import Heart from './Heart';

import healthy from './Healthy';

 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
  
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/about" component={About}/>
             
             <Route path="/Diabetes" component={Diabetes}/>
             <Route path="/Heart" component={Heart}/>
             <Route path="/Healthy" component={healthy}/>

            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;