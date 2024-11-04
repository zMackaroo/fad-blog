import React from "react";
import { useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { updateBlogPost } from "../../Services/Blogpost";

function MenuButton(props: any) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [showSnackBar, setShowSnackBar] = React.useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = (id: string) => {
    handleClose();
    navigate(`/a/blog/compose/${id}`);
  };

  const handlePublish = (id: string) => {
    updateBlogPost(
      { id: id, isPublished: true },
      () => {
        setShowSnackBar(true);
        handleClose();
      },
      () => {}
    );
  };

  return (
    <>
      <button
        id={`basic-button-${props.dataId}`}
        aria-controls={open ? `basic-menu-${props.dataId}` : undefined}
        aria-haspopup='true'
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <i className='fa-solid fa-ellipsis-vertical' />
      </button>
      <Menu
        id={`basic-menu-${props.dataId}`}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": `basic-button-${props.dataId}`,
        }}
      >
        <MenuItem
          onClick={() => handleEdit(props.dataId)}
          sx={{ display: "flex", flexDirection: "row", gap: "0.475rem" }}
        >
          <i className='fa-solid fa-pen-nib' />
          <span>Edit</span>
        </MenuItem>
        <MenuItem
          onClick={() => handlePublish(props.dataId)}
          sx={{ display: "flex", flexDirection: "row", gap: "0.475rem" }}
        >
          <i className='fa-solid fa-upload' />
          <span>Publish</span>
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{ display: "flex", flexDirection: "row", gap: "0.475rem" }}
        >
          <i className='fa-solid fa-trash' />
          <span>Delete</span>
        </MenuItem>
      </Menu>

      <Snackbar
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={showSnackBar}
        onClose={() => setShowSnackBar(!showSnackBar)}
        message='Post published !'
        key='topright'
      />
    </>
  );
}

export default MenuButton;
