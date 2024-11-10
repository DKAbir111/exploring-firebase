import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebase";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

export default function Signup() {

    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setError('');
        setSuccess(false);
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;


        const email = event.target.email.value;
        const password = event.target.password.value;
        const terms = event.target.terms.checked;
        if (!terms) {
            setError("You must agree to the terms and conditions");
            return
        }
        console.log(email, password);

        if (password.length < 6) {
            setError("At least 6 characters required");
            return
        }
        if (!passwordRegex.test(password)) {
            setError("At least one Uppercase, lowercase, special charecter required");
            return
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result);
                setSuccess(true);
            })
            .catch(error => {
                console.error("ERROR", error.message);
                setError(error.message);
            })
    }
    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-10">
            <h3 className="text-xl font-semibold text-center mt-4">Log in</h3>
            <form className="card-body" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                </div>
                <div className="form-control relative">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type={showPassword ? 'text' : 'password'} placeholder="password" name="password" className="input input-bordered" required />
                    <div className="btn btn-xs absolute right-2 top-12" onClick={() => setShowPassword(!showPassword)} >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </div>
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                {
                    error && <p className="text-red-500 text-sm">{error}</p> ||
                    success && <p className="text-green-500 text-sm">User successfully loged in</p>
                }
                <div className="form-control">
                    <label className="label cursor-pointer justify-start">
                        <input type="checkbox" name="terms" defaultChecked className="checkbox checkbox-primary" />
                        <span className="label-text ml-2">Agree with our terms and conditions</span>

                    </label>
                </div>
                <div className="form-control mt-2">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form >
        </div >
    )
}
