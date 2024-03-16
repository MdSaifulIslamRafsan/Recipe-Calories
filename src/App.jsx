import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import Header from './components/Header/Header';
import Recipes from './components/Recipes/Recipes';
import CurrentlyCooking from './components/CurrentlyCooking/CurrentlyCooking';
import OrderToCooks from './components/OrderToCooks/OrderToCooks';
import 'react-toastify/dist/ReactToastify.css'; 
import { ToastContainer, toast } from 'react-toastify';


function App() {

  const [recipes , SetRecipes] = useState([]);
  const [cooks , SetCooks] = useState([]);
  const [cookings , SetCookings] = useState([]);
  const [totalTime , SetTotalTime] = useState(0);
  const [totalCalories , SetTotalCalories] = useState(0);

     
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
    const newCooking =  cookings.find(item => item?.recipe_id === WantToCook?.recipe_id);
    if (!newCook && !newCooking) {
      SetCooks([...cooks , WantToCook])
      toast.success('Order successful!');
    }else{
      toast.warn('Order Already Exist!')
    }
   
  }
  const handelPreparingBtn = (cooking) => {
     const isExist = cooks.filter(item => item?.recipe_id !== cooking?.recipe_id );
     SetCooks(isExist);
     SetCookings([...cookings , cooking]);
     const replaceTime = cooking.preparing_time.replace('minutes', '');
     SetTotalTime(totalTime + parseFloat(replaceTime));
     const replaceCalories = cooking.calories.replace('calories', '');
     SetTotalCalories(totalCalories + parseFloat(replaceCalories));

   }
 
  return (
    <>
      <Header></Header>
      <main className='my-10'>
     
        <h2 className='text-4xl text-center lexend font-semibold'>Our Recipes</h2>
        <p className='my-4 text-[#150B2B99] lg:w-8/12 mx-auto text-center font-normal lexend'>Explore our Recipe section for a delightful culinary journey, featuring a rich assortment of mouthwatering dishes, cooking tips, and step-by-step instructions to elevate your home cooking experience to new heights</p>
         <section className=' lg:grid lg:grid-cols-12 lg:gap-5'>
                <Recipes handlerWantToCookBtn={handlerWantToCookBtn} recipes = {recipes}></Recipes>
                <aside className="lg:col-span-4">
                   <OrderToCooks cooks={cooks} handelPreparingBtn={handelPreparingBtn}></OrderToCooks>
                   <CurrentlyCooking cookings={cookings} totalCalories={totalCalories} totalTime ={totalTime}></CurrentlyCooking>
                </aside>
         </section>
         <ToastContainer />
      </main>
    </>
      
  )
}

export default App
