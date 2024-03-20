import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:393,
    height:2000,
    backgroundColor: '#EEEEEE',
  },

  header: {
    width:393,
    height:84,
    flexDirection: 'row', // Use a row layout
    alignItems: 'center', // Align items vertically
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },

  header_order: {
    width:175,
    height: 24,
    fontSize: 20,
    fontFamily: 'SF Pro Text',
    lineHeight: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginLeft: 5, // Add margin to separate the text from the back button
  },

  back: {
    width:24,
    height: 44,
    color: '#000000',
    marginTop: 21,
    marginRight: 8, // Add margin to separate the back button from the text
    right: 70,
  },

  product:{
    alignItems: 'center',
    width:393,
    height:147,
    backgroundColor: '#FFFFFF',
    marginTop:12,
  },

  main:{
    width:393,
    height:1.491,
  },
  title:{
    width:361,
    height: 17,
    fontFamily: 'Roboto',
    fontSize: 14,
    lineHeight: 16,
    color:'#333333',
    fontWeight: 'bold',
    marginTop:16,
  },
  add_product:{
    width: 361,
    height: 62,
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#EEEEEE',
    marginTop: 20,

  },
  button_Product:{
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center', 
    marginLeft: 'auto', 
    marginRight: 'auto', 
    marginBottom: 'auto', 
    fontFamily: 'Roboto',
    fontSize: 18,
    marginTop: 20,
    color: '#ADAFB2',
  },
  

client:{
  alignItems: 'center',
  width:393,
  height:176,
  backgroundColor: '#FFFFFF',
  marginTop:12,
},

search:{
  width:361,
  height:44,
  borderRadius: 8,
  justifyContent: 'space-between',
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: '#F1F1F1',
  marginTop: 12,
},
button_Client:{
  width:361,
  height:38,
  borderRadius:8,
  fontFamily:'Roboto',
  flexDirection: 'row',
  justifyContent: 'space-between',
  lineHeight:22,
  marginTop:25,
},
add_client:{
  fontFamily:'Roboto',
  fontSize:16,
  lineHeight:22.4,
  color: '#333333',
  fontWeight: 'bold',
},
sdt:{
  fontFamily:'Roboto',
  fontSize:16,
  lineHeight:22.4,
  color:'#EB2F96',
},
delivery_address:{
  alignItems: 'center',
  width:393,
  height:124,
  backgroundColor:'#FFFFFF',
  marginTop:12,
},
carrier:{
  alignItems: 'center',
  width:393,
  height:131,
  backgroundColor:'#FFFFFF',
  marginTop:12,
},
radioButtonContainer: {
  width:361,
  height:58,
  flexDirection: 'row',
  alignItems: 'center',
  marginVertical: -4,
},
radioButtonLabel: {
  width:156,
  height:22,
  fontSize:14,
  alignItems: 'center',
  fontFamily:'Roboto',
  lineHeight:19.6,
  color:'#333333',
},
shipping:{
  alignItems: 'center',
  width:393,
  height:285,
  backgroundColor:'#FFFFFF',
  marginTop: 12,
},
transport_fee:{
  width:361,
  height:53,
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
  marginTop: 20,
},
priceText1:{
  width:125,
  height:53,
  fontFamily:'SF Pro Text',
  fontSize:14,
  lineHeight:20,
  color: '#999999',
},
priceText2:{
  width:170,
  height:53,
  fontFamily:'SF Pro Text',
  fontSize:20,
  alignContent:'center',
  lineHeight:24,
  color:'#6655D0',
  left:100,
},
payment:{
  width:393,
  height:113,
  alignItems: 'center',
  backgroundColor:'#FFFFFF',
  marginTop:12,
},
describe:{
  width:393,
  height:169,
  backgroundColor:'#FFFFFF',
  alignItems:'center',
  marginTop:12,
},
describe_style: {
  width: 361,
  height: 112,
  borderRadius: 8,
  color: '#000000', // Đổi màu văn bản sang đen hoặc một màu khác
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: '#D9D9D9',
  marginTop: 12,
  padding: 10,
  textAlign: 'left', // Căn lề văn bản về đầu ô TextInput
},
pay:{
  width: 393,
  height: 249,
  backgroundColor:'#FFFFFF',
  marginTop: 12,
  alignItems: 'center',
},
order_value:{
  width: 361,
  height: 22,
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
  marginTop: 12,
  backgroundColor:'#FFFFFF',
},
discount:{
  width: 361,
  height: 22,
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
  marginTop: 12,
  color:'#333333',
},
Delivery_charges:{
  width: 361,
  height: 22,
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
  marginTop: 12,
  color:'#333333',
},
total_payment:{
  width: 361,
  height: 22,
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
  marginTop: 12,
  color:'#333333',
},
Total_amount_the_order_needs_to_pay:{
  width: 360,
  height: 22,
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
  marginTop: 4,
  left:15,
},
blue:{
  color:'#6655D0',
},
Delivery_fee_needs_to_be_paid_by_the_customer:{
  width: 360,
  height: 22,
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
  marginTop: 4,
  left:15,
},
pink:{
  color:'#EB2F96',
},
create_order:{
  width: 360,
  height: 48,
  borderRadius:8,
  backgroundColor:'#6655D0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center', 
  textAlign: 'center', 
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: '#EEEEEE',
  marginTop: 32,
  left:16.5,
},
order:{
  color:'#FFFFFF',
  fontFamily: 'Roboto',
  fontSize: 16,
},


