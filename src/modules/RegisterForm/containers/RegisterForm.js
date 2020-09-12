import {withFormik} from "formik";

import RegisterForm from "../components/RegisterForm"

export default withFormik({
    mapPropsToValues: () => ({ email: '' }),

    // Custom sync validation
    validate: values => {
        let errors = {};
        if (!values.email) {
            errors.email = 'Գրեք Էլ-փոստը';
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                values.email
            )
        ) {
            errors.email = 'Invalid email address';
        }

        if(!values.password){
            errors.password = 'Գրեք գաղտնաբառը';
        }
        else if (!/(?=.*[a-zA-Z0-9])/i.test(
            values.password
        )){
            values.password = "Գաղտնաբառը պետք է լինի ..."
        }

        return errors;
    },

    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },

    displayName: 'BasicForm', // helps with React DevTools
})(RegisterForm);