/* eslint-disable prettier/prettier */
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { createUser } from '../../features/user/userSlice';
import {useAppDispatch} from "../../app/hooks"
import Navbar from "../layouts/Navbar"

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>;

interface SignupFormInputs {
  email: string;
  password: string;
}

export default function SignupForm({ className, ...props }: UserAuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormInputs>();

const dispatch=useAppDispatch()

  const onSubmit = (data: SignupFormInputs) => {
    console.log(data);
   dispatch(createUser({email:data.email,password:data.password}))
  };

  return (
    <>
    <Navbar/>
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8 lg:p-10 container mx-auto mt-3 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
      <form 
      onSubmit={handleSubmit(onSubmit)}
      className="">
        <h5 className='text-center text-blue-400 text-xl font-bold'>Please SignUp</h5>
        <hr/>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <label className="sr-only" htmlFor="email">
              Email
            </label>
           
            <input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
             {...register('email', { required: 'Email is required' })}
            />
            {errors.email && <p>{errors.email.message}</p>}
            <input
              id="password"
              placeholder="your password"
              type="password"
              autoCapitalize="none"
              autoCorrect="off"
            {...register('password', { required: 'Password is required' })}
            />
            {errors.password && <p>{errors.password.message}</p>}
            <input
              id="password"
              placeholder="confirm password"
              type="password"
              autoCapitalize="none"
              autoCorrect="off"
            />
          </div>
          <button className=' bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'>Create Account</button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      {/* <span className="text-center"> */}
      <div clssName="flex justify-center">

      <button 
        variant="outline"
        type="button"
        className=" flex justify-center ms-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2  px-4 rounded"
      >
        <p>Google</p>
        <FcGoogle className='mt-1 ms-2' />
      </button>
      </div>
    

      {/* </span> */}
     
    </div>

    </>
  );
}