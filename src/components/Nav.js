import { Navbar, Heading, Icon } from 'react-bulma-components';

const Nav = () => {

    const clickHandler = () => {
        window.alert("test")
    }

    return (

        <Navbar color="link">

            <Navbar.Item>
                <Heading size={3}>Kazi Ndogo</Heading>
            </Navbar.Item>

            <Navbar.Container position="end">
                <Navbar.Item onClick={clickHandler}>
                    <Icon><i className="fas fa-user"></i></Icon>
                </Navbar.Item>
            </Navbar.Container>

        </Navbar>

    )

}

export default Nav