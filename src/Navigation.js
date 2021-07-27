import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

function Navigation(props) {
  return (
    <ThemeProvider theme={theme}>
      <div className="user-menu">
        <div className="user-name">{props.user}</div>
            <ul className="menu-item">
                <li><a href="">Menu Item</a></li>
                <li><a href="">Menu Item</a></li>
                <li><a href="">Menu Item</a></li>
                <li><a href="">Menu Item</a></li>
                <li><a href="">Log Out</a></li>
            </ul>
      </div>
    </ThemeProvider>
  );
}

export default Navigation;
