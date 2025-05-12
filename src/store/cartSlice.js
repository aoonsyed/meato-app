import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [
        {
            id: 1,
            name: "Product 1",
            price: 100,
            quantity: 1,
        },
    ]
}

const cartSlice = createSlice({
    name: "cart",
    initialState,    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.items[itemIndex].quantity += action.payload.quantity;
                // Remove item if quantity becomes 0 or negative
                if (state.items[itemIndex].quantity <= 0) {
                    state.items = state.items.filter(item => item.id !== action.payload.id);
                }
            } else {
                // Only add with positive quantity
                if (action.payload.quantity > 0) {
                    state.items.push(action.payload);
                }
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload.id);
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;