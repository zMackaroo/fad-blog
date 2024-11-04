function TopBar({ editor }: any) {
  const handleTextFormat = (value: any) => {
    const features: any = {
      paragraph: editor.chain().focus().setParagraph(),
      h1: editor.chain().focus().toggleHeading({ level: 1 }),
      h2: editor.chain().focus().toggleHeading({ level: 2 }),
      h3: editor.chain().focus().toggleHeading({ level: 3 }),
      h4: editor.chain().focus().toggleHeading({ level: 4 }),
      h5: editor.chain().focus().toggleHeading({ level: 5 }),
      h6: editor.chain().focus().toggleHeading({ level: 6 }),
      bullet: editor.chain().focus().toggleBulletList(),
    };

    return features[value].run();
  };

  const handleFontFamilyFormat = (value: any) => {
    const features: any = {
      inter: editor.chain().focus().setFontFamily("Inter"),
      arial: editor.chain().focus().setFontFamily("Arial"),
      comic: editor.chain().focus().setFontFamily("Comic Sans MS, Comic Sans"),
      serif: editor.chain().focus().setFontFamily("serif"),
      mono: editor.chain().focus().setFontFamily("monospace"),
      cursive: editor.chain().focus().setFontFamily("cursive"),
    };

    return features[value].run();
  };

  return (
    <div className='editor__menu'>
      <div className='editor__menu--text-position'>
        <select
          onChange={(e) => {
            e.preventDefault();
            handleTextFormat(e.target.value);
          }}
        >
          <option value='paragraph'>Paragraph</option>
          <option value='h1'>H1</option>
          <option value='h2'>H2</option>
          <option value='h3'>H3</option>
          <option value='h4'>H4</option>
          <option value='h5'>H5</option>
          <option value='h6'>H6</option>
          <option value='bullet'>Bullet</option>
        </select>

        <select
          onChange={(e) => {
            e.preventDefault();
            handleFontFamilyFormat(e.target.value);
          }}
        >
          <option value='inter' className='font-inter'>
            Inter
          </option>
          <option value='arial' className='font-arial'>
            Arial
          </option>
          <option value='comic' className='font-comic'>
            Comic
          </option>
          <option value='serif' className='font-serif'>
            Serif
          </option>
          <option value='mono' className='font-mono'>
            Mono
          </option>
          <option value='cursive' className='font-cursive'>
            Cursive
          </option>
        </select>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "is-active" : ""}
        >
          <i className='fa-solid fa-bold' />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "is-active" : ""}
        >
          <i className='fa-solid fa-italic' />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={editor.isActive("underline") ? "is-active" : ""}
        >
          <i className='fa-solid fa-underline' />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={editor.isActive("strike") ? "is-active" : ""}
        >
          <i className='fa-solid fa-strikethrough' />
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          className={editor.isActive({ textAlign: "left" }) ? "is-active" : ""}
        >
          <i className='fa-solid fa-align-left' />
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          className={
            editor.isActive({ textAlign: "center" }) ? "is-active" : ""
          }
        >
          <i className='fa-solid fa-align-center' />
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          className={editor.isActive({ textAlign: "right" }) ? "is-active" : ""}
        >
          <i className='fa-solid fa-align-right' />
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("justify").run()}
          className={
            editor.isActive({ textAlign: "justify" }) ? "is-active" : ""
          }
        >
          <i className='fa-solid fa-align-justify' />
        </button>
      </div>
      <div className='editor__menu--formatting'>
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={editor.isActive("codeBlock") ? "is-active" : ""}
        >
          <i className='fa-solid fa-code' />
          Codeblock
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive("blockquote") ? "is-active" : ""}
        >
          <i className='fa-solid fa-quote-left' />
          Blockquote
        </button>
      </div>
      <div className='editor__menu--text-attachments'>
        <button
          onClick={() => {
            const url = window.prompt("URL");

            if (url) {
              editor.chain().focus().setImage({ src: url }).run();
            }
          }}
        >
          <i className='fa-solid fa-image' />
          Image
        </button>
      </div>
      <div className='editor__menu--revert'>
        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
        >
          <i className='fa-solid fa-rotate-left' />
          Undo
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
        >
          <i className='fa-solid fa-rotate-right' />
          Redo
        </button>
      </div>
    </div>
  );
}

export default TopBar;
