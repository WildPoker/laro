import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  Appbar: {
    backgroundColor: "transparent",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "#ffac41",
  },
  Button: {
    color: "#ffac41",
  },
  Typography: {
    backgroundColor: "#cfe8fc",
    height: "80vh",
    margin: "auto",

    borderRadius: "20px",
    borderStyle: "solid",
    borderColor: "#ffac41",
  },
}));

export default useStyles;
