import { useLayoutEffect, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

import { Loading } from "../../Components";
import { Blog } from "../../Container";

import { getPublishedBlogPost } from "../../Services/Blogpost";

function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [blogPosts, setBlogPosts] = useState([]);
  const navigate = useNavigate();

  const HandleBlogPostClick = (id: string) => {
    navigate(`/p/${id}`);
  };

  useLayoutEffect(() => {
    setLoading(!loading);
    getPublishedBlogPost(
      1,
      8,
      (response) => {
        setBlogPosts(response.data);
        setLoading(false);
      },
      () => {}
    );
  }, []);

  const handlePagination = (page: any) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    getPublishedBlogPost(
      currentPage,
      8,
      (response) => {
        setBlogPosts(response.data);
        setLoading(false);
      },
      () => {}
    );
  }, [currentPage]);

  return (
    <>
      {loading ? (
        <Loading.Default />
      ) : (
        <>
          <Helmet>
            <meta property='og:type' content='website' />
            <meta property='og:title' content='Urban Vogue Asia' />
            <meta
              name='description'
              property='og:description'
              content='Urban Vogue Asia Fashion insights'
            />
            <meta
              name='image'
              property='og:image'
              content='/seo/page_preview.png'
            />
            <meta property='og:url' content='https://www.urbanvogue.asia' />
            <meta name='author' content='Urban Vogue' />
          </Helmet>
          <section className='home'>
            <div>
              <span className='home--breadcrumb'>Recent News</span>
            </div>
            <div className='recent__blogpost__wrapper'>
              {blogPosts.map(({ _id, imageLink, date, title, description }) => (
                <div key={_id} className='recent__blogpost'>
                  <img
                    loading='lazy'
                    className='recent__blogpost--image'
                    src={imageLink}
                  />
                  <p className='recent__blogpost--date'>
                    {new Date(date).toLocaleString("en-us", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                  <div className='recent__blogpost__details'>
                    <div className='recent__blogpost__details--title'>
                      <span>{title}</span>
                    </div>
                    <span className='recent__blogpost__details--description'>
                      {description}
                    </span>
                  </div>
                  <div className='recent__blog__post--button'>
                    <button onClick={() => HandleBlogPostClick(_id)}>
                      READ STORY
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <Blog.Pagination callBack={handlePagination} />
          </section>
        </>
      )}
    </>
  );
}

export default Home;
