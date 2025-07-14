import { Bell, ChevronDown, Filter, Menu, Search, Settings } from 'lucide-react'
import React from 'react'

function Header({sidebarCollapsed, onToggleSidebar, breadcrumb = ['Dashboard']}) {
    return (
        <div className='bg-white/-80 backdrop-blur-xl border-b border-slate-200/50 px-6 py-4'>
            <div className='flex items-center justify-between'>
                {/* left */}
                <div className='flex items-center space-x-4'>
                    <button className='p-2 rounded-lg text-slate-500 hover:bg-slate-200 transition-colors 
                    duration-200' onClick={onToggleSidebar}>
                        <Menu className='w-6 h-6' />
                    </button>
                    <div>
                        <div className='hidden md:flex items-center space-x-1'>
                            <h1 className='text-md font-bold'>PUBLIC ASSETS & FACILITIES MANAGEMENT</h1>
                        </div>
                        <div>
                            <span className='text-xs text-slate-500 font-bold'>
                                {breadcrumb.join(' > ')}
                            </span>
                        </div>
                    </div>
                </div>
                <div className='flex-1 max-w-md mx-8'>
                    <div className='relative'>
                        <Search className='w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500' />
                        <input type='text' placeholder='Search...' className='w-full pl-10 pr-4 py-2 bg-slate-100 
                    border border-slate-200 rounded-lg placeholder-slate-500 focus:outline-none focus:ring-2 focus:border-transparent focus:ring-orange-300
                    hover:border-orange-300 transition-all'/>
                        <button className='absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600'>
                            <Filter className='w-5 h-5' />
                        </button>
                    </div>
                </div>

                {/* right */}
                <div className='flex items-center space-x-1'>
                    {/* notification */}
                    <button className='relative rounded-xl p-2 text-slate-600 hover:bg-slate-200 transition-colors'>
                        <Bell className='w-6 h-6' />
                        <span className='absolute top-0 w-4 h-4 text-white text-xs bg-red-500 rounded-full flex items-center
                   justify-center'>1</span>
                    </button>

                    {/* settings */}
                    <button className='relative rounded-xl p-2 text-slate-600 hover:bg-slate-200 transition-colors'>
                        <Settings className='w-6 h-6' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header
