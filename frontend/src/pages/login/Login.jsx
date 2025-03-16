const Login = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-4 bg-gray-400 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>Login
                    <span className="text-blue-500"> ChatApp</span>
                </h1>
                <form>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Username</span>
                        </label>
                        <input type="text" placeholder="Username" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">{"Don't"} have an account?</a>

                    <div>
                    <button type="submit" className="btn btn-primary w-full max-w-xs mt-4">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;