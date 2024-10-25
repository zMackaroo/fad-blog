import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import TextAlign from "@tiptap/extension-text-align";
import CodeBlock from "@tiptap/extension-code-block";
import Blockquote from "@tiptap/extension-blockquote";
import { Menu } from "./Menus";

function Compose() {
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
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
      CodeBlock,
      Blockquote,
    ],
    content: "tes",
  });
  return (
    <div>
      <Menu.TopBar editor={editor} />
      <Menu.Bubble editor={editor} />
      <Menu.Floating editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}

export default Compose;
