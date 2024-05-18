import { useMemo } from "react"
import { useBudget } from "../hook/useBudget"
import ExpenseDetails from "./ExpenseDetails"

export default function ExpenseList() {
    const { state } = useBudget()

    const filterExpense = state.currentCategory ? state.expenses.filter(expense => expense.category === state.currentCategory) : state.expenses
    const isEmpty = useMemo(() => filterExpense.length === 0, [filterExpense])

    return (
        <div className="mt-10 bg-white shadow-lg p-10 rounded-lg">
            {isEmpty ? <p className="text-gray-600 text-2xl font-bold">No hay gastos</p> : (
                <>
                    <p className="text-gray-600 font-bold text-2xl">Listado de Gastos</p>
                    {filterExpense.map(expense => (
                        <ExpenseDetails key={expense.id} expense={expense} />
                    ))}
                </>
            )}
        </div>
    )
}
