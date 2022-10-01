import Axios from 'axios';

import { defaultHeaders } from './Headers';

export const axios = Axios.create({
	headers: {
		...defaultHeaders,
	}
});
