import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import "./register.css";
import firebase from '../../../../firebase';
import {toast} from 'react-toastify';
import { useHistory } from 'react-router-dom';

export default function Register(){

    const [userData, setUserData] = useState({});
    
    let history = useHistory();

    const handleChange = (event) => {
        setUserData( {...userData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        if(userData.password != userData.passwordConfirmation){
            toast.error("Passwords do not match");
            return false;
        }
        event.preventDefault();
        firebase
            .auth()
            .createUserWithEmailAndPassword(userData.email, userData.password)
            .then((createdUser) => {
                console.log(createdUser);
                toast.success('Registration successful');
                history.push("/home");
            })
            .catch((err) => {
                console.error(err);
                toast.error(err.message);
            });
    };
    return (
        <>
            <div class="form">
                    <div>
                        Register for Equipes!
                    </div>

                    <Form.Group controlId="formBasicEmail" class="form-el">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" 
                        onChange={handleChange} name='email'/>
                        <Form.Text className="text-muted" class="form-el">
                            We'll never share your email with anyone else.

                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" class="form-el">
                        <Form.Label>Set Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"
                            onChange={handleChange} name='password'/>
                    </Form.Group>

                    <Form.Group controlId="formConfirmPassword" class="form-el">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"
                            onChange={handleChange} name='passwordConfirmation'/>
                    </Form.Group>

                    
                    <Button variant="primary" type="submit" class="form-el submit-btn" onClick={handleSubmit}>
                        Submit
                    </Button>


                    <br></br>
                    <Form.Text className="text-muted" class="form-el">
                        Already a user? Click here to  
                        <span onClick={()=>{history.push("/login")}}>
                            {' '}<a>login</a>
                        </span>

                    </Form.Text>
                    
                    
                
            </div>
        </>
    );
}
