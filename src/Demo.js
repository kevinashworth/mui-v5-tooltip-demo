import React from "react";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

const DemoTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: 0,
    fontSize: 18,
    padding: theme.spacing(4),
  },
}));

function Demo() {
  return (
    <Container component="main" maxWidth="xs">
      <DemoTooltip
        title="Hello, World"
        followCursor={true}
        PopperProps={{
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [88, 2],
              },
            },
          ],
        }}
      >
        <Avatar sx={{ bgcolor: "error.main", m: 4, p: 4 }}>
          <HelpOutlineOutlinedIcon />
        </Avatar>
      </DemoTooltip>
    </Container>
  );
}

export default Demo;
