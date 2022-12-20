import { Component } from "react";
import '../styles.css';
import Resume from './Resume.js'
class Form extends Component {
  constructor() {
    super();
    this.state = {


      name: 'Vadim Kroytor',
      email: 'vadimkroytor@gmail.com',
      phoneNum: '(647)280-4257',
      resSum: `Hi, my name is Vadim Kroytor. I build websites. I am
      a full-stack developer who graduated in Computer Science
     at York University.`,

      schoolName: 'York University',
      program: 'Computer Science',
      dateOfStudy: 'January, 2018 - December, 2021',

      currentJobTitle: 'Full Stack Developer',
      compName: 'Faur Event Staffing',
      compTitle: 'Banquet Hall Bartender',
      jobTasks: 'Set up and clean the bar, mix drinks and serve guests.',
      dateStarted: '2018',
      dateEnded: '2022',

      compName2: 'Dave and Busters',
      compTitle2: 'Cocktail Server',
      jobTasks2: 'Set up and clean tables, take orders and serve guests.',
      dateStarted2: '2017',
      dateEnded2: '2018',

      //practicalExp: []

    };
    //this.handleAddButton = this.handleAddButton.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);


  }

  /*
  handleAddButton(event) {
    this.setstate({
      practicalExp: [...this.practicalExp, []] 
    });
  }
  */

  handleInputChange(event) {
    const name = event.target.name;

    this.setState({


      [name]: event.target.value

    });
    console.log(name);
  }
  render() {
    const { name, email, phoneNum, schoolName, program, dateOfStudy, resSum,
      currentJobTitle, compName, compTitle, jobTasks, dateStarted, dateEnded,
      compName2, compTitle2, jobTasks2, dateStarted2, dateEnded2 } = this.state;
    return (
      <div className="main-container">
        <nav className="navbar">
          <div>
            <p> Resume Builder</p>
          </div>
        </nav>

        <form className="form">
          <div>
            <h3> General Information</h3>

            <label htmlFor="name">Name</label>
            <input type="text" onChange={this.handleInputChange} name="name" id="name"></input>

            <label htmlFor="email">Email</label>
            <input type="text" onChange={this.handleInputChange} name="email" id="email"></input>

            <label htmlFor="phoneNum">Phone Number</label>
            <input type="text" onChange={this.handleInputChange} name="phoneNum" id="phoneNum"></input>

            <label htmlFor="resSum">Resume Summary</label>
            <textarea onChange={this.handleInputChange} name="resSum" id="resSum"></textarea>
            
            <h3> Educational Experience</h3>
            <label htmlFor="schoolName">School Name</label>
            <input type="text" onChange={this.handleInputChange} name="schoolName" id="schoolName"></input>

            <label htmlFor="program">Program</label>
            <input type="text" onChange={this.handleInputChange} name="program" id="program"></input>

            <label htmlFor="dateOfStudy">Date of Study</label>
            <input type="text" onChange={this.handleInputChange} name="dateOfStudy" id="dateOfStudy"></input>
          </div>
          <div>
            <h3> Practical Experience #1</h3>
            <label htmlFor="compName">Company Name</label>
            <input type="text" onChange={this.handleInputChange} name="compName" id="companyName"></input>

            <label htmlFor="compTitle">Job Title</label>
            <input type="text" onChange={this.handleInputChange} name="compTitle" id="jobTitle"></input>

            <label htmlFor="jobTasks">Job Tasks</label>
            <input type="text" onChange={this.handleInputChange} name="jobTasks" id="jobTasks"></input>

            <label htmlFor="dateStarted">Date Started</label>
            <input type="text" onChange={this.handleInputChange} name="dateStarted" id="dateStarted"></input>

            <label htmlFor="dateEnded">Date Ended</label>
            <input type="text" onChange={this.handleInputChange} name="dateEnded" id="dateEnded"></input>

            <h3> Practical Experience #2</h3>
            <label htmlFor="compName2">Company Name</label>
            <input type="text" onChange={this.handleInputChange} name="compName2" id="companyName"></input>

            <label htmlFor="compTitle2">Job Title</label>
            <input type="text" onChange={this.handleInputChange} name="compTitle2" id="jobTitle"></input>

            <label htmlFor="jobTasks2">Job Tasks</label>
            <input type="text" onChange={this.handleInputChange} name="jobTasks2" id="jobTasks"></input>

            <label htmlFor="dateStarted2">Date Started</label>
            <input type="text" onChange={this.handleInputChange} name="dateStarted2" id="dateStarted"></input>

            <label htmlFor="dateEnded2">Date Ended</label>
            <input type="text" onChange={this.handleInputChange} name="dateEnded2" id="dateEnded"></input>
          </div>
          {/*
          <input type="button" className="add-button" onclick={this.handleAddButton} value="Add"></input>
          {this.state.practicalExp.map((section) => {
            <input type="text" onChange={this.handleInputChange} name="section" id="dateEnded"></input>
          })}
          */}
        </form>
        <div>
          <Resume
            name={name} email={email} phoneNum={phoneNum} resSum={resSum} schoolName={schoolName} program={program}
            dateOfStudy={dateOfStudy} compName={compName} compTitle={compTitle} jobTasks={jobTasks}
            dateStarted={dateStarted} dateEnded={dateEnded} currentJobTitle={currentJobTitle} compName2={compName2}
            compTitle2={compTitle2} jobTasks2={jobTasks2} dateStarted2={dateStarted2} dateEnded2={dateEnded2} />
        </div>
      </div>
    );
  }
}



export default Form;
