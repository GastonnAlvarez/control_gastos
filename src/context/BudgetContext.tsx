import { ReactNode, createContext, useMemo, useReducer } from "react"
import { BudgetState, budgetActions, budgetReducers, initialState } from "../reducer/budget-reducer"

type BudgetContextProps = {
    state: BudgetState
    dispatch: React.Dispatch<budgetActions>
    totalExpenses: number
    remainingExpenses: number
}

type BudgetProviderProps = {
    children: ReactNode
}

// createContext<BudgetContextProps> = Generic
export const BudgetContext = createContext<BudgetContextProps>(null!)

export const BudgetProvider = ({ children }: BudgetProviderProps) => {

    const [state, dispatch] = useReducer(budgetReducers, initialState)

    const totalExpenses = useMemo(() => state.expenses.reduce((total, expense) => total + expense.amount, 0), [state.expenses])
    const remainingExpenses = state.budget - totalExpenses

    return (
        <BudgetContext.Provider value={{
            state,
            dispatch,
            totalExpenses,
            remainingExpenses
        }}>
            {children}
        </BudgetContext.Provider>
    )
}