import { useContext, useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";

const Login = () => {
  const [ currentState, setCurrentState] = useState("Sign Up");
  const { setToken, navigate, backendUrl } = useContext(ShopContext);
  const [ visiblePassword, setVisiblePassword ] = useState(false);
  const [ name, setName ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ errorMessage, setErrorMessage ] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setErrorMessage(""); // Clear previous errors

    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(backendUrl + "api/user/register", {
          name,
          email,
          password,
        });
        console.log(response.data);
        setCurrentState("Login"); // After signup, switch to login
      } else {
        const response = await axios.post(backendUrl + "api/user/login", {
          email,
          password,
        });
        console.log(response.data);
        setToken(response.data.token); // Save token
        navigate("/"); // Redirect after login
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(
        error.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {errorMessage && (
        <div className="text-red-500 text-sm text-center">{errorMessage}</div>
      )}

      {currentState === "Login" ? null : (
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg h-12"
          type="text"
          placeholder="Name"
          required
        />
      )}

      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg h-12"
        type="email"
        placeholder="Email"
        required
      />

      <div className="flex items-center w-full px-3 py-2 border border-gray-300 rounded-lg h-12">
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type={visiblePassword ? "text" : "password"}
          className="flex items-center w-full px-3 py-2"
          placeholder="Password"
          required
        />
        <div
          onClick={() => setVisiblePassword(!visiblePassword)}
          className="ml-2 cursor-pointer text-xl text-gray-600"
        >
          {visiblePassword ? <FaRegEyeSlash /> : <FaRegEye />}
        </div>
      </div>

      <div className="flex justify-between w-full text-sm mt-[-8px]">
        <p
          onClick={() => navigate("/forgot-password")}
          className="cursor-pointer text-blue-500"
        >
          Forgotten Password?
        </p>
        {currentState === "Login" ? (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="cursor-pointer text-blue-500"
          >
            Create account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className="cursor-pointer text-blue-500"
          >
            Login
          </p>
        )}
      </div>

      <button
        type="submit"
        className="bg-black text-white font-light px-8 py-2 mt-4 rounded-lg hover:bg-gray-900 transition duration-200"
      >
        {currentState === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
