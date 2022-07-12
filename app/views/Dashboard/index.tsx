import React from 'react';
import {
    Tabs,
    TabList,
    Tab,
    TabPanel,
} from '@the-deep/deep-ui';

import Overview from './Overview';
import Country from './Country';

function Dashboard() {
    return (
        <div>
            <Tabs
                useHash
                defaultHash="overview"
                variant="secondary"
            >
                <TabList>
                    <Tab
                        name="overview"
                    >
                        OverView
                    </Tab>
                    <Tab
                        name="country"
                    >
                        Country
                    </Tab>
                </TabList>
                <TabPanel
                    name="overview"
                >
                    <Overview />
                </TabPanel>
                <TabPanel
                    name="country"
                >
                    <Country />
                </TabPanel>
            </Tabs>
        </div>
    );
}

export default Dashboard;
