import AsyncStorage from '@react-native-async-storage/async-storage';
import {catchError} from 'utils/errorHandling';

const useStorage = () => {
  const setItem = async (key: string, value: any) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      catchError(e);
    }
  };

  const getItem = async (key: string, def: any) => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value !== null ? JSON.parse(value) : def;
    } catch (e) {
      catchError(e);
    }
  };

  const removeItem = async (key: string) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      catchError(e);
    }
  };

  return {
    setItem,
    getItem,
    removeItem,
  };
};

export default useStorage;
