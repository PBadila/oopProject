//! DO NOT REMOVE 
import promptSync from 'prompt-sync'
const prompt = promptSync(); 

/**
  Example usage to prompt a user: 
  const name = prompt('What is your name?');
  console.log(`Hey there ${name}`);

  All user input will be read as a String, so in order to treat user input as numbers, you’ll need to convert the input:
*/
/////////////////////////////////////////////  WRITE YOUR CODE BELOW!!!  //////////////////////////////////////


import Recipe from "./Recipe.js";
import RecipeList from "./RecipeList.js";
import RecipeBook from "./RecipeBook.js";


//adding a new recipe instance
let recipe1 = new Recipe('Recipe1', 'Dinner',true,'40 min',['Bag of Pre-cooked Young Jackfruit','1 medium Purple Onion','2 Garlic Cloves','1 pint Heirloom Tomatoes','1 Green Pepper','1 Red Pepper','Taco Seasonings','Shredded Purple Cabbage','Cilantro Garlic Aioli', 'Taco Shells','Fresh Cilantro'],
['1. On a baking sheet, lay out one layer of shredded jackfruit and dehydrate 15 minutes to dry out',
'2. While jackfruit is drying, chop onion, garlic, peppers, and tomatoes',
'3. Saute onions, garlic, and peppers until soft.',
'4. Add jackfruit to onion mixture and continue to sautee for 5 minutes.',
'5. Mix taco seasonings with 1/4 cup water and add to jackfruit.',
'6. Add in chopped tomatoes and continue to cook for 10 minutes.',
'7. While mixture is cooking, warm up taco shells in oven at 325 for 5 minutes.',
'8. Time to prepare the tacos! In a shell, layer jackfruit mixture and shredded cabbage,top with aioli and fresh cilantro garnish.'])

//console.log(recipe1)

let recipe2 = new Recipe('Recipe2', 'Dinner',true,'40 min',['Bag of Pre-cooked Young Jackfruit','1 medium Purple Onion','2 Garlic Cloves','1 pint Heirloom Tomatoes','1 Green Pepper','1 Red Pepper','Taco Seasonings','Shredded Purple Cabbage','Cilantro Garlic Aioli', 'Taco Shells','Fresh Cilantro'],
['1. On a baking sheet, lay out one layer of shredded jackfruit and dehydrate 15 minutes to dry out',
'2. While jackfruit is drying, chop onion, garlic, peppers, and tomatoes',
'3. Saute onions, garlic, and peppers until soft.',
'4. Add jackfruit to onion mixture and continue to sautee for 5 minutes.',
'5. Mix taco seasonings with 1/4 cup water and add to jackfruit.',
'6. Add in chopped tomatoes and continue to cook for 10 minutes.',
'7. While mixture is cooking, warm up taco shells in oven at 325 for 5 minutes.',
'8. In a shell, layer jackfruit mixture and shredded cabbage,top with aioli and fresh cilantro garnish.'])


let recipe3 = new Recipe('Recipe3', 'Dinner',true,'40 min',['Bag of Pre-cooked Young Jackfruit','1 medium Purple Onion','2 Garlic Cloves','1 pint Heirloom Tomatoes','1 Green Pepper','1 Red Pepper','Taco Seasonings','Shredded Purple Cabbage','Cilantro Garlic Aioli', 'Taco Shells','Fresh Cilantro'],
['1. On a baking sheet, lay out one layer of shredded jackfruit and dehydrate 15 minutes to dry out',
'2. While jackfruit is drying, chop onion, garlic, peppers, and tomatoes',
'3. Saute onions, garlic, and peppers until soft.',
'4. Add jackfruit to onion mixture and continue to sautee for 5 minutes.',
'5. Mix taco seasonings with 1/4 cup water and add to jackfruit.',
'6. Add in chopped tomatoes and continue to cook for 10 minutes.',
'7. While mixture is cooking, warm up taco shells in oven at 325 for 5 minutes.',
'8. In a shell, layer jackfruit mixture and shredded cabbage,top with aioli and fresh cilantro garnish.'])

