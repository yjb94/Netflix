import dayjs from 'dayjs';
import { Content } from '.';

export const getIsRecentContent = (content: Content): boolean => {
  return dayjs(content.releaseDate).isAfter(dayjs().subtract(1, 'month'));
};
