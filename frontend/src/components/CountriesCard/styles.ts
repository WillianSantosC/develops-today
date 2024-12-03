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

export const Label = styled("label", {
  base: {
    fontSize: "token(font.sizes.small)",
    color: "token(colors.black)",
    cursor: "pointer",
  },
});

export const Input = styled("input", {
  base: {
    color: "token(colors.black)",
    fontFamily: "token(font.family)",
    fontSize: "token(font.sizes.medium)",
    background: "transparent",
    border: "0",
    outline: "none",
    width: "100%",
  },
});

export const InputWrapper = styled("div", {
  base: {
    display: "flex",
    background: "token(colors.lightGray)",
    borderRadius: "0.2rem",
    padding: "0 token(spacings.xsmall)",
    border: "0.2rem solid",
    borderColor: "token(colors.lightGray)",

    "&:focus-within": {
      boxShadow: "0 0 0.5rem token(colors.primary)",
    },
  },
});
