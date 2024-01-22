import React, {useState, useEffect, ReactDOM} from 'react'
import axios from 'axios'

function App() {

    class Search extends React.Component {
        searchClick() {
            const MyComponent = () => {
                const [dataToSend, setDataToSend] = useState('')
        
                const setDataToBackend = async() => {
                    try {
                        const response = await axios.post('localhost:5000/flights', {
                            airport: dataToSend,
                        })
                        console.log(response.data)
                    } catch (error) {
                        console.error('error sending data to backend: ', error)
                    }
                }
            }
        }

        render() {
        return (
            <form>
                <label for="airCode">Airport (IATA) code</label>
                <input type="airCode" value={dataToSend} onChange={(e) => setDataToSend(e.target.value)}></input>
                <button onClick={setDataToBackend}>Search Flights</button>
            </form>
        )
        }
    } 

    const [data, setData] = useState([{}]) 
    useEffect(() => {
        fetch("/members").then(
            res => res.json()
        ).then(
            data => {
                setData(data)
                console.log(data)
            }
        )
    }, [])

    

    // const root = ReactDOM.createRoot(document.getElementById("root"))
    // root.render(<Search />)

    return (
        <div>
            
            <Search />

        </div>
    )
}


export default App