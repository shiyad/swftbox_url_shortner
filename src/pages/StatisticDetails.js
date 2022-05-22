import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getUrlStatistics } from "../services/UrlStatistics";

function StatisticDetails(props) {
  const [detail, setDetail] = useState([]);

  let { short } = useParams();

  useEffect(() => {
    let mounted = true;

    getUrlStatistics(short).then((items) => {
      if (mounted) {
        console.log(items);
        setDetail(items);
      }
    });

    return () => (mounted = false);
  }, [short]);

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          URL Statistics
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Shotened URL details and statistics.
        </p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Short URL</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {detail.shortUrl}
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Full URL</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <a href={detail.fullUrl} target="_blank" rel="noreferrer">
                {detail.fullUrl}
              </a>
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Host</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {detail.host}
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Total Clicks</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {detail.clicksCounter}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Info</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              Clicks from this statistics page URL will not count.
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

export default StatisticDetails;
