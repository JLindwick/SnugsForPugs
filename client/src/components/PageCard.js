import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const imageStyle ={
  "width":"100%",
}

const PageCard = (props) => {
  return (
    <Card style={{ "color":"black", "width": '100vw','marginLeft':'2.5%',"marginRight":"2.5%"}}>
        <Card.Body style={{"backgroundColor":"#baa89c",}}>
            <Card.Title style={{"textAlign":"center","fontWeight":"bold","marginTop":"5%"}}>{props.headerText}</Card.Title>
            <hr/>
            <Card.Text>
              
              <img style={imageStyle} src={props.imageUrl} />
              <br/>
              <br/>
                {props.bodyText}
            </Card.Text>
        </Card.Body>
    </Card>
  );
}

export default PageCard;