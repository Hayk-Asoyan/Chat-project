import React from 'react';

import {Form,  Input} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import {Button, Block} from "../../../components";
import {Link} from "react-router-dom";

import ExclamationCircleTwoTone from "@ant-design/icons/lib/icons/ExclamationCircleTwoTone";



const RegisterForm = ()=> {
const success = false
        const [form] = Form.useForm();

        const onFinish = values => {
            console.log('Received values of form: ', values);
        };

        return (
           <div> <div className="auth_top">
               <h2>Գրանցվել</h2>
               <p>Խնդրում ենք գրանցվել</p>
           </div>
<Block>

    {!success? <Form
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
            residence: ['zhejiang', 'hangzhou', 'xihu'],
            prefix: '86',
        }}
        scrollToFirstError
    >
        <Form.Item

            name="email"

            rules={[
                {
                    type: 'email',
                    message: 'Խնդրում ենք մուտքագրել Էլ-փոստը!',
                },
                {
                    required: true,
                    message: 'Խնդրում ենք մուտքագրել Էլ-փոստը!',
                },
            ]}
        >
            <Input placeholder="Էլ-փոստ" size="large"/>
        </Form.Item>

        <Form.Item
            name="password"

            rules={[
                {
                    required: true,
                    message: 'Խնդրում ենք մուտքագրել Գաղտնաբառը!',
                },
            ]}
            hasFeedback
        >
            <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Գաղտնաբառ" size="large" />
        </Form.Item>

        <Form.Item
            name="confirm"

            dependencies={['password']}
            hasFeedback
            rules={[
                {
                    required: true,
                    message: 'Խնդրում ենք Հաստատել Գաղտնաբառը!',
                },
                ({ getFieldValue }) => ({
                    validator(rule, value) {
                        if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                        }
                        return Promise.reject('Երկու գաղտնաբառերը, որոնք դուք ներկայացրել եք, չեն համընկնում!');
                    },
                }),
            ]}
        >
            <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Հաստատել Գաղտնաբառը" size="large"/>
        </Form.Item>

        <Form.Item
            name="nickname"

        >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder=" Մականուն" size="large"/>
        </Form.Item>


        <Form.Item>
            <Button type="primary" htmlType="submit">
                Գրանցվել
            </Button>
            Կամ <Link to="/login" >Մուտք գործել</Link >
        </Form.Item>
    </Form> : <div className="success_block">
        <div>
            <ExclamationCircleTwoTone style={{ fontSize: '46px', color: '#08c' }} />
        </div>
        <h2>Հաստտատեք Ձեր հաշիվը</h2>
        <p>Ձեր Էլ-փոստին ուղարկվել է հաստատման նամակ, խնդրում ենք հաստատել</p>

    </div>}

</Block>
           </div>
        );
}

export default RegisterForm;