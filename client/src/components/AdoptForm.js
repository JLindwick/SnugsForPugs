import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AdoptForm() {
    const color ={
        "backgroundColor":"#baa89c",
        "color":"black",
        "border":"none"
    }
    return (
        <div style={{ "width": "60%", "marginLeft": "20%" }}>
            <Form>
            
                <Form.Text className="text-muted">
                        NOTE: We'll never share your information with anyone else.
                        <br/>
                            * Required fields
                        <br/>
                    </Form.Text>
                    <br/>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>*Name:</Form.Label>
                    <Form.Control style={color} type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>*Email:</Form.Label>
                    <Form.Control style={color} type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone Number:</Form.Label>
                    <Form.Control style={color} type="text" placeholder="Give us a call back number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>*About your family</Form.Label>
                    <Form.Control style={color} as="textarea" placeholder="Tell us about your family!" rows={6} />
                </Form.Group>
               
                <Button style={color} type="submit">
                    Submit
                </Button>

            </Form>
        </div>
    );
}

export default AdoptForm;
