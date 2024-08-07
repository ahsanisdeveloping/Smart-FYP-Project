import { Button, Typography } from "@mui/material";

const PrimaryButton = ({ sx = {}, ...props }) => {
  return (
    <Button
      disableElevation
      disableFocusRipple
    //   disableRipple
      sx={{
        borderRadius: "8px",
        fontWeight: "700",
        backgroundColor: "#08422D",
        width: "100%",
        alignSelf: "center",
        // boxShadow: "1px 2px 5px 1px #00000019",
        color: "#fff",
        textTransform: "capitalize",
        "&.Mui-disabled": {
                  backgroundColor: "lightgray",
                  color: "#08422D",
                },
        "&:hover": { backgroundColor: "#D8A900" },
        ...sx,
      }}
      {...props}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          padding: "5px",
        }}
      >
        <div>{props.icon}</div>
        <Typography variant="h6">{props.children}</Typography>
      </div>
    </Button>
  );
};

export default PrimaryButton;
