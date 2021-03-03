import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import CreateRecipe from './components/CreateRecipe';
import RecipeList from './components/RecipeList';
import SelectRecipe from './components/SelectRecipe';

function App() {
  return (
      <div className="App">
      <header className="App-header">
          {/* URIのルーティング */}
          <BrowserRouter>
            <Link to="/">Top画面へ</Link>
            <Link to="/list">レシピ一覧画面へ</Link>
            <Link to="/create">レシピ追加画面へ</Link>
            <Switch>
              <Route path="/list">
                <RecipeList />
              </Route>
              <Route path="/create">
                <CreateRecipe />
              </Route>
              <Route path="/">
                <SelectRecipe /> 
              </Route>
            </Switch>
          </BrowserRouter>
      </header>
    </div>
    
  );
}

export default App;
