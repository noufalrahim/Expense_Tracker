import React from "react"
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm"
function NewExpense(props){
    function saveExpenseDataHandler(enteredExpenseDate){
         const expenseData = {
            ...enteredExpenseDate, 
            id: Math.random().toString()
         } 
         props.onAddExpense(expenseData)

    }


    return (
        <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense