import { useEffect } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";
import FontFamily from "@tiptap/extension-font-family";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import Snackbar from "@mui/material/Snackbar";
import ImageResize from "tiptap-extension-resize-image";
import { Menu } from "./Menus";

import useCompose from "../../Utils/Hooks/useCompose";

const editorExtensions = [
  TextAlign.configure({
    types: ["heading", "paragraph"],
  }),
  StarterKit.configure({
    heading: {
      levels: [1, 2, 3, 4, 5],
    },
    bulletList: {
      keepMarks: true,
      keepAttributes: false,
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false,
    },
  }),
  Image,
  ImageResize,
  TextStyle,
  FontFamily,
  Underline,
];

function Compose() {
  const {
    formInputs,
    form,
    editorContent,
    onEditorBlur,
    onFormSubmit,
    formStatus,
    showSuccessSnackBar,
    setShowSuccessSnackBar,
  } = useCompose();

  const editor = useEditor({
    onBlur({ editor }) {
      onEditorBlur(editor.getHTML());
    },
    extensions: editorExtensions,
    content: `${editorContent}`,
  });

  useEffect(() => {
    if (editorContent !== "") {
      if (editor !== null) editor.commands.setContent(editorContent);
    }
  }, [editorContent]);

  return (
    <div>
      <div className='form-group'>
        <label>Title</label>
        <input
          ref={formInputs.title}
          name='title'
          type='text'
          defaultValue={form.title || ""}
          required
          aria-invalid={formStatus.isInvalidInputs}
          disabled={formStatus.isPending}
        />
      </div>
      <div className='form-group'>
        <label>Description</label>
        <input
          ref={formInputs.description}
          name='description'
          type='text'
          defaultValue={form.description || ""}
          required
          aria-invalid={formStatus.isInvalidInputs}
          disabled={formStatus.isPending}
        />
      </div>
      <div className='form-row'>
        <div className='form-group'>
          <label>Image preview link</label>
          <input
            ref={formInputs.imageLink}
            name='imageLink'
            type='text'
            defaultValue={form.imageLink || ""}
            required
            aria-invalid={formStatus.isInvalidInputs}
            disabled={formStatus.isPending}
          />
        </div>
        <div className='form-group'>
          <label>Date published</label>
          <input
            ref={formInputs.date}
            name='date'
            type='date'
            defaultValue={
              form.date ||
              new Date(new Date().setDate(new Date().getDate()))
                .toISOString()
                .split("T")[0]
            }
            aria-invalid={formStatus.isInvalidInputs}
            disabled={formStatus.isPending}
          />
        </div>
      </div>
      <Menu.TopBar editor={editor} />
      <EditorContent
        editor={editor}
        aria-invalid={formStatus.isInvalidInputs}
        disabled={formStatus.isPending}
      />
      <div className='editor__action__buttons'>
        <button onClick={onFormSubmit} disabled={formStatus.isPending}>
          Save
        </button>
      </div>

      <Snackbar
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={showSuccessSnackBar}
        onClose={() => setShowSuccessSnackBar(!showSuccessSnackBar)}
        message='Post successfully saved !'
        key='topright'
      />
    </div>
  );
}

export default Compose;
