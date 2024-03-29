/* eslint-disable react/prop-types */
import css from './Transactions.module.css'

export default function TransactionHistory({items}) {
    return (

        <table className={css["table"]}>
            <thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(({id, type, amount, currency}) => {
                    return (
                        <tr key={id}>
                        <td className={css["table-body-data"]}>{type[0].toUpperCase() + type.substring(1)}</td>
                        <td className={css["table-body-data"]}>{amount}</td>
                        <td className={css["table-body-data"]}>{currency}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}