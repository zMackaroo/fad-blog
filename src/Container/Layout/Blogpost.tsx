import Parser from "html-react-parser";
import { useEffect, useState } from "react";
import useBlogpost from "../../Utils/Hooks/useBlogpost";
import { Helmet } from "react-helmet";

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
        <>
          <Helmet>
            <meta property='og:type' content='website' />
            <meta property='og:url' content='https://www.urbanvogue.asia' />
            <meta
              property='og:title'
              content={`Urban Vogue Asia - ${content.title}`}
            />
            <meta property='og:description' content={content.description} />
            <meta property='og:image' content={content.imageLink} />
          </Helmet>

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
        </>
      )}
    </>
  );
}

export default Blogpost;
