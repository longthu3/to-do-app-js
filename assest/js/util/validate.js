const checkLength = (label) => {
    if (label.length > 10 || label.length === 0) {
        alert('So long label or empty label, must be at least 10 characters long');
        return false;
    }
    return true;
}

export {
    checkLength
}