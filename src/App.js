import React, { Component } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import UserPage from "./UserPage/UserPage";
import CreateIdea from "./CreateIdea/CreateIdea";
import IdeaDetails from "./IdeaDetails/IdeaDetails";

import FormContext from "./FormContext";
import config from "./config";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ideas: [],
    };
  }

  componentDidMount() {
    fetch(`${config.API_BASE_URL}`)
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          ideas: json,
        });
      });
  }

  updateClaimedOnMainPage = () => {
    fetch(`${config.API_BASE_URL}`)
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          ideas: json,
        });
      });
  };

  render() {
    return (
      <div>
        <FormContext.Provider value={{ ideas: this.state.ideas }}>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                exact
                render={(props) => (
                  <UserPage
                    updateClaimedOnMainPage={this.updateClaimedOnMainPage}
                    {...props}
                  />
                )}
              />
              <Route
                path="/idea/:id"
                render={(props) => (
                  <IdeaDetails
                    updateClaimedOnMainPage={this.updateClaimedOnMainPage}
                    {...props}
                  />
                )}
              />
              <Route
                path="/idea"
                render={(props) => (
                  <CreateIdea
                    updateClaimedOnMainPage={this.updateClaimedOnMainPage}
                  />
                )}
              />
            </Routes>
          </BrowserRouter>
        </FormContext.Provider>
      </div>
    );
  }
}
