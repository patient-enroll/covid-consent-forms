// Create.js
import React, {Component} from 'react'

class CreateVideo extends Component {
    constructor({match}) {
      super()
      this.state = {
        name: '',
        email: '',
        password: '',
        redirectToProfile: false,
        error: ''
      }
      this.match = match
    }
}

render() 

export default CreateVideo;