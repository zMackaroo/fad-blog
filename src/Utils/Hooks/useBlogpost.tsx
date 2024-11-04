import { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBlogPostById } from "../../Services/Blogpost";

function useBlogpost() {
  const { id }: any = useParams();
  const [content, setContent] = useState<any>();

  useLayoutEffect(() => {
    getBlogPostById(
      id,
      (response) => {
        setContent(response.data);
      },
      () => {}
    );
  }, []);

  return {
    content,
  };
}

export default useBlogpost;
