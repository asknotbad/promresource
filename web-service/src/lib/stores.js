import { writable } from 'svelte/store';

export let env = writable({});

export const activeModal = writable(null);
export const modalData = writable(null);
export const prevModalData = writable(null);
export const modalHeader = writable(null);
