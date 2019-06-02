import React from 'react';
import './App.css';

class App extends React.Component {
	constructor(props){
		super(props);
		this.getDate = this.getDate.bind(this);
	}

	getDate(){
			let birthdate = document.getElementById("date").value;

			fetch("/getBirthday?birthday=" + birthdate)
			.then(results => {
				results.text().then(data => console.log(data))
			})
		}

    render(){
        return <div className="App">
            <div className="Container">
              <div className="Header">Celebrity Birthdays</div>
              <input id="date" className="InputBox" type="text" placeholder="Enter Your Birthday Here (YYYY-MM-DD)"></input>
              <div>
                  <button onClick={this.getDate} className="SearchButton">Search</button>
              </div>
            </div>
        </div>
      }
    }

export default App;
