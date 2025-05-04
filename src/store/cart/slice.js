import { createSlice } from '@reduxjs/toolkit';

/** Загрузка состояния из localStorage
 * @function
 * @param {string} key - Ключ, по которому хранится состояние в localStorage.
 * @returns {Object} - Загруженное состояние или начальное состояние, если данные отсутствуют.
 * @throws {Error} - Если произошла ошибка при загрузке данных из localStorage.
 */
const loadFromLocalStorage = () => {
    try {
        const data = localStorage.getItem('cart');
        return data ? JSON.parse(data) : { items: [], totalQuantity: 0 };
    } catch (e) {
        console.error(e);
        return { items: [], totalQuantity: 0 };
    }
};
/** Сохранение состояния в localStorage
 * @function
 * @param {Object} state - Состояние корзины, которое нужно сохранить в localStorage.
 * @returns {void}
 */
const saveToLocalStorage = (state) => {
    try {
        localStorage.setItem('cart', JSON.stringify(state));
    } catch (e) {
        console.error(e);
    }
};

const initialState = loadFromLocalStorage();

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const { id, name, size, price } = action.payload;
            const existingItem = state.items.find(
                item => item.id === id && item.size === size
            );
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ id, name, size, price, quantity: 1 });
            }
            state.totalQuantity += 1;
            saveToLocalStorage(state);
        },
        removeFromCart(state, action) {

            const { id, size } = action.payload;
            console.log(state.items);
            const existingItem = state.items.find(
                item => item.id === id && item.size === size
            );
            if (existingItem) {
                state.totalQuantity -= existingItem.quantity;
                state.items = state.items.filter(
                    item => !(item.id === id && item.size === size)
                );
            }
            saveToLocalStorage(state);
        },
        updateQuantity(state, action) {
            const { id, size, quantity } = action.payload;
            const existingItem = state.items.find(
                item => item.id === id && item.size === size
            );
            if (existingItem && quantity > 0) {
                state.totalQuantity += quantity - existingItem.quantity;
                existingItem.quantity = quantity;
            }
            saveToLocalStorage(state);
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;