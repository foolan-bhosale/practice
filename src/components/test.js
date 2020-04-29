import React from 'react';
import {useState, useEffect} from 'react';

function Test() {
    const [recipes, setRecipes] = useState([]);
    const [searchString, setSearchString] = useState('chicken');
    const [lastSearch, setLastSearch] = useState('');

    useEffect(() => {
        getRecipes(searchString);
    }, []);

    function getRecipes(searchString) {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchString}`;
        fetch(url)
            .then((response) => response.json())
            .then((result) => {
                setRecipes(result.meals.splice(0, 9));
                setLastSearch(searchString);
                setSearchString('');
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
            <h1>Hello</h1>
        </div>
    );
}

export default Test;
