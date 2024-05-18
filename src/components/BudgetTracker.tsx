import { useBudget } from "../hook/useBudget";
import AmountDisplay from "./AmountDisplay";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

export default function BudgetTracker() {
    const { state, dispatch, totalExpenses, remainingExpenses } = useBudget()

    const percentage = +((totalExpenses / state.budget) * 100).toFixed(2)

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
            <div className="flex justify-center">
                <CircularProgressbar
                    value={percentage}
                    styles={buildStyles({
                        pathColor: percentage === 100 ? '#dc2626' : '#3c86f6',
                        trailColor: '#F5F5F5',
                        textSize: 8,
                        textColor: '#3b82f6'
                    })}
                    text={`${percentage}% Gastado`}
                />
            </div>

            <div className="flex flex-col justify-center items-center gap-8">
                <button
                    type="button"
                    className="bg-pink-600 w-full p-2 text-white uppercase font-bold rounded-lg"
                    onClick={() => dispatch({ type: 'reset-app' })}
                >
                    Resetear app
                </button>

                <AmountDisplay
                    label="Presupuesto"
                    amount={state.budget}
                />
                <AmountDisplay
                    label="Disponible"
                    amount={remainingExpenses}
                />
                <AmountDisplay
                    label="Gastado"
                    amount={totalExpenses}
                />
            </div>
        </div>
    )
}
