import React, {Component} from 'react';
import {Text,Alert} from 'react-native'
import {Container,Header,Button,Icon,Left,Right,Body,Title, Item, Label, Input,Form} from 'native-base'
import { View } from 'react-native-animatable';
import axios from 'axios'

class App extends Component{
constructor(){
  super();
  this.state= {email:'',subject:'',Messages:''}
}

klik=()=>{
  console.log(this.state.email)
  console.log(this.state.subject)
  console.log(this.state.Messages)

  var url='http://192.168.254.2:3210/user'
  axios.post(url,{
    email: this.state.email,
    subject : this.state.subject,
    Message : this.state.Messages
  })

  //mahdi nakatomi
  Alert.alert(
    'Terima kasih email telah terkirim',
    [
      {text: 'OK', onPress: () => console.log('OK ButtonPressed')},
    ]
 
  )
}
  render(){
    return(
      <Container>
        <Header>
            <Body><Title>React native Nodemailer </Title></Body>
        </Header>

        <Form >
          <Item floatingLabel>
          <Label> Email Recipient </Label><Input onChangeText={(input)=>this.setState({email:input})}/>
          </Item>

          <Item floatingLabel>
          <Label> Email Subject </Label><Input onChangeText={(input)=>this.setState({subject:input})}/>
          </Item>

          <Item floatingLabel>
            <Label> Messages </Label><Input onChangeText={(input)=>this.setState({Messages:input})}/>
          </Item>
        </Form>

        <Button onPress={this.klik} style={{width:300,marginTop:50,marginLeft:50}}><Text style={{paddingLeft:120,color:'white'}}> Send Mail </Text></Button>

        <View style={{paddingLeft:120}} >
          <Text></Text>
          <Text>email will be sent from</Text>
          <Text>gavutplay@gmail.com </Text>
        </View>
      </Container>
    )
  }
}

export default App;
