import React from "react";

// RecipeList renders a bootstrap list item
export function RecipeList({ children }) {
    return <ul className="list-group">{children}</ul>;
  }
  
  // RecipeListItem renders a bootstrap list item containing data from the recipe api call
  export function RecipeListItem({
    thumbnail = "https://placehold.it/300x300",
    title,
    ingredients,
    href
  }) {
    return (
      <li className="list-group-item">
        
        
              <img src={thumbnail} />
            
              <h3>{title}</h3>
              <p>Ingredients: {ingredients}</p>
              <a rel="noreferrer noopener" target="_blank" href={href}>
                Go to recipe!
              </a>
            
      </li>
    );
  }
  