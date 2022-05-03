import React from "react";
import { Link } from "react-router-dom";
import "./SignupInputs.css";
function SignupInputs() {
  return (
    <div>
      <div className="Signup-Form">
        <h3> Signup Page</h3>
        <form>
          <label>
            <input
              class="input__field"
              type="text"
              name="name"
              placeholder="Name"
              required
            />
          </label>

          <label>
            <input
              class="input__field"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </label>
          <label>
            <input
              class="input__field"
              type="tel"
              name="telnumber"
              inputmode="numeric"
              pattern="[0-9]*"
              placeholder="Phone Number"
              required
            />
          </label>
          <label>
            <input
              class="input__field"
              type="password"
              name="input password"
              placeholder="Password"
              required
              minlength="6"
            />
          </label>

          <label>
            <input
              class="input__field"
              type="submit"
              name="input submit"
              required
            />
          </label>
        </form>
        <h4>
          Already member ?<Link to="/LoginPage"> Login</Link> here
        </h4>
      </div>
    </div>
  );
}

export default SignupInputs;
