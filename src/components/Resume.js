import React, { Component } from 'react';
import {Grid,Cell} from 'react-mdl';
import logo from './wanfadger.jpg';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

export default class Resume extends Component {
  render() {
    return (
      <div>
       <Grid>
         <Cell className="" col={4}>
          <div style={{textAlign:'center'}}>
           <img src={logo} alt="Fahad" height="200px" />
          </div>

        <h2 style={{paddingTop:'2em'}}>Galiwango Fahad</h2>
        <h2 style={{color:'gray'}}>Programmer</h2>
        <hr style={{botterTop:'3px solid #833fb2', width:'50%'}} />
        <p>
        An ambitious self-motivated software engineer who has the necessary IT skills with a 
        strong technical background and hands on practical experience in website and web base applications 
        design and development, both back-end and front-end. As well as System development who possesses self-discipline 
        and the ability to work with minimum supervision. Able to play a key role throughout the system development / support 
        life cycle of a project to ensure that quality solutions meet business objectives. Possessing a good team spirit, 
        deadline orientated and having the ability to produce detailed technical specifications from client requirements. 
        A quick learner who can absorb new ideas and can communicate clearly and effectively. Currently looking for an 
        opportunity to join a dynamic, ambitious, growing company/organization and forge a career in ICT generally and 
        software engineering in particular. 
</p>

              <hr style={{botterTop:'3px solid #833fb2', width:'50%'}} />

              <h5>Address</h5>
              <p>Kabowa Kampala Uganda</p>

            <h5>Phone</h5>
          <p>+256759117989</p>
          <p>+256784490559</p>

          <h5>Email</h5>
          <p>galiwango.fahad@gmail.com</p>
{/* 
          <h5>Web</h5>
          <p>lailahgrantmololo.cmo</p>
          <hr style={{botterTop:'3px solid #833fb2', width:'50%'}} /> */}

         </Cell>

         <Cell className="resume-right-col" col={8}>
           <h2>Education</h2>
            <Education startYear={2016} endYear={2018} 
            schoolName= "Sai Pali institute of technology and management"
            schoolDescription="Diploma in software engineering and management " />

            <Education startYear={2014} endYear={2016} 
            schoolName= "Kitebi Senior Secondary School"
            schoolDescription=" Physiscs , Economics  Math /ICT(PEM/ICT) " />

            <hr style={{borderTop:'3px solid #e22947'}} />

            <h2>Experience</h2>
            <Experience 
              startYear={2016}
              endYear={2018}
              jobName="Developer Intern"
              JobDescription="mobile app developer"
            />

            <Experience 
              startYear={2018}
              endYear={2019}
              jobName="Developer FullTime job"
              JobDescription="Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit, sed do eiusmodtempor 
            incididunt ut labore et dolore magna aliqua"
            />
            <hr style={{borderTop:'3px solid #e22947'}} />

            <h2>Skills</h2>
            <Skills 
              skill="Java" progress={85}
            />
            <Skills 
              skill="Android" progress={80}
            />
            
              <Skills 
              skill="Kotlin" progress={30}
            />
          
            <Skills 
              skill="HTML/CSS" progress={100}
            />
             <Skills 
              skill="JavaScript" progress={70}
            />
            <Skills 
              skill="React" progress={45}
            />
              <Skills 
              skill="Angular" progress={40}
            />

         </Cell>


       </Grid>
      </div>
    )
  }
}
