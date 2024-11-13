import { Card, Button } from 'react-bootstrap'
import casa1 from '../../assets/img/casa1.jpg'
import casa2 from '../../assets/img/casa2.jpg'
import casa3 from '../../assets/img/casa3.jpg'
import casa4 from '../../assets/img/casa4.jpg'

const Cards = () => {

    const data = [
        {
            id: 1,
            title: 'Casa 1',
            image: casa1,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel lacus non metus consectetur faucibus.'
        },
        {
            id: 2,
            title: 'Casa 2',
            image: casa2,
            content: 'Cras mattis consectetur purus in fermentum. Donec sed neque vitae velit tristique cursus.'
        },
        {
            id: 3,
            title: 'Casa 3',
            image: casa3,
            content: 'Mauris faucibus, velit vel condimentum bibendum, justo velit dictum ligula, at malesuada velit lacus vitae lectus.'
        },
        {
            id: 4,
            title: 'Casa 4',
            image: casa4,
            content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        }
    ];



    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-4">
                {data.map(card => (
                    <div className="col" key={card.id}>
                        <Card className="h-100">
                            <Card.Img 
                                variant="top" 
                                src={card.image} 
                                style={{
                                    height: '200px',
                                    objectFit: 'cover'
                                }}
                            />
                            <Card.Body className="d-flex flex-column">
                                <Card.Title>{card.title}</Card.Title>
                                <Card.Text>{card.content}</Card.Text>
                                <Button variant="primary" className="mt-auto">Ver más</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
       
    )
}

export default Cards
