import { createStore, combineReducers } from 'redux';

const demoState = {
    expenses: [{
        id: 'aksmdasd',
        description: 'J',
        note: 'This was the final payment',
        amount: 12300,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};