import React from 'react';
import {
    ContainerCard,
} from '@the-deep/deep-ui';
import { _cs } from '@togglecorp/fujs';
import {
    BarChart,
    Bar,
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

import styles from './styles.css';

interface OverviewProps {
    className?: string;
}

function Overview(props: OverviewProps) {
    const {
        className,
    } = props;

    const data = [
        {
            name: 'Mar',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Apr',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'May',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'June',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'July',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Aug',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Sept',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    const barChartData = [
        {
            name: 'Americas',
            country: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Asia/Pacific',
            country: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'ESAR',
            country: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Europe',
            country: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'MENA',
            country: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'WCAR',
            country: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Russia',
            country: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    return (
        <div className={_cs(className, styles.overviewMain)}>
            <div className={styles.cardCollection}>
                <ContainerCard
                    className={_cs(styles.globalSurgeCard, styles.cardInfo)}
                    heading="Outbreak"
                    headingClassName={styles.cardsHeader}
                    headerDescription="Sub total of cases"
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    All Outbreak numbers:
                    - covid 19
                    - MonkeyPox
                    - Ebola
                    - Lorem
                    - Epsum
                </ContainerCard>
                <ContainerCard
                    className={_cs(styles.trendsCard, styles.cardInfo)}
                    heading="Outbreak over last 12 months"
                    headingClassName={styles.cardsHeader}
                    contentClassName={styles.responsiveContent}
                    headerDescription="Average indicator value weighted by country's populations"
                >
                    <ResponsiveContainer className={styles.responsiveContainer}>
                        <LineChart
                            // width={500}
                            // height={200}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip
                                allowEscapeViewBox={{
                                    x: true,
                                    y: true,
                                }}
                            />
                            <Legend />
                            <Line
                                type="monotone"
                                dataKey="pv"
                                stroke="#8884d8"
                                activeDot={{ r: 8 }}
                            />
                            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                        </LineChart>
                    </ResponsiveContainer>
                </ContainerCard>
                <ContainerCard
                    className={_cs(styles.regionsCard, styles.cardInfo)}
                    contentClassName={styles.responsiveContent}
                    heading="Region"
                    headingClassName={styles.cardsHeader}
                    headerDescription="Average indicator value weighted by country's populations (Apr 2022)"
                >
                    <ResponsiveContainer className={styles.responsiveContainer}>
                        <BarChart
                            data={barChartData}
                        >
                            <Legend />
                            <Tooltip
                                allowEscapeViewBox={{
                                    x: true,
                                    y: true,
                                }}
                            />
                            <Bar dataKey="country" fill="#1da12c" />
                        </BarChart>
                    </ResponsiveContainer>
                </ContainerCard>
            </div>
            <div className={styles.mapContainer}>
                <ContainerCard
                    heading="Map Overview"
                    headingClassName={styles.cardsHeader}
                >
                    MAP ---COMPONENT---HERE
                </ContainerCard>
            </div>
        </div>
    );
}

export default Overview;
