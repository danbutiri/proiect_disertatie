import React from 'react';
import './App.scss';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Welcome from './Welcome/Welcome';
import Account from './Account/Account';
import Tests from './Tests/Tests';
import TestPage from './TestPage/TestPage';
import CreatedTests from './CreatedTests/CreatedTests';
import CreateOrEditTest from './CreateOrEditTest/CreateOrEditTest';
import MyGrades from './Grades/MyGrades';
import StudentsGrades from './Grades/StudentsGrades';
import NeactivatListPage from './NeactivatListPage/NeactivatListPage';
import UsersPage from './UsersPage/UsersPage';
import MyProfile from './MyProfile/MyProfile';



function App() {
  return (
    <div className="App">

    <BrowserRouter basename="/">
      <Navbar/>

      <Switch>

        <Route exact path={`/`} exact component={Welcome}/>
        <Route exact path={`/login`} exact component={Account}/>
        <Route exact path={`/tests`} exact component={Tests}/>
        <Route exact path={`/tests/:id`} exact component={TestPage}/>
        <Route exact path={`/createdtests`} exact component={CreatedTests}/>
        <Route exact path={`/createdtests/:id`} exact component={TestPage}/>
        <Route exact path={`/newtest`} exact component={CreateOrEditTest}/>
        <Route exact path={`/mygrades`} exact component={MyGrades}/>
        <Route exact path={`/studentsgrades`} exact component={StudentsGrades}/>
        <Route exact path={`/activateusers`} exact component={NeactivatListPage}/>
        <Route exact path={`/users`} exact component={UsersPage}/>
        <Route exact path={`/profile`} exact component={MyProfile}/>


      </Switch>

      <Footer/>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
