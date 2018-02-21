import * as firebase from 'firebase';
import { error } from 'util';

export class AuthService2 {
    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(
                error => console.log(error)  
            )
    }
    signinUser(email: string, password: string, name: string) { 
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
          responce => console.log(responce)
      ).catch( 
          error => console.log(error)
      )
    }
} 
    
