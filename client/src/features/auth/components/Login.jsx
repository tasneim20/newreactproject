import { Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useLoginForm } from "../hooks/useLoginForm";
import { Label } from "@/components/ui/label";
import {
  inputStyle,
  passwordInputStyle,
  buttonStyle,
  labelStyle,
  errorStyle,
  forgotPasswordStyle,
} from "../styles/loginStyles";

function Login() {
  const {
    loading,
    showPassword,
    setShowPassword,
    control,
    handleSubmit,
    formState: { errors },
    onSubmit,
  } = useLoginForm();

  return (
    <div className="min-h-screen bg-[#E9E9E3]">
      <div className="grid min-h-screen lg:grid-cols-2">
        <div className="flex items-center justify-center px-12">
          <div className="w-full max-w-xl">
            <h1 className="text-6xl font-bold text-[#3E3E3D]">
              Welcome to our website
            </h1>

            <p className="mt-4 text-xl text-gray-700">
              Please login to your account
            </p>

            <form noValidate onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-16">
                <Label htmlFor="email" className={labelStyle}>
                  Email
                </Label>

                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <Input
                      id="email"
                      type="text"
                      placeholder="Enter your email"
                      {...field}
                      className={inputStyle}
                    />
                  )}
                />

                {errors.email && (
                  <p className={errorStyle}>{errors.email?.message}</p>
                )}
              </div>

              <div className="mt-8">
                <Label htmlFor="password" className={labelStyle}>
                  Password
                </Label>

                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <div className="relative w-full">
                      <Input
                        {...field}
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className={passwordInputStyle}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#4D6B59]"
                      >
                        {showPassword ? (
                          <EyeOff size={22} />
                        ) : (
                          <Eye size={22} />
                        )}
                      </button>
                    </div>
                  )}
                />

                {errors.password && (
                  <p className={errorStyle}>{errors.password?.message}</p>
                )}

                <div className="mt-3 flex justify-end">
                  <button type="button" className={forgotPasswordStyle}>
                    Forgot Password?
                  </button>
                </div>
              </div>

              <Button type="submit" disabled={loading} className={buttonStyle}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Logging in...
                  </>
                ) : (
                  "Login"
                )}{" "}
              </Button>
            </form>

            <p className="mt-8 text-center text-gray-500">
              Don't have an account?{" "}
              <span className="cursor-pointer font-semibold text-[#4D6B59]">
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
