import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Directive } from '@angular/core'; 
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppUser } from './models/app-user'; 
import { CustomFormsModule } from "ng2-validation"; 
import { DatePipe } from '@angular/common'; 
import * as $ from 'jquery'; 
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';


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
import { AdminOrderDetailsComponent } from './admin/admin-order-details/admin-order-details.component';
import { AuthService2 } from './auth/auth.service';
// import { ContentFormComponent } from './admin/content-form/content-form.component';
import { ContentService } from './content.service'; 
import { ReactionService } from './reaction.service';
import { ReactionsComponent } from './reactions/reactions.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component'; 
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { AboutComponent } from './about/about.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RecaptchaModule } from 'ng-recaptcha';
import { MatIconModule } from '@angular/material/icon';


import { TinyMceModule } from 'angular-tinymce'; 
import { tinymceDefaultSettings } from 'angular-tinymce';
import { EventlistComponent } from './eventlist/eventlist.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionsService } from './questions.service';   
import { BlogCategoryService } from './blog-category.service';
import { MatExpansionModule } from '@angular/material/expansion'; 

import 'hammerjs'; 




const SWIPER_CONFIG: SwiperConfigInterface = { 
  
  direction: 'horizontal',
  spaceBetween: 50,
  // effect: 'cube',
  slidesPerView: '1',

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
 
import {
  MatExpansionPanel, 
  MatMenuPanel,
  MatExpansionPanelHeader,
  MatAccordion,
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatAccordionDisplayMode,
  MatChipsModule,
  MatCheckboxModule,
  MatDialogModule,
  MatGridListModule, 
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressBarModule,
  MatProgressSpinnerModule, 
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule, 
  MatTooltipModule, 
  MatDatepickerModule,
  MatDividerModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule
  
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { FacebookModule, FacebookService, FBPageComponent } from 'ngx-facebook';
import { FbMirrorComponent } from './fb-mirror/fb-mirror.component';
import { PricacyComponent } from './pricacy/pricacy.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PrivacyFormComponent } from './admin/privacy-form/privacy-form.component';
import { QuestionsFormComponent } from './questions-form/questions-form.component';


export const MaterialModules = [ 
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
 
  
 
];

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
    AdminOrderDetailsComponent,
    // ContentFormComponent,
    ReactionsComponent,
    LoadingSpinnerComponent,
    AboutComponent,
    EventlistComponent,
    QuestionsComponent,
    QuestionsFormComponent,
    FbMirrorComponent,
    PricacyComponent,
    PrivacyFormComponent,
    UserProfileComponent,
   
  
   
  ],
  imports: [  
    AgmCoreModule.forRoot({ 
      apiKey: 'AIzaSyAmR8wKqfsVoM4TxwaDYexoPLx6lEN2A6s', 
    }), 
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
    TinyMceModule.forRoot(tinymceDefaultSettings()), 
    DataTableModule, 
    BrowserAnimationsModule,   
    CdkTableModule, 
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    CustomFormsModule,
    FacebookModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),      
    AngularFireDatabaseModule, 
    AngularFireAuthModule, 
    MaterialModules,
    SwiperModule.forRoot(SWIPER_CONFIG),
    NgbModule.forRoot(), 
    RouterModule.forRoot([ 
      { path: '', component: ProductsComponent, data: { depth: 1} }, 
      { path: 'about', component: AboutComponent, data: { depth: 5} }, 
      { path: 'login', component: LoginComponent,  data: { depth: 2} },
      { path: 'products', component: ProductsComponent }, 
      { path: 'signup', component: SignupComponent },
      { path: 'events', component: EventlistComponent },
      { path: 'privacy-policy', component: PricacyComponent },
      { path: 'signin', component: SigninComponent }, 
      { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard]},   
      { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuard], data: { depth: 3}},  
      { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuard]},
      { path: 'faq', component: HomeComponent, data: {depth: 4}},
      { path: 'events/:id', component: PostComponent, data: { depth: 2} 
      },

      { path: 'tutorials/:id', component: TutorialsComponent, data: { depth: 2}}, 

      { path: 'admin/slider',
       component: AdminTutorialsComponent,
       canActivate: [AuthGuard, AdminAuthGuardService]},

       { path: 'admin/faq',
       component: QuestionsComponent, 
       canActivate: [AuthGuard, AdminAuthGuardService]}, 


       { path: 'admin/faq/new',
       component: QuestionsFormComponent,  
       canActivate: [AuthGuard, AdminAuthGuardService]},
       { path: 'admin/faq/:id',
       component: QuestionsFormComponent, 
       canActivate: [AuthGuard, AdminAuthGuardService]},
      
       { path: 'admin/privacy/:id', 
       component: PrivacyFormComponent,
       canActivate: [AuthGuard, AdminAuthGuardService]  
      },

 
      { path: 'admin/products/new',   
       component: ProductFormComponent,
       canActivate: [AuthGuard, AdminAuthGuardService]  
      }, 
      { path: 'admin/products/:id',   
      component: ProductFormComponent,
      canActivate: [AuthGuard, AdminAuthGuardService]  
     },
      { path: 'admin/slider/new', 
       component: TutorialFormComponent,
       canActivate: [AuthGuard, AdminAuthGuardService]   
      }, 
      { path: 'admin/slider/:id',   
       component: TutorialFormComponent,
       canActivate: [AuthGuard, AdminAuthGuardService]  
      },
     

      { path: 'admin/events/:id',   
      component: ProductFormComponent,
       canActivate: [AuthGuard, AdminAuthGuardService] 
      },

      { path: 'admin/products',
     component: AdminProductsComponent,
      canActivate: [AuthGuard, AdminAuthGuardService] 
      },
      { path: 'admin/controls',
     component: AdminpanelComponent,
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
    BlogCategoryService,
    GoogleMapsAPIWrapper,
    AuthService, 
    AuthService2, 
    UserService,
    AuthGuard, 
    QuestionsService,
    AdminAuthGuardService,
    CategoryService,
    ProductService,
    OrderService,
    ContentService,
    ReactionService, 
    FacebookService


  ],

  bootstrap: [AppComponent] 

}) 
export class AppModule { }    
 