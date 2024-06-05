const checkLength = (label) => {
    if (label.length > 10) {
        alert('So long label');
        return false;
    }
    return true;
}

export {
    checkLength
}