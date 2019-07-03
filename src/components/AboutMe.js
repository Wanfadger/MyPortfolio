import React, { Component } from 'react'
import {Grid,Cell} from 'react-mdl';
import logo from './wanfadger.jpg';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

export default class AboutMe extends Component {
  render() {
    return (
      
        <>
          <Grid>

          <Cell>
          <div style={{textAlign:'center'}}>
           <img src={logo} alt="Fahad" height="200px" />
          </div>
          </Cell>

          </Grid>
        </>
       
      
    )
  }
}
