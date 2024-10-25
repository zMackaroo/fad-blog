function TopBar({ editor }: any) {
  return (
    <div className="editor__menu">
      <div className="editor__menu--text-position">
        <button
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          className={editor.isActive({ textAlign: "left" }) ? "is-active" : ""}
        >
          <i className="fa-solid fa-align-left" />
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          className={
            editor.isActive({ textAlign: "center" }) ? "is-active" : ""
          }
        >
          <i className="fa-solid fa-align-center" />
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          className={editor.isActive({ textAlign: "right" }) ? "is-active" : ""}
        >
          <i className="fa-solid fa-align-right" />
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("justify").run()}
          className={
            editor.isActive({ textAlign: "justify" }) ? "is-active" : ""
          }
        >
          <i className="fa-solid fa-align-justify" />
        </button>
      </div>
      <div className="editor__menu--formatting">
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={editor.isActive("codeBlock") ? "is-active" : ""}
        >
          <i className="fa-solid fa-code" />
          Codeblock
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive("blockquote") ? "is-active" : ""}
        >
          <i className="fa-solid fa-quote-left" />
          Blockquote
        </button>
      </div>
      <div className="editor__menu--text-attachments">
        <button
          onClick={() => {
            const url = window.prompt("URL");

            if (url) {
              editor.chain().focus().setImage({ src: url }).run();
            }
          }}
        >
          <i className="fa-solid fa-image" />
          Image
        </button>
      </div>
      <div className="editor__menu--revert">
        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
        >
          <i className="fa-solid fa-rotate-left" />
          Undo
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
        >
          <i className="fa-solid fa-rotate-right" />
          Redo
        </button>
      </div>
    </div>
  );
}

export default TopBar;
