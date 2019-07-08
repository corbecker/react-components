import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Mike"
        time="Today 6pm"
        text="This is a comment component."
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Michelle"
        time="Today 2am"
        text="This is another comment."
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Donna"
        time="Today 1pm"
        text="This is yet another comment."
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