let recipe4 = new Recipe('Recipe4', 'Lunch',false,'40 min',['Bag of Pre-cooked Young Jackfruit','1 medium Purple Onion','2 Garlic Cloves','1 pint Heirloom Tomatoes','1 Green Pepper','1 Red Pepper','Taco Seasonings','Shredded Purple Cabbage','Cilantro Garlic Aioli', 'Taco Shells','Fresh Cilantro'],
['1. On a baking sheet, lay out one layer of shredded jackfruit and dehydrate 15 minutes to dry out',
'2. While jackfruit is drying, chop onion, garlic, peppers, and tomatoes',
'3. Saute onions, garlic, and peppers until soft.',
'4. Add jackfruit to onion mixture and continue to sautee for 5 minutes.',
'5. Mix taco seasonings with 1/4 cup water and add to jackfruit.',
'6. Add in chopped tomatoes and continue to cook for 10 minutes.',
'7. While mixture is cooking, warm up taco shells in oven at 325 for 5 minutes.',
'8. In a shell, layer jackfruit mixture and shredded cabbage,top with aioli and fresh cilantro garnish.'])

let recipe5 = new Recipe('Recipe5', 'Breakfast',false,'40 min',['Bag of Pre-cooked Young Jackfruit','1 medium Purple Onion','2 Garlic Cloves','1 pint Heirloom Tomatoes','1 Green Pepper','1 Red Pepper','Taco Seasonings','Shredded Purple Cabbage','Cilantro Garlic Aioli', 'Taco Shells','Fresh Cilantro'],
['1. On a baking sheet, lay out one layer of shredded jackfruit and dehydrate 15 minutes to dry out',
'2. While jackfruit is drying, chop onion, garlic, peppers, and tomatoes',
'3. Saute onions, garlic, and peppers until soft.',
'4. Add jackfruit to onion mixture and continue to sautee for 5 minutes.',
'5. Mix taco seasonings with 1/4 cup water and add to jackfruit.',
'6. Add in chopped tomatoes and continue to cook for 10 minutes.',
'7. While mixture is cooking, warm up taco shells in oven at 325 for 5 minutes.',
'8. In a shell, layer jackfruit mixture and shredded cabbage,top with aioli and fresh cilantro garnish.'])


let recipe6 = new Recipe('Recipe6', 'Breakfast',false,'40 min',['Bag of Pre-cooked Young Jackfruit','1 medium Purple Onion','2 Garlic Cloves','1 pint Heirloom Tomatoes','1 Green Pepper','1 Red Pepper','Taco Seasonings','Shredded Purple Cabbage','Cilantro Garlic Aioli', 'Taco Shells','Fresh Cilantro'],
['1. On a baking sheet, lay out one layer of shredded jackfruit and dehydrate 15 minutes to dry out',
'2. While jackfruit is drying, chop onion, garlic, peppers, and tomatoes',
'3. Saute onions, garlic, and peppers until soft.',
'4. Add jackfruit to onion mixture and continue to sautee for 5 minutes.',
'5. Mix taco seasonings with 1/4 cup water and add to jackfruit.',
'6. Add in chopped tomatoes and continue to cook for 10 minutes.',
'7. While mixture is cooking, warm up taco shells in oven at 325 for 5 minutes.',
'8. In a shell, layer jackfruit mixture and shredded cabbage,top with aioli and fresh cilantro garnish.'])

let recipe7 = new Recipe('Recipe7', 'Breakfast',false,'40 min',['Bag of Pre-cooked Young Jackfruit','1 medium Purple Onion','2 Garlic Cloves','1 pint Heirloom Tomatoes','1 Green Pepper','1 Red Pepper','Taco Seasonings','Shredded Purple Cabbage','Cilantro Garlic Aioli', 'Taco Shells','Fresh Cilantro'],
['1. On a baking sheet, lay out one layer of shredded jackfruit and dehydrate 15 minutes to dry out',
'2. While jackfruit is drying, chop onion, garlic, peppers, and tomatoes',
'3. Saute onions, garlic, and peppers until soft.',
'4. Add jackfruit to onion mixture and continue to sautee for 5 minutes.',
'5. Mix taco seasonings with 1/4 cup water and add to jackfruit.',
'6. Add in chopped tomatoes and continue to cook for 10 minutes.',
'7. While mixture is cooking, warm up taco shells in oven at 325 for 5 minutes.',
'8. In a shell, layer jackfruit mixture and shredded cabbage,top with aioli and fresh cilantro garnish.'])



//adding new list instances
let breakfast = new RecipeList('Breakfast',[],[])
let lunch = new RecipeList("Lunch",[],[])
let dinner = new RecipeList('Dinner',[],[])


//assigning recipes to lists
dinner.assignRecipe(recipe1)
dinner.assignRecipe(recipe2)
dinner.assignRecipe(recipe3)
lunch.assignRecipe(recipe4)
breakfast.assignRecipe(recipe5)
breakfast.assignRecipe(recipe6)
breakfast.assignRecipe(recipe7)

