import React from 'react';

const DummyTable = () => {

  const expenses = [
    { category: 'Housing expenses', planned: 1000, actual: 1050 },
    { category: 'Food', planned: 400, actual: 450 },
    { category: 'Transportation', planned: 300, actual: 320 },
    { category: 'Health and medicine', planned: 200, actual: 180 },
    { category: 'Clothing and footwear', planned: 150, actual: 160 },
    { category: 'Entertainment', planned: 200, actual: 220 },
  ]
  return(
    <div className='dummy-table'>
      <h1>Expense Table</h1>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Planned Expenses ($)</th>
            <th>Actual Expenses ($)</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td>{expense.category}</td>
              <td>{expense.planned}</td>
              <td>{expense.actual}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default DummyTable
