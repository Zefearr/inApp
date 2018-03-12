import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class BlogCategoryService {

  constructor(private db: AngularFireDatabase) { }

  getBlogCategories() {
   return this.db.list('/blog-category', {
      query: {
        orderByChild: 'name' 
      }
   });
  }

}
