function RangeYear() {
    const min = 2533
    const max = 2547

    let i;
    let tmp = [];
    for (i = min; i <= max; i++) {
        tmp.push(i.toString());
    }
    return tmp;
}

export default RangeYear()