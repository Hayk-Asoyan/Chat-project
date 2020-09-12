import React from 'react';

import {Form,  Input} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import {Button, Block} from "../../../components";
import {Link} from "react-router-dom";

import ExclamationCircleTwoTone from "@ant-design/icons/lib/icons/ExclamationCircleTwoTone";



const RegisterForm = props => {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isValid,
        isSubmitting
    } = props;
const success = false


        return (
           <div> <div className="auth_top">
               <h2>Գրանցվել</h2>
               <p>Խնդրում ենք գրանցվել</p>
           </div>
<Block>

    {!success? <Form onSubmit={handleSubmit}>
        <Form.Item validateStatus={!touched.email ? "" : errors.email ? "error": "success"} name="email" value={values.email} help={!touched.email ? "" : errors.email } hasFeedback>
            <Input placeholder="Էլ-փոստ" size="large"
                   onChange={handleChange}
                   onBlur={handleBlur}

            />
        </Form.Item>

        <Form.Item

            validateStatus={!touched.password ? "" : errors.password ? "error": "success"} name="password" value={values.password}
            help={!touched.password ? "" : errors.password }
            hasFeedback
        >
            <Input.Password prefix={<LockOutlined
                className="site-form-item-icon" />}
                            placeholder="Գաղտնաբառ"
                            size="large"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
            />
        </Form.Item>

        <Form.Item
            validateStatus={!touched.confirm ? "" : errors.confirm ? "error": "success"} name="confirm" value={values.confirm}
            dependencies={['password']}
            help={!touched.confirm ? "" : errors.confirm }
            hasFeedback

        >
            <Input.Password prefix={<LockOutlined className="site-form-item-icon" />}
                            placeholder="Հաստատել Գաղտնաբառը"
                            size="large"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}

            />
        </Form.Item>

        <Form.Item
            name="nickname"

        >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder=" Մականուն" size="large"/>
        </Form.Item>


        <Form.Item>
            { isSubmitting && !isValid && <span>Սխալ</span>}
            <Button onClick={handleSubmit} type="primary" htmlType="submit">
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