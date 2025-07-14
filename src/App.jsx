import React from 'react'
import Sidebar from './components/Layout/Sidebar'
import Header from './components/Layout/Header'
import Dashboard from './components/Dashboard/Overview'
import sidebarItems from './components/Layout/sidebarItems';

function App() {

    {/* Render Content */}
    const renderContent = () => {
        switch (activeItem) {
            case 'dashboard':
                return <div><Dashboard /></div>;
            case 'cbm':
                return <div>Cemetery & Burial Content</div>;
            case 'prs':
                return <div>Parks & Recreation Content</div>;
            case 'frs':
                return <div>Facilities Reservation Content</div>;
            case 'Settings':
                return <div>Settings Content</div>;
            case 'cbm-overview':
                return <div>CBM Overview Content</div>;
            case 'cbm-burials':
                return <div>CBM Burials Content</div>;
            case 'cbm-graves':
                return <div>CBM Graves Content</div>;
            case 'prs-overview':
                return <div>PRS Overview Content</div>;
            case 'prs-facilities':
                return <div>PRS Facilities Content</div>;
            case 'prs-events':
                return <div>PRS Events Content</div>;
            case 'frs-overview':
                return <div>FRS Overview Content</div>;
            case 'frs-bookings':
                return <div>FRS Bookings Content</div>;
            case 'frs-cancellations':
                return <div>FRS Cancellations Content</div>;
            case 'wsdr-overview':
                return <div>Water & Drainage Overview Content</div>;
            case 'wsdr-usage':
                return <div>Water & Drainage Usage Content</div>;
            case 'wsdr-maintenance':
                return <div>Water & Drainage Maintenance Content</div>;
            case 'ait-overview':
                return <div>Asset Inventory Tracking Overview Content</div>;
            case 'ait-asset-management':
                return <div>Asset Inventory Tracking Asset Management Content</div>;
            case 'ait-reports':
                return <div>Asset Inventory Tracking Reports Content</div>;
            case 'settings':
                return <div>Settings Content</div>;
            default:
                return <div>Dashboard</div>;
        }
    }

    const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);
    const [activeItem, setActiveItem] = React.useState('dashboard');

    // Helper to find breadcrumb path from sidebarItems
    function getBreadcrumb(itemId) {
        for (const item of sidebarItems) {
            if (item.id === itemId) return [item.label];
            if (item.subItems) {
                const sub = item.subItems.find(sub => sub.id === itemId);
                if (sub) return [item.label, sub.label];
            }
        }
        return ['Dashboard'];
    }
    

    return (
        <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to indigo-50'>
            <div className='flex h-screen overflow-hidden'>
                <Sidebar
                    collapsed={sidebarCollapsed}
                    onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
                    activeItem={activeItem}
                    onPageChange={setActiveItem}
                />
                <div className='flex-1 flex flex-col overflow-hidden'>
                    <Header
                        sidebarCollapsed={sidebarCollapsed}
                        onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
                        breadcrumb={getBreadcrumb(activeItem)}
                    />
                    <div className="flex-1 p-8">{renderContent()}</div>
                </div>
            </div>
        </div>
    )
}

export default App
