import { Alert } from 'react-native';
import { Content } from 'entities/content';

export const saveContent = (content: Content) => {
  Alert.alert(`${content.title}을 저장했습니다.`);
};
