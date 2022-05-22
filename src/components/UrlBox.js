import React, { useEffect, useState } from "react";
import { LinkIcon } from "@heroicons/react/solid";

import { encodeUrl } from "../services/Encode";
import ShortedUrlBox from "./ShortedUrlBox";

function UrlBox() {
  const [shortUrl, setShortUrl] = useState({});
  const [fullUrl, setFullUrl] = useState("");
  const [displayShortenedUrl, setDisplayShortenedUrl] = useState(false);

  const onShortItClicked = () => {
    let triggered = true;
    console.log(fullUrl);
    encodeUrl(fullUrl).then((result) => {
      if (triggered) {
        setShortUrl(result.shortUrl);
      }
    });
    return () => {
      triggered = false;
    };
  };

  useEffect(() => {
    console.log(shortUrl);
    if (Object.keys(shortUrl).length !== 0) setDisplayShortenedUrl(true);
    else setDisplayShortenedUrl(false);
  }, [shortUrl]);

  return (
    <div className="flex flex-grow justify-center">
      <div className="flex flex-col lg:flex-row justify-center items-center mt-20 w-9/12 h-80 bg-amber-400 rounded-lg">
        {displayShortenedUrl ? (
          <ShortedUrlBox shortUrl={shortUrl} />
        ) : (
          <>
            <div className="flex w-1/2 ml-2 items-center rounded-full bg-gray-100 p-2">
              <LinkIcon className="h-6 text-gray-600" />
              <input
                className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink w-full px-2"
                type="text"
                placeholder="Url to short"
                onChange={(e) => setFullUrl(e.target.value)}
              />
            </div>
            <button
              onClick={() => onShortItClicked()}
              className="mt-5 lg:ml-2 lg:mt-0 bg-black hover:bg-white text-white hover:text-black font-bold py-2 px-4 rounded-full"
            >
              Short it
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default UrlBox;
