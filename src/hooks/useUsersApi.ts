import { useState, useEffect } from 'react';

import { User } from '@/types';
import { apiClient } from '@/lib/api-client';
import { useQuery, useQueryClient } from '@tanstack/react-query';

interface UserResult {
	users: User[];
}

const fetchUsers = async (page: number): Promise<User[]> => {
	const result = (await apiClient.get(`/api/users?page=${page}`)) as UserResult;
	return result.users;
};

export const useUsersApi = () => {
	const useUsers = (page: number) => {
		const queryClient = useQueryClient();

		const query = useQuery({
			queryKey: ['users', page],
			queryFn: () => fetchUsers(page),
			staleTime: 5 * 60 * 1000,
			gcTime: 10 * 60 * 1000,
		});

		useEffect(() => {
			if (!query.data) return;

			if (query.data.length > 0) {
				queryClient.prefetchQuery({
					queryKey: ['users', page + 10],
					queryFn: () => fetchUsers(page + 10),
					staleTime: 5 * 60 * 1000,
				});
			}
		}, [page, query.data, queryClient]);

		return {
			data: query.data ?? null,
			isLoading: query.isLoading,
			error: query.error,
			isError: query.isError,
		};
	};

	return {
		useUsers,
	};
};
