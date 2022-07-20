import React from 'react';
import {
    Card,
    ContainerCard,
    CompactInformationCard,
} from '@the-deep/deep-ui';
import { _cs } from '@togglecorp/fujs';
import {
    IoChevronForward,
} from 'react-icons/io5';
import styles from './styles.css';

interface OverviewProps {
    className?: string;
}

function Overview(props: OverviewProps) {
    const {
        className,
    } = props;

    return (
        <div className={_cs(className, styles.overviewMain)}>
            <div className={styles.cardCollection}>
                <Card className={_cs(styles.globalSurgeCard, styles.cardInfo)}>
                    <CompactInformationCard
                        icon={<IoChevronForward />}
                        label="Global Surge"
                        value={200}
                    />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Card>
                <Card className={_cs(styles.trendsCard, styles.cardInfo)}>
                    <CompactInformationCard
                        icon={<IoChevronForward />}
                        label="Trends"
                        value={150}
                    />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla sed convallis quam, quis molestie nisi.
                </Card>
                <Card className={_cs(styles.regionsCard, styles.cardInfo)}>
                    <CompactInformationCard
                        icon={<IoChevronForward />}
                        label="Regions"
                        value={180}
                    />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla sed convallis quam, quis molestie nisi.
                </Card>
            </div>
            <div className={styles.mapContainer}>
                <ContainerCard
                    heading="Map Overview"
                >
                    MAP ---COMPONENT---HERE
                </ContainerCard>
            </div>
        </div>
    );
}

export default Overview;
