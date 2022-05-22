import React from "react";
import { ClipboardCopyIcon } from "@heroicons/react/solid";

function ShortedUrlBox({ shortUrl }) {
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <>
      <div className="flex w-1/2 ml-2 items-center rounded-full bg-gray-100 p-2">
        <input
          className="w-full hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"
          type="text"
          placeholder="Url to short"
          value={shortUrl}
          disabled
        />
        <ClipboardCopyIcon
          onClick={navigator.clipboard.writeText(shortUrl)}
          className="h-6 text-gray-600 animate-bounce"
        />
      </div>
      <button
        onClick={refreshPage}
        className="mt-5 lg:ml-2 lg:mt-0 bg-black hover:bg-white text-white hover:text-black font-bold py-2 px-4 rounded-full"
      >
        Short another
      </button>
    </>
  );
}

export default ShortedUrlBox;
