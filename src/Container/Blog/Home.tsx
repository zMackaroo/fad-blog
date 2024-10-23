import { useNavigate } from "react-router-dom";
import MockImage from "../../assets/Images/mockImage.png";
import MockImage2 from "../../assets/Images/mockImage2.png";
import MockImage3 from "../../assets/Images/mockImage3.png";
import MockImage4 from "../../assets/Images/mockImage4.png";

const mockData = [
  {
    id: "4791cfedc358eb2f5858f9d4bcdd3ce3",
    mockImage: MockImage,
    date: "19 October, 2024",
    title: "Barrel Leg Jeans & How To Wear Them",
    description:
      "I’m not cool when it comes to fashion. I rarely take risks with my wardrobe and I tend to have the same outfit formula time and time again. But there was one trend I was kind of excited about: barrel jeans. I…",
  },
  {
    id: "a5280e7407a153d9622a02a8ef58d6fd",
    mockImage: MockImage2,
    date: "7 October, 2024",
    title: "How to Style a Barn Jacket",
    description:
      "The barn jacket has taken the fashion world by storm this season, and for good reason. They are incredibly versatile and are a great transitional piece that provides extra warmth while still being stylish. I don’t want to brag, but…",
  },
  {
    id: "4f209f639443e9769ce380dbb39c7b06",
    mockImage: MockImage3,
    date: "27 August, 2024",
    title: "Summer Pieces to Transition to Fall",
    description:
      "Summer is coming to an end that means fall! But temperatures are still warm and summer will be sticking around for a few more weeks. This makes getting dressed a little difficult; do you still purchase summer clothing? Is it…",
  },
  {
    id: "49f11f61cf8d126ce801780c8ea9641f",
    mockImage: MockImage4,
    date: "9 July, 2024",
    title: "Casual Summer Outfit Ideas",
    description:
      "Summer is actually my LEAST favorite season to dress for. I hate being hot, so I really need to put in some effort when getting dressed – after all, I still want to look and feel my best! I get…",
  },
];

function Home() {
  const navigate = useNavigate();

  const HandleBlogPostClick = (id: string) => {
    navigate(`/${id}`);
  };

  return (
    <section className="home">
      <div>
        <span className="home--breadcrumb">Recent News</span>
      </div>
      <div className="home__blogpost__wrapper">
        {mockData.map(({ id, mockImage, date, title, description }) => (
          <div
            key={id}
            className="home__blogpost"
            onClick={() => HandleBlogPostClick(id)}
          >
            <img className="home__blogpost--image" src={mockImage} />
            <p className="home__blogpost--date">{date}</p>
            <div className="home__blogpost__details">
              <div className="home__blogpost__details--title">
                <span>{title}</span>
              </div>
              <span className="home__blogpost__details--description">
                {description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Home;
