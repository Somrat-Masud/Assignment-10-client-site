import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import swal from "sweetalert";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { createUser, manageProfile } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const PhotoUrl = form.PhotoUrl.value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    console.log(name, email, password, PhotoUrl);
    createUser(email, password, PhotoUrl)
      .then((result) => {
        console.log(result.user);
        manageProfile(name, PhotoUrl);
        if (!passwordRegex.test(password)) {
          swal(
            "Password must contain at least 1 uppercase, 1 lowercase, and be at least 6 characters long."
          );

          return;
        }

        navigate(location?.state ? location.state : "/");
      })
      .reset()
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex justify-center items-center ">
      <div className=" p-8 rounded-lg mt-4 border bg-gray-100 shadow-2xl">
        <h2 className="text-3xl font-bold text-center mb-6">Register</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              className="w-full p-2 border rounded mt-1"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-2 border rounded mt-1"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              className="w-full p-2 border rounded mt-1"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700">PhotoUrl</label>
            <input
              type="text"
              name="PhotoUrl"
              className="w-full p-2 border rounded mt-1"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600"
          >
            Register
          </button>
        </form>

        <button className="w-full bg-red-500 text-white p-2 rounded mt-4 hover:bg-red-600">
          Login with Google
        </button>

        <Link to="/login" className="p-2 mt-4">
          All ready Have an Account?{" "}
          <span className="text-red-600 text-xl">Login</span>
        </Link>
      </div>
    </div>
  );
};

export default Register;
