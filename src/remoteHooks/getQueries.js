import React, { useState, useEffect } from "react";
import {getQueries} from "../remoteMethods/Announcement/announcement";

const useGetQueries = (userType, id) => {
  const [ queries, setQueries ] = useState();
  const [ startSearch, setStartSearch ] = useState(true);
  useEffect(() => {
    if (startSearch) {
      getQueries(userType, id)
        .then(queries => {
          setQueries(queries);
          setStartSearch(false);
        })
        .catch(error => {
          setQueries([]);
          setStartSearch(false);
        })
    }
  }, [startSearch]);
  return [ queries, setQueries, setStartSearch ];
}

export default useGetQueries;