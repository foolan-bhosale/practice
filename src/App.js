import React, {Component} from 'react';

import './App.css';
import {Link, Route, Redirect} from 'react-router-dom';
import Home from './components/Home/Home';
import Recipes from './components/Recipes/Recipes';
import Read from './components/Read/Read';

class App extends Component {
    render() {
        return (
            <div>
                <nav>
                    <Link to='/'>
                        <h1>Home</h1>
                    </Link>
                    <Link to='/recipes'>Recipes</Link>
                </nav>
                <main>
                    <Route path='/' exact={true} component={Home} />
                    <Route path='/recipes' exact component={Recipes} />
                    <Route path='/recipes/:recipeId' component={Read} />
                </main>
            </div>
        );
    }
}

export default App;
