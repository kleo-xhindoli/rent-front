import Dispatcher from "../Dispatcher";

export function NextPage() {
	Dispatcher.dispatch({
			type:"NEXTPAGE",
		});
}
export function PreviousPage() {
	Dispatcher.dispatch({
			type:"PREVIOUSPAGE",
		});
}
export function Sort(vendi, madhesia, cmimi, dhomat, lloji, mobilimi) {
	Dispatcher.dispatch(
		{
			type:"SORT",
			v:vendi,
			m:madhesia,
			c:cmimi,
			dh:dhomat,
			ll:lloji,
			mob:mobilimi,
		});
}
export function ShkoTeFaqia(NumriFaqes) {
	Dispatcher.dispatch({
			type:"FAQIA",
			numri: NumriFaqes,
		});
}