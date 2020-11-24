import "react-bulma-components/dist/react-bulma-components.min.css";
import { Navbar, Heading, Container, Section } from "react-bulma-components";
import Profile from "./components/Profile";
import Body from "./components/Body";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar color="primary">
          <Navbar.Brand>
            <Navbar.Item>
              <Link to="/">
                <Heading size={2} color="white">
                  <i>
                    KAZI <sub>ndogo</sub>
                  </i>
                </Heading>
              </Link>
            </Navbar.Item>
          </Navbar.Brand>

          <Navbar.Container position="end">
            <Navbar.Item>
              <Link to="/profile">
                <Container>
                  {" "}
                  User <i className="fas fa-user"></i>
                </Container>
              </Link>
            </Navbar.Item>
            <Navbar.Item>
              <Link to="login">
                <Container>
                  Log Out <i className="fas fa-sign-out-alt"></i>
                </Container>
              </Link>
            </Navbar.Item>
          </Navbar.Container>
        </Navbar>

        <Section>
          <Switch>
            <Route exact path="/" component={Body} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/profile/:number" component={Profile} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </Section>
      </Router>
    </div>
  );
};

export default App;
