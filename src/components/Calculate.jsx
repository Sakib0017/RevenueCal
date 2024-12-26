import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';
import Navbar from './Navbar';
import 'flowbite';

const Calculate = () => {
  const [options, setOptions] = useState([]);
  const [options1, setOptions1] = useState([]);
  const [accountType, setAccountType] = useState(null);
  const [accountHead, setAccountHead] = useState(null);
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('');
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch accounts
  const fetchAccounts = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5000/api/accounts');
      setAccounts(response.data);
    } catch (error) {
      console.error('Error fetching accounts:', error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch account types
  const fetchOptions1 = async (searchTerm) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/type/search?q=${searchTerm}`);
      const users = response.data.map((user) => ({
        label: user.name,
        value: user._id,
      }));
      setOptions1(users);
    } catch (error) {
      console.error('Error fetching account types:', error);
    }
  };

  // Fetch account heads
  const fetchOptions = async (searchTerm) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/credit/search?q=${searchTerm}`);
      const users = response.data.map((user) => ({
        label: user.name,
        value: user._id,
      }));
      setOptions(users);
    } catch (error) {
      console.error('Error fetching account heads:', error);
    }
  };

  // Input change handlers
  const handleInputChange = (inputValue) => {
    fetchOptions(inputValue);
  };

  const handleInputChange1 = (inputValue) => {
    fetchOptions1(inputValue);
  };

  const handleChange = (selectedOption) => {
    setAccountHead(selectedOption);
  };

  const handleChange1 = (selectedOption) => {
    setAccountType(selectedOption);
  };

  // Form data state
  const [formData, setFormData] = useState({
    accountType: accountType?.label,
    accountHead: accountHead?.label,
    amount: '',
    status: '',
  });

  // Fetch accounts on component mount
  useEffect(() => {
    fetchAccounts();
  }, []);

  // Form submit handler
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      accountType: accountType?.label,
      accountHead: accountHead?.label,
      amount,
      status,
    };
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/api/save-account', formData);
      console.log('Account saved:', response.data);
      // Reset the form fields after successful submission
      setAccountType(null);
      setAccountHead(null);
      setAmount('');
      setStatus('');
      // Fetch the updated accounts list
      fetchAccounts();
    } catch (error) {
      console.error('Error saving account:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className='mx-auto max-w-7xl mt-10 bg-gray-100 shadow rounded'>
        <form onSubmit={handleSubmit}>
          <div className='grid md:grid-cols-5 p-5 gap-5'>
            <div className='col-span-1'>
              <label className='block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white'>Accounts Type</label>
              <Select
                options={options1}
                onInputChange={handleInputChange1}
                onChange={handleChange1}
                value={accountType} // Ensure the select value is controlled
                placeholder='Account Type'
                isSearchable
                className='w-full'
              />
            </div>
            <div className='col-span-1'>
              <label className='block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white'>Accounts Head</label>
              <Select
                options={options}
                onInputChange={handleInputChange}
                onChange={handleChange}
                value={accountHead} // Ensure the select value is controlled
                placeholder='Account Head'
                isSearchable
                className='w-full'
              />
            </div>
            <div className='col-span-1'>
              <label className='block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white'>Amount</label>
              <input
                type='text'
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                placeholder='Amount'
                required
              />
            </div>
            <div className='col-span-1'>
              <label className='block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white'>Status</label>
              <input
                type='text'
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                placeholder='Status'
                required
              />
            </div>
            <div className='col-span-1'>
              <button
                type='submit'
                className='bg-gray-50 mx-auto border mt-9 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                disabled={loading}
              >
                {loading ? 'Saving...' : 'Save Accounts'}
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className='max-w-7xl mx-auto m-2'>
        <div className='max-w-xl me-auto p-1'>
          <div className='relative'>
            <input
              type='text'
              id='search'
              placeholder='Search here...'
              className='w-full p-2 pl-12 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            <span className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M10 4a6 6 0 016 6 6 6 0 01-6 6 6 6 0 01-6-6 6 6 0 016-6zm0 0a6 6 0 016 6 6 6 0 01-6 6 6 6 0 01-6-6 6 6 0 016-6z'
                />
              </svg>
            </span>
          </div>
        </div>
      </div>

      <div className='relative max-w-7xl mb-20 mx-auto overflow-x-auto'>
        <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                Account Type
              </th>
              <th scope='col' className='px-6 py-3'>
                Account Head
              </th>
              <th scope='col' className='px-6 py-3'>
                Amount
              </th>
              <th scope='col' className='px-6 py-3'>
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan='4' className='text-center px-6 py-4'>
                  Loading...
                </td>
              </tr>
            ) : accounts.length > 0 ? (
              accounts.map((account) => (
                <tr key={account._id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                  <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                    {account.accountType}
                  </td>
                  <td className='px-6 py-4'>{account.accountHead}</td>
                  <td className='px-6 py-4'>{account.amount}</td>
                  <td className='px-6 py-4'>{account.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan='4' className='text-center px-6 py-4'>
                  No accounts available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Calculate;