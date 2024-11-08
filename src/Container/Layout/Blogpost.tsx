import Parser from "html-react-parser";
import { useEffect, useState } from "react";
import useBlogpost from "../../Utils/Hooks/useBlogpost";

import { Loading } from "../../Components";

function Blogpost() {
  const [loading, setLoading] = useState(true);
  const { content } = useBlogpost();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Loading.Default />
      ) : (
        <div className='blog__post__wrapper'>
          <article className='blog__post'>
            <div className='blog__post--title'>
              <span>{content?.title}</span>
            </div>
            <div className='blog__post--content'>
              {content !== undefined && Parser(content?.content)}
            </div>
          </article>
          {/* <div className='related__post__container'>
            <p>Related Posts</p>
            <div className='related__post__wrapper'>{[]}</div>
          </div> */}
        </div>
      )}
    </>
  );
}

export default Blogpost;
