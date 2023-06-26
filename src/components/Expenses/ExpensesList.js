import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css"
function ExpensesList(props){
        return <ul className="expenses-list">
        {props.items.length === 0? (<h2 className="expenses-list__fallback">No expenses found!</h2>) : 
        props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
        </ul>
    
}

export default ExpensesList;