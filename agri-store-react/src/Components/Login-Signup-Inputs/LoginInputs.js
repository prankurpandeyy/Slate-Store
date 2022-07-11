import React from "react";
import { Link } from "react-router-dom";
import { useLoginContext } from "../Context/LoginPageContext";
import "./LoginInputs.css";

function LoginInputs() {
  const { state, dispatch, loginHandler } = useLoginContext();

  return (
    <div>
      <h3 className="login-page-title"> Login Page</h3>
      <div className="Login-Form">
        <div class="form-control">
          <img
            src="https://raw.githubusercontent.com/iprankurpandey/github-imagehosting/main/undraw_secure_login_pdn4.svg"
            alt="user"
            className="user-icon"
          />
          <form onSubmit={loginHandler}>
            <label>
              <input
                class="input__field"
                type="email"
                name="email"
                placeholder="Email"
                required
                onChange={(e) =>
                  dispatch({ type: "EMAIL", payload: e.target.value })
                }
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
                onChange={(e) =>
                  dispatch({ type: "PASSWORD", payload: e.target.value })
                }
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
          <h4 className="login-instruction">
            Not a member ?<Link to="/SignupPage"> Signup</Link> here
          </h4>
        </div>
      </div>
    </div>
  );
}

export default LoginInputs;
