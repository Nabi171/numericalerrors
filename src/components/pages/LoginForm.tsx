/* eslint-disable prettier/prettier */


import { useEffect } from 'react';


import { useForm } from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { loginUser } from '../../features/user/userSlice';
import {useAppDispatch,useAppSelector} from "../../app/hooks"

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>;

interface LoginFormInputs {
  email: string;
  password: string;
}

export default function LoginForm({ className, ...props }: UserAuthFormProps) {
const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<LoginFormInputs>();
const {user,isLoading}=useAppSelector((state)=>state.user)
const dispatch=useAppDispatch();
const navigate=useNavigate();
const onSubmit = (data: LoginFormInputs) => {
    
        console.log(data);
    dispatch(loginUser({email:data.email,password:data.password}))
    
      };
    
      useEffect(()=>{
    if(user.email && !isLoading){
      navigate('/')
    }
      },[user.email,isLoading])
    

  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8 lg:p-10 container mx-auto mt-12
     w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 ">
      <form className="mb-3"
      onSubmit={handleSubmit(onSubmit)}
      >
        <h5 className='text-center text-blue-400 text-xl font-bold mb-2'>SignIn</h5>
        <hr clasName='mb-2' />
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
              autoComplete="password"
            {...register('password', { required: 'Password is required' })}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <button className=' bg-blue-500  hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ' >Login with email</button>
        </div>
      </form>
      <div className="relative ">
        <div className="absolute inset-0 mb-2 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <button 
      className=" flex justify-center ms-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-2"
        variant="outline"
        type="button"
       
      >
        <p>Google</p>
        <FcGoogle className='mt-1 ms-2'  />
      </button>
    </div>
  );
}