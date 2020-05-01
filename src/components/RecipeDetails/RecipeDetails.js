import React, {Component} from 'react';
import VideoPlayer from '../Video/VideoPlayer';

import './RecipeDetails.css';

class RecipeDetails extends Component {
    state = {
        mealItem: {},
        ingredients: [],
        instructions: []
    };

    setIngredients(recipe) {
        const ingredients = [];

        let i = 1;
        while (recipe['strIngredient' + i]) {
            const ingredient = recipe['strIngredient' + i];
            const measure = recipe['strMeasure' + i];
            ingredients.push(measure + ' ' + ingredient + '.');
            i++;
        }
        return ingredients;
    }

    setInstructions(recipe) {
        const instructions = [];
        const splitInstructions = recipe['strInstructions'].split('.');
        splitInstructions.map((ins) => {
            return ins !== '' ? instructions.push(ins + '.\n') : '';
        });
        return instructions;
    }

    componentDidMount = async () => {
        const recipeId = this.props.match.params.recipeId;

        const url = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`);
        const response = await url.json();
        const meal = response.meals[0];
        const ingredients = this.setIngredients(meal);
        const instructions = this.setInstructions(meal);
        this.setState({
            mealItem: meal,
            ingredients: ingredients,
            instructions: instructions
        });
    };

    render() {
        const {strMealThumb, strMeal, strTag, strYoutube} = this.state.mealItem;
        console.log(this.props);
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8  col-12'>
                        <img
                            className='img-thumbnail img-fluid w-75 h-75 p-2 d-block mb-2'
                            src={strMealThumb}
                            alt={strMeal}
                        />
                        <a href='#player' className='btn btn-primary'>
                            Watch Video
                        </a>
                    </div>

                    <div className='col-md-4 col-12 shadow-lg p-3 mb-5 bg-white rounded' id='background-color'>
                        <h3>Ingredients: </h3>
                        <ul>
                            {this.state.ingredients.map((ing, index) => {
                                return <li key={index}>{ing}</li>;
                            })}
                        </ul>
                    </div>

                    <div className='col-md-12 shadow p-3 mb-5 bg-white rounded'>
                        <h2 className='text-center' id='name'>
                            {strMeal}
                        </h2>
                        <h4>Instructions: </h4>
                        <ul>
                            {this.state.instructions.map((ins, index) => {
                                return (
                                    <li className='instruction' key={index}>
                                        {ins}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div
                        className='col-md-12 d-flex justify-content-center shadow p-3 mb-5 bg-white rounded '
                        id='player'
                    >
                        <VideoPlayer videoUrl={strYoutube} />
                    </div>
                </div>
            </div>
        );
    }
}

export default RecipeDetails;
