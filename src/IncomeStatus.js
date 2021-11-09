import React, { useContext } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { GlobalContext } from "./context/GlobalState";

export const IncomeStatus = () => {
	const { transactions } = useContext(GlobalContext);
	const transactionAmount = transactions.map(
		(transaction) => transaction.amount
	);
	const income = transactionAmount
		.filter((item) => item > 0)
		.reduce((acc, item) => {
			return acc + item;
		}, 0)
		.toFixed(2);
	const expanse = transactionAmount
		.filter((item) => item < 0)
		.reduce((acc, item) => {
			return acc + item;
		}, 0)
		.toFixed(2);
	return (
		<div className="status-container">
			<div>
				<h4>INCOME</h4>
				<p className="money plus">$ {income}</p>
			</div>
			<div>
				<h4>EXPANSE</h4>
				<p className="money minus">$ {expanse}</p>
			</div>
		</div>
	);
};
