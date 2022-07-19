import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import sounds from '../data/sounds'

class Drum extends Component {
    constructor(props) {
      super(props)    
      this.state = {
        keypressed: ''
      }
        this.playSound = this.playSound.bind(this)
    }

    playSound(pad) {
        let audio = document.getElementById(pad)
        audio.play()
        this.setState({
            keypressed: pad
        })
    }

    componentDidMount() {
        document.addEventListener('keydown', (event) => {
            this.playSound(event.key.toUpperCase())
        })
    }

  render() {
    return (
      <section>
        <Container className='d-flex align-items-center vh-100 justify-content-center'>
            <div id="drum-machine">
                <h1 id="title">DRUMS</h1>
                        <div id="drum-pads">
                        {
                            sounds.map((sound) => {
                                return (
                                    <span className='drum-pad' key={sound.id} id={sound.id} onClick={() => this.playSound(sound.keyTrigger)}>
                                        {sound.keyTrigger}
                                        <audio className='clip' id={sound.keyTrigger} src={sound.url} ></audio>
                                    </span>
                                )
                            })
                        }
                    </div>
                    
                        <div id="display">
                            {
                                sounds.map(sound => {
                                    return(
                                    this.state.keypressed === sound.keyTrigger ? (<p key={sound.id}>{sound.id}</p>) : (null)
                                    )
                                })
                            }
                        </div>                    

                
            </div>
        </Container>
      </section>
    )
  }
}

export default Drum