/////////////// IMPORT /////////////////////

const db = require("../db");
const { Diet } = require("../models");

// Connect to the database
db.on("error", console.error.bind(console, "MongoDB connection error:"));

/////////////// Workout seed /////////////////////
const main = async () => {
   
  const diets = [
    {
        Title: 'Keto Corned Beey & ',
        comments: 'No need to deprive those eating Keto from enjoying a proper St. Patrick',
        ingrediants: '3-4 lbs corned beef2 onions, quartered 4 celery stalks, quartered crosswise 1 package pickling spicesKosher saltBlack pepper 1 medium green cabbage, cut into 2" wedges2 carrots, peeled and cut into 2" pieces1/2 c. Dijon mustard2 tbsp. apple cider vinegar 1/4 c. mayonnaise 2 tbsp. capers, roughly chopped, plus 1 tsp brine2 tbsp. parsley, roughly chopped ',
        directions: '1: Place corned beef, onion, celery, and pickling spices into a large pot. Add enough water to cover by 2", season with salt and pepper, and bring to a boil. Reduce heat to low, cover, and simmer until very tender, 3–3 1/2 hours. 2: Meanwhile, whisk dijon mustard and apple cider vinegar in a small bowl and season with salt and pepper. In another bowl, mix mayo, capers, caper brine, and parsley. Season with salt and pepper 3: Add cabbage and carrots and continue to simmer for 45 minutes to 1 hour more, until cabbage is tender. Remove meat, cabbage, and carrots from pot. Slice corned beef and season with more salt and pepper. 4: Serve with both sauces on the side for dipping.  ',
        rating: '7',
    },
    {
        Title: 'Keto Beef Stew',
        comments: 'This is a stunner of a weeknight meal.',
        ingrediants: '2 lb. beef chuck roast, cut into 1" pieces, Kosher salt, Freshly ground black pepper, 2 tbsp. extra-virgin olive oil, 8 oz. Baby bella mushrooms, sliced, 1 small onion, chopped, 1 medium carrot, peeled and cut into rounds, 2 stalks celery, sliced, 3 cloves garlic, minced, 1 tbsp. tomato paste, 6 c. low-sodium beef broth, 1 tsp. fresh thyme leaves, 1 tsp. freshly chopped rosemary ',
        directions: '1: Pat beef dry with paper towels and season well with salt and pepper. In a large pot over medium heat, heat oil. Working in batches, add beef and sear on all sides until golden, about 3 minutes per side. Remove from pot and repeat with remaining beef, adding more oil as necessary.  2: To same pot, add mushrooms and cook until golden and crispy, 5 minutes. Add onion, carrots, and celery and cook until soft, 5 minutes. Add garlic and cook until fragrant, 1 minute more. Add tomato paste and and stir to coat vegetables. 3: Add broth, thyme, rosemary, and beef to pot and season with salt and pepper. Bring to a boil and reduce heat to a simmer. Simmer until beef is tender, 50 minutes to an hour.',
        rating: '9',
    },
    {
        Title: 'Keto Meatballs',
        comments: 'A perfect hearty weeknight dinner.',
        ingrediants: '1 lb. ground beef, 1 clove garlic, minced, 1/2 c. shredded mozzarella, 1/4 c. freshly grated Parmesan, plus more for serving, 2 tbsp. freshly chopped parsley, 1 large egg, beaten, 1 tsp. kosher salt, 1/2 tsp. freshly ground black pepper, 2 tbsp. extra-virgin olive oil',
        directions: '1: In a large bowl combine beef, garlic, mozzarella, Parmesan, parsley, egg, salt, and pepper. Form into 16 meatballs. 2: In a large skillet over medium heat, heat oil. Add meatballs and cook, turning occasionally, until golden on all sides, about 10 minutes. Remove from skillet and place on a paper towel-lined plate. 3: To the same skillet, add onion and cook until soft, 5 minutes. Add garlic and cook until fragrant, 1 minute more. Add tomatoes and oregano and season with salt and pepper. 4: Add meatballs back to skillet, cover and simmer until sauce has thickened, 15 minutes. Garnish with Parmesan before serving.',
        rating: '6',
    }
  ];

  await Diet.insertMany(diets);
  console.log("Created some diets");
};
const run = async () => {
  await main();
  db.close();
};

run();