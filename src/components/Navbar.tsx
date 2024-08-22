import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const StyledLink = styled(Link)({
  textDecoration: "none",
});

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  borderColor: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: "primary",
    borderColor: "white",
    color: "white",
  },
}));

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense" style={{ justifyContent: "center" }}>
          <div>
            <StyledLink to="/">
              <CustomButton
                sx={{ textTransform: "unset", marginRight: "20px" }}
                variant="outlined"
              >
                Data Table
              </CustomButton>
            </StyledLink>
            <StyledLink to="/pivot-table">
              <CustomButton sx={{ textTransform: "unset" }} variant="outlined">
                Pivot Table
              </CustomButton>
            </StyledLink>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
