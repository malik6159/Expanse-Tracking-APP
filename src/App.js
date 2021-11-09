import "./App.css";
import  Header  from "./Header";
import { IncomeStatus } from "./IncomeStatus";
import { TransactionAdddetail } from "./Transaction-Add-detail";
// import { DataProvider } from "./DataProvider";
import { GlobalProvider } from "./context/GlobalState";
function App() {
	return (
		<GlobalProvider>
			<Header />
			<IncomeStatus />
			<TransactionAdddetail />
		</GlobalProvider>
	);
}

export default App;
