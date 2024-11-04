import { useState, useLayoutEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { storeBlogPost, getBlogPostById } from "../../Services/Blogpost";

function useCompose() {
  const navigate = useNavigate();
  const { id }: any = useParams();
  const [editorContent, setEditorContent] = useState<string>("");
  const [form, setForm] = useState({
    title: "",
    description: "",
    imageLink: "",
    date: "",
  });
  const [showSuccessSnackBar, setShowSuccessSnackBar] = useState(false);
  const [formStatus, setFormStatus] = useState({
    isPending: false,
    isInvalidInputs: false,
    disableInputs: false,
  });
  const formInputs = {
    title: useRef<HTMLInputElement>(null),
    description: useRef<HTMLInputElement>(null),
    imageLink: useRef<HTMLInputElement>(null),
    date: useRef<HTMLInputElement>(null),
  };

  useLayoutEffect(() => {
    if (id !== "0") {
      getBlogPostById(
        id,
        (response) => {
          setForm({
            title: response.data.title,
            description: response.data.description,
            imageLink: response.data.imageLink,
            date: response.data.date,
          });
          setEditorContent(response.data.content);
        },
        () => {}
      );
    }
  }, []);

  const onEditorBlur = (html: string) => {
    setEditorContent(html);
  };

  const onFormSubmit = () => {
    setFormStatus({
      isPending: true,
      isInvalidInputs: false,
      disableInputs: true,
    });

    if (formInputs.title !== null) {
      const { title, description, imageLink, date }: any = formInputs;

      if (
        title.current.value === "" ||
        description.current.value === "" ||
        imageLink.current.value === "" ||
        date.current.value === ""
      ) {
        setFormStatus({
          isPending: false,
          isInvalidInputs: true,
          disableInputs: false,
        });
      }

      if (id === "0") {
        storeBlogPost(
          {
            title: title.current.value,
            description: description.current.value,
            imageLink: imageLink.current.value,
            date: date.current.value,
            content: editorContent,
            isPublished: false,
            isSaved: true,
          },
          () => {
            setShowSuccessSnackBar(!showSuccessSnackBar);
            setFormStatus({
              isPending: false,
              isInvalidInputs: false,
              disableInputs: false,
            });
            setTimeout(() => {
              navigate("/a/blog/posts");
            }, 1000);
          },
          () => {
            setFormStatus({
              isPending: false,
              isInvalidInputs: true,
              disableInputs: false,
            });
          }
        );
      }
    }
  };

  return {
    formInputs,
    form,
    editorContent,
    onEditorBlur,
    onFormSubmit,
    formStatus,
    showSuccessSnackBar,
    setShowSuccessSnackBar,
  };
}

export default useCompose;
