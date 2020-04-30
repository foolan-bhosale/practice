import React from 'react';
import {useState, useEffect} from 'react';
import Search from '../Search/Search';
import RecipeList from '../RecipeList/RecipeList';

function Recipes() {
    const [recipes, setRecipes] = useState([]);
    const [searchString, setSearchString] = useState('chicken');
    const [lastSearch, setLastSearch] = useState('');

    useEffect(() => {
        getRecipes(searchString);
        // const recipeString = JSON.stringify(recipes);
        // localStorage.setItem('recipes', recipeString);
    }, []);

    function getRecipes(searchString) {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchString}`;
        fetch(url)
            .then((response) => response.json())
            .then((result) => {
                if (result.meals && result.meals.length > 0) {
                    setRecipes(result.meals);
                    setLastSearch(searchString);
                    setSearchString('');
                } else {
                    alert('No Results Found');
                }
            })
            .catch(console.error);
    }

    function handleChange(event) {
        setSearchString(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        getRecipes(searchString);
    }

    return (
        <div>
            <Search handleChange={handleChange} handleSubmit={handleSubmit} searchString={searchString} />
            <RecipeList recipes={recipes} />
        </div>
    );
}

export default Recipes;
