import { writable } from 'svelte/store'

export const currentPage = writable('')
export const isMenuOpen = writable(false)
export const slugsList = writable([])
export const postsList = writable([])
