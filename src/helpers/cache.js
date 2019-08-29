
export const saveToCache = (key, val) => {
    return localStorage.setItem(key, val);
}

export const removeFromCache = (key) => {
    return localStorage.setItem(key, '');
}

export const getFromCache = (key) => {
    let item = localStorage.getItem(key);
    return item;
}
