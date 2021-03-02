import React, {useState} from 'react'
import './App.css';
import SelectRecipe from './components/SelectRecipe';

function App() {
  // メニュー選定ボタンのON/OFF状態管理
  const [selectRecipeButton, setSelectRecipeButton] = useState(false);
  const toggleSelectRecipeButton = () => {
    setSelectRecipeButton(!selectRecipeButton)
  };
  return (
      <div className="App">
      <header className="App-header">
          {!selectRecipeButton ? (
          <div>
            <h2>今日のメニューを決めてみよう</h2>
            <button onClick={toggleSelectRecipeButton}>メニューを決める</button>
          </div>
          ): (
          <div>
            <SelectRecipe />
            <button onClick={toggleSelectRecipeButton}>Topに戻る</button>
          </div>
          )}
      </header>
    </div>
    
  );
}

export default App;
