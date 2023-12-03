import { Skeleton } from "@mui/material";

const CardSkeleton = () => {
  return (
    <>
      {[0, 1, 2].map((index: number) => (
        <Skeleton
          key={index}
          animation="wave"
          variant="rectangular"
          width={360}
          height={200}
          sx={{ borderRadius: "7px", backgroundColor: "#6d6d6d4e" }}
        />
      ))}
    </>
  );
};

export default CardSkeleton;
