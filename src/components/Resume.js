import { React, Component } from "react";
import '../styles.css';
class Resume extends Component {
  constructor() {
    super();

  }


  render() {
    const { name, email, resSum, phoneNum, schoolName, program,
      dateOfStudy, compName, compTitle, jobTasks, currentJobTitle,
      dateStarted, dateEnded, compName2, compTitle2, jobTasks2, currentJobTitle2,
      dateStarted2, dateEnded2 } = this.props;
    return (
      <div className="resume">
        <div className="left-side">
          <div>
            <h1>{name} </h1>
            <h3>{currentJobTitle} </h3>
          </div>

          <div>
            <p> <span>&#9990;</span> <br></br> {phoneNum}</p>
            <p> <span>&#9993;</span> {email} </p>
          </div>

          <div>
            <h2>EDUCATION</h2>
            <p> {schoolName}</p>
            <p> {program}</p>
            <p>{dateOfStudy}</p>
          </div>
        </div>
        <div className="right-side">
          <div className="center-border">
            <h3>RESUME SUMMARY</h3>

          </div>
          <p> {resSum} </p>
          <div className="center-border">
            <h3>PROFESSIONAL EXPERIENCE</h3>
          </div>
          <div>
            <p className="bold-face">{compTitle}</p>
            <p className="italics">{compName}</p>
            <p>{dateStarted} to {dateEnded}</p>
            <ul> <li>{jobTasks}</li></ul>
          </div>

          <div>
            <p className="bold-face">{compTitle2}</p>
            <p className="italics">{compName2}</p>
            <p>{dateStarted2} to {dateEnded2}</p>
            <ul> <li>{jobTasks2}</li></ul>
          </div>
        </div>

      </div>

    );
  }
}

export default Resume;
