import { theme } from "../../../styles";

export const styles = {
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px",
    height: "100%",
    position: "relative",
  },
  title: {
    padding: "0 16px",
    color: theme.palette.secondary.medium,
  },
  username: {
    color: theme.palette.primary.medium,
  },
  postbody: {
    color: theme.palette.secondary.dusky,
  },
};
