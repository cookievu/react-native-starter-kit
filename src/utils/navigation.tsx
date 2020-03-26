import * as React from "react";
import {NavigationContainerRef} from "@react-navigation/core";
import {StackActions} from "@react-navigation/native";

export const navigationRef = React.createRef<NavigationContainerRef>();

export function navigate(name: string, params?: any) {
    navigationRef.current?.navigate(name, params);
}

export function push(name: string, ...args: any[]) {
    navigationRef.current?.dispatch(StackActions.push(name, ...args));
}

export function goBack() {
    navigationRef.current?.goBack()
}

export function setParams(params: any) {
    return navigationRef.current?.setParams(params)
}

/**
 * Trả về tên của route hiện tại
 */
export function getCurrentRouteName() {
    return navigationRef.current?.getRootState().routeNames[navigationRef.current?.getRootState().routeNames.length - 1]
}
