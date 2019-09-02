import React, { Component } from "react";
import API from "../utils/API";
import { RecipeList, RecipeListItem } from "../components/RecipeList";

class Recipes extends Component {
  state = {
    recipes: [],
    recipeSearch: ""
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.getRecipes(this.state.recipeSearch)
      .then(res => {
        this.setState({ recipes: res.data });
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center">React Axios Recipe Search</h1>
        <form>
          <div className="form-group col-xs-7">
            <label htmlFor="Query">
              <strong>Recipe Search</strong>
            </label>
            <input
              name="recipeSearch"
              value={this.state.recipeSearch}
              onChange={this.handleInputChange}
              placeholder="Search For a Recipe"
            />
          </div>

          <div className="mb-2">
            <button
              onClick={this.handleFormSubmit}
              type="submit"
              className="btn btn-lg btn-danger"
            >
              Search
            </button>
          </div>
        </form>
        {!this.state.recipes.length ? (
          <h1 className="text-center">No Recipes to Display</h1>
        ) : (
          <RecipeList>
            {this.state.recipes.map(recipe => {
              return (
                <RecipeListItem
                  key={recipe.title}
                  title={recipe.title}
                  href={recipe.href}
                  ingredients={recipe.ingredients}
                  thumbnail={recipe.thumbnail}
                />
              );
            })}
          </RecipeList>
        )}
      </div>
    );
  }
}

export default Recipes;
