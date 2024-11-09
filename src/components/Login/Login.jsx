import { GoogleAuthProvider, signInWithPopup, signOut, GithubAuthProvider } from "firebase/auth";
import { auth } from "../Firebase/firebase";
import { useState } from "react";




export default function Login() {
    const provider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();
    const [user, setUser] = useState(null)

    const handleClick = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log("User signed in successfully", result.user);
                setUser(result.user);
                console.log(user)
            }).catch((error) => {

                console.error("Error signing in with popup", error);
                setUser(null);
            });
    }

    const handleClickGithub = () => {
        signInWithPopup(auth, gitProvider)
            .then((result) => {
                console.log("User signed in successfully", result.user);
                setUser(result.user);
                console.log(user)
            }).catch((error) => {

                console.error("Error signing in with popup", error);
                setUser(null);
            });
    }

    const handleLogOut = () => {
        signOut(auth).then(() => {
            console.log("User signed out");
            setUser(null);
            console.log(user)

        }).catch((error) => {
            console.error("Error signing out", error);
        });
    }
    return (
        <div className="hero bg-base-200 min-h-screen">

            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="w-full">
                    {
                        user && <div>

                            <h3>Name:{user.displayName}</h3>
                            <h3>Email:{user.email}</h3>
                            <img src={user.photoURL} alt="img" />
                            <button className="btn btn-primary mt-2" onClick={handleLogOut}>Log Out</button>
                        </div>
                    }
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary" onClick={handleClick}>Login with google</button>
                            <button className="btn btn-primary mt-2" onClick={handleClickGithub}>Login with github</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}