import axios from "axios";

export async function typeFetch<T>(url: string): Promise<T> {
	return new Promise<T>((resolve, reject) => {
		axios.get<T>(url)
			.then((res) => resolve(res.data))
			.catch((err) => reject(err))
	})
}