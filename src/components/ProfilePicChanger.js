import React, {Component} from "react";
import {Modal, Button} from 'antd';
import 'antd/dist/antd.css'
import Layout from "./Layout";
import getUser from "../utils/get-user";


class ProfilePicChanger extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            visible: false,
            imagesarray: [props.pic1]
        }
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    handleOk = e => 
    {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e =>{
        console.log(e);
        this.setState({
            visible: false,
        });
    };
  render()
  {
      const imageMapper = this.state.imagesarray.map((image,index) => {
          return (
              <img src = {image} 
              onClick = {() => this.props.handleImageChange(image)}
              height = "48px"
              />
          )
      })
  return (
      <div>
<Button type="primary" onClick={this.showModal}>
        Change Profile Picture
      </Button>
      <Modal title="Profile Picture" visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}>
        {imageMapper}
      </Modal>{" "}
      </div>
  );
  }
}
export default ProfilePicChanger;
/*
<h1>Hello {user.fullName}!</h1>
        <div>
          Here's what this app knows about you based on your Google login:
        </div>
        <pre>{JSON.stringify(user, null, "\t")}</pre>
        <div>
          Your name is "{user.fullName}" and your email is "{user.email}."
        </div>
        <div>Google also thinks you'll like this picture :)</div>
        <br />
        <Doggo src={DoggoImg} />
        */