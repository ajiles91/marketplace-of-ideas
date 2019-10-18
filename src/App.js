import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import UserPage from "./UserPage";
// import Header from "./Header";
// import IdeaList from './IdeaList';
import CreateIdea from "./CreateIdea";
import IdeaDetails from "./IdeaDetails";
import dummyIdeas from "./dummyIdeas";
import FormContext from "./FormContext";
// const uuidv1 = require("uuid/v1");

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ideaName: "",
      ideaSummary: "",
      authorName: "",
      email: ""
    };
    this.ideas = dummyIdeas;
    this.ideaDataFromForm = this.ideaDataFromForm.bind(this);
  }

  ideaDataFromForm = data => {
    
    // data.id = uuidv1();
    data.id = Math.floor(Math.random() * (30 - 11 + 1) + 11) 
    data.claimed = false;
    data.submitted = true;
    this.ideas.push(data);
    console.log(data)
    // this.props.history.push("/");
  };

  

  render() {
    return (
      
      <div>
        <FormContext.Provider value={{ ideas: this.ideas }}>
          {/* <Header /> */}
          <BrowserRouter>
            <Switch>
              <Route path="/" exact render={props => <UserPage />} />
              <Route
                path="/idea/:id"
                render={props => <IdeaDetails {...props} />}
              />
              <Route
                path="/create-idea"
                render={props => (
                  <CreateIdea ideaDataFromForm={this.ideaDataFromForm} />
                )}
              />
            </Switch>
          </BrowserRouter>
        </FormContext.Provider>
      </div>
    );
  }
}