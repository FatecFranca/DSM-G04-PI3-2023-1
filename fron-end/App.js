import "./App.css";
import {Formik, From, Field, ErrorMessage} from "Formik";
import * as yup from "yup";

function App(){
    return(
        <div className="container">
        <h1>Login</h1>
        <Formik initialValues={{}}>            
            <Form className="login-form">
                <div className="login-form-grup">
                    <Field name="email" className="form-field"
                    placeHolder="Email" />

                    <ErrorMessage
                        component="span"
                        name="email"
                        className="form-error"
                    />
                </div>
            </Form>
        </Formik>
    </div>
    )
    
}