import { ChakraProvider } from "@chakra-ui/react";
import { RouteProvider } from "@Providers";
import { Store } from "@Store";
import { Theme } from "@Styles";
import * as React from "react";
import { Provider } from "react-redux";

export const App = () => {
    return (
        <Provider store={Store}>
            <ChakraProvider theme={Theme}>
                <RouteProvider />
            </ChakraProvider>
        </Provider>
    );
};
