// export function calculateSum(tablKey) {
//   for (let [key, value] of Object.entries(EXPENSE)) {
//     let sum = EXPENSE[tablKey].rows.expenses.reduce(
//       (accumulator, currentValue) => accumulator + currentValue.amount_spend,
//       0
//     );
//     return sum;
//   }
// }
export function spenedInAday(row) {
  let sum = 0;
  for (let [key, value] of Object.entries(row.expenses)) {
    sum = sum + parseInt(value.amount_spend);
  }
  return sum;
}
export function calculateSpendSum(tablKey) {
  let sum = 0;
  if (tablKey) {
    console.log(
      "from expense data" + tablKey + JSON.stringify(EXPENSE[tablKey].rows)
    );
    for (let [key, value] of Object.entries(EXPENSE[tablKey].rows)) {
      let row = value;
      //
      sum = sum + spenedInAday(value);
      console.log(sum);
    }
    return sum;
  } else {
    return "tablKey not found";
  }
}
export function calculatePlannedSum(tablKey) {
  let sum = 0;
  for (let [key, value] of Object.entries(EXPENSE[tablKey])) {
    // EXPENSE[tablKey].rows.expenses.map(
    //   item => sum + parseInt(item.amount_planned)
  }

  return sum;
}

export const EXPENSE = {
  table_A: {
    id: 0,
    tableName: "my first table",
    budget: 500,
    rows: [
      {
        date: "date 1",
        expenses: [
          {
            id: 0,
            expense_type: "Clothing",
            amount_planned: "300",
            currency: "USD",
            amount_spend: "220",
            notes: "accomodations in Germany",
            date: "New Date()"
          },
          {
            id: 1,
            expense_type: "Food",
            amount_planned: "90",
            currency: "USD",
            amount_spend: "160",
            notes: "food in Germany",
            date: "New Date()"
          },
          {
            id: 1,
            expense_type: "Housing",
            amount_planned: "90",
            currency: "USD",
            amount_spend: "100",
            notes: "food in Germany",
            date: "New Date()"
          }
        ]
      },
      {
        date: "date 2",
        expenses: [
          {
            id: 0,
            expense_type: "Visa",
            amount_planned: "10",
            currency: "USD",
            amount_spend: "20",
            notes: "movies in Germany",
            date: "New Date()"
          }
        ]
      },
      { date: "date 3", expenses: [] }
    ]
  },
  table_B: {
    id: 1,
    tableName: "my second table",
    budget: 100,
    rows: [
      {
        date: "new date()",
        expenses: [
          {
            id: 0,
            expense_type: "Flight",
            amount_planned: "30",
            currency: "USD",
            amount_spend: "10",
            notes: "accomodations in Germany",
            date: "New Date()"
          }
        ]
      },
      {
        date: "new date()",
        expenses: [
          {
            id: 0,
            expense_type: "Transportation",
            amount_planned: "10",
            currency: "USD",
            amount_spend: "20",
            notes: "movies in Germany",
            date: "New Date()"
          }
        ]
      }
    ]
  }
};
