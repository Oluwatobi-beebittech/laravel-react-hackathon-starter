import { axios } from './HTTPInstance';

export const getAbortController = () => new AbortController();

export const sendRequest = (requestConfig) => {
	return axios
		.request(requestConfig)
		.then(response => Promise.resolve(response.data))
		.catch(err => Promise.reject(
			{
				config: err?.config,
				data: err?.response?.data,
				headers: err?.response?.headers,
				request: err?.request,
				status: err?.response?.status,
				statusText: err?.response?.statusText,
			}));
};

export const getRequest = (fullUrl, params={}, optionalConfig={}) => {
	return sendRequest({
		params,
		url: fullUrl,
		method: 'GET',
		...optionalConfig
	});
};

export const postRequest = (fullUrl, body, optionalConfig={}) => {
	return sendRequest({
		url: fullUrl,
		method: 'POST',
		data: body,
		...optionalConfig
	});
};

export const putRequest = (fullUrl, body, optionalConfig={}) => {
	return sendRequest({
		url: fullUrl,
		method: 'PUT',
		data: body,
		...optionalConfig
	});
};

export const deleteRequest = (fullUrl, params={}, optionalConfig={}) => {
	return sendRequest({
		params,
		url: fullUrl,
		method: 'DELETE',
		...optionalConfig
	});
};

export const patchRequest = (fullUrl, body, optionalConfig={}) => {
	return sendRequest({
		url: fullUrl,
		method: 'PATCH',
		data: body,
		...optionalConfig
	});
};