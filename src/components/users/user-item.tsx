
'use client'
import { User } from '@/types';
import Link from 'next/link';



const UserItem = ({user}:{user: User}) => {
  const handleMessage = (user: User) => {
    

    
  };

  return (  
              <div
                key={user.ID}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-5 border border-slate-100"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    {/* Avatar */}
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-lg flex-shrink-0">
                      {user.FirstNameLastName
                        .split(' ')
                        .map((n) => n[0])
                        .join('')
                        .toUpperCase()}
                    </div>

                    {/* User Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-3 mb-1">
                        <h3 className="text-lg font-semibold text-slate-800">{user.FirstNameLastName}</h3>
                        <span className="px-2.5 py-0.5 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
                          {user.JobTitle}
                        </span>
                      </div>

                      <div className="space-y-1.5 mt-2">
                        <div className="flex items-center space-x-2 text-slate-600 text-sm">
                         
                          <span className="truncate">{user.EmailAddress}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-slate-600 text-sm">
                         
                          <span>{user.Phone}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                 
                  {/* Actions */}
                   {/* Actions */}
                  <Link 
                    href={`mailto:${user.EmailAddress}`}
                    target='_blank'
                    className="ml-4 px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-sm font-medium rounded-lg transition-colors flex items-center space-x-2"
                  >
                    <svg 
                      className="w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                      />
                    </svg>
                    <span>Email</span>
                  </Link>
             
         
        
      </div>
    </div>
  );
};

export default UserItem;