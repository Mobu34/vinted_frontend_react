import React, { useState, useEffect } from "react";
import axios from "axios";

import MainHome from "../components/MainHome";

const Home = ({}) => {
  const [offers, setOffers] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://vinted-react.herokuapp.com/offers?page=${page}`
        );
        setOffers(response.data);
        let i = 1;
        let j = 1;
        const newPages = [...pages];
        while (i <= response.data.count) {
          newPages.push(j);
          i = i + 5;
          j++;
        }
        setPages(newPages);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [setOffers, setIsLoading, page]);

  console.log(pages);
  return (
    <div className="home-page">
      <MainHome
        isLoading={isLoading}
        offers={offers}
        pages={pages}
        setPages={setPages}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};

export default Home;
