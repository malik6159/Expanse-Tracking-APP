import React, { useContext } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { GlobalContext } from "./context/GlobalState";

export default function Header() {
	// const { transactions } = useContext(GlobalContext);
	// const transactionAmounts = transactions.map(
	// 	(transaction) => transaction.amount
	// );
	// const balance = transactionAmounts
	// 	.reduce((acc, item) => (acc += item), 0)
	// 	.toFixed(2);
	const { transactions } = useContext(GlobalContext);
	const amount = transactions.map((transaction) => transaction.amount);
	const balance = amount
		.reduce((acc, item) => {
			return acc + item;
		}, 0)
		.toFixed(2);

	return (
		<div>
			<h1 className="h1">Expanse Trackig App </h1>
			<h4 className="c1 c2">Current Balance</h4>
			<h1 className="c1">$ {balance}</h1>
		</div>
	);
}
