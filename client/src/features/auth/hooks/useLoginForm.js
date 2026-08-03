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

      toast.success("Login Successful");
      navigate("/buildings", { replace: true });
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
