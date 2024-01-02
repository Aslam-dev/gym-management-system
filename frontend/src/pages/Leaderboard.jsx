import React from 'react'
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import LeaderboardComponent from "../components/Leaderboard/Leaderboard";

const Leaderboard = () => {
  return (
    <div>
         <Header activeHeading={5} />
        <LeaderboardComponent />
          <Footer />
    </div>
  )
}

export default Leaderboard;
