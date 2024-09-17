import React from 'react';

function CreateUserForm() {
    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-100'>
            <div className='bg-yellow-100 shadow-lg rounded-lg p-8 w-full max-w-md'>
                <h3 className='text-3xl font-semibold text-center text-gray-800 mb-6'>
                    Create New User
                </h3>
                <form className='flex flex-col space-y-4'>
                    <div className='flex flex-col'>
                        <label className='text-gray-700 font-medium'>
                            User Name:
                        </label>
                        <input
                            className='border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                            type="text"
                            name="name"
                            placeholder='Enter your name'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-gray-700 font-medium'>
                            User Email:
                        </label>
                        <input
                            className='border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                            type="email"
                            name="email"
                            placeholder='Enter your email'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-gray-700 font-medium'>
                            Password:
                        </label>
                        <input
                            className='border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                            type="password"
                            name="password"
                            placeholder='Enter your password'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-gray-700 font-medium'>
                            Select Role:
                        </label>
                        <select
                            className='border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                            name="role"
                        >
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <button
                        className='bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300'>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CreateUserForm;
