
import {React,Component,useState, useEffect} from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import axios from 'axios';
import 'antd/dist/antd.css'
import {Avatar} from 'antd';
import Layout from "../components/Layout";
import getUser from "../utils/get-user";
import ProfilePicChanger from "../components/pchanger"
import Pic1 from "../images/doggo.jpg"
import {Calendar, momentLocalizer} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
moment.locale("en-GB");
const localizer = momentLocalizer(moment);
const myEventsList = {}

const Profile = (props) =>{
  const [profileImage,setprofileImage] = useState("");
  const [userinf,setuserinf] = useState([]);
  const user = getUser();
  const fetchInfo = async()=>{
    const {data} = await axios.get("/testapi/user")
    setuserinf(data);
  }
  console.log(userinf.at(0).fullName);
  useEffect(()=>{
    fetchInfo();
  },[])
  return (
    <Layout user={user}>
      <div >
        <h1 style={{
        position: 'absolute', left: '50%', top: '10%',
        transform: 'translate(-50%, -0%)'
    }}> Hello {userinf.at(0).fullName}!
    </h1>
    <h2 style={{
        position: 'absolute', left: '50%', top: '20%',
        transform: 'translate(-50%, -0%)'
    }}> Current Weight: {userinf.at(0).weight}
    </h2>

        <Avatar size = {128} icon="user" src={profileImage}/>
        <ProfilePicChanger handleImageChange={setprofileImage} pic1={Pic1}/>
    <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
      />    <h2 style={{
        position: 'absolute', left: '50%', top: '90%',
        transform: 'translate(-50%, -0%)'
    }}> Max days in a row: 120 <br></br>
        Current days in a row: 80
    </h2>
  );
        </div>
    </Layout>
  );
}
export default Profile;