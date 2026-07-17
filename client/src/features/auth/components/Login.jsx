import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { login } from "../api/authApi";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await login(data);

      localStorage.setItem("token", response.token);

      console.log(response);

      alert("Login Successful");
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <div className="grid min-h-screen lg:grid-cols-2">
        <div className="flex items-center justify-center px-12">
          <div className="w-full max-w-xl">
            <h1 className="text-6xl font-bold text-[#000000]">
              Welcome to our website
            </h1>

            <p className="mt-4 text-xl text-gray-700">
              Please login to your account
            </p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-16">
                <label className="mb-3 block text-xl font-semibold">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Email is required",
                  })}
                  className="h-16 w-full rounded-2xl border border-gray-300 bg-[#EEF3FF] px-6 text-lg outline-none focus:border-[#000000]"
                />

                {errors.email && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="mt-8">
                <label className="mb-3 block text-xl font-semibold">
                  Password
                </label>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    {...register("password", {
                      required: "Password is required",
                    })}
                    className="h-16 w-full rounded-2xl border border-gray-300 bg-[#EEF3FF] px-6 pr-14 text-lg outline-none focus:border-[#000000]"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500"
                  >
                    {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                  </button>
                </div>

                {errors.password && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}

                <div className="mt-3 flex justify-end">
                  <button
                    type="button"
                    className="text-[#000000] hover:underline"
                  >
                    Forgot Password?
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="mt-12 h-16 w-full rounded-2xl bg-[#000000] text-2xl font-bold text-white transition hover:bg-[#000000]"
              >
                Sign in
              </button>
            </form>

            <p className="mt-8 text-center text-gray-500">
              Don't have an account?{" "}
              <span className="cursor-pointer font-semibold text-[#b2952d]">
                Sign-up
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
