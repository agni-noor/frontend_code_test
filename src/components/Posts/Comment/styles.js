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
  username: {
    color: theme.palette.primary.medium,
    fontWeight: "bold",
    fontSize: 16,
  },
  commentbody: {
    color: theme.palette.secondary.dusky,
  },
};
