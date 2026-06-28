import {useForm} from 'react-hook-form'
import { z } from 'zod'
import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import './Register.css'

function Register() {

  const registerValidation = z.object({
    firstName : z.string().min( 1 , {message : 'firstName is Requried..'}),
    lastName : z.string().min( 1 , {message : 'lastName is Requried..'}),
    email : z.string().min( 1 , {message : 'email is Requried..'}).email(),
    password : z.string().min( 1 , {message : 'password is Requried..'}).regex(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]/ ,
       {message : 'U Must Enter 1 Spical Charkter ae Least!'}),
    rePassword : z.string().min( 1 , {message : 'rePassword is Requried..'}),


  }).refine( same => same.password === same.rePassword , {message: 'password is not same' , path:['rePassword']})

  const {register , handleSubmit} = useForm({
    resolver : zodResolver(registerValidation)
  })

  const submitHandlerRegister = ()=>{

  }

  return (
    <div className='auth'>
      <p className='mt-5 text-center h2'>Register <span style={{color: 'var(--main-color)'}}>Now</span>...</p>

      <div className="conatiner p-5">
        <div className="row">
          <div className='col-8 offset-2'>
            <form onSubmit={handleSubmit(submitHandlerRegister)}>
              <div className="mb-3">
                <label htmlFor="First-Name" className="form-label">First-Name</label>
                <input type="text" className="form-control"
                { ...register('firstName') } id="First-Name"/>
              </div>

              <div className="mb-3">
                <label htmlFor="Last-Name" className="form-labLastel">Last-Name</label>
                <input type="text" className="form-control"
                {...register('lastName') } id="Last-Name"/>
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">email</label>
                <input type="email" className="form-control"
                {...register('email') } id="email"/>
              </div>

              <div className="mb-3">
                <label htmlFor="pass" className="form-label">password</label>
                <input type="password" className="form-control"
                {...register ('password')} id="pass"/>
              </div>

              <div className="mb-3">
                <label htmlFor="re-pass" className="form-label">re-password</label>
                <input type="password" className="form-control"
                {...register('rePassword')} id="re-pass"/>
              </div>

              <button className='btn btn-success'>Submit</button>
            </form>
          </div>
        </div>
      </div>
       </div>
  )
}

export default Register