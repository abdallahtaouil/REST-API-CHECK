import React from 'react'
import './Register.css'
const Register = () => {
  return (
    <>
  <link
    href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600"
    rel="stylesheet"
    type="text/css"
  />
  <link
    href="//netdna.bootstrapcdn.com/font-awesome/3.1.1/css/font-awesome.css"
    rel="stylesheet"
  />
  <div className="testbox">
    <h1>Registration</h1>
    <form action="/">
      <hr />
      <div className="accounttype">
        <input
          type="radio"
          defaultValue="None"
          id="radioOne"
          name="account"
          defaultChecked=""
        />
        <label htmlFor="radioOne" className="radio" chec="">
          Personal
        </label>
        <input type="radio" defaultValue="None" id="radioTwo" name="account" />
        <label htmlFor="radioTwo" className="radio">
          Company
        </label>
      </div>
      <hr />
      <label id="icon" htmlFor="name">
        <i className="icon-envelope " />
      </label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Email"
        required=""
      />
      <label id="icon" htmlFor="name">
        <i className="icon-user" />
      </label>
      <input type="text" name="name" id="name" placeholder="Name" required="" />
      <label id="icon" htmlFor="name">
        <i className="icon-shield" />
      </label>
      <input
        type="password"
        name="name"
        id="name"
        placeholder="Password"
        required=""
      />
      <div className="gender">
        <input
          type="radio"
          defaultValue="None"
          id="male"
          name="gender"
          defaultChecked=""
        />
        <label htmlFor="male" className="radio" chec="">
          Male
        </label>
        <input type="radio" defaultValue="None" id="female" name="gender" />
        <label htmlFor="female" className="radio">
          Female
        </label>
      </div>
      <p>
        By clicking Register, you agree on our{" "}
        <a href="#">terms and condition</a>.
      </p>
      <a href="#" className="button">
        Register
      </a>
    </form>
  </div>
</>

  )
}

export default Register