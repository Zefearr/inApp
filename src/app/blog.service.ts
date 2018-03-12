import { Injectable } from '@angular/core';
// import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireDatabaseModule } from "angularfire2/database";
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from "angularfire2/database";



@Injectable()
export class BlogService {

 

  constructor(private db: AngularFireDatabase) { }


  

 
 

  create(blogpost) {  

    const timestamp = this.getTimeStamp();  
    const blogref = this.db.list('/blog'); 

    blogref.push({  
      blogpost,
      timesent:timestamp
    }); 
 
  }

  getAllblogs() {
  return this.db.list('/blog');
  }
  
  getTimeStamp() {
    const now = new Date().toLocaleString();
    // const date = now.getUTCFullYear() + '/' + (now.getUTCMonth() + 1) + '/' +  now.getUTCDate();
    // const time = now.getUTCHours() + ':' + now.getUTCMinutes()  + ':' + now.getUTCSeconds();
    return now;
   
  }
  getOneBlog(blogpostId) {  
    return this.db.object('/blog/' + blogpostId);
  }
  update(blogpostId, blogpost) { 
    return this.db.object('/blog/' + blogpostId).update(blogpost); 
  }
}
