// Get.js
import React, {Component} from 'react'
import { render } from 'react-dom'

class GetVideo extends Component {
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

export default GetVideo;