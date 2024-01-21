function formatPhoneNumber(numbers) {
    const areaCode = numbers.slice(0, 3).join("");
    const middle = numbers.slice(3, 6).join("");
    const line = numbers.slice(6, 10).join("");
    return `(${areaCode}) ${middle}-${line}`;
}

module.exports = formatPhoneNumber;
