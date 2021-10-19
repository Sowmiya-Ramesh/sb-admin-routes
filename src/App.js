import "./styles.css";
import SideBar from "./SideBar.js";
// import Footer from "./Footer.js";
// import Projects from "./Projects.js";
// import Earnings from "./Earnings";
import NavBar from "./NavBar.js";
import Users from "./Users.js";
import DashBoard from "./DashBoard";
import Profiles from "./Profiles";
import CreateProfile from "./CreateProfile.js";
import EditProfile from "./EditProfile.js";
//import EditUser from "./EditUser.js";
import CreateUser from "./CreateUser";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App" id="page-top">
      <div id="wrapper">
        <SideBar />

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <NavBar />
            <Router>
              <Switch>
                <Route exact path="/" component={DashBoard} />
                <Route path="/profiles" component={Profiles} />
                <Route path="/create-profile" component={CreateProfile} />
                <Route path="/edit-profile/:id" component={EditProfile} />
                <Route path="/users" component={Users} />
                <Route path="/create-user" component={CreateUser} />
                {/* <Route path="/edit-user/:id" component={EditUser} /> */}
                {/* <Route path="/add" component={AddProduct} /> */}
              </Switch>
            </Router>
          </div>
        </div>
      </div>

      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>
    </div>
  );
}
