export const fetcher = async <Type>({
	url,
	options,
	body,
	query,
}: {
	url: string;
	options?: any;
	body?: any;
	query?: any;
}): Promise<Type> => {
	const headers = {
		"Content-Type": "application/json",
		...options?.headers,
	};
	const next ={
		...options?.next
	}
	const res = await fetch(`${url}${query ? `?${new URLSearchParams(query).toString()}` : ""}`, {
		method: options?.method,
		body: JSON.stringify(body),
		headers,
		next,
		cache: options?.cache,
	});
	return await res.json();
};
