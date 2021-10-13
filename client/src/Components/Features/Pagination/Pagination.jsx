import React, { useEffect, useState } from "react";
import { Pagination, PaginationItem } from "@material-ui/lab";
import { Link } from "react-router-dom";
import { getPosts } from "../../../api";

const Paginate = ({ page }) => {
  const [pagi, setPagi] = useState();
  useEffect(() => {
    getPosts(page).then((data) => setPagi(data));
  }, [page]);
  console.log(pagi);
  return (
    <Pagination
      count={pagi?.numberOfPages}
      page={Number(page) || 1}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem
          {...item}
          component={Link}
          to={`/InterviewQuestions?page=${item.page}`}
        />
      )}
    />
  );
};

export default Paginate;
