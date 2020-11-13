import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import MainHome from "../components/MainHome";

const Home = ({ search }) => {
  const [offers, setOffers] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState([]);

  const { p } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        if (!p) {
          response = await axios.get(
            `https://vinted-react.herokuapp.com/offers?page=1&title=${search}`
          );
        } else {
          const slicedP = p.slice(p.length - 1);
          response = await axios.get(
            `https://vinted-react.herokuapp.com/offers?page=${slicedP}&title=${search}`
          );
        }

        setOffers(response.data);
        let i = 1;
        let j = 1;
        const newPages = [];
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
  }, [setOffers, setIsLoading, p, search]);

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
