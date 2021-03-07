import React, {useState, useEffect} from 'react'
import axios from 'axios'

const DeleteRecipe = (props) => {
    const APIVersion = 'v1'
    const [recipes, setRecipes] = useState([])
    const toggleDelete = (id) => {
        axios.delete(`http://127.0.0.1:8000/api/${APIVersion}/recipes/${id}`)
        .then(res => {
            setRecipes(recipes.filter(recipe => recipe.id !== id));
        })
    }
    return (
        <div>
            {/* <button onClick={toggleDelete(props.id)}>削除</button> */}
        </div>
    )
}

export default DeleteRecipe
