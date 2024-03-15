import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import Header from './components/Header/Header';
import Recipes from './components/Recipes/Recipes';

function App() {

  const [recipes , SetRecipes] = useState([]);


  useEffect(()=>{
    const loadRecipeData = async () =>{
      const response = await fetch('./fakedata.json');
      const data = await response.json();
      SetRecipes(data);
    }
    loadRecipeData();
  } ,[])


 
  return (
    <>
      <Header></Header>
      <Recipes recipes = {recipes}></Recipes>
    </>
      
  )
}

export default App
