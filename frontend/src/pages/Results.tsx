import React, { useState, useEffect } from "react";
//import VoteCard from "./../components/VoteCard";
const Results = () => {
  interface Vote {
    vote: string;
  }
  const [goodVotes, setGoodVotes]: Array<any> = useState([]);
  const [fairVotes, setFairVotes]: Array<any> = useState([]);
  const [neutralVotes, setNeutralVotes]: Array<any> = useState([]);
  const [badVotes, setBadVotes]: Array<any> = useState([]);
  const [totalVotes, setTotalVotes]: Array<any> = useState([]);

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
  function separateVotes(data: Array<Vote>) {
    data.forEach((dataVote: Vote) => {
      console.log(dataVote);
      const text: string = dataVote.vote;
      const newVote: Vote = dataVote;
      switch (text) {
        case "Good":
          setGoodVotes((votes: Array<Vote>) => votes.concat(newVote));
          break;
        case "Fair":
          setFairVotes((votes: Array<Vote>) => votes.concat(newVote));
          break;
        case "Neutral":
          setNeutralVotes((votes: Array<Vote>) => votes.concat(newVote));
          break;
        case "Bad":
          setBadVotes((votes: Array<Vote>) => votes.concat(newVote));
          break;
        default:
          break;
      }
    });
    console.log(goodVotes);
  }

  useEffect(() => {
    getResults();
  }, []);

  return (
    <div>
      <h2>Results</h2>
      <div>
        <h3>Good</h3>
        <p>Number of votes: {goodVotes.length}</p>
        <p>
          Percentage: {Math.round((goodVotes.length / totalVotes.length) * 100)}
          %
        </p>
      </div>
      <div>
        <h3>Fair</h3>
        <p>Number of votes: {fairVotes.length}</p>
        <p>
          Percentage: {Math.round((fairVotes.length / totalVotes.length) * 100)}
          %
        </p>
      </div>
      <div>
        <h3>Neutral</h3>
        <p>Number of votes: {neutralVotes.length}</p>
        <p>
          Percentage:{" "}
          {Math.round((neutralVotes.length / totalVotes.length) * 100)}%
        </p>
      </div>
      <div>
        <h3>Bad</h3>
        <p>Number of votes: {badVotes.length}</p>
        <p>
          Percentage: {Math.round((badVotes.length / totalVotes.length) * 100)}%
        </p>
      </div>
    </div>
  );
};

export default Results;
