import { ReactNode } from "react"
// ReactNode: Renderiza string o componentes dentro de otros componentes(PropsWithChildren <--Otra opcion)
type ErrorMessageProps = {
    children: ReactNode
}

export default function ErrorMessage({ children }: ErrorMessageProps) {
    return (
        <p className="bg-red-600 p-3 font-bold text-white text-sm text-center">{children}</p>
    )
}
