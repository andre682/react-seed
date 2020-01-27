import React, { Component } from 'react'
import Input from '../presentational/Input.jsx'

class FormContainer extends Component {
  constructor() {
    super()
    this.state = {
      field: 'Default Text'
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value })
  }

  render() {
    const { field } = this.state
    return (
      <form id="article-form">
        <Input
          text="Input Title"
          type="text"
          label="field"
          id="field"
          value={field}
          handleChange={this.handleChange}
        />
      </form>
    )
  }
}

export default FormContainer
