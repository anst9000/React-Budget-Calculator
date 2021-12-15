import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from 'axios'

// Initial state
const initialState = {
  transactions: [],
  error: null,
  loading: true
};

// Create global context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  async function getTransactions() {
    try {
      const response = await axios('/api/v1/transactions')

      dispatch({
        type: 'GET_TRANSACTIONS',
        payload: {
          data: response.data.data
        }
      })
    } catch (error) {
      dispatch({
        type: 'TRANSACTIONS_ERROR',
        payload: {
          error: error.response.data.error
        }
      })
    }
  }

  async function deleteTransaction(id) {
    try {
      await axios.delete(`/api/v1/transactions/${id}`)

      dispatch({
        type: "DELETE_TRANSACTION",
        payload: {
          id
        }
      });
    } catch (error) {
      dispatch({
        type: 'TRANSACTIONS_ERROR',
        payload: {
          error: error.response.data.error
        }
      })
    }
  }

  async function addTransaction(transaction) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const response = await axios.post(`/api/v1/transactions`, transaction, config)

      dispatch({
        type: "ADD_TRANSACTION",
        payload: {
          transaction: response.data.data
        }
      });
    } catch (error) {
      dispatch({
        type: 'TRANSACTIONS_ERROR',
        payload: {
          error: error.response.data.error
        }
      })
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        getTransactions,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
