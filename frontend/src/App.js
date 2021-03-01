import React, {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios'
import SelectRecipe from './components/SelectRecipe';
import RecipeList from './components/RecipeList';

function App() {
  // バックエンドAPIバージョン
  const APIVersion = 'v1';
  const [recipeId, setRecipeId] = useState([])
  const [recipes, setRecipes] = useState([])
  const [recipeListButton, setRecipeListButton] = useState(false)
  const switchRecipeListButton = () => {
    setRecipeListButton(!recipeListButton)
  }
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/${APIVersion}/recipes/`)
    .then(res => {setRecipes(res.data)})
  }, [])
  return (
      <div className="App">
      <header className="App-header">
          {recipeListButton ?
            <RecipeList />:
            <button onClick={() => switchRecipeListButton()}>レシピ一覧へ</button>
          }
          <button>メニューを決める</button>
      </header>
    </div>
    
  );
}

export default App;
