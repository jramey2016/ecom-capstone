import { useState } from 'react';

const defaultformFields = {
    displayName: '',
    email: '',
    password: '',
    confirmpassword: ''
}


const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultformFields);
    const {displayName, email, password, confirmpassword} = formFields;

    
    const handleChange = (event => {
        const { name, value } = event.target;
        setFormFields({...formFields,[name]: value});
    })
    return(
        <div>
            <h1>Sign Up with your email and password</h1>
            <form onSubmit={() => {}}>
                <label>Display Name</label>
                <input type = 'text' required onChange={handleChange} name='displayName' value={displayName}/>

                <label>Email</label>
                <input type = 'email' required onChange={handleChange} name='email' value={email}/>

                <label>Password</label>
                <input type= 'password' required onChange={handleChange} name='password' value={password}/>

                <label>Confirm Password</label>
                <input tpye = 'password' required onChange={handleChange} name='confirmpassword' value={confirmpassword}/>
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm;