import Overview from './modules/Cbm/CbmOverview'; // Import Overview component
import Dashboard from './modules/Dashboard/DashboardOverview'; // Import Dashboard component
import PrsOverview from './modules/Prs/PrsOverview'; // Import PRS Overview component
import FrsOverview from './modules/Frs/FrsOverview'; // Import FRS Overview component
import WsdrOverview from './modules/Wsdr/WsdrOverview'; // Import WSDR Overview component
import AitOverview from './modules/Ait/AitOverview'; // Import AIT Overview component
import Burials from './modules/Cbm/Burials'; // Import Burials component
import Graves from './modules/Cbm/Graves'; // Import Graves component
import Facilities from './modules/Prs/Facilities'; // Import Facilities component
import Events from './modules/Prs/Events'; // Import Events component
import FrsBookings from './modules/Frs/Bookings'; // Import FRS Bookings component
import FrsCancellations from './modules/Frs/Cancellations'; // Import FRS Cancellations component
import Usage from './modules/Wsdr/Usage'; // Import WSDR Usage component
import Maintenance from './modules/Wsdr/Maintenance'; // Import WSDR Maintenance component
import AssetsManagement from './modules/Ait/AssetsManagement'; // Import AIT Asset Management component
import Reports from './modules/Ait/Reports'; // Import AIT Reports component

function ContentRenderer({ activeItem }) {
    switch (activeItem) {
        case 'dashboard':
            return <div><Dashboard /></div>;
        case 'Settings':
            return <div>Settings Content</div>;
        case 'cbm-overview':
            return <div><Overview /></div>;
        case 'cbm-burials':
            return <div><Burials /></div>;
        case 'cbm-graves':
            return <div><Graves /></div>;
        case 'prs-overview':
            return <div><PrsOverview /></div>;
        case 'prs-facilities':
            return <div><Facilities /></div>;
        case 'prs-events':
            return <div><Events /></div>;
        case 'frs-overview':
            return <div><FrsOverview /></div>;
        case 'frs-bookings':
            return <div><FrsBookings /></div>;
        case 'frs-cancellations':
            return <div><FrsCancellations /></div>;
        case 'wsdr-overview':
            return <div><WsdrOverview /></div>;
        case 'wsdr-usage':
            return <div><Usage /></div>;
        case 'wsdr-maintenance':
            return <div><Maintenance /></div>;
        case 'ait-overview':
            return <div><AitOverview /></div>;
        case 'ait-asset-management':
            return <div><AssetsManagement /></div>;
        case 'ait-reports':
            return <div><Reports /></div>;
        case 'settings':
            return <div>Settings Content</div>;
        default:
            return <div>Dashboard</div>;
    }
}

export default ContentRenderer;
