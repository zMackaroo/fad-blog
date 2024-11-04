import Parser from "html-react-parser";
import useBlogpost from "../../Utils/Hooks/useBlogpost";

function Blogpost() {
  const { content } = useBlogpost();

  return (
    <div className='blog__post__wrapper'>
      <article className='blog__post'>
        <div className='blog__post--title'>
          <span>{content?.title}</span>
        </div>
        <div className='blog__post--content'>
          {content !== undefined && Parser(content?.content)}
        </div>
      </article>
      <div className='related__post__container'>
        <p>Related Posts</p>
        <div className='related__post__wrapper'>{[]}</div>
      </div>
    </div>
  );
}

export default Blogpost;
