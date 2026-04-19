import ProfilePic from '../assets/profilePic.png'
import './AboutMe.css'

function AboutMe() {
  
  return (
    <div className="popupContent">
      <div className="aboutTop">
        <div className="aboutHeader">
          <div className="circle">
            <img src={ProfilePic} alt="profilePic" className="profilePic" />
          </div>

          <div className="aboutText">
            <h2 className="name1">David Morfin</h2>
            <p className="subtitle">Computer Science Student at Cal Poly SLO</p>
          </div>
        </div>
      </div>

      <div className="aboutDivider"></div>

      <div className="aboutBody">
        <div className="aboutSection">
          <p>
            Hi, I’m David. I’m a Computer Science student interested in cloud,
            DevOps, and software engineering.
          </p>

          <ul>
            <li>
              I build cloud-based systems using AWS (Lambda, S3, DynamoDB, CloudWatch),
              including serverless pipelines for real-time data processing
            </li>
            <li>
              Automate workflows with Python and AWS to improve efficiency and reduce
              manual work
            </li>
            <li>
              Work with tools like Docker, Git, and CI/CD to build and deploy reliable
              systems
            </li>
            <li>
              Enjoy collaborating in agile teams, writing clean code, and solving
              real-world problems
            </li>
          </ul>
        </div>

        <div className="aboutSection">
          <h2 className="bold">Education</h2>
          <p>
            Bachelor of Science in Computer Science, Concentration in Privacy and
            Security
            <br />
            California Polytechnic State University, San Luis Obispo
            <br />
            Expected Graduation: June 2027
          </p>
        </div>

        <div className="aboutSection">
          <h2 className="bold">Other Interests</h2>
          <ul>
            <li>Listening to music</li>
            <li>Watching MMA</li>
            <li>Playing video games and watching anime</li>
            <li>Practicing Kick Boxing</li>
            <li>Eating good food</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AboutMe