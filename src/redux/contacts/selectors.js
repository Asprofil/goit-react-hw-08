import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter } from '../filters/selectors';


export const selectContacts = (state) => state.contacts.items;

export const selectIsLoading = (state) => state.contacts.loading;

export const selectError = (state) => state.contacts.error;

export const selectFilter = (state) => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
