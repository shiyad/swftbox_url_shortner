import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getEncodedUrlList } from "../services/ListEncodedUrls";

function Statistics() {
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
      <div className="flex flex-grow justify-center pt-5">
        <div className="w-9/12 h-80">
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-center">
                    <thead className="border-b bg-white">
                      <tr>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-2"
                        >
                          #
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-2"
                        >
                          Short URL
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-2"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {list.map((item, i) => (
                        <tr key={i} className="bg-white border-b">
                          <td className="px-6 py-2 whitespace-nowrap text-sm font-light text-gray-900">
                            {i + 1}
                          </td>
                          <td className="px-6 py-2 whitespace-nowrap text-sm font-light text-gray-900">
                            {item.shortUrl}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">
                            <div className="flex space-x-2 justify-center">
                              <Link
                                className="cursor-pointer rounded-xl bg-black text-white hover:bg-amber-500 px-2 py-2"
                                to={`/details/${item.shortUrl}`}
                              >
                                Show Statistic
                              </Link>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
