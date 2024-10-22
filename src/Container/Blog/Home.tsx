import MockImage from "../../assets/Images/mockImage.png";

function Home() {
  return (
    <section className="home">
      <div>
        <span className="home--breadcrumb">Recent News</span>
      </div>
      <div className="home__blogpost">
        <img className="home__blogpost--image" src={MockImage} />
        <p className="home__blogpost--date">Sunday, 1 Jan 2023</p>
        <div className="home__blogpost__details">
          <span className="home__blogpost__details--title">
            UX review presentations
          </span>
          <span className="home__blogpost__details--description">
            How do you create compelling presentations that wow your colleagues
            and impress your managers?
          </span>
        </div>
      </div>
      <div className="home__blogpost">
        <img className="home__blogpost--image" src={MockImage} />
        <p className="home__blogpost--date">Sunday, 1 Jan 2023</p>
        <div className="home__blogpost__details">
          <span className="home__blogpost__details--title">
            UX review presentations
          </span>
          <span className="home__blogpost__details--description">
            How do you create compelling presentations that wow your colleagues
            and impress your managers?
          </span>
        </div>
      </div>
    </section>
  );
}

export default Home;
