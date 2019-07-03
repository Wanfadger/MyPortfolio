import React, { Component } from 'react'
import {Grid,Cell, List,ListItem,ListItemContent,} from 'react-mdl';
import logo from './wanfadger.jpg';


export default class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={4}>
          <h2>Galiwango Fahad</h2>
          <img src={logo} alt="Fahad" style={{height:'250px'}} />
          <p style={{width:'75%', margin:'auto', paddingTop:'1em'}}>
         wanfadger is  an ambitious self-motivated software engineer who has the necessary IT skills with good team spirit
</p>

          </Cell>
          <Cell col={7}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
            <List>
              <ListItem>
                <ListItemContent style={{fontSize:'25px', fontFamily:''}} ><i  className="fa fa-phone-square"/>(+256)759117989</ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent style={{fontSize:'25px', fontFamily:''}} ><i className="fa fa-fax" />(+256)784490559</ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent style={{fontSize:'25px', fontFamily:''}} ><i className="fa fa-envelope" />galiwango.fahad@gmail.com</ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent icon="person"style={{fontSize:'30px', fontFamily:''}} >SkypeId</ListItemContent>
              </ListItem>
            </List>
            </div>

          </Cell>
        </Grid>
      </div>
    )
  }
}
