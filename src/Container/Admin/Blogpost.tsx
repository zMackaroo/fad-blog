import React from "react";

import MenuButton from "../../Components/MenuButton";

import { getAllBlogPost } from "../../Services/Blogpost";

function Blogpost() {
  const [list, setList] = React.useState([]);

  React.useLayoutEffect(() => {
    getAllBlogPost(
      (response) => {
        setList(response.data);
      },
      () => {}
    );
  }, []);

  return (
    <div className='blogposts__wrapper'>
      {list.map(({ title, _id, imageLink }) => (
        <div key={title} className='blog__posts'>
          <div className='blog__posts--option'>
            <MenuButton dataId={_id} />
          </div>
          <img src={imageLink} />
          <span>{title}</span>
        </div>
      ))}
    </div>
  );
}

export default Blogpost;
