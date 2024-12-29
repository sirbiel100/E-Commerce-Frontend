import { useAlertContext } from "./useAlert"
import style from "./style.module.scss"

export default function Alert() {
    const { alert, closeAlert } = useAlertContext()

    if (!alert.display) return null

    return (
        <div
            className={style.alert}
            onClick={() => closeAlert()}
            style={{
                backgroundColor: alert.type === "success" ? "#5ceb57" : "#f25557",
                color: alert.type === "success" ? "#6d6d6d" : "#f8f8f8"
            }}
        >
            <p>{alert.message}</p>
        </div>
    )
}