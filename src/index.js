import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Mike" time="Today 6pm" text="This is a comment." />
      <CommentDetail
        author="Michelle"
        time="Today 2am"
        text="This is another comment."
      />
      <CommentDetail
        author="Donna"
        time="Today 1pm"
        text="This is yet another comment."
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
