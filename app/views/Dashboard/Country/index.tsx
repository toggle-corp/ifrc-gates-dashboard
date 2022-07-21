import React from 'react';
import { _cs } from '@togglecorp/fujs';
import {
    ContainerCard,
    CompactInformationCard,
} from '@the-deep/deep-ui';
/* import Map, {
    MapContainer,
    MapBounds,
    MapSource,
    MapLayer,
} from '@togglecorp/re-map'; */
import {
    IoChevronForward,
    IoFlag,
} from 'react-icons/io5';

import styles from './styles.css';

/* const lightStyle = 'mapbox://styles/togglecorp/cl50rwy0a002d14mo6w9zprio';

const countryFillPaint: mapboxgl.FillPaint = {
    'fill-color': '#354052', // empty color
    'fill-opacity': 0.2,
};

const countryLinePaint: mapboxgl.LinePaint = {
    'line-color': '#ffffff',
    'line-width': 1,
};
*/
interface CountryProps {
    className?: string;
}

function Country(props: CountryProps) {
    const {
        className,
    } = props;

    return (
        <div className={_cs(className, styles.countryWrapper)}>
            <div className={styles.countryMain}>
                <div className={styles.countryDetailWrapper}>
                    <ContainerCard
                        className={styles.statusContainer}
                    >
                        <div className={styles.infoCards}>
                            <CompactInformationCard
                                icon={<IoChevronForward />}
                                label="Cases"
                                value={130}
                            />
                            <CompactInformationCard
                                icon={<IoChevronForward />}
                                label="Vaccination"
                                value={645}
                            />
                            <CompactInformationCard
                                icon={<IoChevronForward />}
                                label="Deaths"
                                value={100}
                            />
                        </div>
                    </ContainerCard>
                    <ContainerCard
                        className={styles.countryTrend}
                        heading="The trend chart"
                    >
                        CHART---COMPONENT---HERE
                    </ContainerCard>
                </div>
                <ContainerCard
                    className={styles.countryInfo}
                    footerContent="Country-details"
                    headerDescription="Country MAP"
                    headerIcons={<IoFlag />}
                    heading="<Country-Name>"
                >
                    Country Details here
                </ContainerCard>

            </div>
            <ContainerCard
                className={styles.perceptionWrapper}
                contentClassName={styles.perceptionCard}
                footerContent="Data collection not completed - as of March 31st"
            >
                <p>COVID-19 Vaccine Perceptions in Africa</p>
            </ContainerCard>
        </div>
    );
}

export default Country;
