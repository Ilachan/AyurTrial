import React from 'react';
import useForm from './useForm';
import validate from './validateInfo';
import "./SignIn.css";


const SignIn = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors }
    = useForm(
      submitForm,
      validate
    );

  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Login to your account!
        </h1>
        <div className="form-inputs">
          <label
            htmlFor="username"
            className="form-label">
            Username
          </label>
          <input
            id="username"
            type="text"
            name='username'
            className="form-input"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange} />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-inputs">
          <label
            htmlFor="email"
            className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            name='email'
            className="form-input"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange} />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label
            htmlFor="password"
            className="form-label">
            Password
          </label>
          <input
            id="password"
            type="password"
            name='password'
            className="form-input"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange} />
          {errors.password && <p>{errors.password}</p>}
        </div>

        <div>
          <button
            className="form-input-btn"
            type="submit">
            Sign In
            </button></div>
        <span className="form-input-login">
          Don't have an account?  <a href="#">Request Access</a></span>

      </form>
    </div>
  );

};

export default SignIn;
