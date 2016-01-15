import React from 'react'
import ReactDOM from 'react-dom'
import NameInput from './name_input'
import ColorInput from './color_input'

class App extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
    color: React.PropTypes.string
  };

  static defaultProps = {
    name: 'Fred',
    color: 'red'
  };

  constructor(props){
    super(props)

    let{ name, color } = props
    this.state = { name, color }
  };

  updateName = (ev) => {
    let { value } = ev.target

    if (value.length === 0){
      value = this.props.name
    }
    this.setState({ name: value })
  };

  updateColor = (ev) => {
    let{ value } = ev.target
    if(value.length === 0){
      value = this.props.color
    }
    this.setState({ color: value })
  };

  render() {
    const { name, color } = this.state
    return (
      <div className='container' style={{ color }}>
        <NameInput
          name={name}
          nameChanged={this.updateName}/>
        <ColorInput
          color={color}
          colorChanged={this.updateColor}/>
        <p>Your name is { name }</p>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('react'))
