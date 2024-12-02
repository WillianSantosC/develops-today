import { styled } from "../../../styled-system/jsx";

export const Wrapper = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
    width: { base: "100%", _mdMI: "50%" },
    color: "token(colors.white)",
    border: "5px solid token(colors.white)",
    marginBottom: "2rem",

    "& img": {
      width: "100%",
      height: "18rem",
      objectFit: "cover",
    },
  },
});

export const InfoWrapper = styled("div", {
  base: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    marginBottom: "2rem",

    "& p": {
      fontSize: "1.5rem",
      fontWeight: "bold",
    },
  },
});
