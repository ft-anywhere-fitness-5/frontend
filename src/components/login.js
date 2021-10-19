import React,{useState} from "react";
import { useHistory } from "react-router";
import axios from "axios";

export default function Login(props) {
  const initialState = {
    username:'',
    password:''
  }
  const [credentials, setCredentials]= useState(initialState)
  const history = useHistory()
  const submitHandler = (e) => {
    e.preventDefault();
    axios.post('https://ft-anywhere-fitness-5.herokuapp.com/api/auth/login'
      , credentials)
      .then(resp => {
        localStorage.setItem("token", resp.data.token);
        //localStorage.setItem("role", resp.data.role);
        localStorage.setItem("username", resp.data.username);
        console.log(resp.data)
        history.push('/classlist');
      })
      .catch(err=> {
        console.log(err);
      })
  };


  const onChange = evt => {
    const { name, value } = evt.target
    setCredentials({
      ...credentials,
      [name]: value
    })
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <h2> Login</h2>

        <div>
        <label>Username&nbsp;
          <input
            value={credentials.username}
            onChange={onChange}
            name='username'
            type='text'
          />
        </label>
        <label>Password
          <input
            value={credentials.password}
            onChange={onChange}
            name='password'
            type='password'
          />
        </label>
        <input type='submit'/>
        </div>
</div>
    </form>
  );
}

