import { styled } from "../../../styled-system/jsx";

export const Wrapper = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
    width: { base: "100%", _mdMI: "50%" },
    color: "token(colors.white)",
  },
});

export const CountryLink = styled("a", {
  base: {
    position: "relative",
    color: "token(colors.white)",
    fontSize: "token(font.sizes.medium)",
    margin: "0.3rem token(spacings.small) 0",
    textDecoration: "none",
    fontWeight: "bold",
    cursor: "pointer",

    _hover: {
      _after: {
        content: "''",
        position: "absolute",
        display: "block",
        height: "0.3rem",
        width: "0.3rem",
        background: "token(colors.primary)",
        animation: "hoverAnimation 0.2s forwards",
      },
    },
  },
});

export const BordersInfoWrapper = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    marginBottom: "2rem",
    borderBottom: "2px solid token(colors.white)",

    "& div": {
      display: "flex",
      justifyContent: "space-around",
      width: "100%",
      marginTop: "1rem",
    },

    "& p": {
      fontSize: "1.5rem",
      fontWeight: "500",
    },
  },
});
