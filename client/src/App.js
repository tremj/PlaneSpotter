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

        postData = () => {
            const apiURL = 'http://127.0.0.1:5000/flights'

            const data = {
                key: this.state.dataToSend
            }

            const xhr = new XMLHttpRequest()
            xhr.open('POST', apiURL, true)
            xhr.setRequestHeader('Content-Type', 'application/json')
            xhr.setRequestHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:3000/')

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        const responseData = JSON.parse(xhr.responseText)
                        console.log('Success', responseData)
                    } else {
                        console.error('Error', xhr.statusText)
                    }
                }
            }

            xhr.send(JSON.stringify(data))
        }
        
        handleInputChange = (e) => {
            this.setState({dataToSend : e.target.value})
        }

        render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.dataToSend}
                    onChange={this.handleInputChange}
                />
                <button onClick={this.postData}>Search</button>
            </div>
        )
        }
    }



    return (
        <div>
            
            <Search />

        </div>
    )
}


export default App