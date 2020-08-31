import React, {Component} from 'react';
import {Checkbox, Form, Input} from "antd";
import {Link} from "react-router-dom";
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import {Button, Block} from "../../../components";


class Loginform extends Component {
    render() {
        return (
           <div> <div className="auth_top">
               <h2>Մուտք գործել</h2>
               <p>Խնդրում ենք մուտք գործել Ձեր հաշիվ</p>
           </div>
<Block>
               <Form
                   name="normal_login"
                   className="login-form"
                   initialValues={{
                       remember: true,
                   }}
                   // onFinish={onFinish}
               >
                   <Form.Item
                       hasFeedback validateStatus="success"
                       name="username"
                       rules={[
                           {
                               required: true,
                               message: 'Խնդրում ենք մուտքագրել Մուտքանունը!',
                           },
                       ]}
                   >
                       <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Մուտքանուն"
                              size="large"/>
                   </Form.Item>
                   <Form.Item
                       hasFeedback validateStatus="success"
                       name="password"
                       rules={[
                           {
                               required: true,
                               message: 'Խնդրում ենք մուտքագրել գաղտնաբառը!',
                           },
                       ]}
                   >
                       <Input
                           prefix={<LockOutlined className="site-form-item-icon"/>}
                           type="password"
                           placeholder="Գաղտնաբառ"
                           size="large"
                       />
                   </Form.Item>
                   <Form.Item>
                       <Form.Item name="remember" valuePropName="checked" noStyle>
                           <Checkbox>Հիշել ինձ</Checkbox>
                       </Form.Item>


                   </Form.Item>

                   <Form.Item>
                       <Button type="primary" htmlType="submit" className="login-form-button">
                           Մուտք գործել
                       </Button>
                       Կամ <Link to="/register" >Գրանցվել</Link >
                   </Form.Item>
               </Form>
</Block>
           </div>

        );
    }
}

export default Loginform;