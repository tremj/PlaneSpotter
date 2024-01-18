import React, {useState, useEffect, ReactDOM} from 'react'

function App() {

    class Search extends React.Component {
        

        render() {
        return (
            <form>
                <label for="airCode">Airport (IATA) code</label>
                <input type="airCode"></input>
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

    const root = ReactDOM.createRoot(document.getElementById("root"))
    root.render(<Search />)

    return (
        <div>
            
            {(typeof data.members === 'undefined') ? (
                <p>Loading...</p>
            ) : (
                data.members.map((member, i) => (
                    <p key={i}>{member}</p>
                ))
            )}

        </div>
    )
}


export default App