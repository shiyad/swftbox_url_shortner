import React from "react";

import { decodeUrl } from "../services/Decode";

function RecentShortened({ ShortUrl }) {
  const onShortUrlClick = (encodedurl) => {
    let triggered = true;
    decodeUrl(encodedurl).then((result) => {
      if (triggered) {
        openInNewTab(result.fullUrl);
      }
    });
    return () => {
      triggered = false;
    };
  };

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener noreferrer");
  };

  return (
    <button
      onClick={() => onShortUrlClick({ encodedurl: ShortUrl })}
      className="bg-white rounded-xl border-gray-800 border hover:bg-black hover:text-white p-5"
    >
      {ShortUrl}
    </button>
  );
}

export default RecentShortened;
