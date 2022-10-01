import { Box, Button } from "@chakra-ui/react";
import * as React from "react";

export const Button = ({children, ...rest}) => {
    return <Button {...rest}>{children}</Button>;
};
