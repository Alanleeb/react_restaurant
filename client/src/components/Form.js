import React from 'react'

class Form extends React.Component {
  defaultValues ={ item: '', description: '', price: '' }
  state = {...this.defaultValues}

  componentDidMount() {
    if (this.props.id)
      this.setState({ ...this.props })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.submit(this.state)
    this.setState({...this.defaultValues})
  }

  handleChange = (e) => {
    const { target: { name, value } } = e
    this.setState({ [name]: value })
  }

  render() {
    const { item, description, price } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="item"
          placeholder="item"
          value={item}
          onChange={this.handleChange}
          required
        />
        <input
          name="description"
          placeholder="description"
          value={description}
          onChange={this.handleChange}
        />
        <input
          name="price"
          placeholder="price"
          type="number"
          value={price}
          onChange={this.handleChange}
        />

        <button>Submit</button>
      </form>
    )
  }
}

export default Form
