// export function addRow(tablid) {
//   `EXPENSE_TABLE_+${tablid}`.rows.push({
//     id: `EXPENSE_TABLE_+${tablid}`.rows.length,
//     expense_type: "Clothing",
//     amount_planned: "300",
//     currency: "USD",
//     amount_spend: "220",
//     notes: "Clothing in Germany",
//     date: "New Date()"
//   });
// }
export const EXPENSES_TABLES = [
  { id: 0, tableName: "my first table", budget: 500 },
  { id: 1, tableName: "my second table", budget: 100 },
  { id: 2, tableName: "my third table", budget: 400 }
];
export const EXPENSES_0 = [
  {
    id: 0,
    table_id: 0,
    tableName: "my first table",

    expense_type: "Clothing",
    amount_planned: "300",
    currency: "USD",
    amount_spend: "220",
    notes: "Clothing in Germany",
    date: "New Date()"
  },
  {
    id: 1,
    table_id: 0,
    tableName: "my first table",

    expense_type: "Food",
    amount_planned: "90",
    currency: "USD",
    amount_spend: "160",
    notes: "food in Germany",
    date: "New Date()"
  },
  {
    id: 2,
    table_id: 0,
    tableName: "my second table",

    expense_type: "Housing",
    amount_planned: "90",
    currency: "USD",
    amount_spend: "100",
    notes: "Housing in Germany",
    date: "New Date()"
  },
  {
    id: 3,
    table_id: 1,
    tableName: "my second table",
    expense_type: "Flight",
    amount_planned: "30",
    currency: "USD",
    amount_spend: "10",
    notes: "Flight to Germany",
    date: "New Date()"
  },
  {
    id: 4,
    table_id: 1,
    tableName: "my second table",
    expense_type: "Transportation",
    amount_planned: "10",
    currency: "USD",
    amount_spend: "20",
    notes: "Transportation in Germany",
    date: "New Date()"
  },
  {
    id: 5,
    table_id: 2,
    tableName: "my third table",
    expense_type: "Transportation",
    amount_planned: "10",
    currency: "USD",
    amount_spend: "20",
    notes: "Transportation in Germany",
    date: "New Date()"
  }
];
