import { styled } from "../../../styled-system/jsx";

export const Wrapper = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});

export const CountryLink = styled("a", {
  base: {
    position: "relative",
    color: "token(colors.white)",
    fontSize: "token(font.sizes.medium)",
    margin: "0.3rem token(spacings.small) 0",
    textDecoration: "none",
    textAlign: "center",
    cursor: "pointer",

    _hover: {
      _after: {
        content: "''",
        position: "absolute",
        display: "block",
        height: "0.3rem",
        background: "token(colors.primary)",
        animation: "hoverAnimation 0.2s forwards",
      },
    },
  },
});

export const CardInfoWrapper = styled("div", {
  base: {
    width: "50%",
  },
});
