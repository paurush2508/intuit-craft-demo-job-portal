import React, { useEffect, useState } from "react";
import { generateUpdatedURL } from "../../util/helpers";

function TrendingNews() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const updatedURL = generateUpdatedURL("f177dae19d9a49248d8939f30a6402a4");
    fetch(updatedURL)
      .then((res) => res.json())
      .then((data) => setNewsData(data?.articles?.slice(0,10)));
  }, []);
  return (
    <div className="space-y-5">
      <h3 className="text-lg font-bold mb-2">Latest News</h3>
      {newsData?.length > 0 && newsData?.map((item) => <div style={{ boxShadow:'0px 0px 5px #D3D3D3', padding: '10px', borderRadius: '10px'}}>{item.title}</div>)}
    </div>
  );
}

export default TrendingNews;
