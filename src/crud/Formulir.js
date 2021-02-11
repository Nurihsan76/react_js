import React from 'react'
import {Form, Button, Row, Col} from 'react-bootstrap'

const Formulir = ({nama, harga, descripsi, handleChange, handleSubmit, id}) => {
    return (
        <div className="mt-5">
            <Row>
               <Col>
                <h3>{id ? "edit data" : "tambah data"}</h3>
                <hr/>
                </Col>
            </Row>
            <Row>
                <Col>
                <Form onSubmit={handleSubmit}>
                <Form.Group controlId="nama">
                        <Form.Label>nama makanan</Form.Label>
                        <Form.Control type="text" name="nama" value={nama} onChange={(event) => handleChange(event)}/>
                    </Form.Group>
                    <Form.Group controlId="harga">
                        <Form.Label>harga makanan</Form.Label>
                        <Form.Control type="number" name="harga" value={harga} onChange={(event) => handleChange(event)}/>
                    </Form.Group>
                    <Form.Group controlId="descripsi">
                        <Form.Label>descripsi</Form.Label>
                        <Form.Control as="textarea" rows={3} name="descripsi" value={descripsi} onChange={(event) => handleChange(event)}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default Formulir
