import { useState } from "react";
import { useForm } from "react-hook-form";
import { login } from "../api/authApi";
import { toast } from "sonner";
import { loginSchema } from "../utils/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

export function useLoginForm() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const response = await login(data);

      localStorage.setItem("token", response.token);

      const expiry = Date.now() + 60 * 60 * 1000;
      localStorage.setItem("tokenExpiry", expiry.toString());

      toast.success("Login Successful");
      navigate("/buildings");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }

    if (Login) {
      Navigate("/Buldings");
    }
  };

  return {
    loading,
    showPassword,
    setShowPassword,
    onSubmit,
    ...form,
  };
}
