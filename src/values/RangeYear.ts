function RangeYear() {
    const min = 2447
    const max = 2547

    let i;
    let tmp = [];
    for (i = max; i >= min; i--) {
        tmp.push(i.toString());
    }
    return tmp;
}

export default RangeYear()