import { makeStyles } from "@material-ui/core"; 

export default makeStyles((theme) => ({
  container: {
  },
  item: {
    position: "relative",
    minHeight: "200px",
    maxHeight: "400px",
    background: "rgba(180, 180, 180 ,0.5)",
    textDecoration: "none"
  },
  itemImg: {
    width: "100%",
    height: "100%",
    right: "0",
    left: "0",
    top: "0",
    bottom: "0",
    position: "absolute",
    objectFit: "cover",
    zIndex: "-1",

  },
  itemText: {
    color: "#000",

  }
  })
  )