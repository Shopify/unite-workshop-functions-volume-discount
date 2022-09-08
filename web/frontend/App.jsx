import { BrowserRouter } from 'react-router-dom'
import { NavigationMenu } from '@shopify/app-bridge-react'
import Routes from './Routes'

import { AppProvider } from '@shopify/discount-app-components'
import '@shopify/discount-app-components/build/esm/styles.css'

import {
    AppBridgeProvider,
    QueryProvider,
    PolarisProvider,
} from './components'

export default function App() {
    // Any .tsx or .jsx files in /pages will become a route
    // For more information, refer to the <Routes /> documentation
    const pages = import.meta.globEager('./pages/**/!(*.test.[jt]sx)*.([jt]sx)')

    return (
    <PolarisProvider>
        <BrowserRouter>
        <AppBridgeProvider>
            <AppProvider locale="en-US" ianaTimezone="America/Toronto">
            <QueryProvider>
                <NavigationMenu
                navigationLinks={[
                    {
                    label: 'New volume discount',
                    destination: '/Volume/new'
                    }
                ]}
                />
                <Routes pages={pages} />
            </QueryProvider>
            </AppProvider>
        </AppBridgeProvider>
        </BrowserRouter>
    </PolarisProvider>
    )
}
