import { useState } from "react";
import { useForm } from "react-hook-form";
import { login } from "../api/authApi";
import { toast } from "sonner";

export function useLoginForm() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm({
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
