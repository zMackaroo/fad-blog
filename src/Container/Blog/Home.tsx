import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Store } from "../../Utils/Context/Context";

function Home() {
  const test = useContext(Store);
  console.log(test);
  const [blogPosts, setBlogPosts] = useState([]);
  const navigate = useNavigate();

  const HandleBlogPostClick = (id: string) => {
    navigate(`/p/${id}`);
  };

  useEffect(() => {
    fetch("http://localhost:9000/blogpost")
      .then((response) => response.json())
      .then((data) => setBlogPosts(data));
  }, []);

  return (
    <section className="home">
      <div>
        <span className="home--breadcrumb">Recent News</span>
      </div>
      <div className="recent__blogpost__wrapper">
        {blogPosts.map(({ id, mockImage, date, title, description }) => (
          <div key={id} className="recent__blogpost">
            <img
              loading="lazy"
              className="recent__blogpost--image"
              src={mockImage}
            />
            <p className="recent__blogpost--date">{date}</p>
            <div className="recent__blogpost__details">
              <div className="recent__blogpost__details--title">
                <span>{title}</span>
              </div>
              <span className="recent__blogpost__details--description">
                {description}
              </span>
            </div>
            <div className="recent__blog__post--button">
              <button onClick={() => HandleBlogPostClick(id)}>
                READ STORY
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Home;
