import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';

import { breakpoints, fonts } from './Overrides';

export const Theme = extendTheme({
        breakpoints,
        fonts
    },
);
