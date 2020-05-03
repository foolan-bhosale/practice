import React, {Component} from 'react';

import './App.css';
import {Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Recipes from './components/Recipes/Recipes';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';
import NavBar from './components/NavBar/NavBar';

class App extends Component {
    render() {
        return (
            <div>
                <NavBar />

                <main>
                    <Route path='/' exact={true} component={Home} />
                    <Route path='/recipes' exact component={Recipes} />
                    <Route path='/recipes/:recipeId' exact component={RecipeDetails} />
                </main>
            </div>
        );
    }
}

export default App;
