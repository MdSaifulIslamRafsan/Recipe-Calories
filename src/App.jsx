import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import Header from './components/Header/Header';
import Recipes from './components/Recipes/Recipes';
import WantToCook from './WantToCook/WantToCook';

function App() {

  const [recipes , SetRecipes] = useState([]);
  const [cooks , SetCooks] = useState([]);


  useEffect(()=>{
    const loadRecipeData = async () =>{
      const response = await fetch('./fakedata.json');
      const data = await response.json();
      SetRecipes(data);
    }
    loadRecipeData();
  } ,[])

  const handlerWantToCookBtn = (WantToCook) => {

    const newCook =  cooks.find(item => item?.recipe_id === WantToCook?.recipe_id);
    if (!newCook) {
      SetCooks([...cooks , WantToCook])
    }
  }
  return (
    <>
      <Header></Header>
      <main className='my-10'>
     
        <h2 className='text-4xl text-center font-semibold'>Our Recipes</h2>
        <p className='my-4 lg:w-8/12 mx-auto text-center'>Explore our Recipe section for a delightful culinary journey, featuring a rich assortment of mouthwatering dishes, cooking tips, and step-by-step instructions to elevate your home cooking experience to new heights</p>
         <section className='grid lg:grid-cols-12 gap-5'>
                <Recipes handlerWantToCookBtn={handlerWantToCookBtn} recipes = {recipes}></Recipes>
                <WantToCook cooks={cooks}></WantToCook>
         </section>
         
      </main>
    </>
      
  )
}

export default App
