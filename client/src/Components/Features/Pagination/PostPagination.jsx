import React, { useEffect, useState } from "react";
import { Pagination, PaginationItem } from "@material-ui/lab";
import { Link } from "react-router-dom";
import { getStorePosts } from "../../../api";

const PostPaginate = ({ page }) => {
  const [pagi, setPagi] = useState();
  useEffect(() => {
    getStorePosts(page).then((data) => setPagi(data));
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
          to={`/StudyContent?page=${item.page}`}
        />
      )}
    />
  );
};

export default PostPaginate;
