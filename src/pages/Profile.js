
import React, {Component} from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import 'antd/dist/antd.css'
import {Avatar} from 'antd';
import Layout from "../components/Layout";
import getUser from "../utils/get-user";
import ProfilePicChanger from "../components/ProfilePicChanger"
import Pic1 from "../images/doggo.jpg"
import {Calendar, momentLocalizer} from "react-big-calendar";
import moment from "moment";
import ModifyProfile from "../components/ModifyProfile";
import "react-big-calendar/lib/css/react-big-calendar.css";
moment.locale("en-GB");
const localizer = momentLocalizer(moment);
const myEventsList = {}
class Profile extends Component{
  constructor(props)
  {
    super(props);
    this.state = {
      profileImage: ''
    }
  }
  handleImageChange = (profileImage) =>
  {
    this.setState({
      profileImage
    })
  }
  componentDidMount()
  {

  }

  render()
  {
  const user = getUser();
  return (
      <Layout user={user}>
        <div >
          <h1 style={{
          position: 'absolute', left: '50%', top: '10%',
          transform: 'translate(-50%, -0%)'
      }}> Hello {user.fullName}!
      </h1>

          <Avatar size = {128} icon="user" src={this.state.profileImage}/>
          <ProfilePicChanger handleImageChange={this.handleImageChange} pic1={Pic1}/>
          </div>

      <ModifyProfile />

      </Layout>
    );
  };
}
export default Profile;