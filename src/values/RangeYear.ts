function RangeYear() {
	const min = 2447;
	const max = 2550;

	let tmp = [];
	for (let i = max; i >= min; i--) {
		tmp.push(i.toString());
	}
	return tmp;
}

export default RangeYear();
