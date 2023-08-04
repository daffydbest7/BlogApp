import React, { useEffect }  from 'react';

import {useForm} from "react-hook-form";
import { Link,useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import MainLayout from '../../components/MainLayout';
import { login } from '../../services/index/users';
import { useDispatch , useSelector} from 'react-redux';
import { userActions } from '../../store/reducers/userReducers';

const LoginPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userState = useSelector(state => state.user)

   const {mutate, isLoading} = useMutation({
        mutationFn:({email, password})=>{
            return login({email, password});
        },
        onSuccess: (data) => {
           dispatch(userActions.setUserInfo(data));
            localStorage.setItem('account', JSON.stringify(data));
        },
        onError: (error)=>{
            toast.error(error.message)
            console.log(error)
        }
    })

    useEffect(()=>{
        if(userState.userInfo){
            navigate("/");
        }
    }, [navigate,userState.userInfo])

    const { 
        register,handleSubmit,
        formState: { errors, isValid},
        
    } = useForm({
        defaultValues:{
            email: "",
            password: "",
            
        },
        mode: "onChange",
    })

    const submitHandler = (data)=>{
        const {email, password}=data;
        mutate({email, password})
    }
  return (
   <MainLayout>
    <section className='container mx-auto px-5 py-10'>
        <div className='w-full max-w-sm mx-auto'>
        <h1 className='text-4xl font-bold text-center text-black mb-8'>
            LOGIN
        </h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div className='flex flex-col mb-6 w-full'>
             

            <label htmlFor='email' className='text-[#5a7184] mt-3 font-semibold block'>
                Email
            </label>
            <input {...register("email", {
                required:{
                    value: true,
                    message: "Email is required",
                },
                pattern: {
                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: 'Please enter a valid email',
                },
            })}
            type="email" id='email' placeholder='Enter email'
            className={`placeholder:text-[#959ead] text-black mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${errors.email ? "border-red-500" : "border-[#c3cad]"}`}/>
            {errors.email?.message && (
                <p className='text-red-500 text-xs mt-1'> {errors?.email.message}</p>
            ) }

            <label htmlFor='password' className='text-[#5a7184] font-semibold block mt-3'>
                Password
            </label>
            <input {...register("password",{
                required: {
                    value: true,
                    message: "Password is required",
                },
                minLength:{
                    value: 6,
                    message: "Password length must be atleast 6 characters",
                }
            })} type="password" id='password' placeholder='Enter password'
            className={`placeholder:text-[#959ead] text-black mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${errors.password ? "border-red-500" : "border-[#c3cad]"}`}/>
            {errors.password?.message && (
                <p className='text-red-500 text-xs mt-1'> {errors?.password.message}</p>
            ) }
          
            <Link to="/forgot-password" className='text-teal-500 mt-3 font-semibold'>
                Forgot Password?
            </Link>

            <button  type="submit" disabled={!isValid || isLoading}
            id='submit' 
            className=' bg-teal-500 text-black mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#c3cad] my-6 disabled:opacity-70 disabled:cursor-not-allowed'>Sign In</button>
            <p className='text-black mt-3'>
               Don't have an account? {' '}
               <span className='text-teal-500 font-semibold'><Link to='/register'>Signup now</Link></span> 
            </p>
            </div>
        </form>
        </div>
    </section>
   </MainLayout>
    
  )
}

export default LoginPage
