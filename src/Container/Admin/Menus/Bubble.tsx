import { BubbleMenu } from "@tiptap/react";

function Bubble({ editor }: any) {
  return (
    <div>
      <BubbleMenu
        className="bubble-menu"
        tippyOptions={{ duration: 100 }}
        editor={editor}
      >
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "is-active" : ""}
        >
          <i className="fa-solid fa-bold" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "is-active" : ""}
        >
          <i className="fa-solid fa-italic" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={editor.isActive("strike") ? "is-active" : ""}
        >
          <i className="fa-solid fa-strikethrough" />
        </button>
      </BubbleMenu>
    </div>
  );
}

export default Bubble;
