import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

 

  getCategories() {
    return this.db.list('/categories', {
      query: {
        orderByChild: 'name' 
      }
    });
  }
  getStatus() { 
    return this.db.list('/status', { 
      query: {
        orderByChild: 'name' 
      }
    });
  }
  
  getContentCategories() {
    return this.db.list('/content-category', {
      query: {
        orderByChild: 'name'  
      }
    });
  }

}
