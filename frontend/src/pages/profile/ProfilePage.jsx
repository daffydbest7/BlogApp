import React, { useEffect }  from 'react';
import { toast } from 'react-hot-toast';
import { userActions } from '../../store/reducers/userReducers';
import {useForm} from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import MainLayout from '../../components/MainLayout';
import { useDispatch , useSelector} from 'react-redux';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {getUserProfile, updateProfile} from '../../services/index/users';
import ProfilePicture from '../../components/ProfilePicture';
import { useMemo } from 'react';

const ProfilePage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userState = useSelector(state => state.user)
    const queryClient = useQueryClient();



    const { data: profileData,
         isLoading: profileIsLoading} 
          = useQuery({
        queryFn: () => {
            return getUserProfile({ token: userState.userInfo.token});
        },
        queryKey: ["profile"],
    })

    //use mutation hook
    const {mutate, isLoading: updateProfileIsLoading} = useMutation({
        mutationFn: ({ name, email, password})=>{
            return updateProfile({
                token: userState.userInfo.token,
                userData: {name, email, password},
            });
        },
        onSuccess: (data) => {
           dispatch(userActions.setUserInfo(data));
            localStorage.setItem('account', JSON.stringify(data));
            queryClient.invalidateQueries(["profile"]);
            toast.success("Profile is updated")
        },
        onError: (error)=>{
            toast.error(error.message)
            console.log(error)
        }
    })

    useEffect(()=>{
        if(!userState.userInfo){
            navigate("/");
        }
    }, [navigate, userState.userInfo]);

    const { 
        register,
        handleSubmit ,
        formState: { errors, isValid},
        
    } = useForm({
        defaultValues:{
            name: "",
            email: "",
            password: "",
         
        },
        values: useMemo(() => {
            return {
              name: profileIsLoading ? "" : profileData.name,
              email: profileIsLoading ? "" : profileData.email,
            };
          }, [profileData?.email, profileData?.name, profileIsLoading]),
          mode: "onChange",
        });

    const submitHandler = (data)=>{
        const { name, email, password} = data;
        mutate({name, email, password});
    }

  return (
   <MainLayout>
    <section className='container mx-auto px-5 py-10'>
        <div className='w-full max-w-sm mx-auto'>
        <h1 className='text-4xl font-bold text-center text-black mb-8'>
           UPDATE PROFILE
        </h1>
        <ProfilePicture avatar={profileData?.avatar}/>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div className='flex flex-col mb-6 w-full mt-6'>
            
            <label htmlFor='name' className='text-[#5a7184] font-semibold block'>
                Name
            </label>
            <input {...register("name", {
                minLength:{
                    value: 1,
                    message: "Name must be at least 1 character "
                },
                required:{
                    value: true,
                    message: "Name is required",
                }
            })} type="text" id='name' placeholder='Enter name'
            className={`placeholder:text-[#959ead] text-black mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border  ${errors.name ? "border-red-500" : "border-[#c3cad]"}` }/>
            {errors.name?.message && (
                <p className='text-red-500 text-xs mt-1'> {errors?.name.message}</p>
            ) }
             
            
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
                New Password (optional)
            </label>
            <input {...register("password")} type="password" id='password' placeholder='Enter new password'
            className={`placeholder:text-[#959ead] text-black mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${errors.password ? "border-red-500" : "border-[#c3cad]"}`} />
            {errors.password?.message && (
                <p className='text-red-500 text-xs mt-1'> {errors?.password.message}</p>
            ) }

          
           

            <button  type="submit" disabled={!isValid || profileIsLoading || updateProfileIsLoading}
            id='submit' 
            className=' bg-teal-500 text-black mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#c3cad] my-6 disabled:opacity-70 disabled:cursor-not-allowed'>Update Profile</button>
            
            </div>
        </form>
        </div>
    </section>
   </MainLayout>
    
  )
}

export default ProfilePage
