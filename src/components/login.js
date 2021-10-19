import React,{useState} from "react";

export default function Login(props) {
  const initialState = {
    username:'',
    password:''
  }
  const [credentials, setCredentials]= useState(initialState)

  const submitHandler = (e) => {
    e.preventDefault();
    //when we have auth
    // axios.post("", credentials)
    //   .then(resp => {
    //     localStorage.setItem("token", resp.data.token);
    //     localStorage.setItem("role", resp.data.role);
    //     localStorage.setItem("username", resp.data.username);
        
    //     this.props.history.push('/protected');
    //   })
    //   .catch(err=> {
    //     console.log(err);
    //   })
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
            type='text'
          />
        </label>
        <input type='submit'/>
        </div>
</div>
    </form>
  );
}

