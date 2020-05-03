import React from 'react';
import {useState, useEffect} from 'react';
import Search from '../Search/Search';
import RecipeList from '../RecipeList/RecipeList';
import Footer from '../Footer/Footer';

function Recipes() {
    const [recipes, setRecipes] = useState([]);
    const [searchString, setSearchString] = useState('chicken');

    useEffect(() => {
        getRecipes(searchString);
    }, []);

    async function getRecipes(searchString) {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchString}`;
        await fetch(url)
            .then((response) => response.json())
            .then((result) => {
                if (result.meals && result.meals.length > 0) {
                    setRecipes(result.meals);

                    setSearchString('');
                } else {
                    alert('Recipe not found');
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
            {recipes.length > 0 ? <Footer /> : null}
        </div>
    );
}

export default Recipes;
