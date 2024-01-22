import React, {useState, useEffect, ReactDOM} from 'react'
import axios from 'axios'

function App() {

    class Search extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                dataToSend: ''
            }
        }

        sendDataToBackend = async () => {
            try {
                const response = await axios.post(
                    '127.0.01:5000/flights', JSON.stringify({ 
                        key: this.state.dataToSend 
                    }),
                {
                    headers: {
                        'Content-Type': 'application/json',
                  },
                }
              );
                console.log(response.data)
            } catch (error) {
                console.error('Error sending data to backend:', error)
            }
        }
        
        handleInputChange = (e) => {
            this.setState({dataToSend : e.target.value})
        }

        render() {
        return (
            <form>
                <input 
                    type="airCode" 
                    value={this.state.dataToSend} 
                    onChange={(e) => this.handleInputChange} 
                />
                <button onClick={this.sendDataToBackend}>Search Flights</button>
            </form>
        )
        }
    }

    // const root = ReactDOM.createRoot(document.getElementById("root"))
    // root.render(<Search />)

    return (
        <div>
            
            <Search />

        </div>
    )
}


export default App