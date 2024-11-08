import React from "react";

import { Loading } from "../../Components";
import MenuButton from "../../Components/MenuButton";

import { getAllBlogPost } from "../../Services/Blogpost";

function Blogpost() {
  const [loading, setLoading] = React.useState(true);
  const [list, setList] = React.useState([]);

  React.useLayoutEffect(() => {
    getAllBlogPost(
      (response) => {
        setList(response.data);
        setLoading(false);
      },
      () => {}
    );
  }, []);

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
        </div>
      )}
    </>
  );
}

export default Blogpost;
