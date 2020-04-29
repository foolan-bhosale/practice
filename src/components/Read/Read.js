import React, {Component} from 'react';
import VideoPlayer from '../Video/VideoPlayer';

class Read extends Component {
    state = {
        mealItem: {},
        ingredients: []
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

    componentDidMount = async () => {
        const recipeId = this.props.location.state.recipeId;
        console.log(recipeId);
        const url = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`);
        const response = await url.json();
        const meal = response.meals[0];
        const ingredients = this.setIngredients(meal);
        this.setState({
            mealItem: meal,
            ingredients: ingredients
        });
        console.log(this.state.mealItem);

        console.log(ingredients);
        // console.log(response.meals[0]);
    };

    render() {
        const {strMealThumb, strInstructions, strArea, strMeal, strTag, strYoutube} = this.state.mealItem;
        console.log(this.props);
        return (
            <div>
                <img src={strMealThumb} alt={strMeal} />
                <h3>{strMeal}</h3>
                <p>{strInstructions}</p>
                <div>
                    <ul>
                        {this.state.ingredients.map((ing, index) => {
                            return <li key={index}>{ing}</li>;
                        })}
                    </ul>
                </div>
                <VideoPlayer video={strYoutube} />
            </div>
        );
    }
}

export default Read;
