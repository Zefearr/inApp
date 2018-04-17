import * as firebase from 'firebase';
import { error } from 'util';

export class AuthService2 {
    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(
                error => console.log(error)  
            )
    }
    signinUser(email: string, password: string) { 
      firebase.auth().signInWithEmailAndPassword(email, password) 
      .then(
          responce => console.log(responce)
      ).catch( 
          error => console.log(error)
      )
    }

    resetPassword(email: string) {
        var auth = firebase.auth();
        return auth.sendPasswordResetEmail(email)
          .then(() => console.log("email sent"))
          .catch((error) => console.log(error))
    }
} 
    
