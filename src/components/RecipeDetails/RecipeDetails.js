import React, {Component} from 'react';
import VideoPlayer from '../Video/VideoPlayer';

import './RecipeDetails.css';

class Read extends Component {
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
            console.log(ins);
            return ins !== '' ? instructions.push(ins + '.\n') : '';
        });
        return instructions;
    }

    componentDidMount = async () => {
        const recipeId = this.props.match.params.recipeId;
        console.log(recipeId);
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
        console.log(this.state.mealItem);

        console.log(ingredients);
        console.log(instructions);
        // console.log(response.meals[0]);
    };

    render() {
        const {strMealThumb, strArea, strMeal, strTag, strYoutube} = this.state.mealItem;
        console.log(this.props);
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8 col-12'>
                        <img
                            className='img-thumbnail img-fluid w-75 h-75 p-2 d-block mb-2 '
                            src={strMealThumb}
                            alt={strMeal}
                        />
                        <a href='#player' className='btn btn-primary'>
                            Watch Video
                        </a>
                    </div>

                    <div className='col-md-4 col-12'>
                        <h3>Ingredients: </h3>
                        <ul>
                            {this.state.ingredients.map((ing, index) => {
                                return <li key={index}>{ing}</li>;
                            })}
                        </ul>
                    </div>

                    <div className='col-md-12'>
                        <h3>{strMeal}</h3>
                        <h4>Instructions: </h4>
                        <ul>
                            {this.state.instructions.map((ins, index) => {
                                return <li key={index}>{ins}</li>;
                            })}
                        </ul>
                    </div>
                    <div className='col-md-12 d-flex justify-content-center' id='player'>
                        <VideoPlayer videoUrl={strYoutube} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Read;
