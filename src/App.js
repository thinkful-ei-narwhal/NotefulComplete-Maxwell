import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import HomePage from './components/HomePage'
import Notes from './components/Notes'
import Folder from './components/Folder'
import NotFound from './components/NotFound'



function App() {
  return (
    <div className="App">
      <Link to = '/Notes' > Noteful </Link>


      <Switch>

        <Route exact path = '/'> <HomePage /> </Route>
        
        <Route exact path = '/Notes'> 
          <Notes />
        </Route>

        <Route  path = '/Folder'> 
          <Folder />
        </Route>

        
        <Route component = {NotFound} />

      </Switch>


    </div>
  );
}

export default App;



      /* //header
      //folder - // notes - //delete
      //add folder 
      //add note

      //main route -> home page
      //folder route -> dynamic -> /folder/<folder-name> 
      //dynamic note route -> /note/<note-id>
      */