import React, { useEffect, useState } from "react";
import Character from "./components/Character";
import Navbar from "./components/Navbar";
import Pagination from "./components/Pagination";

import { url, getDataByUrl } from "./data/Api.js"

function App() {

  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    consultarApi(url);
  }, [])

  const consultarApi = async (urlAConsultar) => {
    const { results, info } = await getDataByUrl(urlAConsultar);
    setCharacters(results)
    setInfo(info)
  }

  const onPrevious = async () => {
    consultarApi(info.prev)
  }
  const onNext = async () => {
    consultarApi(info.next)
  }

  return (
    <>
      <Navbar brand="Rick and Morty App" />
      <div className="container mt-5">
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
        <Character characters={characters} />
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      </div>
    </>
  );
}

export default App;
