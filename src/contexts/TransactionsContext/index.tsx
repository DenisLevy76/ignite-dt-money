import { createContext } from 'use-context-selector'
import { TransactionsContextData } from './types'

export const TransactionsContext = createContext({} as TransactionsContextData)
