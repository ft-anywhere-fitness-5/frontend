import React, { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import styled from "styled-components";

// form that takes 'username', 'password and role (radio or dropdown with value of 'client' or 'instructor')
const Signup = () => {
    const initialState = {
        username: "",
        password: "",
        role:'client'
      };
      const [credentials, setCredentials] = useState(initialState);
      const history = useHistory();
      const submitHandler = (e) => {
        e.preventDefault();
        axios
          .post(
            "https://ft-anywhere-fitness-5.herokuapp.com/api/auth/register",
            credentials
          )
          .then((resp) => {
            console.log(resp.data);
            history.push("/homepage");
            // axios.post(
            //     "https://ft-anywhere-fitness-5.herokuapp.com/api/auth/login",
            //     credentials
            //     )
            //     .then((resp) => {
            //     localStorage.setItem("token", resp.data.token);
            //     localStorage.setItem('role', resp.data.user.role);
            //     console.log(resp.data);
            //     history.push("/classlist");
            //     })
            //     .catch((err) => {
            //         console.log(err);
            //     });
          })
          .catch((err) => {
            console.log(err);
          });
      };
    
      const onChange = (evt) => {
        const { name, value } = evt.target;
        setCredentials({
          ...credentials,
          [name]: value,
        });
      };
    
      return (
        <Container>
          <form onSubmit={submitHandler}>
            <Inputext>
              <div>
                <h2> Signup</h2>
              </div>
            </Inputext>
            <Input>
              <label>
                Username&nbsp;
                <input
                  value={credentials.username}
                  onChange={onChange}
                  name="username"
                  type="text"
                />
              </label>
              <label>
                Password
                <input
                  value={credentials.password}
                  onChange={onChange}
                  name="password"
                  type="password"
                />
              </label>
              <select name='role' value={credentials.role} onChange={onChange}>
                <option >client</option>
                <option >instructor</option>
              </select>
            </Input>
            <InputSubmit>
              <input type="submit" />
            </InputSubmit>
          </form>
        </Container>
      );
    }

export default Signup;

const Container = styled.div`
  align-items: center;
  justify-content: center;
  background-color: white;
  border: blue 5px dotted;
  border-radius: 3%;
  width: 50%;
  margin: 0 auto;
`;

const Input = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3%;
  line-height: 5;
`;

const InputSubmit = styled.div`
  width: 50%;
  margin-bottom: 30px;
  margin-left: 411px;
`;

const Inputext = styled.div`
  width: 100%;
  height: 40px;
  padding: 10px;
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
  border-width: 1;
  border-color: black;
  margin-bottom: 10px;
`;

