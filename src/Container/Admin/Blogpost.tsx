import React from "react";

import { Loading } from "../../Components";
import MenuButton from "../../Components/MenuButton";
import { Blog } from "../../Container/";

import { getAllBlogPost } from "../../Services/Blogpost";

function Blogpost() {
  const [page, setPage] = React.useState(1);
  const [loading, setLoading] = React.useState(true);
  const [list, setList] = React.useState([]);

  React.useLayoutEffect(() => {
    getAllBlogPost(
      page,
      10,
      (response) => {
        setList(response.data);
        setLoading(false);
      },
      () => {}
    );
  }, []);

  const handlePagination = (page: any) => {
    setPage(page);
  };

  React.useEffect(() => {
    getAllBlogPost(
      page,
      10,
      (response) => {
        setList(response.data);
        setLoading(false);
      },
      () => {}
    );
  }, [page]);

  return (
    <>
      {loading ? (
        <Loading.Default />
      ) : (
        <div className='blogposts__wrapper'>
          {list.length > 0 ? (
            list.map(({ title, _id, imageLink, isPublished }) => (
              <div key={title} className='blog__posts'>
                <div className='blog__posts--option'>
                  <MenuButton dataId={_id} publish={isPublished} />
                </div>
                <img src={imageLink} />
                <span>{title}</span>
              </div>
            ))
          ) : (
            <h1>No new Post</h1>
          )}
          <Blog.Pagination callBack={handlePagination} />
        </div>
      )}
    </>
  );
}

export default Blogpost;
