import './form.css'
import {Link} from 'react-router-dom'
const Form = () => {
    return ( 
        <>
        <h1 className="form-h1"><Link to="/">dolla</Link></h1>
        <div className="form">
            <form className="sign-in">
                <h3>Sign in to your account</h3>
                <div className="name-input">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Enter your name"/>
                
                
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Enter your Password"/>
                </div>
                <button type="submit">Submit</button>
                <small>Forget your password</small>
            </form>

        </div>
        </>
     );
}
 
export default Form;