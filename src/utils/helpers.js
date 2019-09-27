export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('cart');

        if(serializedState == null)
            return {
                cartItems: [],
                orderTotal: 0,
                itemsTotal: 0,
            };
        return JSON.parse(serializedState);
    } catch (e) {
        return {};
    }
};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('cart', serializedState);
    } catch (e) {}
};
