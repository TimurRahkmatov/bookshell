import { Box } from "@mui/material";
import DeleteBtn from "../Buttons/DeleteBtn";
import EditBtn from "../Buttons/EditBtn";

export interface Id {
  id: number;
}

const CardButtons = ({ id }: any) => {
  return (
    <Box>
      <DeleteBtn id={id} />
      <EditBtn id={id}/>
    </Box>
  );
};

export default CardButtons;
