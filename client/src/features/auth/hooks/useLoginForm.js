import { useState } from "react";
import { useForm } from "react-hook-form";
import { login } from "../api/authApi";
import { toast } from "sonner";
import { loginSchema } from "../utils/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export function useLoginForm() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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

      toast.success("Login Successful");
    } catch (error) {
      console.log("ERROR:", error);
      console.log("RESPONSE:", error.response);
      console.log("DATA:", error.response?.data);

      toast.error(error.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
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
