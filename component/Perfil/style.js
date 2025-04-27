import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#18191A',
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#242526',
    paddingBottom: 20,
  },
  coverPhoto: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  profilePic: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#18191A',
    marginTop: -60,
  },
  name: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 8,
  },
  followers: {
    color: 'gray',
    fontSize: 14,
  },
  buttonsRow: {
    flexDirection: 'row',
    marginTop: 10,
  },
  followButton: {
    backgroundColor: '#3A3B3C',
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 6,
    marginHorizontal: 5,
  },
  searchButton: {
    backgroundColor: '#3A3B3C',
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 6,
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
  },
  section: {
    backgroundColor: '#242526',
    padding: 16,
    marginTop: 10,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  bio: {
    color: 'white',
    fontSize: 14,
    marginBottom: 8,
  },
  info: {
    color: '#B0B3B8',
    fontSize: 14,
  },
  link: {
    color: '#2e89ff',
    fontSize: 14,
    marginTop: 4,
  },
});


export default styles;