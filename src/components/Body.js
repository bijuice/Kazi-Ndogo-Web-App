import { Card, Media, Heading, Content, Columns } from 'react-bulma-components';
import star from '../assets/star.png'

const Star = () => {
    return (
        <img src={star} alt="" />
    )
}

const Body = ({ workers }) => {



    return (
        <Columns.Column size="one-third">
            <Card>
                <Card.Image size="4by3" src={workers.image} />
                <Card.Content>
                    <Media>
                        <Media.Item>
                            <Heading size={4}>{workers.name}</Heading>
                        </Media.Item>
                    </Media>
                    <Content>
                        <Heading size={5}><b>Role: </b>{workers.role}</Heading>
                        <Heading size={5}><b>Description:</b></Heading>
                        <Heading size={6}>{workers.description}</Heading>
                        <Heading size={5}>
                            <b>Rating:           </b>
                            <Star />
                            {workers.rating}

                        </Heading>
                    </Content>
                </Card.Content>
                <Card.Footer>
                    <Card.Footer.Item renderAs="a" href="#No">Get Number</Card.Footer.Item>
                </Card.Footer>
            </Card>
        </Columns.Column>
    )
}

export default Body