import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { decodeUrl } from "../services/Decode";

function Redirect() {
  let { short } = useParams();

  useEffect(() => {
    const redirectToFullUrl = (encodedurl) => {
      let triggered = true;
      decodeUrl({ encodedurl: short }).then((result) => {
        if (triggered) {
          window.location.href = result.fullUrl;
        }
      });
      return () => {
        triggered = false;
      };
    };

    if (short) redirectToFullUrl({ encodedurl: short });
    else return;
  }, [short]);

  return <></>;
}

export default Redirect;