modalContainer: {
  backgroundColor: 'white',
  padding: 20,
  margin: 50,
  borderRadius: 10,
  alignItems: 'center',
  justifyContent: 'center',
  elevation: 5,
},
closeButton: {
  marginTop: 20,
  padding: 10,
  backgroundColor: 'red',
  color: 'white',
  borderRadius: 5,
  textAlign: 'center',
},
productDetail:{
  width: 393,
  height:96,
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
  marginTop:20,
},
productImage:{
  height:96,
  width:96,
  marginTop: 10,
  left:20,
},
from: {
  right:75,
  flexDirection: 'column',
  justifyContent: 'center',
  marginLeft: 10,
},
name:{
  fontFamily:'Roboto',
  fontSize:16,
  lineHeight:19.2,
  fontWeight: 'bold',
  color: '#333333',
},
sale:{
  fontFamily:'Roboto',
  fontSize:12,
  lineHeight:14.4,
  color:'#EB2F96',
  marginTop:4,
},
money:{
  fontFamily:'Roboto',
  fontSize:16,
  lineHeight:19.2,
  color:'#6655D0',
  marginTop:4,
},
fullname:{
  width:212,
  height:17,
  fontFamily:'Roboto',
  fontSize:14,
  lineHeight:16.8,
  color:'#333333',
  fontWeight:'bold',
  marginTop:12,
  right:70,
},
address1:{
  width:216,
  height:34,
  fontFamily:'Roboto',
  fontSize:14,
  lineHeight:16.8,
  color:'#5A5A5A',
  marginTop:4,
  right:70,
},
address2:{
  width:216,
  height:34,
  fontFamily:'Roboto',
  fontSize:14,
  lineHeight:16.8,
  color:'#5A5A5A',
  right:70,
  marginTop:-14,
},
button1: {
  width: 24,
  height: 24,
  fontSize:18,
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#FFFFFF',
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: '#CCCCCC',
  color:'#000000',
},

button2: {
  width: 24,
  height: 24,
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#FFFFFF',
  borderWidth: 1.5,
  borderStyle: 'solid',
  borderColor: '#CCCCCC',
  color:'#000000',

},

number:{
  flex: 1,
  width: 24,
  height: 24,
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#FFFFFF',
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: '#CCCCCC',
  color:'#000000',
},

});

export default styles;
