import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    Contact: [],
    Edit: [],
    Filter: [],
};
// console.log(initialState, "edit");
const ContactSlice = createSlice({
    name: 'Contact',
    initialState,
    reducers: {
        CreateContact: (state, { payload }) => {
            payload = { ...payload, _id: state.Contact.length };
            // console.log(payload, 'create Payload');
            payload && state.Contact.push({ ...payload });
        },
        Eddit: (state, { payload }) => {
            state.Edit = [payload];
        },
        Update: (state, { payload }) => {
            state.Contact.find((item, id) =>
                item._id === payload._id ? (state.Contact[id] = payload) : null,
            );
        },
        Search: (state, { payload }) => {
            state.Filter = payload;
        },
        Delete: (state, { payload }) => {
            state.Contact = state.Contact.filter((item) => item._id !== payload._id);
        },
    },
});
export const { CreateContact, Eddit, Update, Search, Delete } = ContactSlice.actions;
export default ContactSlice.reducer;
