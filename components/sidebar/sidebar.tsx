'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  HomeIcon,
  NewspaperIcon,
  BookIcon,
  PackageIcon,
  DollarSignIcon,
  TruckIcon,
  ChevronLeftIcon,
} from 'lucide-react';

const SidebarItem = [
  { id: 1, icon: HomeIcon, label: 'Beranda', href: '/dashboard' },
  { id: 2, icon: NewspaperIcon, label: 'Jurnal Umum', href: '/journal' },
  { id: 3, icon: BookIcon, label: 'Buku Besar', href: '/ledger' },
  { id: 4, icon: PackageIcon, label: 'Neraca Lajur', href: '/trial-balance' },
  {
    id: 5,
    icon: DollarSignIcon,
    label: 'Neraca Keuangan',
    href: '/balance-sheet',
  },
  { id: 6, icon: TruckIcon, label: 'Data Master', href: '/master' },
];

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`bg-slate-500 text-white min-h-screen w-[5.5rem] ${
        isCollapsed ? 'collapsed' : 'w-[14.5rem]'
      }`}
    >
      <button
        onClick={handleToggleCollapse}
        className="p-4 focus:outline-none hover:bg-gray-700 transition-all duration-300"
      >
        {isCollapsed ? <ChevronLeftIcon size={20} /> : 'Collapse'}
      </button>
      <div className="p-4">
        <ul>
          {SidebarItem.map((item) => (
            <li key={item.id} className="mb-6 flex space-x-4 ml-4">
              <div className="flex">
                {React.createElement(item.icon, { size: 24 })}
                {!isCollapsed && (
                  <Link href={item.href}>
                    <div className="block hover:bg-gray-700 ">{item.label}</div>
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// const Sidebar: React.FC = () => {
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   const handleToggleCollapse = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   return (
//     <div
//       className={`bg-slate-500 text-white min-h-screen w-[5rem] ${
//         isCollapsed ? 'collapsed' : ''
//       }`}
//     >
//       <button
//         onClick={handleToggleCollapse}
//         className="p-4 focus:outline-none hover:bg-gray-700 transition-all duration-300"
//       >
//         {isCollapsed ? <ChevronLeftIcon size={20} /> : 'Collapse'}
//       </button>
//       <div className="p-4">
//         <ul>
//           {SidebarItem.map((item) => (
//             <li key={item.id} className="mb-6 flex space-x-4 ml-4">
//               <div className="flex">
//                 {React.createElement(item.icon, { size: 24 })}
//                 {!isCollapsed && (
//                   <Link href={item.href}>
//                     <div className="block hover:bg-gray-700">{item.label}</div>
//                   </Link>
//                 )}
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

//   return (
//     <nav className="bg-gray-400 text-white w-64 min-h-screen">
//       <div className="pt-24 pl-24">
//         <Image src={Logo} alt="logo" width={48} className="justify-center" />
//       </div>
//       <div className="p-4 pt-24">
//         {/* <ul>
//           <li className="mb-6 flex space-x-4 ml-4">
//             <div>
//               <Home />
//               <a href="#" className="block hover:bg-gray-700">
//                 Beranda
//               </a>
//             </div>
//           </li>
//           <li className="mb-6 flex space-x-4 ml-4">
//             <NewspaperIcon />
//             <a href="#" className="block hover:bg-gray-700">
//               Jurnal Umum
//             </a>
//           </li>
//           <li className="mb-6 flex space-x-4 ml-4">
//             <Book />
//             <a href="#" className="block hover:bg-gray-700">
//               Buku Besar
//             </a>
//           </li>
//           <li className="mb-6 flex space-x-4 ml-4">
//             <Package />
//             <a href="#" className="block hover:bg-gray-700">
//               Neraca Lajur
//             </a>
//           </li>
//           <li className="mb-6 flex space-x-4 ml-4">
//             <DollarSign />
//             <a href="#" className="block hover:bg-gray-700">
//               Neraca Keuangan
//             </a>
//           </li>
//           <li className="mb-6 flex space-x-4 ml-4">
//             <Truck />
//             <a href="#" className="block hover:bg-gray-700">
//               Data Master
//             </a>
//           </li>
//         </ul> */}
//       </div>
//     </nav>
//   );
// }
