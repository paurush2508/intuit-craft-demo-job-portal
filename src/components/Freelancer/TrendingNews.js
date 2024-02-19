import React, { useEffect, useState } from "react";
import { generateUpdatedURL } from "../../util/helpers";
import Stack from "@mui/material/Stack";
import styled from "styled-components";

function TrendingNews() {
  const [newsData, setNewsData] = useState([]);

  const Item = styled.div`
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
`;

  useEffect(() => {
    const updatedURL = generateUpdatedURL("f177dae19d9a49248d8939f30a6402a4");
    fetch(updatedURL)
      .then((res) => res.json())
      .then((data) => setNewsData(data?.articles?.slice(0,10)));
  }, []);
  return (
    <div className="space-y-5">
      <h3 className="text-lg font-bold mb-2">Latest News</h3>
      {newsData?.length > 0 && newsData?.map((item) => <div style={{ boxShadow:'0px 0px 5px black', padding: '10px', borderRadius: '10px'}}>{item.title}</div>)}
    </div>
  );
}

export default TrendingNews;
