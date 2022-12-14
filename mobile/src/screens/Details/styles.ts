import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginTop: 48,
    marginBottom: 16,
  },
  incidentProperty: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold',
    marginTop: 24,
  },
  incidentValue: {
    fontSize: 15,
    marginTop: 8,
    marginBottom: 24,
    color: '#737380',
  },
  contactBox: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 16,
  },
  heroTitle: {
    fontSize: 20,
    color: '#13131a',
    fontWeight: 'bold',
    lineHeight: 30,
  },
  heroDescription: {
    fontSize: 15,
    color: '#737380',
    marginTop: 16,
  },
  actions: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  action: {
    backgroundColor: '#e02041',
    borderRadius: 8,
    height: 50,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
  detailsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailsButtonText: {
    color: '#e02041',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
