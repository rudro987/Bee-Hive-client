import { SubmitHandler, useForm } from "react-hook-form";
import SectionTitle from "../Home/SectionTitle";
import Input from "../../components/ui/Input";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useAppDispatch } from "../../redux/hooks";
import { setUser } from "../../redux/features/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";

type TLoginInputs = {
  email: string;
  password: string;
};

const Login = () => {

  const dispatch = useAppDispatch();

  const { register, handleSubmit, formState: { errors } } = useForm<TLoginInputs>();

  const [login, { error, isLoading }] = useLoginMutation();

  const onSubmit: SubmitHandler<TLoginInputs> = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password
    };

    const res = await login(userInfo).unwrap();
    const user = verifyToken(res.token);
    
    dispatch(setUser({ user: user, token: res.token}));
  };

  return (
    <div className="py-40 max-w-7xl mx-auto">
      <SectionTitle title="Login" />
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-[#242424] w-[600px] shrink-0 shadow-2xl">
            <form className="card-body pb-10" onSubmit={handleSubmit(onSubmit)}>
                <Input type="text" label="Email" placeholder="Your Email Address" name="email" register={register}/>
                {errors.email && <span className="text-red-700">Email is required</span>}
                
                <Input type="password" label="Password" placeholder="Type Password" name="password" register={register} />
                {errors.password && <span className="text-red-700">Password is required</span>}
   

              <div className="form-control mt-6">
                <button className="btn bg-primaryFont text-black hover:bg-secondaryColor text-base font-bold">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Login;
7