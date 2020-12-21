import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'white',
    alignItems:'center'
  },
  scrollContainer: {
    height: '100%',
    backgroundColor: 'white',
  },
  mainLogo:{
    height: 50,
    marginLeft: -100,
    marginTop: 30,
  },
  slides:{
    width: '100%',
    alignItems:'center',
    marginTop: -210
  },
  slideImage:{
    width: '90%',
  },
  button1:{
    borderRadius:30,
    borderWidth:3,
    borderColor:'#f8c5d7',
    backgroundColor:'#f8c5d7',
    marginTop:0,
    marginBottom:10,
    paddingVertical:10,
    width:250,
    alignItems:'center',
  },
  text1:{
    color:'white',
    fontSize:18,
  },
  button2:{
    borderRadius:30,
    borderWidth:3,
    borderColor:'#f8c5d7',
    backgroundColor:'white',
    marginBottom:50,
    paddingVertical:10,
    width:250,
    alignItems:'center',
  },
  text2:{
    color:'#f8c5d7',
    fontSize:18,
  }
})


export default styles