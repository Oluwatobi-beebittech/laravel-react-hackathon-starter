import { Landing } from "@Pages";
import * as React from "react";
import { Routes, Route } from "react-router-dom";

export const RouteProvider = () => {
    return (
        <Routes>
            <Route path="/">
                <Route index element={<Landing />} />
            </Route>
        </Routes>
    );
};
