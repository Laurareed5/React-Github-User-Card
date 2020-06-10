import React, { Component } from "react";
import axios from "axios";

class Followers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myFollowers: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/laurareed5/followers`)
      .then((res) => {
        console.log(res.data);
        const myFollowers = res.data;
        this.setState({ myFollowers });
      })
      .catch((err) => {
        console.error("Error", err);
      });
  };

  render() {
    return (
      <div>
        <button className="btn" onClick={this.handleClick}>
          Show Followers
        </button>
        {this.state.myFollowers.map((eachFollower) => (
          <div className="card">
            <h1>
              <b>{eachFollower.login}</b>
            </h1>
            <div className="container">
              <img
                className="img"
                src={eachFollower.avatar_url}
                alt="user avatar"
              />{" "}
              <br />
              <a href={eachFollower.html_url}>View Profile</a> <hr />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Followers;
