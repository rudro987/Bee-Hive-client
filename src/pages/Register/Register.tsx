/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/ui/Input";
import SectionTitle from "../Home/SectionTitle";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { IRegisterInputs } from "../../types";
import Loader from "../../components/ui/Loader";
import { useSignUpMutation } from "../../redux/features/auth/authApi";

const Register = () => {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterInputs>({
    mode: "onSubmit",
    defaultValues: {
      name: "",
      email: "",
      address: "",
      phone: "",
      password: "",
    },
  });

  const [signUp, { isLoading }] = useSignUpMutation();

  const onSubmit: SubmitHandler<IRegisterInputs> = async (data) => {
    const toastId = toast.loading("Registering user!");
    try {
      const userInfo = {
        name: data.name,
        email: data.email,
        address: data.address,
        phone: data.phone,
        password: data.password,
      };

      const res = await signUp(userInfo).unwrap();

      console.log(res);

      if(res.success){
        toast.success("Registered! Please Log in!", { id: toastId, duration: 2000 });
        navigate("/login");
      }
      
    } catch (error: any) {
      console.log(error)
      toast.error("Something went wrong!", { id: toastId, duration: 2000 });
    }
  };

  if (isLoading) {
    return <Loader size="160px" />;
  }

  return (
    <div className="py-40 max-w-7xl mx-auto">
      <SectionTitle title="Register" />
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-200 w-[600px] shrink-0 shadow-2xl shadow-primaryFont pb-10">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <Input
                type="text"
                label="Name"
                placeholder="Your Full Name"
                name="name"
                register={register}
                required={true}
              />
              {errors.name && (
                <span className="text-red-500">Name is required</span>
              )}

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
                type="text"
                label="Address"
                placeholder="Your Full Address"
                name="address"
                register={register}
                required={true}
              />
              {errors.address && (
                <span className="text-red-500">Address is required</span>
              )}

              <Input
                type="text"
                label="Phone Number"
                placeholder="Your Phone Number"
                name="phone"
                register={register}
                required={true}
              />
              {errors.phone && (
                <span className="text-red-500">Phone Number is required</span>
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
                  Register
                </button>
              </div>
            </form>
            <div className="text-center">
              <p>
                Already have an account? Please{" "}
                <Link
                  to="/login"
                  className="text-secondaryColor font-bold underline"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
