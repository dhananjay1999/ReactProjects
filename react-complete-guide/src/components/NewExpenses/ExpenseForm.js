import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
    const [enterdTitle, setEnteredTitle] = useState('');
    const [enterdAmount, setEnteredAmount] = useState('');
    const [enterdDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enterdTitle: '',
    //     enterdAmount: '',
    //     enterdDate: ''
    // })

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enterdTitle: event.target.value, 
        // })
        // setUserInput((prevState) => {
        //     return { ...prevState, enterdTitle: event.target.value};
        // })
    };

    const amountChangeHandler = event => {
        setEnteredAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enterdAmount: event.target.value,
        // })
        // setUserInput((prevState) => {
        //     return { ...prevState, enterdAmount: event.target.value};
        // })
    };

    const dateChangeHandler = event => {
        setEnteredDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enterdDate: event.target.value,
        // })
        // setUserInput((prevState) => {
        //     return { ...prevState, enterdDate: event.target.value};
        // })
    };
    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enterdTitle,
            amount: enterdAmount,
            date: new Date(enterdDate),


        };
        console.log(expenseData);
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
    };
    return (<div>
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' 
                    value={enterdTitle}
                    onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' 
                    value={enterdAmount}
                    min="0.01" 
                    step="0.01" 
                    onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' 
                    value={enterdDate}
                    min="2019-01-01" 
                    max="2023-12-31" 
                    onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    </div>)
};

export default ExpenseForm;