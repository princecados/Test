import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import Logo from "./assets/image/Logo.svg";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="sidebar">
        <div className="logo">
          <img src={Logo}/>
        </div>
          <ul className="menubar">
            <li className="collapceed active">
              <div className="collapce-link">
                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM6 14H4V7H6V14ZM10 14H8V4H10V14ZM14 14H12V10H14V14Z" fill="#F5F6FA"/>
                </svg>
                Bussines
              </div>
              <ul className="menu-item">
                <li><a href="">Customers</a></li>
                <li><a href="">Suppliers</a></li>
                <li><a href="">Users</a></li>
                <li><a href="">Certificates</a></li>
                <li><a href="">Products</a></li>
              </ul>
            </li>

            <li className="collapceed">
              <div className="collapce-link">
                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.4731 9.83364C16.5091 9.56645 16.5331 9.28858 16.5331 9.00002C16.5331 8.71145 16.5091 8.43358 16.4611 8.16639L18.4891 6.75564C18.6691 6.62739 18.7171 6.39226 18.6091 6.21058L16.6891 3.25014C16.5691 3.05776 16.3171 2.99364 16.1011 3.05776L13.7131 3.91276C13.2091 3.57076 12.6811 3.29289 12.0931 3.07914L11.7331 0.813387C11.6971 0.599637 11.4931 0.450012 11.2531 0.450012H7.41311C7.17311 0.450012 6.98112 0.599637 6.94512 0.813387L6.58511 3.07914C5.99711 3.29289 5.45712 3.58145 4.96512 3.91276L2.57711 3.05776C2.36111 2.98295 2.10911 3.05776 1.98911 3.25014L0.0691144 6.21058C-0.0508856 6.40295 -0.00288541 6.62739 0.189115 6.75564L2.21711 8.16639C2.16911 8.43358 2.13311 8.72214 2.13311 9.00002C2.13311 9.27789 2.15711 9.56645 2.20511 9.83364L0.177114 11.2444C-0.0028857 11.3726 -0.0508856 11.6078 0.0571144 11.7895L1.97711 14.7499C2.09711 14.9423 2.34911 15.0064 2.56511 14.9423L4.95311 14.0873C5.45711 14.4293 5.98511 14.7071 6.57311 14.9209L6.93312 17.1866C6.98111 17.4004 7.17311 17.55 7.41311 17.55H11.2531C11.4931 17.55 11.6971 17.4004 11.7211 17.1866L12.0811 14.9209C12.6691 14.7071 13.2091 14.4186 13.7011 14.0873L16.0891 14.9423C16.3051 15.0171 16.5571 14.9423 16.6771 14.7499L18.5971 11.7895C18.7171 11.5971 18.6691 11.3726 18.4771 11.2444L16.4731 9.83364ZM9.33311 12.2063C7.35312 12.2063 5.73311 10.7635 5.73311 9.00002C5.73311 7.23658 7.35312 5.79376 9.33311 5.79376C11.3131 5.79376 12.9331 7.23658 12.9331 9.00002C12.9331 10.7635 11.3131 12.2063 9.33311 12.2063Z" fill="#F5F6FA"/>
                </svg>
                settings
              </div>
              <ul className="menu-item">
                <li><a href="">Customers</a></li>
                <li><a href="">Suppliers</a></li>
                <li><a href="">Users</a></li>
                <li><a href="">Certificates</a></li>
                <li><a href="">Products</a></li>
              </ul>
            </li>
          </ul>

      </div>
    </ThemeProvider>
  );
}

export default App;
