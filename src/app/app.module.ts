import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppUser } from './models/app-user';
import { FormsModule } from '@angular/forms'; 
import { CustomFormsModule } from "ng2-validation"; 
import { DatePipe } from '@angular/common'; 



  
 








import { AppComponent } from './app.component'; 
import { AppnavbarComponent } from './appnavbar/appnavbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';

import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service'; 
import { UserService } from './user.service';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoryService } from './category.service';
import { ProductService } from './product.service';
import { FpItemsComponent } from './fp-items/fp-items.component';
import { FpItemsService } from './fp-items.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CollectionComponent } from './collection/collection.component';
import { PaginationService } from './pagination.service';
import { SpinnerComponent } from './spinner/spinner.component';
import { DateComponent } from './date/date.component';
import { TrimpipeComponent } from './trimpipe/trimpipe.component';
import { SlicePipe } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { ShoppingCartService } from './shopping-cart.service'; 
import { ShoppingCart } from './models/shopping-cart';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';













 




@NgModule({
  declarations: [
   
   TrimpipeComponent,
    AppComponent,
    AppnavbarComponent,
    HomeComponent,
    ProductsComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    ShoppingCartComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent,
    FpItemsComponent,
    CollectionComponent,
    SpinnerComponent,
    DateComponent,
    ProductCardComponent,
   
  
   
   
  
    
  ],
  imports: [ 
    BrowserAnimationsModule, 
    InfiniteScrollModule, 
    BrowserModule,
    FormsModule, 
    CustomFormsModule,
    AngularFireModule.initializeApp(environment.firebase),     
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([ 
      { path: '', component: ProductsComponent }, 
      { path: 'login', component: LoginComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },   

      { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard]},
      { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuard] },
      { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuard]}, 

      { path: 'admin/products/new', 
       component: ProductFormComponent,
       canActivate: [AuthGuard, AdminAuthGuardService] 
      }, 

      { path: 'admin/products/:id',
      component: ProductFormComponent,
       canActivate: [AuthGuard, AdminAuthGuardService] 
      },

      { path: 'admin/products',
     component: AdminProductsComponent,
      canActivate: [AuthGuard, AdminAuthGuardService] 
      },

      { path: 'admin/orders',
       component: AdminOrdersComponent,
       canActivate: [AuthGuard, AdminAuthGuardService] 
      }, 

      { path: 'items',
      component: FpItemsComponent, 
     },
     { path: 'collections',
     component: CollectionComponent,  
    },
    
    ])



  ],
  providers: [
    AuthService,
    UserService,
    AuthGuard,
    AdminAuthGuardService,
    CategoryService,
    ProductService,
    FpItemsService,
    PaginationService,
    ShoppingCartService
    
   
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { } 
