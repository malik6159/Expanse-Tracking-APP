import React, { useState, useContext } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { GlobalContext } from "./context/GlobalState";
import { TransactionHistory } from "./TransactionHistory";

export const TransactionAdddetail = () => {
	const [Description, setDescription] = useState("");
	const [amount, setAmount] = useState("");
	const { addTransaction } = useContext(GlobalContext);
	const onSubmit = (e) => {
		e.preventDefault();

		const newTransaction = {
			id: new Date().getTime(),
			Description,
			amount: +amount,
		};

		addTransaction(newTransaction);
	};
	return (
		<div>
			<TransactionHistory />
			<div>
				<h4 className="thistory ">Add New Transaction </h4>

				<form onSubmit={onSubmit}>
					<div className="mb-3">
						<label htmlFor="exampleInputEmail1" className="form-label">
							Description
						</label>
						<input
							type="text"
							className="form-control"
							id="typeamount"
							aria-describedby="emailHelp"
							placeholder="Detail Of Transaction"
							value={Description}
							onChange={(e) => {
								setDescription(e.target.value);
							}}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="exampleInputPassword1" className="form-label">
							Transaction Amount
						</label>
						<input
							type="number"
							className="form-control"
							id="amount"
							placeholder="Dollar VAlue Of Transaction"
							value={amount}
							onChange={(e) => {
								setAmount(e.target.value);
							}}
						/>
					</div>

					<button className="btn btn-success d-grid gap-2 col-10 mx-auto">
						Submit
					</button>
					{/* <a style={{ cursor: "pointer" }} className="cta">
						<span>Add Transaction</span>
						<svg width="13px" height="10px" viewBox="0 0 13 10">
							<path d="M1,5 L11,5"></path>
							<polyline points="8 1 12 5 8 9"></polyline>
						</svg>
					</a> */}
				</form>
			</div>
		</div>
	);
};
