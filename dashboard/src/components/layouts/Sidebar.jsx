import React, { useState } from 'react'
import { BsWindowDesktop} from "react-icons/bs";
import { IoChatboxEllipses } from "react-icons/io5";
import { FaChartBar } from "react-icons/fa";

const Sidebar = ({ collapsed = false, currentPage, onPageChange }) => {
  const menuItems = [
    {
      id: "dashboard",
      Icon : BsWindowDesktop,
      label : "Dashboard",
      active : true,
      badge: "New",
    },
    {
      id: "analytic",
      Icon : FaChartBar,
      label : "Analytic",
      subMenu : [
        {id: "overview", label: "Overview"}
      ]
    },
       {
      id: "chat",
      Icon : IoChatboxEllipses,
      label : "Chat",
      badge: "New",
    },
  ];
  const [expandedItems, setExpandedItems] = useState(new Set(["analytics"]));

  const toggleExpanded = (itemid) => {
    const newExpanded = new Set(expandedItems)
    if(expandedItems.has(itemid)){
      newExpanded.delete(itemid)
    }else{
      newExpanded.add(itemid)
    }

    setExpandedItems(newExpanded)
  };

  return (
    <div className={`${collapsed ? "w-20" : "w-72"} transition duration-300 ease-in-out bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col relative z-10`}>
        {/* logo*/}
        <div className='p-6 border-b border-slate-200/50 dark:bg-slate-700/50'>
          <div className='flex items-center space-x-3'>
             <div className='w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg'>
                <h2 className='font-bold text-2xl text-indigo-50'>A</h2>
             </div>
             
             {!collapsed && (
                  <div>
                <h1 className='text-xl font-bold text-slate-800'>A-Admin</h1>
                <p className='text-xs text-slate-400 dark:text-salte-400'>Admin Panel</p>
              </div>
             )}
            

            </div>

        </div>

        <nav className='flex-1 p-4 space-y-2 overflow-y-auto'>
          {menuItems.map((item) => {
            const Icon = item.Icon;
            return (
              <div key={item.id}>
                <button className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${currentPage === item.id || item.active ? "bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg shadow-blue/50"
                   : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50"}`} onClick={()=>{
                    if(item.subMenu){
                      toggleExpanded(item.id)
                    }else {
                      onPageChange(item.id)
                    }
                   }}>
                  <div className='flex items-center space-x-3'>
                    <Icon className={`w-5 h-5`} />
                    <span className='text-sm font-medium'>{item.label}</span>
                  </div>
                  {!collapsed && expandedItems.has(item.id) && (
                    <span className='text-xs px-2 py-1 rounded-md bg-blue-100 text-blue-700'>{item.badge}</span>
                  )}
                </button>
              </div>
            )
          })}
         </nav>

        <div className='p-4 border-t border-slate-200/50 dark:border-slate-700/50'>
           <div className='flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50'>
             <h1 className='w-5 h-5 rounded-full ring-2 ring-blue-500'>A</h1>

             <div className='flex-1 min-w-0'>
                <div className='flex-1 min-w-0'>
                   <p className='text-sm font-medium text-slate-800 dark:text-white truncate'>Alik</p>
                </div>
             </div>

           </div>
        </div>
           
    </div>
  )


}



export default Sidebar;