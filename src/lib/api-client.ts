interface ApiError {
	message: string;
	status: number;
}

export const apiFetch = async <T>(
	url: string,
	options: RequestInit = {}
): Promise<T> => {
	try {
		const response = await fetch(url, options);
		if (!response.ok) {
			const errorData = await response.json();
			const errorMessage =
				(errorData as ApiError).message ||
				errorData.error ||
				response.statusText;
			throw new Error(errorMessage);
		}

		return response.json() as Promise<T>;
	} catch (error) {
		throw error;
	}
};


export const apiClient={
    async get<T>(url: string):Promise<T>{
        try{
            return await apiFetch<T>(url)

        }catch(error){
            throw error;

        }
    }
}