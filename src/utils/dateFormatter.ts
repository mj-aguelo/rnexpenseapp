import dayjs from 'dayjs';

export const formatDate = (dt: Date) => dayjs(dt).format('MM/DD/YYYY');
