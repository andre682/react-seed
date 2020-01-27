import React, { Component } from 'react'
import Input from '../presentational/Input.jsx'

class FormContainer extends Component {
  constructor() {
    super()
    this.state = {
      field: ''
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
          text="SEO title"
          label="seo_title"
          type="text"
          id="seo_title"
          value={seo_title}
          handleChange={this.handleChange}
        />
      </form>
    )
  }
}

export default FormContainer
