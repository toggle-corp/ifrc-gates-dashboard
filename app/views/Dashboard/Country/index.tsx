import React, { useCallback } from 'react';
import { _cs } from '@togglecorp/fujs';
import {
    Container,
    ContainerCard,
    CompactInformationCard,
    BadgeInput,
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

const KeySelector = () => 'key';
const LabelSelector = () => 'label';

const countryNames = [
    {
        key: '001',
        label: 'Afganisthan',
    },
    {
        key: '002',
        label: 'Nepal',
    },
    {
        key: '003',
        label: 'Bangkok',
    },
];

function Country(props: CountryProps) {
    const {
        className,
    } = props;

    const handleBadge = useCallback(() => {
        // eslint-disable-next-line no-console
        console.log('Clicked handle badge::');
    }, []);

    return (
        <div className={_cs(className, styles.countryMain)}>
            <div className={styles.countryDetailWrapper}>
                <div className={styles.countryTags}>
                    <BadgeInput
                        containerClassName={styles.badgeList}
                        keySelector={KeySelector}
                        labelSelector={LabelSelector}
                        label="Choosen countries:"
                        name="country_name"
                        onChange={handleBadge}
                        options={countryNames}
                        value="001"
                    />
                </div>
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
                <Container
                    className={styles.countryTrend}
                    heading="The trend chart"
                >
                    CHART---COMPONENT---HERE
                </Container>
            </div>
            <div className={styles.countryInfo}>
                <ContainerCard
                    footerContent="Country-details"
                    headerDescription="Country MAP"
                    headerIcons={<IoFlag />}
                    heading="<Country-Name>"
                >
                    Country Details here
                </ContainerCard>
            </div>
        </div>
    );
}

export default Country;
