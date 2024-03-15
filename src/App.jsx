
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

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


  console.log(recipes);
  return (
    <>
      
    </>
      
  )
}

export default App
