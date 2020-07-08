import React from "react";
import { useHistory } from "react-router-dom";

export default function Results() {
  const history = useHistory();

  function postVote(vote: string) {
    console.log(vote);
    history.push("/results");
  }

  return (
    <div>
      <h2>How do you find our service? </h2>
      <button type="button" onClick={() => postVote("Good")}>
        Good
      </button>
      <button type="button" onClick={() => postVote("Fair")}>
        Fair
      </button>
      <button type="button" onClick={() => postVote("Neutral")}>
        Neutral
      </button>
      <button type="button" onClick={() => postVote("Bad")}>
        Bad
      </button>
    </div>
  );
}
