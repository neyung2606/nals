import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AxiosCreate } from "../../configs/axios";
import { AuthContext } from "../../context/auth.context";

type Data = {
  username: string;
  password: string;
};

const Form = () => {
  const { dispatchAuth } = useContext(AuthContext);
  const [errLogin, setErrLogin] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignIn = async (data: Data) => {
    const res = await AxiosCreate.post("login", data);
    if (res.data) {
      localStorage.setItem("access-token", res.data.token);
      dispatchAuth({ type: "LOGIN" });
      setErrLogin(false)
    }
    setErrLogin(true);
  };

  return (
    <>
      {errLogin && (
        <div className="invalid-feedback">
          <p>❌ Login failed! Please check your account!</p>
        </div>
      )}
      <form className="pt-3" onSubmit={handleSubmit(handleSignIn)}>
        <div className="form-group">
          <input
            type="text"
            className={`form-control form-control-lg ${
              errors?.username ? "border-danger" : ""
            }`}
            placeholder="Username"
            {...register("username", { required: true })}
          />
          {errors.username ? (
            <div className="invalid-feedback">
              <p>Username is required!</p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="form-group">
          <input
            type="password"
            className={`form-control form-control-lg ${
              errors?.password ? "border-danger" : ""
            }`}
            placeholder="Password"
            {...register("password", { required: true })}
          />
          {errors.password ? (
            <div className="invalid-feedback">
              <p>Password is required!</p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="mt-3">
          <button
            className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
            type="submit"
          >
            SIGN IN
          </button>
        </div>
        <div className="my-2 d-flex justify-content-between align-items-center">
          <div className="form-check">
            <label className="form-check-label text-muted">
              <input
                type="checkbox"
                className="form-check-input"
                style={{
                  opacity: 1,
                  width: "18px",
                  height: "18px",
                }}
              />
              Keep me signed in
            </label>
          </div>
          <Link to="#" className="auth-link text-black">
            Forgot password?
          </Link>
        </div>
        <div className="mb-2">
          <button
            type="button"
            className="btn btn-block btn-facebook auth-form-btn"
          >
            <i className="ti-facebook mr-2"></i>Connect using facebook
          </button>
        </div>
        <div className="text-center mt-4 font-weight-light">
          Don't have an account?{" "}
          <Link to="/register" className="text-primary">
            Create
          </Link>
        </div>
      </form>
    </>
  );
};

export default Form;
