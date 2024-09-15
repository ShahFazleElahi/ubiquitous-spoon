const meals = [];
const recipes = {
    'pasta': ['tomato', 'cheese', 'pasta'],
    'salad': ['lettuce', 'tomato', 'cucumber'],
    'soup': ['broccoli', 'carrot', 'onion']
};

function addMeal() {
    const mealInput = document.getElementById('meal-input');
    const meal = mealInput.value;
    if (meal) {
        meals.push(meal);
        updateMealList();
        mealInput.value = '';
    }
}

function updateMealList() {
    const mealList = document.getElementById('meal-list');
    mealList.innerHTML = '';
    meals.forEach((meal, index) => {
        const li = document.createElement('li');
        li.textContent = meal;
        mealList.appendChild(li);
    });
}

function suggestRecipes() {
    const ingredientInput = document.getElementById('ingredient-input');
    const ingredients = ingredientInput.value.split(',').map(ing => ing.trim());
    const recipeList = document.getElementById('recipe-list');
    recipeList.innerHTML = '';

    for (let [recipe, requiredIngredients] of Object.entries(recipes)) {
        const match = requiredIngredients.every(ing => ingredients.includes(ing));
        if (match) {
            const li = document.createElement('li');
            li.textContent = recipe;
            recipeList.appendChild(li);
        }
    }
}

function generateShoppingList() {
    const shoppingListItems = document.getElementById('shopping-list-items');
    shoppingListItems.innerHTML = '';
    
    const allIngredients = new Set();
    for (let meal of meals) {
        const requiredIngredients = recipes[meal];
        if (requiredIngredients) {
            requiredIngredients.forEach(ing => allIngredients.add(ing));
        }
    }
    
    allIngredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        shoppingListItems.appendChild(li);
    });
}
