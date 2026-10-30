// MealMuse — complete these TODOs yourself!
// Free recipe API: TheMealDB
const API_BASE = "https://www.themealdb.com/api/json/v1/1";
let currentRecipes = [];
let savedRecipes = [];

// TODO 1: Select all needed HTML elements by ID.
// TODO 2: Add a submit listener to searchForm. Prevent page reload,
// read the searchInput value and call searchRecipes(query).
// TODO 3: Write async searchRecipes(query). Fetch:
// `${API_BASE}/search.php?s=${encodeURIComponent(query)}`
// Check response.ok, parse JSON and handle meals === null (no results).
// TODO 4: Write renderRecipes(meals, targetGrid). Each meal has fields such as
// idMeal, strMeal, strMealThumb, strCategory, strArea, strInstructions,
// and strIngredient1...strIngredient20. Render image, title, category,
// View details and Save buttons. Use data-id to identify a meal.
// TODO 5: Make the popular search chips fill the input and start a search.
// TODO 6: Implement the recipe details modal. Fetch:
// `${API_BASE}/lookup.php?i=${mealId}`
// Show instructions, category, area, image and non-empty ingredients.
// TODO 7: Implement Save / Remove. Avoid duplicate IDs, persist in localStorage,
// render saved recipes and update savedCount.
// TODO 8 (bonus): Add dark mode and save theme choice in localStorage.
// TODO 9 (bonus): Add loading state and friendly network/API error messages.
// Suggested order: selectors → search → cards → modal → saved recipes → theme.
