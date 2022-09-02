import { createContext, useContext, useMemo } from 'react'
import { TrackStore } from './store'

let store: TrackStore;
export const StoreContext = createContext(new TrackStore());
export function useStore() {
    return useContext(StoreContext);
};

export function initializeStore(initialData = null) {
    const _store = store ?? new TrackStore()
    //  데이터를 가져오는 메서드가 있는 경우 여기에서 hydrate 됨. 
    if (initialData) {
        _store.hydrate(initialData)
    }
    // ssr과 ssg는 항상 새로운 store를 생성
    if (typeof window === 'undefined') return _store
    // 클라이언트에서 한번 store를 생성
    if (!store) store = _store

    return _store;
}