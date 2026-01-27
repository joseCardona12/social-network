import { ChangeEvent, useState } from "react";
import { authServiceF } from "../../../services/authService";
import { useModalMessage } from "../../../global-state/modalMessage";
import { useView } from "../../../global-state/view";

interface IFormData {
  email: string;
  password: string;
}
export const CURRENT_FORM_DATA: IFormData = {
  email: "",
  password: "",
};
export default function useLogin() {
  const [formData, setFormData] = useState<IFormData>(CURRENT_FORM_DATA);
  const [loading, setLoading] = useState<boolean>(false);
  const { setModalMessage } = useModalMessage();
  const { setView } = useView();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    if (!formData.email || !formData.password) return;
    event.preventDefault();
    setLoading(true);
    try {
      const result = await authServiceF.login(
        formData.email,
        formData.password,
      );
      localStorage.setItem(
        "user",
        JSON.stringify({
          token: result?.token,
          email: result?.data?.email,
          id: result?.data?.user?.id,
        }),
      );
      setView("dashboard");
    } catch (error: any) {
      console.log("error", error);
      setModalMessage({
        code: 0,
        color: "red",
        message: `${error?.message}`,
        state: true,
        title: "ERROR:",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return {
    formData,
    handleChange,
    handleSubmit,
    loading,
    setLoading,
  };
}
