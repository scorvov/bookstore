const updateCartItems = (cartItems, newItem, id) => {
    if (newItem.count === 0) {
        return [
            ...cartItems.slice(0, id),
            ...cartItems.slice(id + 1)
        ]
    }
    if (id !== -1) {
        return [
            ...cartItems.slice(0, id),
            newItem,
            ...cartItems.slice(id + 1)
        ]
    } else {
        return [
            ...cartItems, newItem
        ]
    }
};

const updateCartItem = (book, item = {}, quantity) => {
    const {
        id = book.id,
        title = book.title,
        count = 0,
        total = 0
    } = item;

    return {
        id,
        title,
        count: count + quantity,
        total: total + book.price * quantity
    }
};

const updateOrder = (state, bookId, quantity) => {
    const {bookList:{books}, shoppingCart: {cartItems}} = state;
    const book = books.find(({id}) => id === bookId);
    const itemIndex = cartItems.findIndex(({id}) => id === bookId);
    const item = cartItems[itemIndex];

    const newItem = updateCartItem(book, item, quantity);
    return {
        orderTotal: 0,
        cartItems: updateCartItems(cartItems, newItem, itemIndex)
    }
}

export const updateShoppingCart = (state, action) => {
    if (state === undefined)  {
        return {
            cartItems: [],
            orderTotal: 220
        }
    }
    switch (action.type) {
        case 'BOOK_ADDED_TO_CART':
            return updateOrder(state, action.payload, 1);
        case 'BOOK_REMOVED_FROM_CART':
            return updateOrder(state, action.payload, -1);
        case 'ALL_BOOKS_REMOVE_FROM_CART':
            const book = state.shoppingCart.cartItems.find(({id}) => id === action.payload);
            return updateOrder(state, action.payload, -book.count);
        default:
            return state.shoppingCart;
    }
}
