export function addRow(tablKey) {
  EXPENSE[tablKey].rows.push({
    id: EXPENSE[tablKey].rows.length,
    expense_type: "Clothing",
    amount_planned: "300",
    currency: "USD",
    amount_spend: "220",
    notes: "Clothing in Germany",
    date: "New Date()"
  });
}

export const EXPENSE = {
  table_A: {
    id: 0,
    tableName: "my first table",
    budget: 500,
    rows: [
      {
        id: 0,
        expense_type: "Clothing",
        amount_planned: "300",
        currency: "USD",
        amount_spend: "220",
        notes: "Clothing in Germany",
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
        id: 2,
        expense_type: "Housing",
        amount_planned: "90",
        currency: "USD",
        amount_spend: "100",
        notes: "Housing in Germany",
        date: "New Date()"
      }
    ]
  },
  table_B: {
    id: 1,
    tableName: "my second table",
    budget: 100,
    rows: [
      {
        id: 0,
        expense_type: "Flight",
        amount_planned: "30",
        currency: "USD",
        amount_spend: "10",
        notes: "Flight to Germany",
        date: "New Date()"
      },
      {
        id: 1,
        expense_type: "Transportation",
        amount_planned: "10",
        currency: "USD",
        amount_spend: "20",
        notes: "Transportation in Germany",
        date: "New Date()"
      }
    ]
  }
};
