import { SubmitHandler, useForm } from "react-hook-form";
import SectionTitle from "../Home/SectionTitle";
import Input from "../../components/ui/Input";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useAppDispatch } from "../../redux/hooks";
import { setUser } from "../../redux/features/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Loader from "../../components/ui/Loader";
import { TLoginInputs, TUser } from "../../types";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginInputs>({
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [login, { isLoading }] = useLoginMutation();

  const onSubmit: SubmitHandler<TLoginInputs> = async (data) => {
    const toastId = toast.loading("Loggin in");
    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };

      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.token) as TUser;

      dispatch(setUser({ user: user, token: res.token }));
      toast.success("Logged in", { id: toastId, duration: 2000 });
      navigate(from, { replace: true });
    } catch (error) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };

  if (isLoading) {
    return <Loader size="160px" />;
  }

  return (
    <div className="py-40 max-w-7xl mx-auto">
      <SectionTitle title="Login" />
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-200 w-[600px] shrink-0 shadow-2xl shadow-primaryFont pb-10">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <Input
                type="text"
                label="Email"
                placeholder="Your Email Address"
                name="email"
                register={register}
                required={true}
              />
              {errors.email && (
                <span className="text-red-500">Email is required</span>
              )}

              <Input
                type="password"
                label="Password"
                placeholder="Type Password"
                name="password"
                register={register}
                required={true}
              />
              {errors.password && (
                <span className="text-red-500">Password is required</span>
              )}

              <div className="form-control mt-6">
                <button className="btn bg-primaryFont text-black hover:bg-secondaryColor text-base font-bold">
                  Login
                </button>
              </div>
            </form>
            <div className="text-center">
              <p>
                Do not have an account? Please{" "}
                <Link
                  to="/register"
                  className="text-secondaryColor font-bold underline"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
