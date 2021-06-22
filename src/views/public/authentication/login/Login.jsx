import React, {useState} from 'react';
import {toast} from 'react-toastify';
import { useHistory } from 'react-router-dom';
import firebase from '../../../../firebase';
import { Form, Button } from 'react-bootstrap';
import "./login.css";


export default function Login() {

    const [userData, setUserData] = useState({});
    
    let history = useHistory();

    const handleChange = (event) => {
        setUserData( {...userData, [event.target.name]: event.target.value });
    };
 

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(userData);
        if (isFormValid(userData)) {
            // this.setState({ errors: [], loading: true });
            firebase
                .auth()
                .signInWithEmailAndPassword(userData.email, userData.password)
                .then((signedInUser) => {
                    console.log(signedInUser);
                    toast.success('Sign in successful!');
                    history.push("/home");
                })
                .catch((err) => {
                    console.error(err);
                    // this.setState({
                    //     errors: this.state.errors.concat(err),
                    //     loading: false
                    // });
                    toast.error(err.message);
                });
        }
    };


    const isFormValid = ({ email, password }) => email && password;

    // const handleInputError = (errors, inputName) => {
    //   return errors.some((error) =>
    //     error.message.toLowerCase().includes(inputName)
    //   )
    //     ? 'error'
    //     : '';
    // };
  


    return (
        <>
            <div class="form">
                <div>
                    Sign in to  Equipes!
                </div>

                <Form.Group controlId="formBasicEmail" class="form-el">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"
                        onChange={handleChange} name='email' />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" class="form-el">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                        onChange={handleChange} name='password' />
                </Form.Group>

                <Button variant="primary" type="submit" class="form-el submit-btn" onClick={handleSubmit}>
                    Submit
                </Button>


                <br></br>
                <Form.Text className="text-muted" class="form-el">
                    Not an existing user? Click here to
                    <span onClick={() => { history.push("/register") }}>
                        {' '}<a>register</a>
                    </span>

                </Form.Text>
            </div>

        </>
    )
}