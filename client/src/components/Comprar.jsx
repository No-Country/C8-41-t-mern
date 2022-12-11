import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';

const Comprar = () => {

    const cartItems = useSelector((state) => state.user.cart);
    const user = useSelector((state) => state.user);
    const token = localStorage.getItem('token')
     console.log(cartItems)
    console.log(user)

    const generateUID = () => {
        let UID = Math.floor(Math.random() * 999999);
    }

    const handlClick = async () => {
        try {

            const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/orders`, user, { headers: { 'x-token': ` ${token}` } })
            console.log(data)
            
        } catch (error) {
            console.log(error)
            
        }
    }
  
    
    
    
    
    return (

    
    <Card style={{ width: '18rem' }}>
    {
        cartItems.map(item => {
            console.log(item)
            return (
                <>
                    <Card.Img variant="top" src={item.image} />
                    <Card.Body>
                    <Card.Title> Nombre Producto {item.productName}</Card.Title>
                    <Card.Text>
                       Descripcion : {item.description}
                    </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                    <ListGroup.Item> Cantidad {item.quantity}</ListGroup.Item>
                    <ListGroup.Item> {item.price} </ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                    </Card.Body>
                    </>
            )
        })
    }
                    <Button onClick={handlClick} >Comprar</Button>
  </Card>
  )
}

export default Comprar