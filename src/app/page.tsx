'use client';

import { useUsersApi } from '@/hooks/useUsersApi';
import UserItem from '@/components/users/user-item';
import { useEffect, useState } from 'react';
import { User } from '@/types';
import UserList from '@/components/users/user-list';

export default function Home() {
	const { useUsers } = useUsersApi();

	const [users, setUsers] = useState<User[]>([]);
	const [currentPage, setCurrentPage] = useState<number>(0);

	const { data, isLoading, error } = useUsers(currentPage);

	useEffect(() => {
		if (data) {
			setUsers(data);
		}
	}, [data]);

	const goToPage = (page: number) => {
		setCurrentPage(page);
	};

	const goToNextPage = () => {
		setCurrentPage(currentPage + 10);
	};

	const goToPreviousPage = () => {
		if (currentPage > 0) {
			setCurrentPage(currentPage - 10);
		}
	};

	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6'>
			<div className='max-w-4xl mx-auto'>
				{/* Header */}
				<div className='mb-8'>
					<h1 className='text-3xl font-bold text-slate-800 mb-2'>
						Team Members
					</h1>
					<p className='text-slate-600'>Manage your team</p>
				</div>

				{/* User List */}
				<div>
					<UserList users={users} isLoading={isLoading} error={error} />
				</div>

				{/* Pagination Controls */}
				<div className='mt-8 flex items-center justify-center space-x-4'>
					<button
						onClick={goToPreviousPage}
						disabled={currentPage === 1}
						className={`px-4 py-2 text-sm font-medium transition-colors ${
							currentPage === 1
								? 'text-slate-400 cursor-not-allowed'
								: 'text-slate-700 hover:text-slate-900'
						}`}
					>
						Previous
					</button>

					<span className='text-sm text-slate-600'>
						Page {Math.floor(currentPage / 10) + 1}
					</span>

					<button
						onClick={goToNextPage}
						className={`px-4 py-2 text-sm font-medium transition-colors 
             text-slate-700 hover:text-slate-900'
            `}
					>
						Next
					</button>
				</div>
			</div>
		</div>
	);
}