//creating book instance
let myFirstCookbook = new RecipeBook('My First Cookbook')

//assigning recipe lists to book instance
myFirstCookbook.assignRecipeList(dinner)
myFirstCookbook.assignRecipeList(breakfast)
myFirstCookbook.assignRecipeList(lunch)






//User Menu
let bookIntro = () =>{
  
  console.clear()
  console.log(`1. View Table of Contents`)
  console.log(`2. Add a recipe`)
  console.log(`3. Delete a recipe`)
  console.log('4. Quit')
  let menuSelection = prompt(`\nEnter the number for your selection: `)

  switch (menuSelection){
    //table of contents
    case '1':
      //clears console
      console.clear()
      tableOfContents()
      break
    //add a recipe
    case '2':
      console.clear()
      intakeRecipe()
      
      break
    //delete a recipe
    case '3':
      console.clear()
      eraseRecipe()
      
      break
    default:
      break
  } 
  
}
//allowing user to input recipe
let intakeRecipe = () => {
  let inName = prompt('Name of recipe: ')
  //console.log(inName)
  let category
  //why is this re-prompting once I put in a number?
  let inCategory = prompt('1.Breakfast \n2.Lunch \n3.Dinner \n\nEnter the number for your selection: ')
  
  switch (inCategory){
    case '1':
      category = 'Breakfast'
      break
    case '2':
      category = 'Lunch'
      break
    case '3':
      category = 'Dinner'
      break
   
    default:
    break
  }

  //gathering isVegan
  let vegan = prompt('Is it vegan? y/n: ')
  let isVegan
  if(vegan === 'y'){
    isVegan = true
  }
  else{
    isVegan = false
  }

  //gathering cookingTime
  let cookTime = prompt('Enter the cooking time in minutes: ')
  let cookingTime = `${cookTime} min`
  //console.log(cookingTime)
  
  //gathering ingredients
  let ingred = prompt('Please enter ingredients, separated by commas: ')
  ingred = ingred.split(',')

  //gathering directions
  let directions = prompt('Please enter directions, numbered and separated by commas: ')
  directions = directions.split(',')
  //console.log(directions)

  //adding the recipe to a list
  let recipe = new Recipe(inName,category,isVegan,cookingTime,ingred,directions)
  //console.log(recipe)
  switch (category){
    case 'Breakfast':
      breakfast.assignRecipe(recipe)
      console.log('assigned to breakfast')
      
      break
    case 'Lunch':
      lunch.assignRecipe(recipe)
      console.log('assigned to lunch')
     
      break
    case 'Dinner':
      dinner.assignRecipe(recipe)
      console.log('assigned to dinner')
      
      break
    

  }
  let userQuit = prompt("Press q to return to menu")
  if(userQuit==='q'){
    bookIntro()
  }

}

//Table of Contents
let tableOfContents = () =>{
  console.log(`\n ${myFirstCookbook.name}\n`)
  console.log(`Table of Contents\t\tPage`)
  console.log(`\nBREAKFAST`)
  breakfast.displayCategory(breakfast)
  console.log(`\nLUNCH`)
  lunch.displayCategory(lunch)
  console.log(`\nDINNER`)
  dinner.displayCategory(dinner)
  console.log(`\n\n`)
  let tocChoice = prompt('Enter recipe choice: ' )
  //console.log(tocChoice)
  myFirstCookbook.displayRecipe(tocChoice)
  if(myFirstCookbook.displayRecipe(tocChoice)=='q'){
    bookIntro()
  }
 

}

//deleting recipes from a list
let eraseRecipe = () =>{

  //tableOfContents()
  //let check
  let eraseRec = prompt('Please enter the name of the recipe you would like to delete: ')

  //check = breakfast.checkList(eraseRec)
  //console.log(`Now look here`+ check)
  if(breakfast.checkList(eraseRec)===true){
    console.log(`Breakfast item deleted.`)
  }
  else if(lunch.checkList(eraseRec)===true){
    console.log('Lunch item deleted.')
  }
  else if(dinner.checkList(eraseRec)===true){
    console.log('Dinner item deleted.')
  }
  else{
    console.log('No item to delete.')
  }
  let userQuit = prompt("Press q to return to menu")
  if(userQuit==='q'){
    bookIntro()
  }
}

 

//myFirstCookbook.displayRecipe(recipe5)

//dinner.checkList(recipe5)

bookIntro()


