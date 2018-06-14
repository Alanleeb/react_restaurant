import React from 'react'
import axios from 'axios'
import Form from './Form'

class Item extends React.Component {
  state = { menu: {}, edit: false }

  componentDidMount() {
    const { id } = this.props.match.params
    axios.get(`/api/items/${id}`)
      .then( ({ data }) => this.setState({ menu: data }) )
  }

  toggleEdit = () => {
    this.setState( state => {
      return { edit: !state.edit }
    })
  }

  submit = (menu) => {
    const { id } = this.state.menu
    axios.put(`/api/menus/${id}`, { menu })
    .then( ({ data }) => {
      this.setState({ menu: data, edit: false }) 
    })
  }

  show() {
    const { 
      menu: { item, description, price}
    } = this.state
    return (
      <div>
        <h1>{item}</h1>
        <h3>{description}</h3>
        <h3>${price}</h3>
      </div>
    )
  }

  edit = () => {
    const { id, item, description, price } = this.state.product
    const menu = { id, item, description, price }
    return <Form submit={this.submit} {...menu} />
  }

  render() {
    const { edit } = this.state;
    return (
      <div>
        { edit ? this.edit() : this.show() }
        <button onClick={this.toggleEdit}>
          { edit ? 'Cancel' : 'Edit' }
        </button>
      </div> 
    )
  }
}

export default Item
