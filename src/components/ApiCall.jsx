import React, { Component } from "react";
import axios from "axios";

export default class ApiCall extends Component {
  state = {
    posts: [],
    subr: "space"
  };

  componentWillMount() {
    this.redditApi();
  }

  // https://www.reddit.com/r/space.json

  redditApi = () => {
    axios
      .get(`https://www.reddit.com/r/${this.state.subr}.json`)
      .then(result => {
        console.log(result);

        const posts = result.data.data.children.map(result => result.data);
        console.log(posts);
        console.log(posts.title);

        this.setState({
          posts: posts
        });
      });
  };
  render() {
    return (
      <div>
        <h1>/r/{this.state.subr}</h1>
        <ul className="list">
          {this.state.posts.map(post => (
            <li>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}
