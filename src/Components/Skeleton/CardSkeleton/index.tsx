import { Skeleton } from "@mui/material";

const CardSkeleton = () => {
  return (
    <>
      {[0, 1].map((index: number) => (
        <Skeleton
          key={index}
          animation="wave"
          variant="rectangular"
          height={200}
          sx={{ borderRadius: "7px", backgroundColor: "#6d6d6d4e" , width: { lg: 370, md: 380, sm: 360, xs: 300 } }}
        />
      ))}
    </>
  );
};

export default CardSkeleton;
