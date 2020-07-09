import React from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  const postVote = (text: string): void => {
    //console.log(vote);
    fetch("http://localhost:9090/votes", {
      credentials: "include",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        vote: text,
      }),
    }).then((res) => {
      if (res.ok) {
        history.push("/results");
      }
    });
  };

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
};

export default Home;
