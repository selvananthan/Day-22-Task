import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Card, Button } from 'react-bootstrap';


function App() {
  const data = [
    {

      "user": "single user",
      "storage": "50GB",
      "PP": "unlinited public projects",
      "price": "$0",
      "plan": "free",


    },
    {

      "user": "5 user",
      "storage": "50GB",
      "PP": "unlinited public projects",
      "price": "$9",
      "plan": "plus",
    },
    {

      "user": "unlimited user",
      "storage": "50GB",
      "PP": "unlinited public projects",
      "price": "$49",
      "plan": "pro",
    },


  ]
  return (
    <>
    
      <h1>Price Card Task</h1>

<div className="d-flex">
{
  data.map((obj)=>{

return(

  <Card>
  <Card.Header>
    <span>{obj.plan}</span>
    <h2>{obj.price}/ Month</h2>
  </Card.Header>
  <Card.Body>
    <ul className='list'>
      <li>{obj.user}</li>
      <li>{obj.storage}</li>
      <li>{obj.PP}</li>
      <li>{obj.price}</li>
    </ul>

  </Card.Body>
  <Card.Footer>
    <Button variant="dark" >Subscribe</Button>
  </Card.Footer>

</Card>
)
  }
  )
}
</div>
    </>
  )
}

export default App
