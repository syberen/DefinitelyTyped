// Type definitions for react-is 16.7
// Project: https://reactjs.org/
// Definitions by: Avi Vahl <https://github.com/AviVahl>
//                 Christian Chown <https://github.com/christianchown>
//                 Sebastian Silbermann <https://github.com/eps1lon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

export as namespace ReactIs;

import { ReactElement, ReactType } from 'react';

export function typeOf(value: any): symbol | undefined;
export function isValidElementType(value: any): value is ReactType;
export function isAsyncMode(value: any): value is ReactElement<any>;
export function isContextConsumer(value: any): value is ReactElement<any>;
export function isContextProvider(value: any): value is ReactElement<any>;
export function isElement(value: any): value is ReactElement<any>;
export function isForwardRef(value: any): value is ReactElement<any>;
export function isFragment(value: any): value is ReactElement<any>;
export function isLazy(value: any): value is ReactElement<any>;
export function isMemo(value: any): value is ReactElement<any>;
export function isProfiler(value: any): value is ReactElement<any>;
export function isPortal(value: any): value is ReactElement<any>;
export function isStrictMode(value: any): value is ReactElement<any>;
export function isSuspense(value: any): value is ReactElement<any>;

export const AsyncMode: symbol;
export const ContextConsumer: symbol;
export const ContextProvider: symbol;
export const Element: symbol;
export const ForwardRef: symbol;
export const Fragment: symbol;
export const Lazy: symbol;
export const Memo: symbol;
export const Portal: symbol;
export const Profiler: symbol;
export const StrictMode: symbol;
export const Suspense: symbol;
