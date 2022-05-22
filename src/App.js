import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import RecentShortened from "./components/RecentShortened";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import UrlBox from "./components/UrlBox";

import { getEncodedUrlList } from "./services/ListEncodedUrls";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    let mounted = true;
    getEncodedUrlList().then((items) => {
      if (mounted) {
        console.log(items);
        setList(items);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <div className="h-screen bg-gray-100 overflow-scroll">
      <Header />
      <UrlBox />

      <div className="flex flex-grow justify-center">
        <div className="flex flex-col lg:flex-row justify-start items-start mt-2 w-9/12 h-80">
          <div className="grid lg:grid-cols-4 gap-4 pt-5 w-full">
            {list.map((item) => (
              <RecentShortened key={item._id} ShortUrl={item.shortUrl} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
