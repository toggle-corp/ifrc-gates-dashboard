import {
    getDashboardLink,
    parseQueryString,
} from './common';

test ('get dashboard link', () => {
    expect(getDashboardLink()).toBe('/dashboard');
});

test ('parse query string', () => {
    expect(parseQueryString('?page=dashboard&hotReload=true')).toStrictEqual({
        page: 'dashboard',
        hotReload: 'true',
    });
});
