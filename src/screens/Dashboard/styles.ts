import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  upperBox: {
    flex: 1,
    paddingTop: 40,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  amountText: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
  labelText: {
    fontWeight: '100',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
    fontStyle: 'italic'
  },
  chart: {
    marginVertical: 20
  },
  categoryBox: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  categoryIcon: {
    maxWidth: '100%',
    height: 50,
    marginBottom: 10
  },
  categoryText: {
    fontSize: 10,
    textAlign: 'center'
  },
  categories: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  downBox: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  transactionsBox: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  transactionItem: {
    width: '100%',
    maxWidth: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 100,
    alignItems: 'center',
    paddingHorizontal: 20
  },
  transactionTitle: {
    fontSize: 20,
  },
  transactionCategory:{
    fontSize: 15
  },
  transactionAmount:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'right'
  },
  transactionDate:{
    fontSize: 15,
    textAlign: 'right'
  },
  transactionItemBox:{
    
  }
})
