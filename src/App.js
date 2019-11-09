import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import UserPage from "./UserPage";
import CreateIdea from "./CreateIdea";
import IdeaDetails from "./IdeaDetails";

import FormContext from "./FormContext";
import config from './config'


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ideas: [],
    }
  }
 
  componentDidMount(){
    fetch(`${config.API_BASE_URL}`)
    .then(response => response.json())
    .then(json => {
      console.log('result:', json);
      this.setState({
        ideas: json
      })
     
    })
  }
  updateClaimedOnMainPage= () => {
    fetch(`${config.API_BASE_URL}`)
    .then(response => response.json())
    .then(json => {
      console.log('result:', json);
      this.setState({
        ideas: json
      })
    })
    console.log('the callback function ran')
  }
  
  render() {
    return (
      <div>
        <FormContext.Provider value={{ ideas: this.state.ideas}}>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact 
              render={props => (
              <UserPage updateClaimedOnMainPage={this.updateClaimedOnMainPage} {...props}/>
              )} />
              <Route
                path="/idea/:id"
                render={props => <IdeaDetails updateClaimedOnMainPage={this.updateClaimedOnMainPage} {...props} />}
              />
              <Route
                path="/idea"
                render={props => (
                  <CreateIdea ideaDataFromForm={this.ideaDataFromForm} updateClaimedOnMainPage={this.updateClaimedOnMainPage} />
                )}
              />
            </Switch>
          </BrowserRouter>
        </FormContext.Provider>
      </div>
    );
  }
}