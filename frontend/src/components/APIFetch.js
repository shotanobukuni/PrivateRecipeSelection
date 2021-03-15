import React, {useState, useEffect} from 'react'
import axios from 'axios';
import RecipeList from './RecipeList';

function APIFetch() {
    const APIVersion='v1'
    const [recipes, setRecipes] = useState([])
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/${APIVersion}/recipes/`)
        .then(res => {setRecipes(res.data)})
    }, [])
    return (
        <div>
            <RecipeList />
        </div>
    )
}

export default APIFetch
