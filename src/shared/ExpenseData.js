export const EXPENSE = {
  table_A: {
    id: 0,
    tableName: "my first table",
    budget: 100,
    rows: [
      {
        date: "date 1",
        expenses: [
          {
            id: 0,
            expense_type: "Clothing",
            amount_planned: "300",
            currency: "USD",
            amount_spend: "200",
            notes: "accomodations in Germany",
            date: "New Date()"
          },
          {
            id: 1,
            expense_type: "Food",
            amount_planned: "90",
            currency: "USD",
            amount_spend: "100",
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
