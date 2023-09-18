import { useEffect, useState } from 'react';
import video from './food.mp4';
import './App.css';
import MyRecipesComponent from './MyRecipesComponent';


// https://api.edamam.com/api/recipes/v2?type=public&q=avocado&app_id=e86f61ea&app_key=2c144680dbb70dbcc64a55a94b13bda7


function App() {

  const MY_ID = "e86f61ea";
  const MY_KEY = "2c144680dbb70dbcc64a55a94b13bda7";

  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);

  useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=avocado&app_id=${MY_ID}app_key=${MY_KEY}`);
      const data = await response.json();
      console.log(data);
      setMyRecipes(data.hits)
    } 
    getRecipe()
  }, [])

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value)
  }

  return (
    <div className='App'>
      <div className='container'>
        <video autoPlay muted loop>
          <source src={video} type="video/mp4"/>
        </video>
        <h1>Найти рецепт</h1>
      </div>
    <div className='container'>
      <form>
        <input className='search' placeholder='Поиск...' onChange={myRecipeSearch} value={mySearch}/>
      </form>
    </div>
    <div className='container'>
      <button>
        <img src='https://img.icons8.com/fluency/48/000000/fry.png' alt='icon'/>
      </button>
    </div>
    {myRecipes.map(element => (
      <MyRecipesComponent label={element.recipe.label} image={element.recipe.image}/>
    ))}




    </div>
    
  );
}

export default App;
