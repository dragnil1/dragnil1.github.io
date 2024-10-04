import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import HomePage from "./Home/HomePage";

function App() {
  useEffect(() => {
    let source = "u";
    if (window.location.href.includes("localhost")) {
      source = "l";
    } else {
      const urlParams = new URLSearchParams(window.location.search);
      source = urlParams.get("source");
      if (source === null) {
        source = "u";
      }
    }

    if (source === "i") {
      console.log("Visiting From Instagram");
    } else if (source === "f") {
      console.log("Visiting From Facebook");
    } else if (source === "g") {
      console.log("Visiting From GitHub");
    } else if (source === "l") {
      console.log("Visiting From LinkedIn");
    } else if (source === "y") {
      console.log("Visiting From YouTube");
    } else if (source === "d") {
      console.log("Visiting From Direct");
    } else {
      console.log("Visiting From Unknown");
    }
  }, []);

  return (
    <React.Fragment>
      <Helmet>
        <title>Kazim Abrar Mahi</title>
        <link rel="canonical" href="https://dragnil1.github.io/" />
        <meta name="description" content="Kazim Abrar Mahi Portfolio" />
      </Helmet>
      <HomePage />
    </React.Fragment>
  );
}

export default App;
