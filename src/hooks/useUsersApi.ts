

import { useState, useEffect} from 'react';

import { User } from '@/types';
import { apiClient } from '@/lib/api-client';

interface UserResult{
    users:User[];
}

export const useUsersApi = () => {
	const useUsers = (page: number) => {
		const [data, setData] = useState<User[] | null>(null);
		const [isLoading, setIsLoading] = useState(true);
		const [error, setError] = useState<Error | null>(null);

		useEffect(() => {
			const fetchUsers = async () => {
				setIsLoading(true);
				setError(null);

				try {
					const result = (await apiClient.get(
						`/api/users?page=${page}`
					)) as UserResult;
					setData(result.users);
				} catch (err) {
					setError(err instanceof Error ? err : new Error('Unknown error'));
				} finally {
					setIsLoading(false);
				}
			};

			fetchUsers();
		}, [page]);

		return { data, isLoading, error };
	};

	return {
		useUsers
	};
};
