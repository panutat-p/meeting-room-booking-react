/*
https://redux-toolkit.js.org/tutorials/typescript#define-typed-hooks
it's better to create typed versions of the useDispatch and useSelector hooks for usage in your application.
 */
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from './store';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
