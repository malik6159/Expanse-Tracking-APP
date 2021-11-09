import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";
import { RiDeleteBin2Fill } from "react-icons/ri";

// import "./History.css";

export const TransactionHistory = () => {
	const { transactions } = useContext(GlobalContext);
	const { deleteTransition } = useContext(GlobalContext);

	return (
		<>
			<h4 className="thistory">Transaction HISTORY</h4>

			<ul id="List " className="list">
				{transactions.map((transaction) => {
					const sign = transaction.amount < 0 ? "-" : "+";
					return (
						<li
							key={transaction.id}
							className={transaction.amount < 0 ? "minus" : "plus"}
						>
							{transaction.Description}
							<span className="amount">
								{sign} $ {Math.abs(transaction.amount)}
							</span>
							<button
								type="button"
								id="delete-btn"
								onClick={() => deleteTransition(transaction.id)}
							>
								<RiDeleteBin2Fill />
							</button>
						</li>
					);
				})}
			</ul>
		</>
	);
};
