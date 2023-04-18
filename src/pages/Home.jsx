import React from "react";
import CoinSearch from "../components/CoinSearch";
import Trending from "../components/Trending";

function Home({ coins }) {
  return (
    <div>
      <Trending />
      <CoinSearch coins={coins} />
    </div>
  );
}

export default Home;
