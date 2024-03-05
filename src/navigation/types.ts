import type {StackScreenProps} from '@react-navigation/stack';

export type TMainStackParamList = {
  MainNews: undefined;
  NewsDetail: {
    name: string;
    largeImage: string;
    category: string;
    quantity: number;
  };
};

export type TRootStackParamList = TMainStackParamList;

export interface IRootStackParamList extends TMainStackParamList {}

export type RootStackScreenProps<T extends keyof TRootStackParamList> =
  StackScreenProps<TRootStackParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends IRootStackParamList {}
  }
}
