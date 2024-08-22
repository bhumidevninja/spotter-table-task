import { Backdrop, CircularProgress, Typography } from "@mui/material";

export type BackdropSpinnerProps = {
  open: boolean;
  message: string;
};

const Spinner = ({ open, message }: BackdropSpinnerProps) => {
  return (
    <Backdrop
      sx={{
        color: "#fff",
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backdropFilter: "blur(1px)",
        gap: 1,
      }}
      open={open}
    >
      <CircularProgress color="inherit" size={16} />
      <Typography>{message}</Typography>
    </Backdrop>
  );
};

export default Spinner;
