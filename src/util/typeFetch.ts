import axios, {AxiosError, AxiosRequestConfig} from "axios";

export async function typeFetch<T>(url: string, apiKey? :string): Promise<T> {
	if (apiKey === undefined) {
		return new Promise<T>((resolve, reject) => {
			axios.get<T>(url)
				.then((res) => resolve(res.data))
				.catch((err: AxiosError) => {
					console.error(err.message)
					reject(err)
					throw new Error(err.message)
				})
		})
	} else {
		const config: AxiosRequestConfig = {
			headers: {
				"X-Riot-Token": apiKey
			}
		}
		return new Promise<T>((resolve, reject) => {
			axios.get<T>(url, config)
				.then((res) => resolve(res.data))
				.catch((err: AxiosError) => {
					console.error(err.message)
					reject(err)
					throw new Error(err.message)
				})
		})
	}
}