import { Navbar, Heading, Container, Button } from 'react-bulma-components';

const Nav = () => {

    const clickHandler = () => {
        window.alert("test")
    }

    return (

        <Navbar color="light">

            <Navbar.Brand>
                <Navbar.Item>
                    <Heading size={2} color="white"><i>KAZI <sub>ndogo</sub></i></Heading>
                </Navbar.Item>
            </Navbar.Brand>

            <Navbar.Container position="end">
                <Navbar.Item onClick={clickHandler}>
                    <Button color="dark"> <Container> User <i className="fas fa-user"></i></Container></Button>
                </Navbar.Item>
                <Navbar.Item onClick={clickHandler}>
                    <Button color="dark"> <Container>Log Out <i class="fas fa-sign-out-alt"></i></Container></Button>
                </Navbar.Item>
            </Navbar.Container>

        </Navbar>

    )

}

export default Nav