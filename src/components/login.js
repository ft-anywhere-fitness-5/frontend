import React from "react";

export default function login(props) {
    const {
      values,
      submit,
      change,
    } = props

  const submitHandler = (e) => {
    e.preventDefault();
    submit
  };


  const onChange = evt => {
    const { name, value } = evt.target
    change(name, value)
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <h2> Login</h2>

        <div>
        <label>Username&nbsp;
          <input
            value={values.username}
            onChange={onChange}
            name='username'
            type='text'
          />
        </label>
        <label>Password
          <input
            value={values.password}
            onChange={onChange}
            name='password'
            type='text'
          />
        </label>
        </div>
</div>
    </form>
  );
}

export default login;
