import React from "react";
import { Link } from "react-router-dom";
import "./LoginInputs.css";
function LoginInputs() {
  return (
    <div>
      <div className="Login-Form">
        <h3> Login Page</h3>
        <form>
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
          Not a member ?<Link to="/SignupPage"> Signup</Link> here
        </h4>
      </div>
    </div>
  );
}

export default LoginInputs;
