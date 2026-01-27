import Button from "../../components/Button";
import FormField from "./FormField";
import useLogin from "./hooks/useLogin";

export default function LoginForm() {
  const { formData, handleChange, handleSubmit, loading } = useLogin();
  return (
    <div className="bg-white shadow-md rounded-xl p-6 w-[30%]">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-50">
        <div className="flex flex-col gap-2 justify-center items-center">
          <div className="w-10 h-10 bg-purple-200 rounded-md"></div>
          <div>
            <h2 className="text-2xl font-medium">Welcome to Social-network</h2>
            <p className="text-gray-400">Connect with friends and share</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-10 mb-10">
          <FormField
            title="Email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
            type="email"
          />
          <FormField
            name="password"
            title="Password"
            placeholder="Enter Your Password"
            value={formData.password}
            onChange={handleChange}
            type="password"
            isPassword
          />
        </div>
        <Button variant="black" type="submit">
          {loading ? "Loading... " : "Login"}
        </Button>
      </form>
    </div>
  );
}
