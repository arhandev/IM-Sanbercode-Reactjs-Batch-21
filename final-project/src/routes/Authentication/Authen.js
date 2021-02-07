import axios from 'axios'
import React, {useEffect, useContext, useState} from 'react'
import {UserContext} from '../../context/UserContext'
import { Form, Input, Button } from 'antd';
import { Tabs } from 'antd';
import { Typography } from 'antd';
// bikin required field

const { TabPane } = Tabs;
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

function Authen({history}) {
    const [user, setUser] = useContext(UserContext)
    const [input, setInput] = useState({email: '', password:'', name: ''})
    const [note, setNote] = useState(null)

    const login = () =>{
        console.log(input)
        axios.post("https://backendexample.sanbersy.com/api/user-login", {
        email: input.email, 
        password: input.password
        })
        .then((response) =>{
            setUser(response.data)
            localStorage.setItem("Authorization", JSON.stringify(response.data))
            setInput({email: '', password:'', name: ''})
            history.push('/')
        })
        .catch((error) =>{
            alert(error.message)            }
        )
    }

    const register = () => {
        console.log(input)
        axios.post("https://backendexample.sanbersy.com/api/register", {
        email: input.email, 
        name: input.name,
        password: input.password
        })
        .then((response) =>{
            setUser(response.data)
            localStorage.setItem("Authorization", JSON.stringify(response.data))
            history.push('/')
            setInput({email: '', password:'', name: ''})
        })
        .catch((error) =>{
            alert(error.message)
            }
        )
    }

    const changeHandler = (e) =>{
        switch (e.target.name){
            case "email":{
                setInput({...input, email: e.target.value})
                break;
            }
            case "password":{
                setInput({...input, password: e.target.value})
                break;
            }
            case "name":{
                setInput({...input, name: e.target.value})
                break;
            }
            default:
                break;
            
        }
    }


    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    return (
        <div className="authen" style={{height: "100vh"}}>
              <Tabs type="card" style={{margin: "5rem 15rem", backgroundColor: "white"}}>
                <TabPane tab={<Title level={4}>Login</Title>} key="1">
                            <div>
                                <Form
                        {...layout}
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={login}
                        onFinishFailed={onFinishFailed}
                        style={{marginTop: "3rem"}}
                        >
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                            ]}
                        >
                            <Input name="email" onChange={changeHandler}/>
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                            ]}
                        >
                            <Input.Password name="password" onChange={changeHandler}/>
                        </Form.Item>


                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                Login
                            </Button>
                        </Form.Item>
                        </Form>
                    </div>
                </TabPane>
                <TabPane tab={<Title level={4}>Register</Title>} key="2">
                <div>
                    <Form
                        style={{marginTop: "2rem"}}
                        {...layout}
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={register}
                        onFinishFailed={onFinishFailed}
                        >
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                            ]}
                        >
                            <Input name="email" onChange={changeHandler}/>
                        </Form.Item>

                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                            ]}
                        >
                            <Input name="name" onChange={changeHandler}/>
                        </Form.Item>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                            ]}
                        >
                            <Input.Password name="password" onChange={changeHandler}/>
                        </Form.Item>


                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                Register
                            </Button>
                        </Form.Item>
                        </Form>
                    </div>
                </TabPane>
            </Tabs>,
        
        </div>
    )
}

export default Authen
