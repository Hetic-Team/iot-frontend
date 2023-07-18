export const SignUp = () => {
    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <form className="max-w-sm mx-auto">
                    <div className="mb-3">
                        Sign Up
                    </div>
                    <div className="mb-3 text-gray-500">
                        <p>Register on Smart’Creche, and let’s manage your collective crib better.</p>
                    </div>
                    <div className="mb-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email*</label>
                        <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline h-10" id="username" type="text" placeholder="username@example.com" />
                    </div>
                    <div className="mb-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">First Name*</label>
                        <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline h-10" id="Joe" type="text" placeholder="Joe" />
                    </div>
                    <div className="mb-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Last Name*</label>
                        <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline h-10" id="Doe" type="text" placeholder="Doe" />
                    </div>
                    <div className="mb-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">position held*</label>
                        <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline h-10" id="mail@simmmple.com" type="select" placeholder="mail@simmmple.com" />

                    </div>
                    <div className="mb-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Siret of the collective crech*</label>
                        <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline h-10" id="49336137200011" type="text" placeholder="49336137200011" />
                    </div>
                    <div className="mb-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password*</label>
                        <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline h-10" id="password" type="password" placeholder="Min. 8 characters" />
                    </div>
                    <div className="mb-3">
                        {/* <button className="rounded-md py-2 px-6 text-md inline-table w-full items-center text-center bg-crech-blue-600 text-white">Got It</button> */}
                        <button className="rounded-md py-2 px-6 text-md inline-table w-full items-center text-center bg-blue-600 text-white">Got It</button>
                    </div>
                    <div className="flex items-center">
                        <label htmlFor="KeepMeLoggedIn" className="ml-2 block text-sm text-gray-900">
                            Already resgitrated?
                        </label>
                        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">Sign-in</a>
                    </div>
                    <footer className="text-left mb-4 absolute bottom-0">
                        <div className="text-gray-400">
                            © 2022 Smart’Creche. All Rights Reserved. Made with love HETIC students!
                        </div>
                    </footer>
                </form>
                <div className="relative w-1/2 h-screen">
                    {/* <div className="bg-crech-blue"> */}
                    <div className="bg-blue-500">
                        <div className="flex justify-center items-center min-h-screen">
                            <svg width="216" height="234" viewBox="0 0 216 234" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id="Vector" d="M138.114 143.265C141.687 144.662 145.178 146.26 148.571 148.052C152.775 150.273 154.384 155.482 152.163 159.687C149.942 163.892 144.733 165.5 140.528 163.279C128.433 156.891 114.939 153.506 100.938 153.506C60.1015 153.506 25.267 182.549 17.626 222.128C16.7246 226.797 12.2087 229.851 7.53973 228.95C2.87048 228.048 -0.18364 223.532 0.717774 218.863C7.47139 183.882 31.8512 155.753 63.777 143.272C40.5376 130.253 24.8312 105.4 24.8312 76.8803C24.8312 34.8722 58.907 0.820465 100.939 0.820465C142.97 0.820465 177.046 34.8725 177.046 76.8803C177.046 105.395 161.345 130.243 138.114 143.265ZM159.825 76.8803C159.825 44.3857 133.462 18.0409 100.939 18.0409C68.4149 18.0409 42.0516 44.3854 42.0516 76.8803C42.0516 109.375 68.4149 135.719 100.939 135.719C133.462 135.719 159.825 109.375 159.825 76.8803ZM163.681 182.198V156.375C163.678 154.846 164.084 153.344 164.856 152.025C165.604 150.747 166.668 149.683 167.946 148.935C169.266 148.163 170.768 147.757 172.297 147.759C173.825 147.757 175.327 148.163 176.647 148.935C177.924 149.683 178.988 150.747 179.737 152.025C180.509 153.344 180.915 154.846 180.912 156.375V182.198H206.478C211.233 182.198 215.088 186.053 215.088 190.808C215.088 195.563 211.233 199.418 206.478 199.418H180.912V224.954C180.915 226.483 180.509 227.984 179.737 229.304C178.988 230.582 177.924 231.646 176.647 232.394C175.327 233.166 173.825 233.572 172.297 233.569C170.768 233.572 169.266 233.166 167.946 232.394C166.668 231.646 165.604 230.582 164.856 229.304C164.084 227.984 163.678 226.483 163.681 224.954V199.418H137.827C133.073 199.418 129.218 195.563 129.218 190.808C129.218 186.053 133.073 182.198 137.827 182.198H163.681Z" fill="#F4F7FE" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}





