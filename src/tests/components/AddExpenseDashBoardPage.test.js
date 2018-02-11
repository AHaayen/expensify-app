import React from 'react';
import { shallow } from 'enzyme';
import { AddExpenseDashBoardPage } from '../../components/AddExpenseDashBoardPage';
import expenses from '../fixtures/expenses';

let onSubmit, history, wrapper;

beforeEach(() => {
     onSubmit = jest.fn();
     history = { push: jest.fn() };
     wrapper = shallow(<AddExpenseDashBoardPage onSubmit={onSubmit} history={history} />)
});


test('should render AddExpenseDashBoardPage correctly', () => {
   expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(onSubmit).toHaveBeenLastCalledWith(expenses[1]);
});