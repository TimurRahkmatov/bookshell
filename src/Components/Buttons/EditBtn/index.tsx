import { Box } from "@mui/material";
import { Id } from "../../CardButtons/CardButtons";
import { useState } from "react";
import EditBookModal from "../../Modals/EditBookModal";

const EditBtn = ({ id }: Id) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Box
        onClick={() => setOpen(true)}
        component="div"
        sx={{
          width: "33px",
          height: "33px",
          marginTop: "0.5rem",
          backgroundColor: "#6200EE",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "5px",
          "&:hover": {
            backgroundColor: "#6300eea4",
            transition: "0.3s"
            
          }
        }}
      >
        <i className="fa-solid fa-pencil"></i>
      </Box>
      <EditBookModal id={id} open={open} setOpen={setOpen} />
    </>
  );
};

export default EditBtn;
