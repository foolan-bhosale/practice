import React, {Component} from 'react';

import './App.css';
import {Link, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Recipes from './components/Recipes/Recipes';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meals: []
        };
    }

    setIngredients(recipe) {
        const ingredients = [];

        let i = 1;
        while (recipe['strIngredient' + i]) {
            const ingredient = recipe['strIngredient' + i];
            const measure = recipe['strMeasure' + i];
            ingredients.push(measure + ' ' + ingredient);
            i++;
        }
        return ingredients;
    }

    componentDidMount() {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
            .then((res) => res.json())
            .then((result) => {
                result.meals.forEach((meal) => {
                    const ingredients = this.setIngredients(meal);
                    // return ingredients;
                    console.log(ingredients);
                });
                this.setState({
                    meals: result.meals
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }

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
                    <Route path='/recipes' component={Recipes} />
                </main>
                <Home />

                {this.state.meals.map((meal) => {
                    return (
                        <div>
                            <p>{meal.strMeal}</p>
                            <p>{meal.strInstructions}</p>
                            <img src={meal.strMealThumb} alt='Meal Image' />
                            <ul>
                                {this.setIngredients(meal).map((ing) => {
                                    return <li>{ing}</li>;
                                })}
                            </ul>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default App;
