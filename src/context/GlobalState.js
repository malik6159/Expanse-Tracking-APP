import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const intitalState = {
	transactions: [
		
	],
};

export const GlobalContext = createContext(intitalState);

export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, intitalState);
	function deleteTransition(id) {
		dispatch({
			type: "Delete_Transaction",
			payload: id,
		});
	}
	function addTransaction(transaction) {
		dispatch({
			type: "Add_Transaction",
			payload: transaction,
		});
	}
	return (
		<GlobalContext.Provider
			value={{
				transactions: state.transactions,
				deleteTransition,
				addTransaction,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
