import React from 'react';
import {
    Tabs,
    TabList,
    Tab,
    TabPanel,
    Button,
} from '@the-deep/deep-ui';
import {
    IoFilterSharp,
    IoCloudDownloadOutline,
} from 'react-icons/io5';

import Overview from './Overview';
import Country from './Country';
import styles from './styles.css';

function Dashboard() {
    return (
        <div className={styles.dashboardNavigation}>
            <Tabs
                useHash
                defaultHash="overview"
                variant="secondary"
            >
                <div className={styles.dashboardButtons}>
                    <div className={styles.filterAndExport}>
                        <Button
                            className={styles.filterButton}
                            icons={<IoFilterSharp />}
                            variant="nlp-general"
                            name="undefined"
                        >
                            Filter
                        </Button>

                        <Button
                            className={styles.exportButton}
                            icons={<IoCloudDownloadOutline />}
                            variant="nlp-general"
                            name="undefined"
                        >
                            Export
                        </Button>
                    </div>
                    <TabList className={styles.dashboardTablist}>
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
                </div>
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
