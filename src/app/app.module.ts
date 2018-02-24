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
import * as $ from 'jquery'; 




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
import { CountdownModule } from 'ngx-countdown';
import { DateComponent } from './date/date.component';
import { SlicePipe } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { FooterComponent } from './footer/footer.component';
import { PostComponent } from './post/post.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component'; 
import { OrderService } from './order.service';
import { SlideComponent } from './slide/slide.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { AdminTutorialsComponent } from './admin/admin-tutorials/admin-tutorials.component';
import { TutorialFormComponent } from './admin/tutorial-form/tutorial-form.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { DataTableModule } from 'angular5-data-table';   
import { RecaptchaModule } from 'ng-recaptcha'; 
import { CountdownComponent } from './countdown/countdown.component';
import { AdminOrderDetailsComponent } from './admin/admin-order-details/admin-order-details.component';
import { AuthService2 } from './auth/auth.service';
import { ContentFormComponent } from './admin/content-form/content-form.component';
import { ContentService } from './content.service'; 
import { ReactionService } from './reaction.service';
import { ReactionsComponent } from './reactions/reactions.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';




const SWIPER_CONFIG: SwiperConfigInterface = { 
  
  direction: 'horizontal',
  effect: 'cube',
  // slidesPerView: '2',
  // spaceBetween: 30,
  autoplay: 5000,
  lazyLoading: true,
  observer: true,
 speed: 1000,
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  paginationClickable: true, 
 
  pagination: '.swiper-pag',
  cube: {
    shadow: false, 
    slideShadows: true,
    shadowOffset: 50,
    shadowScale: 0.94
    
  }
 

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
    SlideComponent,
    TutorialsComponent,
    AdminTutorialsComponent,
    TutorialFormComponent,
    AdminpanelComponent,
    CountdownComponent,
    AdminOrderDetailsComponent,
    ContentFormComponent,
    ReactionsComponent,
    LoadingSpinnerComponent,
   
   
  ],
  imports: [ 
    DataTableModule, 
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
      { path: 'signup', component: SignupComponent },
      { path: 'signin', component: SigninComponent }, 
      { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard]},   
      { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuard], data: { depth: 1}}, 
      { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuard]},
      { path: 'events/:id', component: PostComponent, data: { depth: 2} 
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
     

      { path: 'admin/events/:id',   
      component: ProductFormComponent,
       canActivate: [AuthGuard, AdminAuthGuardService] 
      },

      { path: 'admin/products',
     component: AdminProductsComponent, data: { depth: 2},
      canActivate: [AuthGuard, AdminAuthGuardService] 
      },
      { path: 'admin/controls',
     component: AdminpanelComponent, data: { depth: 1},
      canActivate: [AuthGuard, AdminAuthGuardService] 
      },

      { path: 'admin/orders',
       component: AdminOrdersComponent,
       canActivate: [AuthGuard, AdminAuthGuardService] 
      },
      { path: 'admin/orders/:id',
       component: AdminOrderDetailsComponent,
       canActivate: [AuthGuard, AdminAuthGuardService] 
      }    
    ]) 



  ],
  providers: [ 
    AuthService, 
    AuthService2, 
    UserService,
    AuthGuard,
    AdminAuthGuardService,
    CategoryService,
    ProductService,
    OrderService,
    ContentService,
    ReactionService
  ],

  bootstrap: [AppComponent] 

})
export class AppModule { }  
