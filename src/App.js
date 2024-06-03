import {Component} from 'react'
import './App.css'

class App extends Component {
  state = {inputText: '', isSaved: false}

  inputChange = event => {
    this.setState({inputText: event.target.value})
  }

  onClickSave = () => {
    this.setState(prevState => ({
      isSaved: !prevState.isSaved,
    }))
  }

  render() {
    const {inputText, isSaved} = this.state
    const paragraphElement = isSaved ? (
      <p className="input-para">{inputText}</p>
    ) : (
      <input
        type="text"
        className="input-element"
        onChange={this.inputChange}
        value={inputText}
      />
    )
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Editable Text Input</h1>
          <div className="input-container">
            {paragraphElement}
            <button
              type="button"
              className="save-button"
              onClick={this.onClickSave}
            >
              {isSaved ? 'Edit' : 'Save'}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default App
