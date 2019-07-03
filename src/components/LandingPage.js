import React, { Component } from 'react'
import {Grid,Cell} from 'react-mdl';
import myimage from './wanfadger.jpg';
import '../App.css';

export default class LandingPage extends Component {
  render() {
    return (
      <div style={{width:'100%', margin:'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src={myimage} alt="fahad" className="avatar-img"/>
            <div className="banner-text">
                <h1>Web and Mobile Developer</h1>
                <hr />
                <p>HTML/CSS | Java | JavaScript | React | React-Native | Nodejs | MongoDB</p>
                <div className="social-links"  >
                {/*linked in */}
                      <a target="_blank" href="https://github.com/Wanfadger"><i className="fab fa-github"></i></a>

                      {/*github */}
                      <a target="_blank" href="https://www.linkedin.com/in/galiwango-fahad-86668313b/"><i class="fab fa-linkedin-in"></i></a>

                      {/*linked in */}
                      <a target="_blank" href="https://web.facebook.com/galiwango.fahad"><i className="fab fa-free-code-camp"></i></a>

                      {/*linked in */}
                      <a target="_blank" href="https://twitter.com/WANFADGER"><i className="fab fa-youtube-square"aria-hidden="true"></i></a>
                </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}
