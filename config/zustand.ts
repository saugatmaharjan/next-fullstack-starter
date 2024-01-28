import type {} from "@redux-devtools/extension";
import { StateCreator, create } from "zustand";
import { PersistOptions, devtools, persist } from "zustand/middleware";

const createStore = create;

export default createStore;

export const createStoreWithDevtools = <T extends object>(
	stateCreator: StateCreator<T>,
) => create<T>()(devtools(stateCreator));

export const createStoreWithDevtoolsAndPersist = <T extends object>(
	stateCreator: StateCreator<T>,
	options: PersistOptions<T>,
) => create<T>()(devtools(persist(stateCreator, options)));
