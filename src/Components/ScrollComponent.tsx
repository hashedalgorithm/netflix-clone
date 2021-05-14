import axios from "axios";
import React, { useEffect, useState } from "react";
import TitleCard from "./TitleCard";
import "./ScrollComponent.css";
type ScrollCOmponenttypes = {
  title: string;
  fullurl: string;
};
interface Api {
  results: Array<any>;
}
function ScrollComponent({ title, fullurl }: ScrollCOmponenttypes) {
  const [data, setData] = useState<Array<any>>([]);

  useEffect(() => {
    (async () => {
      try {
        const resp = await axios.get<Api>(`${fullurl}`);
        setData(resp.data.results);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <div className="ScrollComponent">
      <h1 className="ScrollComponent_head">{title}</h1>
      <div className="ScrollComponent_s1">
        {data.map((item) => {
          return <TitleCard imgurl={item.poster_path} />;
        })}
      </div>
    </div>
  );
}

export default ScrollComponent;
