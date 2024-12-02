import { styled } from "../../../styled-system/jsx";

export const Wrapper = styled("main", {
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});

export const BordersWrapper = styled("main", {
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "15rem",
    overflow: "scroll",
    overflowX: "hidden",
  },
});
