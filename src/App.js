import React from 'react';
import './App.css';

class App extends React.Component {
	constructor(props){
		super(props);

    this.state = {
      celebrities: []
    };

		this.getDate = this.getDate.bind(this);
	}

	getDate(){
      let month = document.getElementById("month").value;
      let day = document.getElementById("day").value;
      let year = "2019";
			let birthdate = year + "-" + month + "-" + day;
      let celebrityArray = [];

			fetch("/getBirthday?birthday=" + birthdate)
			.then(results => {
				results.json().then(data => { 
					for(let i = 0; i < data.length; i++){
            celebrityArray.push(data[i]);
					}
          this.setState(state => ({
            celebrities: celebrityArray
          }));
          console.log(this.state.celebrities);
				})
			})
		}

  render(){
      const listItems = this.state.celebrities.map((name) => <div key={ name }>{ name }</div>)

      return <div className="App">
          <div className="Container">
            <div className="Header">Celebrity Birthdays</div>
            <div className="TextHeader">Enter Your Birthday</div>
            <div>
              <select className="SelectBox" id="month">
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
              <select className="SelectBox" id="day">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>
            </div>
            <div>
                <button onClick={this.getDate} className="SearchButton">Search</button>
            </div>
            <div className="Names">
              { listItems }
            </div>
          </div>
      </div>
    }
  }

export default App;
