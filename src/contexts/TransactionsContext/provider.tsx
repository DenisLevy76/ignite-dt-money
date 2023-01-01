import { ReactNode, useCallback, useEffect, useState } from 'react'
import { TransactionsContext } from '.'
import { api } from '../../lib/axios'
import { ITransaction } from '../../pages/Transactions/components/TransactionComponent/types'
import { createTransactionsProps } from './types'

export const TransactionsContextProvider: React.FC<{
  children: ReactNode
}> = ({ children }) => {
  const [transactions, setTransactions] = useState<ITransaction[]>([])

  const getTransactions = useCallback(async (query?: string) => {
    const { data } = await api.get<ITransaction[] | null>('transactions', {
      params: { q: query, _sort: 'createdAt', _order: 'desc' },
    })

    if (data) setTransactions(data)
  }, [])

  const createTransaction = useCallback(
    async (transaction: createTransactionsProps) => {
      const { category, description, price, type } = transaction

      const { data } = await api.post<ITransaction>('/transactions', {
        category,
        description,
        price,
        type,
        createdAt: new Date(),
      })

      setTransactions((state) => [data, ...state])
    },
    [],
  )

  useEffect(() => {
    getTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{ transactions, getTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
