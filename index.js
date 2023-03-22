//! DO NOT REMOVE 
//const prompt = require('prompt-sync')({sigint: true});

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
let jackfruitTacos = new Recipe('Jackfruit Tacos', 'Dinner',true,'40 min',['Bag of Pre-cooked Young Jackfruit','1 medium Purple Onion','2 Garlic Cloves','1 pint Heirloom Tomatoes','1 Green Pepper','1 Red Pepper','Taco Seasonings','Shredded Purple Cabbage','Cilantro Garlic Aioli', 'Taco Shells','Fresh Cilantro'],
['1. On a baking sheet, lay out one layer of shredded jackfruit and dehydrate 15 minutes to dry out',
'2. While jackfruit is drying, chop onion, garlic, peppers, and tomatoes',
'3. Saute onions, garlic, and peppers until soft.',
'4. Add jackfruit to onion mixture and continue to sautee for 5 minutes.',
'5. Mix taco seasonings with 1/4 cup water and add to jackfruit.',
'6. Add in chopped tomatoes and continue to cook for 10 minutes.',
'7. While mixture is cooking, warm up taco shells in oven at 325 for 5 minutes.',
'8. Time to prepare the tacos! In a shell, layer jackfruit mixture and shredded cabbage,top with aioli and fresh cilantro garnish.'])

console.log(jackfruitTacos)

let recipe2 = new Recipe('Recipe2', 'Dinner',true,'40 min',['Bag of Pre-cooked Young Jackfruit','1 medium Purple Onion','2 Garlic Cloves','1 pint Heirloom Tomatoes','1 Green Pepper','1 Red Pepper','Taco Seasonings','Shredded Purple Cabbage','Cilantro Garlic Aioli', 'Taco Shells','Fresh Cilantro'],
['1. On a baking sheet, lay out one layer of shredded jackfruit and dehydrate 15 minutes to dry out',
'2. While jackfruit is drying, chop onion, garlic, peppers, and tomatoes',
'3. Saute onions, garlic, and peppers until soft.',
'4. Add jackfruit to onion mixture and continue to sautee for 5 minutes.',
'5. Mix taco seasonings with 1/4 cup water and add to jackfruit.',
'6. Add in chopped tomatoes and continue to cook for 10 minutes.',
'7. While mixture is cooking, warm up taco shells in oven at 325 for 5 minutes.',
'8. Time to prepare the tacos! In a shell, layer jackfruit mixture and shredded cabbage,top with aioli and fresh cilantro garnish.'])


let recipe3 = new Recipe('Recipe3', 'Dinner',true,'40 min',['Bag of Pre-cooked Young Jackfruit','1 medium Purple Onion','2 Garlic Cloves','1 pint Heirloom Tomatoes','1 Green Pepper','1 Red Pepper','Taco Seasonings','Shredded Purple Cabbage','Cilantro Garlic Aioli', 'Taco Shells','Fresh Cilantro'],
['1. On a baking sheet, lay out one layer of shredded jackfruit and dehydrate 15 minutes to dry out',
'2. While jackfruit is drying, chop onion, garlic, peppers, and tomatoes',
'3. Saute onions, garlic, and peppers until soft.',
'4. Add jackfruit to onion mixture and continue to sautee for 5 minutes.',
'5. Mix taco seasonings with 1/4 cup water and add to jackfruit.',
'6. Add in chopped tomatoes and continue to cook for 10 minutes.',
'7. While mixture is cooking, warm up taco shells in oven at 325 for 5 minutes.',
'8. Time to prepare the tacos! In a shell, layer jackfruit mixture and shredded cabbage,top with aioli and fresh cilantro garnish.'])

let recipe4 = new Recipe('Recipe4', 'Dinner',false,'40 min',['Bag of Pre-cooked Young Jackfruit','1 medium Purple Onion','2 Garlic Cloves','1 pint Heirloom Tomatoes','1 Green Pepper','1 Red Pepper','Taco Seasonings','Shredded Purple Cabbage','Cilantro Garlic Aioli', 'Taco Shells','Fresh Cilantro'],
['1. On a baking sheet, lay out one layer of shredded jackfruit and dehydrate 15 minutes to dry out',
'2. While jackfruit is drying, chop onion, garlic, peppers, and tomatoes',
'3. Saute onions, garlic, and peppers until soft.',
'4. Add jackfruit to onion mixture and continue to sautee for 5 minutes.',
'5. Mix taco seasonings with 1/4 cup water and add to jackfruit.',
'6. Add in chopped tomatoes and continue to cook for 10 minutes.',
'7. While mixture is cooking, warm up taco shells in oven at 325 for 5 minutes.',
'8. Time to prepare the tacos! In a shell, layer jackfruit mixture and shredded cabbage,top with aioli and fresh cilantro garnish.'])

let recipe5 = new Recipe('Recipe5', 'Breakfast',false,'40 min',['Bag of Pre-cooked Young Jackfruit','1 medium Purple Onion','2 Garlic Cloves','1 pint Heirloom Tomatoes','1 Green Pepper','1 Red Pepper','Taco Seasonings','Shredded Purple Cabbage','Cilantro Garlic Aioli', 'Taco Shells','Fresh Cilantro'],
['1. On a baking sheet, lay out one layer of shredded jackfruit and dehydrate 15 minutes to dry out',
'2. While jackfruit is drying, chop onion, garlic, peppers, and tomatoes',
'3. Saute onions, garlic, and peppers until soft.',
'4. Add jackfruit to onion mixture and continue to sautee for 5 minutes.',
'5. Mix taco seasonings with 1/4 cup water and add to jackfruit.',
'6. Add in chopped tomatoes and continue to cook for 10 minutes.',
'7. While mixture is cooking, warm up taco shells in oven at 325 for 5 minutes.',
'8. Time to prepare the tacos! In a shell, layer jackfruit mixture and shredded cabbage,top with aioli and fresh cilantro garnish.'])

//adding new list instances
let breakfast = new RecipeList('Breakfast',[],[])
let lunch = new RecipeList("Lunch",[],[])
let dinner = new RecipeList('Dinner',[],[])
let dessert = new RecipeList('Dessert',[],[])


//console.log(dinner)



dinner.assignRecipe(jackfruitTacos)
dinner.assignRecipe(recipe2)
dinner.assignRecipe(recipe3)
dinner.assignRecipe(recipe4)
breakfast.assignRecipe(recipe5)


//console.log(dinner)
//console.log(dinner.recipesVegan)

dinner.deleteRecipe(jackfruitTacos)
//assign book instance
let myFirstCookbook = new RecipeBook('My First Cookbook')
myFirstCookbook.assignRecipeList(dinner)

dinner.displayRecipe(jackfruitTacos)
