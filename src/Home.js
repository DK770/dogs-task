import { useState, useEffect } from "react";
import BreedList from "./BreedList";
import RandomList from "./randomList";
import Navbar from './Navbar';
import BreedPics from "./BreedPics";

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


const Home = () => {
    
    return ( 
        <Router>
        <div>
            <Navbar/>
            <h1>Welcome to Dog World!!</h1>

            <Switch>
                <Route exact path="/">
                    <BreedList title={ "All Breeds" }/>
                </Route>
                <Route exact path="/random">
                    <RandomList title={ "Random Pics" }/>
                </Route>

                <Route exact path="/:breed">
                    <BreedPics title={ "this breed" }/>
                </Route>
            </Switch>

        </div>
        </Router>
    );
}
 
export default Home;
