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
      "I’m not cool when it comes to fashion. I rarely take risks with my wardrobe and I tend to have the same outfit formula time and time again. But there was one trend I was kind of excited about: barrel jeans.I’m not cool when it comes to fashion. I rarely take risks with my wardrobe and I tend to have the same outfit formula time and time again. But there was one trend I was kind of excited about: barrel jeans.",
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

function Blogpost() {
  return (
    <div className="blog__post__wrapper">
      <article className="blog__post">
        <div className="blog__post--title">
          <span>Barrel Leg Jeans & How To Wear Them</span>
        </div>
        <div className="blog__post--content">
          <p>
            I’m not cool when it comes to fashion. I rarely take risks with my
            wardrobe and I tend to have the same outfit formula time and time
            again. But there was one trend I was kind of excited about: barrel
            jeans.
          </p>
          <p>
            I can’t remember which influencer introduced me to the horseshoe
            jean, but I was intrigued. I’ve always liked a wider shape, and
            these looked pretty cool. Ultimately, I didn’t feel like
            disappointing myself since I had a feeling they’d be overwhelming on
            me – so I didn’t try them out.
          </p>
          <p>
            What I love about them is that they work for my 5’3 frame. While
            they’re definitely a wider leg, they have a tapered ankle. You get
            the curved “barrel” shape with the help of seams or darts — adding
            volume to the lower body, but also stays cinched at the waist. It’s
            all about balance.
          </p>
          <img
            src={
              "https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5f2c7e3c-f40b-4a1b-8aac-6a06f810d3b8_2268x4032.jpeg"
            }
          />
          <p>
            These are the most recent pair I got. I thought the shape plus the
            distressing was pretty interesting. I had to get them for important
            research;) I really love them. I think they’re a cool jean to have
            in your closet, and they’re at an amazing price!
          </p>
          <img
            src={
              "https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7b924125-358a-4ab6-86f6-b401e33eb136_1987x3463.jpeg"
            }
          />
          <p>
            This pair was the one that got me into barrel jeans. They’re almost
            *too* subtle, but in the best way possible…you know? I tried on
            three different sizes, and going one size down from my typical denim
            size ended up looking the best on me!
          </p>
          <p>
            At the end of the day, I’m always looking for pieces that make me
            feel effortlessly cool. And that’s how barrel jeans makes me feel!!
          </p>
        </div>
      </article>
      <div className="related__post__container">
        <p>Related Posts</p>
        <div className="related__post__wrapper">
          {mockData.map(({ mockImage, title }) => (
            <div className="related__post">
              <img src={mockImage} />
              <span>{title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogpost;
