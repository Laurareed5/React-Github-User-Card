import User from "./User";
import "./App.css";
import Followers from "./Followers";

import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    username: "Laurareed5",
    followers: 15,
    public_repos: 35,
    avatar_url: "https://avatars.githubusercontent.com/Laurareed5",
  };

  componentDidMount() {
    axios.get("https://api.github.com/users/laurareed5").then((res) => {
      console.log(res.data);
      const persons = res.data;
      this.setState({ persons });
      console.log({ persons });
    });
  }

  render() {
    const { avatar_url, followers, public_repos } = this.state;
    return (
      <div className="App-container">
        <User
          username={this.state.username}
          followers={followers}
          image={avatar_url}
          repos={public_repos}
        />
        <Followers />
      </div>
    );
  }
}
export default App;
