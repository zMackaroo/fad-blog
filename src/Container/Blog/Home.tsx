import { useNavigate } from "react-router-dom";
import MockImage from "../../assets/Images/mockImage.png";
import MockImage2 from "../../assets/Images/mockImage2.png";
import MockImage3 from "../../assets/Images/mockImage3.png";

function Home() {
  const navigate = useNavigate();

  const HandleBlogPostClick = (id: string) => {
    navigate(`/post/${id}`);
  };

  return (
    <section className="home">
      <div>
        <span className="home--breadcrumb">Recent News</span>
      </div>
      <div className="home__blogpost__wrapper">
        <div
          className="home__blogpost"
          onClick={() => HandleBlogPostClick("123")}
        >
          <img className="home__blogpost--image" src={MockImage} />
          <p className="home__blogpost--date">Sunday, 1 Jan 2023</p>
          <div className="home__blogpost__details">
            <div className="home__blogpost__details--title">
              <span>UX review presentations UX review presentations</span>
            </div>
            <span className="home__blogpost__details--description">
              How do you create compelling presentations that wow your
              colleagues and impress your managers?
            </span>
          </div>
        </div>
        <div className="home__blogpost">
          <img className="home__blogpost--image" src={MockImage2} />
          <p className="home__blogpost--date">Sunday, 1 Jan 2023</p>
          <div className="home__blogpost__details">
            <div className="home__blogpost__details--title">
              <span>UX review presentations UX review presentations</span>
            </div>
            <span className="home__blogpost__details--description">
              How do you create compelling presentations that wow your
              colleagues and impress your managers?
            </span>
          </div>
        </div>
        <div className="home__blogpost">
          <img className="home__blogpost--image" src={MockImage3} />
          <p className="home__blogpost--date">Sunday, 1 Jan 2023</p>
          <div className="home__blogpost__details">
            <div className="home__blogpost__details--title">
              <span>UX review presentations UX review presentations</span>
            </div>
            <span className="home__blogpost__details--description">
              How do you create compelling presentations that wow your
              colleagues and impress your managers?
            </span>
          </div>
        </div>
        <div className="home__blogpost">
          <img className="home__blogpost--image" src={MockImage} />
          <p className="home__blogpost--date">Sunday, 1 Jan 2023</p>
          <div className="home__blogpost__details">
            <div className="home__blogpost__details--title">
              <span>UX review presentations UX review presentations</span>
            </div>
            <span className="home__blogpost__details--description">
              How do you create compelling presentations that wow your
              colleagues and impress your managers?
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
