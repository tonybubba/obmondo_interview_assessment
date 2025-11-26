import { useUsersApi } from '@/hooks/useUsersApi';
import { User } from '@/types';
import React, { useEffect, useState } from 'react';
import UserItem from './user-item';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const UserList = ({users=[], isLoading, error}:{users:User[], isLoading:boolean,error:any}) => {
	const { useUsers } = useUsersApi();

	
	

	

	if (isLoading) {
		return (
			<div className='min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6'>
				<div className='max-w-4xl mx-auto text-center py-12'>
					<p className='text-slate-500'>Loading team members...</p>
				</div>
			</div>
		);
	}

	if (error) {
		return (
			<div className='min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6'>
				<div className='max-w-4xl mx-auto text-center py-12'>
					<p className='text-red-500'>Error: {error.message}</p>
				</div>
			</div>
		);
	}
	return (
		<div>
			<div className='space-y-3'>
				{!users || users.length === 0 ? (
					<div className='text-center py-12'>
						<p className='text-slate-500'>No team members found</p>
					</div>
				) : (
					users.map((user) => <UserItem key={user.ID} user={user} />)
				)}
			</div>
		</div>
	);
};

export default UserList;
