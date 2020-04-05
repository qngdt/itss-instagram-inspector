import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Fade } from 'react-reveal'

const SearchLayout = (props) => {
  const { onChange, onSubmit } = props
  return (
    <Fade>
      <div className="form">
        <Form onSubmit={(e) => {
          e.preventDefault()
          onSubmit()
        }}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Instagram ID:</Form.Label>
            <Form.Control type="text" placeholder="Example: qngdt" onChange={(e) => { onChange(e.target.value) }} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Inspect
          </Button>
        </Form>
      </div>
    </Fade>
  )
}

export default SearchLayout