function genDay(max) {
    let i;
    let tmp = [];
    for (i = 1; i <= max; i++) {
        tmp.push(i.toString());
    }
    return tmp;
}

// year % 4 === 0 ? max = 29 : max = 28
const RangeDay = {
	'1': genDay(31),
	'2': genDay(28),
	'3': genDay(31),
	'4': genDay(30),
	'5': genDay(31),
	'6': genDay(30),
	'7': genDay(31),
	'8': genDay(31),
	'9': genDay(30),
	'10': genDay(31),
	'11': genDay(30),
	'12': genDay(31),
	'13': genDay(29),
};

export default RangeDay;
