import React from "react";
import ReactDOM from "react-dom";
import Faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={Faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            Mike
          </a>
          <div className="metadata">
            <span className="date">Today 6pm</span>
          </div>
          <div className="text">Nice Blog post!</div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
