import React, { useState, useEffect } from "react";

const Results = () => {
  const [goodVotes, setGoodVotes] = useState([]);
  const [fairVotes, setFairVotes] = useState([]);
  const [neutralVotes, setNeutralVotes] = useState([]);
  const [badVotes, setBadVotes] = useState([]);
  const [totalVotes, setTotalVotes] = useState([]);

  function getResults() {
    fetch("http://localhost:9090/votes", {
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          console.log(res);
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        setTotalVotes(data);
        separateVotes(data);
      });
  }
  /***
   * Fix types
   */
  // function separateVotes(data: any) {
  //   data.forEach((dataVote: object) => {
  //     const text: string = dataVote.vote;
  //     switch (text) {
  //       case "Good":
  //         setGoodVotes((votes) => votes.concat(goodVotes));
  //         break;
  //       case "Fair":
  //         break;
  //       case "Neutral":
  //         break;
  //       case "Bad":
  //         break;
  //       default:
  //         break;
  //     }
  //   });
  // }

  useEffect(() => {
    getResults();
  }, []);

  return (
    <div>
      <h2>Results</h2>
      <div>Good</div>
      <div>Fair</div>
      <div>Neutral</div>
      <div>Bad</div>
    </div>
  );
};

export default Results;
