import { Skeleton } from "@mui/material";

const CardSkeleton = () => {
  return (
    <>
      {[0, 1, 2].map((index: number) => (
        <Skeleton
          key={index}
          animation="wave"
          variant="rectangular"
          sx={{
            borderRadius: "7px",
            backgroundColor: "#6d6d6d4e",
            width: { lg: "370px", md: "380px", sm: "360px", xs: "300px" },
          }}
        />
      ))}
    </>
  );
};

export default CardSkeleton;
