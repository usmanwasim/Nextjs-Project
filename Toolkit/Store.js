import { configureStore } from '@reduxjs/toolkit';
import ContactSlice from './ContactSlice';

// MiddleWare
const localStorageMiddleware = ({ getState }) => {
    return (next) => (action) => {
        const result = next(action);
        localStorage.setItem('applicationState', JSON.stringify(getState()));
        return result;
    };
};

const reHydrateStore = () => {
    if (typeof window !== 'undefined' && window.localStorage.getItem('applicationState') !== null) {
        return JSON.parse(localStorage.getItem('applicationState')); // re-hydrate the store
    }
};

export const Store = configureStore({
    reducer: {
        Contact: ContactSlice,
    },
    preloadedState: reHydrateStore(),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
});
