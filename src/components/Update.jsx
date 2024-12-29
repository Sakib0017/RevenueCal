import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';
import Navbar from './Navbar';
import { useParams, useNavigate } from 'react-router-dom';

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [options, setOptions] = useState([]);
  const [options1, setOptions1] = useState([]);
  const [accountType, setAccountType] = useState(null);
  const [accountHead, setAccountHead] = useState(null);
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('');

  // Fetch Account Type options
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

  // Fetch Account Head options
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

  // Handle Input Changes for both selects
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

  // Fetch existing account data
  useEffect(() => {
    axios.get(`http://localhost:5000/api/account/${id}`)
      .then(result => {
        setAccountType(result.data.accountType);
        setAccountHead(result.data.accountHead);
        setAmount(result.data.amount);
        setStatus(result.data.status);
      })
      .catch(err => console.log(err));
  }, [id]);

  // Handle Update on form submit
  const handleUpdate = async (event) => {
    event.preventDefault();
    const formData = {
      accountType: accountType?.label,
      accountHead: accountHead?.label,
      amount,
      status,
    };

    try {
      const response = await axios.put(`http://localhost:5000/api/save-accounts/${id}`, formData);
      console.log('Account saved:', response.data);
      // Reset form fields after successful submission
      setAccountType(null);
      setAccountHead(null);
      setAmount('');
      setStatus('');
      // Navigate to /calculate
      navigate('/calculate');
    } catch (error) {
      console.error('Error saving account:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className='mx-auto max-w-7xl flex justify-center items-center mt-10 bg-gray-100 shadow rounded'>
        <form onSubmit={handleUpdate}>
          <div className='grid md:grid-cols-5 p-5 gap-5'>
            <div className='col-span-1'>
              <label className='block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white'>Accounts Type</label>
              <Select
                options={options1}
                onInputChange={handleInputChange1}
                onChange={handleChange1}
                value={accountType}
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
                value={accountHead}
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
              >
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Update;