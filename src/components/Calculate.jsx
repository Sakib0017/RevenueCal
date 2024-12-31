import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';
import Navbar from './Navbar';
import 'flowbite';
import { Link } from "react-router-dom";

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

  // Handle Delete
  const handleDelete = (id) => {
    axios.delete('http://localhost:5000/api/accounts/' + id)
      .then(res => {
        console.log(res);
        window.location.reload(); // Refresh the page after delete
      })
      .catch(err => console.log(err));
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
  const generatePDF = async () => {
    try {
      const response = await axios.post('http://localhost:5000/generate-pdf', {
        creditAccounts,
        debitAccounts,
      }, {
        responseType: 'blob', // To handle binary response (PDF)
      });

      // Create a link to download the PDF
      const blob = new Blob([response.data], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'generated.pdf'; // The name of the file to be downloaded
      link.click();
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  // Fetch accounts on component mount
  useEffect(() => {
    fetchAccounts();
  }, []);
  // Separate accounts into debit and credit
  const creditAccounts = accounts.filter((account) => account.accountType?.toLowerCase() === 'credit');
  const debitAccounts = accounts.filter((account) => account.accountType?.toLowerCase() === 'debit');
  const calculateTotalCredit = () => {
    return creditAccounts.reduce((total, account) => total + parseFloat(account.amount || 0), 0).toFixed(2);
  };
  const calculateTotalDebit = () => {
    return debitAccounts.reduce((total, account) => total + parseFloat(account.amount || 0), 0).toFixed(2);
  };
  const calculateProfit = () => {
    const totalCredit = calculateTotalCredit();
    const totalDebit = calculateTotalDebit();
    return (totalCredit - totalDebit).toFixed(2);
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
                disabled={loading}
              >
                {loading ? 'Saving...' : 'Save Accounts'}
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Credit Accounts Table */}
      <div className="grid md:grid-cols-2 max-w-7xl mx-auto gap-5 overflow-auto">
      <div className='relative max-w-7xl col-span-1 mt-10 mb-20 mx-auto overflow-x-auto'>
        
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
              <th scope='col' className='px-6 py-3'>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan='5' className='text-center px-6 py-4'>
                  Loading...
                </td>
              </tr>
            ) : creditAccounts.length > 0 ? (
              creditAccounts.map((account) => (
                <tr key={account._id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                  <td className='px-6 py-4'>{account.accountType}</td>
                  <td className='px-6 py-4'>{account.accountHead}</td>
                  <td className='px-6 py-4'>{account.amount}</td>
                  <td className='px-6 py-4'>{account.status}</td>
                  <td className='px-6 py-4 gap-2'>
                    <Link to={`/update/${account._id}`}>
                      <button className='bg-blue-700 m-1 text-white p-1 rounded'>Edit</button>
                    </Link>
                    <button
                      onClick={(e) => handleDelete(account._id)}
                      className='bg-red-700 rounded m-1 text-white p-1'
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan='5' className='text-center px-6 py-4'>
                  No credit accounts available
                </td>
              </tr>
            )}
          </tbody>
          <tfoot className='bg-gray-100 dark:bg-gray-700'>
      <tr>
        <td colSpan='4' className='px-6 py-4 font-bold'>Total Credit</td>
        <td colSpan='1' className='px-6 py-4 font-bold'>{calculateTotalCredit()}</td>
      </tr>
    </tfoot>
        </table>
      </div>

      {/* Debit Accounts Table */}
      <div className='relative max-w-7xl col-span-1 mt-10 mb-20 mx-auto overflow-x-auto'>
        
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
              <th scope='col' className='px-6 py-3'>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan='5' className='text-center px-6 py-4'>
                  Loading...
                </td>
              </tr>
            ) : debitAccounts.length > 0 ? (
              debitAccounts.map((account) => (
                <tr key={account._id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                  <td className='px-6 py-4'>{account.accountType}</td>
                  <td className='px-6 py-4'>{account.accountHead}</td>
                  <td className='px-6 py-4'>{account.amount}</td>
                  <td className='px-6 py-4'>{account.status}</td>
                  <td className='px-6 py-4 gap-2'>
                    <Link to={`/update/${account._id}`}>
                      <button className='bg-blue-700 text-white m-1 p-1 rounded'>Edit</button>
                    </Link>
                    <button
                      onClick={(e) => handleDelete(account._id)}
                      className='bg-red-700 rounded text-white m-1 p-1'
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan='5' className='text-center px-6 py-4'>
                  No debit accounts available
                </td>
              </tr>
            )}
          </tbody>
          <tfoot className='bg-gray-100 dark:bg-gray-700'>
      <tr>
        <td colSpan='4' className='px-6 py-4 font-bold'>Total Credit</td>
        <td colSpan='1' className='px-6 py-4 font-bold'>{calculateTotalDebit()}</td>
      </tr>
    </tfoot>
        </table>
      </div>
      <div className='bg-gray-100 dark:bg-gray-700 max-w-7xl mx-auto'>
      <tr>
        <td colSpan='4' className='px-6 py-4 font-bold'>Total Profit</td>
        <td colSpan='1' className='px-6 py-4 font-bold'>{calculateProfit()}</td>
      </tr>
      </div>
      <div className='max-w-7xl mx-auto gap-5 flex justify-between'>
      
      <button className='bg-green-900 h-[30px] p-2 rounded text-white' >Save</button>
      <button  className=" bg-blue-900 h-[30px] p-2 rounded text-white" onClick={generatePDF}>Generate PDF</button>
    </div>
      </div>
    </>
  );
};

export default Calculate;