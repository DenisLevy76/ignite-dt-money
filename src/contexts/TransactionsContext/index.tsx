import { createContext } from 'react';
import { TransactionsContextData } from './types';

export const TransactionsContext = createContext({} as TransactionsContextData);
