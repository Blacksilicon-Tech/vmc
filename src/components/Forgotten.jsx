import { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = (e) => {
    e.preventDefault();

    // Simulate sending reset email (you'll replace with real API later)
    if (email) {
      setMessage('Reset link sent to your email!');
      setEmail(''); // Clear email input
    } else {
      setMessage('Please enter a valid email address.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-semibold mb-6 text-gray-800">Forgot Password</h1>

      <form
        onSubmit={handleResetPassword}
        className="flex flex-col gap-4 bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
          required
        />
        <button
          type="submit"
          className="bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition duration-200"
        >
          Send Reset Link
        </button>

        {message && (
          <p className="text-center text-green-600 mt-2">{message}</p>
        )}
      </form>
    </div>
  );
};

export default ForgotPassword;
