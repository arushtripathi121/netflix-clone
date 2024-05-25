import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidate } from '../utils/Validate';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const LoginPage = () => {

  const [isSignIn, setIsSignIn] = useState(false);
  const [Password, setPassword] = useState('');
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);
  const [ErrorMessage, setErrorMessage] = useState(null)
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();

  const onButtonClick = () => {
    setIsSignIn(!isSignIn);
    console.log(isSignIn);
  }

  const handleToggle = () => {
    if (type === 'password') {
      setIcon(eye);
      setType('text')
    } else {
      setIcon(eyeOff)
      setType('password')
    }
  }

  const handleButtonClick = () => {
    const message = checkValidate(email.current.value, password.current.value);
    console.log(message);
    setErrorMessage(message);

    if (message) return;

    //sign up logic

    if (isSignIn) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          // ...
          updateProfile(user, {
            displayName: name.current.value, 
            photoURL: "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?size=626&ext=jpg"
          }).then(() => {
            // Profile updated!
            // ...
            const {uid, email, displayName, photoURL} = auth.currentUser;
            dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
            navigate('/browse');
          }).catch((error) => {
            // An error occurred
            // ...
            setErrorMessage(error.message);
          });
          console.log(user);
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrorMessage(errorCode + "-" + errorMessage)
          console.log(ErrorMessage);
        });
    }

    //sign in logic

    else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
          console.log(user);
          navigate('/browse');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage)
          console.log(ErrorMessage);
        });
    }
  }

  return (
    <div className='flex flex-col min-h-screen w-full bg-cover bg-fixed body'>
      <div><Header signIn={false} /></div>

      <div className='signin-box flex flex-col border border-black mx-auto bg-slate-900  gap-12 px-6 py-10'>
        <form className='flex flex-col gap-12' onSubmit={(e) => e.preventDefault()}>
          <span className='text-white font-bold text-4xl'>{isSignIn ? 'Sign Up' : 'Sign In'}</span>
          {isSignIn ? <input type='text' ref={name} placeholder='Full Name ' className='signin-box-input text-white bg-slate-700 rounded-sm w-72 px-2 py-3' /> : ''}
          <input ref={email} type='text' placeholder='Email or mobile Number' className='signin-box-input text-white bg-slate-700 rounded-sm w-72 px-2 py-3' />

          < div className=' flex flex-row '>
            <input
              type={type}
              name="password"
              ref={password}
              placeholder="Password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              className='signin-box-input text-white bg-slate-700 rounded-sm w-72 px-2 py-3'
            />
            <span className="flex justify-around items-center" onClick={handleToggle}>+
              <Icon className='absolute mr-10 text-white' icon={icon} />
            </span>
          </div>
          <button className=' rounded-sm bg-red-800  px-4 py-3 text-white' onClick={() => handleButtonClick()}>{isSignIn ? 'Sign up' : 'Sign in'}</button>
        </form>
        <span className='text-white font-light'>{isSignIn ? 'Already a user? ' : 'New to Netflix? '}<button onClick={() => onButtonClick()} className=' text-white font-bold'>{isSignIn ? 'Sign in now' : ' Sign up now'}</button></span>
        <p className=' text-red-500 w-72'>{ErrorMessage ? ErrorMessage : ''}</p>
      </div>
    </div>
  )
}

export default LoginPage;
