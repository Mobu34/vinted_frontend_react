import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import MainHome from "../components/MainHome";

const Home = ({ search }) => {
  const [offers, setOffers] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [pages, setPages] = useState([]);

  const { page, order } = useParams();
  let regex;
  let slicedPage;
  let sortBy;
  if (page) {
    const split = page.split("_");
    slicedPage = split[1];
  }
  if (order) {
    const split = order.split("_");
    sortBy = split[1];
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        if (!page && !order) {
          response = await axios.get(
            `https://vinted-react.herokuapp.com/offers?page=1&title=${search}`
          );
        } else {
          response = await axios.get(
            `https://vinted-react.herokuapp.com/offers?page=${slicedPage}&title=${search}&sort=${
              sortBy || ""
            }`
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
  }, [setOffers, setIsLoading, page, order, search]);

  return (
    <div className="home-page">
      <MainHome
        isLoading={isLoading}
        offers={offers}
        pages={pages}
        slicedPage={slicedPage}
      />
    </div>
  );
};

export default Home;
