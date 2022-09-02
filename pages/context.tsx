import { createContext, useContext, useMemo } from 'react'
import { RootStore } from './store'

let store: RootStore;
export const StoreContext = createContext(new RootStore());
export function StoreProvider({children, data}) {
    const store = initializeStore(data);

    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    )
}
export function useStore() {
    return useContext(StoreContext);
};

export function initializeStore(initialData = null) {
    const _store = store ?? new RootStore()
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