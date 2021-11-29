import React, { useState, useEffect } from "react";
import { ADD_EXPANSE_URL } from '../urls';
import { Row, Col, Container, InputGroup, FormControl, Form, Button} from 'react-bootstrap';
export default () => {
    const [categories] = useState([{
        key: 'entertainment',
        label: 'Entertainment'
    }, {
        key: 'pharmacy',
        label: 'Pharmacy'
    }, {
        key: 'fashion',
        label: 'Fashion'
    }, {
        key: 'groceries',
        label: 'Groceries'
    }]);
    const [categoryKey, setCategoryKey] = useState(null);
    const [amount, setAmount] = useState(null);
    const [category, setCategory] = useState(null);
    const [isFormValid, setValidated] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleSubmit = (event) => {
        setValidated(false);
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        if (amount > 0 && categoryKey) {
            fetch(ADD_EXPANSE_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ category: categoryKey, amount: amount})
            })
            .then(response => response.json())
            .then(() => {
                setSubmitMessage(`You spent INR ${amount} for ${category}`);
                setCategory(null);
                setAmount(null);
            })
            .catch(e => {
                event.preventDefault();
                setSubmitMessage('Error in saving your expanse')
            });
        }
    };
    useEffect(() => {
        if (categoryKey) {
            const cat = categories.find(c => c.key === categoryKey);
            setCategory(cat?.label || null);
        }
    }, [categoryKey, categories]);
    return (
        <Container className="mt-4 p-5">
            <Row>
                <Col>
                    <Form noValidate validated={isFormValid} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formCategory">
                            <Form.Label>Expanse Category</Form.Label>
                            <Form.Control as={'select'} type="select" required onChange={(e) => setCategoryKey(e.target.value)}
                                defaultValue={categoryKey}>
                                <option>Select Expanse Category</option>
                                {
                                categories.map(c =>
                                        <option key={c.key} value={c.key}>{c.label}</option>
                                    )
                                }
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                                Please select expanse category.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formAmount">
                            <Form.Label>Amount</Form.Label>
                            <InputGroup className="mb-3">
                                <InputGroup.Text>INR</InputGroup.Text>
                                <InputGroup.Text>0.00</InputGroup.Text>
                                <FormControl required defaultValue={amount}
                                aria-label="Rupee amount (with dot and two decimal places)" onChange={(e) => setAmount(e.target.value)} />
                                <Form.Control.Feedback type="invalid">
                                    Please enter any amount.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    {submitMessage}
                </Col>
            </Row>
        </Container>
    );
};