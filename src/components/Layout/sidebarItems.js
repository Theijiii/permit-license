// Sidebar items configuration for Sidebar.jsx
import { LayoutDashboard, Landmark, TreeDeciduous, Building, Settings, Droplets, CandlestickChart } from 'lucide-react';

const sidebarItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    {
        id: 'cbm', icon: Landmark, label: 'Cemetery & Burial',
        subItems: [
            { id: 'cbm-overview', label: 'Overview' },
            { id: 'cbm-burials', label: 'Burials' },
            { id: 'cbm-graves', label: 'Graves' }
        ]
    },
    {
        id: 'prs', icon: TreeDeciduous, label: 'Parks & Recreation Sche',
        subItems: [
            { id: 'prs-overview', label: 'Overview' },
            { id: 'prs-facilities', label: 'Facilities' },
            { id: 'prs-events', label: 'Events' }
        ]
    },
    {
        id: 'frs', icon: Building, label: 'Facilities Reservation',
        subItems: [
            { id: 'frs-overview', label: 'Overview' },
            { id: 'frs-bookings', label: 'Bookings' },
            { id: 'frs-cancellations', label: 'Cancellations' }
        ]
    },
    {
        id: 'wsdr', icon: Droplets, label: 'Water & Drainage',
        subItems: [
            { id: 'wsdr-overview', label: 'Overview' },
            { id: 'wsdr-usage', label: 'Usage' },
            { id: 'wsdr-maintenance', label: 'Maintenance' }
        ]
    },
    {
        id: 'ait', icon: CandlestickChart, label: 'Asset Inventory Tracking',
        subItems: [
            { id: 'ait-overview', label: 'Overview' },
            { id: 'ait-asset-management', label: 'Asset Management' },
            { id: 'ait-reports', label: 'Reports' }
        ]
    },
    { id: 'settings', icon: Settings, label: 'Settings' }
];

export default sidebarItems;
