import axios from 'axios'
import React, { Component } from 'react'
import { UserContext } from '../../context/UserContext'
import { Form, Input, Button } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;
const layout = {
    labelCol: {
      span: 7,
    },
    labelRow:{
        span:7
    },
    wrapperCol: {
      span: 10,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 7,
      span: 16,
    },
  };

class ChangePassword extends Component {

    static contextType = UserContext


    constructor(props){
        super(props)
        this.state={
            current_password: '',
            new_password: '',
            confirm_password: ''
        }
    }

    submitData = (e) =>{
        axios.post("https://backendexample.sanbersy.com/api/change-password", {
            current_password: this.state.current_password,
            new_password: this.state.new_password,
            confirm_password: this.state.confirm_password
        },{
            headers:{
                "Authorization": `Bearer ${this.context[0].token}`
            }
        })
        .then(() =>{
            console.log("hehe")
            alert("Password Changed")
        })
        .catch((error) =>{
            alert(`Something went wrong or error. ${error.message}`)
        })
    }

    changeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value});
      }
    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    render() {
        return (
            <div style={{marginTop: "5rem", height: "100vh"}}>
                <Form
                        style={{marginTop: "2rem", backgroundColor: "white"}}
                        {...layout}
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={this.submitData}
                        onFinishFailed={this.onFinishFailed}
                        >
                        <Title level={3} style={{marginLeft:"18rem", marginBottom:"2rem"}}>Change Password</Title>
                        <Form.Item
                            label="Current Password"
                            name="current_password"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your Current Password!',
                            },
                            ]}
                        >
                            <Input.Password name="current_password" onChange={this.changeHandler}/>
                        </Form.Item>

                        <Form.Item
                            label="New Password"
                            name="new_password"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your New Password!',
                            },
                            ]}
                        >
                            <Input.Password name="new_password" onChange={this.changeHandler}/>
                        </Form.Item>
                        <Form.Item
                            label="Confirm Password"
                            name="confirm_password"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your Confirm Password!',
                            },
                            ]}
                        >
                            <Input.Password name="confirm_password" onChange={this.changeHandler}/>
                        </Form.Item>


                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                Change Password
                            </Button>
                        </Form.Item>
                        </Form>
            </div>
        )
    }
}

export default ChangePassword
