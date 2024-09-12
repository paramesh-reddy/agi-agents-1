import eye from "../../assets/svg/eye-fill.svg";
import eye2 from "../../assets/svg/eye-slash.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import axios from "axios";
import LinearWithValueLabel from "../../components/loader";
import bg from "../../assets/images/login.jpeg";
const baseURL = "https://otamat.com/api";
export const Register = () => {
  const [loading, setLoading] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const navigate = useNavigate();
  const Register = (event) => {
    setLoading(true)
    event.preventDefault()
    var formData = new FormData();
    formData.append('username', userName);
    formData.append('email', email);
    formData.append('password1', password);
    formData.append('password2', password2);
    axios
      .post(`${baseURL}/register`, formData)
      .then((response) => {
        setLoading(false)
        if (response.data == "Success") {
          navigate('/auth/login')
        } else {
          // setError(response.data)
        }
      })
      .catch((err) => {
        // setError(err.data)
        setLoading(false)
        console.log(err)
      })
  }
  return (
    <div className="container-fluid row m-0 p-0" style={{ background: "#FFF" }}>
      <div className="col-md-6 col-xs-12 col-sm-12 text-center pt-lg-5 mt-lg-5">
        <div className="pt-5"></div>
        <div
          className="row mt-3"
          style={{
            height: "60vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="col-md-9 col-lg-9 col-sm-12 col-xs-12 mx-auto">
            <h2 className="mb-1">{"Sign up"}</h2>
            <form
              onSubmit={(event) => Register(event)}
              className="pr-lg-5 pl-lg-5"
            >
              <div
                className="form-group d-flex flex-column"
                style={{ textAlign: "start" }}
              >
                <label className="label2 fs13 ">{"UserName"}*</label>
                <input
                  style={{ borderRadius: "40px" }}
                  type="text"
                  className="form-control border"
                  id="userName"
                  name="userName"
                  autoComplete="off"
                  value={userName}
                  required
                  onChange={(e) => setUsername(e.target.value)}
                  // onFocus={() => setMessage("")}
                />
              </div>
              <div
                className="form-group d-flex flex-column"
                style={{ textAlign: "start" }}
              >
                <label className="label2 fs13 ">{"Email"}*</label>
                <input
                  style={{ borderRadius: "40px" }}
                  type="email"
                  className="form-control border"
                  id="email"
                  name="email"
                  autoComplete="off"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  // onFocus={() => setMessage("")}
                />
              </div>

              <div
                className="form-group d-flex flex-column mt-3"
                style={{ textAlign: "start" }}
              >
                <label className="label2 fs13 ">{"Password"}*</label>
                <input
                  style={{ borderRadius: "40px" }}
                  type={toggle2 ? "text" : "password"}
                  className="form-control border"
                  id="password"
                  name="password"
                  value={password}
                  // maxLength={16}
                  // minLength={8}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  // onFocus={() => setMessage("")}
                />

                <div className="relative">
                  <img
                    className="eye3"
                    src={toggle2 ? eye2 : eye}
                    onClick={() => setToggle2(!toggle2)}
                    alt="Logo"
                  />
                </div>
                {/* {validator.current.message(
                    "Password",
                    password,
                    "required|password"
                  )} */}
                {/* <span className="error-message">{message}</span> */}
              </div>
              <div
                className="form-group d-flex flex-column mt-3"
                style={{ textAlign: "start" }}
              >
                <label className="label2 fs13 ">{" confirm Password"}*</label>
                <input
                  style={{ borderRadius: "40px" }}
                  type={toggle2 ? "text" : "password"}
                  className="form-control border"
                  id="password2"
                  name="password2"
                  value={password2}
                  // maxLength={16}
                  // minLength={8}
                  required
                  onChange={(e) => setPassword2(e.target.value)}
                  // onFocus={() => setMessage("")}
                />

                <div className="relative">
                  <img
                    className="eye3"
                    src={toggle2 ? eye2 : eye}
                    onClick={() => setToggle2(!toggle2)}
                    alt="Logo"
                  />
                </div>
                {/* {validator.current.message(
                    "Password",
                    password,
                    "required|password"
                  )} */}
                {/* <span className="error-message">{message}</span> */}
              </div>
              <div
                style={{
                  fontSize: "14px",
                  color: "red",
                  display: "flex",
                  justifyContent: "flex-start",
                  marginTop: "4px",
                }}
              >
                {/* {error} */}
              </div>

              <button
                className="font-weight-bold text-uppercase w-100 text-white border-0 login2"
                style={{
                  background: "rgb(72, 136, 200)",
                  borderRadius: "40px",
                  height: "40px",
                }}
                type={loading ? "button" : "submit"}
                disabled={loading}
              >
                {loading ? "Logging in..." : "Register"}{" "}
                {loading ? <LinearWithValueLabel size={"1"} /> : null}
              </button>
            </form>
            <div className="account2 mt-2">{"Already Have An Account?"}</div>
            <Link to="/auth/login" className="text-decoration-none register2">
              <span> {"login"}</span>
            </Link>
          </div>
        </div>
      </div>
      <div
        className="col-md-6 pt-4 pb-4"
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* <h5 className="text-white font-weight-bold mt-2" style={{ fontSize: '5.8rem', width: '600px' }}>
          Design the room of your dreams
        </h5> */}
      </div>
    </div>
  );
};
