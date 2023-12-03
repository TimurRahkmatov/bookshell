import { Box, Modal, Typography, Button } from "@mui/material";
import { useState } from "react";
import { Radio } from "antd";
import Crypto from "crypto-js";
import { book_api } from "../../../Api/book.api";

const EditBookModal = ({ id, open, setOpen }: any) => {
  const [value, setValue] = useState(1);
  const onChange = (e: any) => {
    setValue(e.target.value);
  };
  const handleClose = () => setOpen(false);
  const SECRET = localStorage.getItem("Secret");
  const handleEditStatusBook = async () => {
    try {
      const body = {
        status: value,
      };
      const HASH_EDIT_STATUS_BOOK = Crypto.MD5(`PATCH/books/${id}{"status":${value}}` + SECRET).toString();
      const { data } = await book_api.EditBook(30, body, HASH_EDIT_STATUS_BOOK);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { lg: 400, md: 400, sm: 300, xs: 270 },
          bgcolor: "background.paper",
          //   border: "2px solid grey",
          boxShadow: 24,
          p: 3,
          borderRadius: "7px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit status Book
          </Typography>
          <Box
            component="div"
            onClick={() => handleClose()}
            sx={{
              width: "25px",
              height: "25px",
              borderRadius: "50%",
              border: "2px solid black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <i className="fa-solid fa-xmark"></i>
          </Box>
        </Box>
        <Radio.Group
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1.5rem",
          }}
          onChange={onChange}
          value={value}
        >
          <Radio value={0}>0-New</Radio>
          <Radio value={1}>1-Reading</Radio>
          <Radio value={2}>2-Finished</Radio>
        </Radio.Group>
        <Button
          onClick={() => handleEditStatusBook()}
          sx={{ width: "100%", padding: "0.4rem 0", marginTop: "1.3rem" }}
        >
          Submit
        </Button>
      </Box>
    </Modal>
  );
};

export default EditBookModal;
