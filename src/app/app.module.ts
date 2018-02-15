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
import $ from 'jquery';


import { SwiperModule } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
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
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { DateComponent } from './date/date.component';
import { SlicePipe } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { FooterComponent } from './footer/footer.component';
import { PostComponent } from './post/post.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService2 } from './auth/auth.service'; 
import { SinglepostComponent } from './singlepost/singlepost.component';
import { OrderService } from './order.service';
import { SlideComponent } from './slide/slide.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { AdminTutorialsComponent } from './admin/admin-tutorials/admin-tutorials.component';
import { TutorialFormComponent } from './admin/tutorial-form/tutorial-form.component';



const SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  effect: 'slider',
  slidesPerView: '4', 
  autoplay: 3000,

  spaceBetween: 20,
 
  observer: true,
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  
  pagination: '.swiper-pagination',
  paginationClickable: true, 
  
  
   
    
   

 
  
 
 
};


@NgModule({ 
  declarations: [
    AppComponent,
    AppnavbarComponent,
    HomeComponent,
    ProductsComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent,
    DateComponent,
    ProductCardComponent,
    FooterComponent,
    PostComponent,
    SignupComponent,
    SigninComponent,
    SinglepostComponent,
    SlideComponent,
    TutorialsComponent,
    AdminTutorialsComponent,
    TutorialFormComponent,
   
  ],
  imports: [ 
    BrowserAnimationsModule,  
    BrowserModule,
    FormsModule, 
    CustomFormsModule,
    AngularFireModule.initializeApp(environment.firebase),     
    AngularFireDatabaseModule, 
    AngularFireAuthModule,
    SwiperModule.forRoot(SWIPER_CONFIG),
    NgbModule.forRoot(),
    RouterModule.forRoot([ 
      { path: '', component: ProductsComponent, data: { depth: 1} },
      { path: 'tutorials', component: TutorialsComponent, data: { depth: 2} }, 
      { path: 'login', component: LoginComponent,  data: { depth: 2} },
      { path: 'products', component: ProductsComponent },
      { path: 'posts', component: PostComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'signin', component: SigninComponent }, 
      { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard]},
      { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuard] },
      { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuard]},
      { path: 'products/:id', component: PostComponent, data: { depth: 2}
      }, 
      { path: 'admin/tutorials',
       component: AdminTutorialsComponent,
       canActivate: [AuthGuard, AdminAuthGuardService],
        data: { depth: 2} },

 
      { path: 'admin/products/new',   
       component: ProductFormComponent,
       canActivate: [AuthGuard, AdminAuthGuardService]  
      }, 
      { path: 'admin/tutorials/new', 
       component: TutorialFormComponent,
       canActivate: [AuthGuard, AdminAuthGuardService]  
      }, 
      { path: 'admin/tutorials/:id', 
       component: TutorialFormComponent,
       canActivate: [AuthGuard, AdminAuthGuardService]  
      }, 

      { path: 'admin/products/:id',
      component: ProductFormComponent,
       canActivate: [AuthGuard, AdminAuthGuardService] 
      },

      { path: 'admin/products',
     component: AdminProductsComponent, data: { depth: 2},
      canActivate: [AuthGuard, AdminAuthGuardService] 
      },

      { path: 'admin/orders',
       component: AdminOrdersComponent,
       canActivate: [AuthGuard, AdminAuthGuardService] 
      }    
    ])



  ],
  providers: [
    AuthService, 
    UserService,
    AuthGuard,
    AdminAuthGuardService,
    CategoryService,
    ProductService,
    OrderService, 

    
   
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }  
