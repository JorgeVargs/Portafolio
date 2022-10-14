"use strict";
(self["webpackChunkportafolio"] = self["webpackChunkportafolio"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_Dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Dashboard/dashboard/dashboard.component */ 6712);
/* harmony import */ var _components_Dashboard_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Dashboard/about-me/about-me.component */ 6490);
/* harmony import */ var _components_Dashboard_experience_experience_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Dashboard/experience/experience.component */ 5782);
/* harmony import */ var _components_Landing_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Landing/header/header.component */ 7839);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);







const routes = [
    { path: '', component: _components_Landing_header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent, },
    { path: 'dashboard', component: _components_Dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent },
    { path: 'dashboard/about-me', component: _components_Dashboard_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_1__.AboutMeComponent },
    { path: 'dashboard/experience', component: _components_Dashboard_experience_experience_component__WEBPACK_IMPORTED_MODULE_2__.ExperienceComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 3252);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/footer/footer.component */ 4662);




//decorador
class AppComponent {
    constructor() { }
    title(title) {
        throw new Error('Method not implemented.');
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-navbar")(1, "router-outlet")(2, "app-footer");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-owl-carousel-o */ 7297);
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @tinymce/tinymce-angular */ 3889);
/* harmony import */ var ngx_scrollreveal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-scrollreveal */ 8211);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 3252);
/* harmony import */ var _components_Landing_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Landing/header/header.component */ 7839);
/* harmony import */ var _components_Landing_work_experience_work_experience_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Landing/work-experience/work-experience.component */ 3641);
/* harmony import */ var _components_Landing_skills_skills_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Landing/skills/skills.component */ 6719);
/* harmony import */ var _components_Landing_projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Landing/projects/projects.component */ 6031);
/* harmony import */ var _components_Landing_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Landing/contacto/contacto.component */ 362);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/footer/footer.component */ 4662);
/* harmony import */ var _components_Dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/Dashboard/dashboard/dashboard.component */ 6712);
/* harmony import */ var _components_Dashboard_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/Dashboard/about-me/about-me.component */ 6490);
/* harmony import */ var _components_Dashboard_experience_experience_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/Dashboard/experience/experience.component */ 5782);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/data.service */ 2468);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 2560);





















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_13__.DataServices], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__.BrowserAnimationsModule,
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_17__.CarouselModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule,
        _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_20__.EditorModule,
        ngx_scrollreveal__WEBPACK_IMPORTED_MODULE_2__.NgsRevealModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__.NavbarComponent,
        _components_Landing_header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent,
        _components_Landing_work_experience_work_experience_component__WEBPACK_IMPORTED_MODULE_5__.WorkExperienceComponent,
        _components_Landing_skills_skills_component__WEBPACK_IMPORTED_MODULE_6__.SkillsComponent,
        _components_Landing_projects_projects_component__WEBPACK_IMPORTED_MODULE_7__.ProjectsComponent,
        _components_Landing_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_8__.ContactoComponent,
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__.FooterComponent,
        _components_Dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__.DashboardComponent,
        _components_Dashboard_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_11__.AboutMeComponent,
        _components_Dashboard_experience_experience_component__WEBPACK_IMPORTED_MODULE_12__.ExperienceComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__.BrowserAnimationsModule,
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_17__.CarouselModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule,
        _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_20__.EditorModule,
        ngx_scrollreveal__WEBPACK_IMPORTED_MODULE_2__.NgsRevealModule] }); })();


/***/ }),

/***/ 6490:
/*!*********************************************************************!*\
  !*** ./src/app/components/Dashboard/about-me/about-me.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutMeComponent": () => (/* binding */ AboutMeComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tinymce/tinymce-angular */ 3889);




const _c0 = "advlist autolink lists link image charmap print preview anchor";
const _c1 = "insertdatetime media table paste code help wordcount";
const _c2 = function () { return [_c0, "searchreplace visualblocks code fullscreen", _c1]; };
const _c3 = "undo redo | formatselect | bold italic backcolor | \n                      alignleft aligncenter alignright alignjustify | \n                      bullist numlist outdent indent | removeformat | help";
const _c4 = function (a2) { return { height: 500, menubar: false, plugins: a2, toolbar: _c3 }; };
class AboutMeComponent {
    constructor() { }
    ngOnInit() {
        this.initForm();
    }
    initForm() {
        this.formAboutMe = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.UntypedFormGroup({
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.minLength(10)]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.email]),
            mensaje: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.minLength(10)])
        });
    }
}
AboutMeComponent.ɵfac = function AboutMeComponent_Factory(t) { return new (t || AboutMeComponent)(); };
AboutMeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AboutMeComponent, selectors: [["app-about-me"]], decls: 30, vars: 5, consts: [[1, "container", "menu-dash", "pt-10", "pb-5"], [1, "row"], [1, "col-lg-12"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "dashboard"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "col-lg-4"], ["src", "assets/images/about-me.png", 1, "img-fluid"], [1, "col-8"], [3, "formGroup"], [1, "mt-5"], ["for", "titulo", 1, "form-label"], ["type", "text", "name", "titulo", "formControlName", "titulo", 1, "form-control"], ["for", "descripcion", 1, "form-label"], ["apiKey", "uekaen7rfwenkvfdv05s40nqez1ptzbzczlkby1sqc1nje6p", 3, "init"], [1, "col-12", "mt-5"], ["href", "#", 1, "btn", "btn-blue", "animate__animated", "animate__fadeInUp"]], template: function AboutMeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "H1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Acerca de Mi");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 1)(6, "div", 2)(7, "nav", 3)(8, "ol", 4)(9, "li", 5)(10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Acerca de Mi");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 1)(15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10)(18, "form", 11)(19, "div", 12)(20, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "T\u00EDtulo:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 12)(24, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Descripci\u00F3n:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "editor", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 17)(28, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Actualizar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formAboutMe);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("init", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c2)));
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName, _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_2__.EditorComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC1tZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 6712:
/*!***********************************************************************!*\
  !*** ./src/app/components/Dashboard/dashboard/dashboard.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


const _c0 = function () { return ["/dashboard/about-me"]; };
const _c1 = function () { return ["/dashboard/experience"]; };
const _c2 = function () { return ["/dashboard/habilities"]; };
const _c3 = function () { return ["/dashboard/portfolio"]; };
const _c4 = function () { return ["/dashboard/contact"]; };
class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 32, vars: 10, consts: [[1, "container", "menu-dash", "pt-5", "pb-5"], [1, "row"], [1, "col-4"], [1, "card", "mb-5", 3, "routerLink"], ["src", "assets/images/menu-dash/acerca-de-mi.jpg", "alt", "...", 1, "card-img-top"], [1, "card-body"], [1, "card-text", "text-center"], ["src", "assets/images/menu-dash/experiencia.jpg", "alt", "...", 1, "card-img-top"], ["src", "assets/images/menu-dash/habilidades.jpg", "alt", "...", 1, "card-img-top"], ["src", "assets/images/menu-dash/portafolio.jpg", "alt", "...", 1, "card-img-top"], ["routerLinkActive", "router-link-active", 1, "card", "mb-5", 3, "routerLink"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5)(6, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Acerca de M\u00ED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2)(9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5)(12, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Experiencia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2)(15, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5)(18, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Habilidades");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2)(21, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5)(24, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Portafolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2)(27, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5)(30, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c4));
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive], styles: [".menu-dash[_ngcontent-%COMP%] {\n  margin-top: 10%;\n}\n.menu-dash[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.menu-dash[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 18px;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUFDSjtBQUNJO0VBQ0kscUJBQUE7QUFDUjtBQUFRO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUVaIiwiZmlsZSI6ImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51LWRhc2h7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcblxyXG4gICAgLmNhcmR7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIC5jYXJkLXRleHR7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ 5782:
/*!*************************************************************************!*\
  !*** ./src/app/components/Dashboard/experience/experience.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExperienceComponent": () => (/* binding */ ExperienceComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/data.service */ 2468);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);






const _c0 = function () { return ["/dashboard"]; };
const _c1 = function (a0) { return { "is-invalid": a0 }; };
class ExperienceComponent {
    constructor(dataService, formBuilder) {
        this.dataService = dataService;
        this.formBuilder = formBuilder;
        this.companys = [];
    }
    ngOnInit() {
        this.initForm();
    }
    initForm() {
        this.formExperience = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormGroup({
            namecompany: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]),
            rangofechas: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]),
            descripcion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required])
        });
    }
    isValid(nombreControl) {
        return (this.formExperience.get(nombreControl).invalid && this.formExperience.get(nombreControl).touched);
    }
    agregarCompany() {
        console.log(this.formExperience.value);
        this.dataService.guardarCompanys(this.formExperience.value);
    }
}
ExperienceComponent.ɵfac = function ExperienceComponent_Factory(t) { return new (t || ExperienceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_0__.DataServices), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormBuilder)); };
ExperienceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ExperienceComponent, selectors: [["app-experience"]], decls: 78, vars: 13, consts: [[1, "container", "menu-dash", "pt-10", "pb-5"], [1, "row"], [1, "col-lg-12"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "col-8"], [1, "", 3, "formGroup"], [1, "col-12", "mb-3"], ["for", "formFile", 1, "form-label"], ["type", "file", "id", "formFile", 1, "form-control"], [1, "col-6"], ["for", "namecompany", 1, "visually"], ["type", "text", "formControlName", "namecompany", "id", "namecompany", "placeholder", "", "required", "", 1, "form-control", 3, "ngClass"], ["for", "rangofechas", 1, "visually"], ["type", "text", "formControlName", "rangofechas", "id", "rangofechas", "placeholder", "", 1, "form-control", 3, "ngClass"], [1, "col-12"], ["formControlName", "descripcion", "id", "descripcion", "placeholder", "Descripci\u00F3n", "rows", "10", 1, "form-control", "mt-5", 3, "ngClass"], [1, "d-grid", "gap-2", "d-md-block"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], [1, "col-4"], [1, "table", "table-hover", "mt-5"], ["scope", "col"], ["scope", "row"], ["colspan", "2"]], template: function ExperienceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "H1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Experiencia");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 1)(6, "div", 2)(7, "nav", 3)(8, "ol", 4)(9, "li", 5)(10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " Experiencia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 1)(15, "div", 8)(16, "form", 9)(17, "div", 1)(18, "div", 10)(19, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Logo empresa");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 1)(23, "div", 13)(24, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Empresa:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 13)(28, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Fechas:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 1)(32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "textarea", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 1)(35, "div", 20)(36, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ExperienceComponent_Template_button_click_36_listener() { return ctx.agregarCompany(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Agregar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 1)(40, "div", 18)(41, "table", 23)(42, "thead")(43, "tr")(44, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "First");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Last");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Handle");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "tbody")(53, "tr")(54, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Otto");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "@mdo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "tr")(63, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "Jacob");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "Thornton");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "@fat");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "tr")(72, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "Larry the Bird");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "@twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.formExperience);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c1, ctx.isValid("namecompany")));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c1, ctx.isValid("rangofechas")));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](11, _c1, ctx.isValid("descripcion")));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.formExperience.invalid);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 362:
/*!*******************************************************************!*\
  !*** ./src/app/components/Landing/contacto/contacto.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactoComponent": () => (/* binding */ ContactoComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);






function ContactoComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El email es incorrecto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class ContactoComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
        this.initForm();
    }
    initForm() {
        this.formDatos = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormGroup({
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(10)]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email]),
            mensaje: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(10)])
        });
    }
    isValid(nombreControl) {
        return (this.formDatos.get(nombreControl).invalid && this.formDatos.get(nombreControl).touched);
    }
    enviarFormulario() {
        console.log(this.formDatos.value);
        const email = this.formDatos.value;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'Content-Type': 'application/json' });
        this.http.post('https://formspree.io/f/mqkwpjyy', { name: email.nombre, replyto: email.email, message: email.mensaje }, { 'headers': headers }).subscribe((response) => {
            if (response.ok) {
                alert("Se ha enviado correctamente el correo");
                this.formDatos.reset();
            }
            else {
                alert(response);
            }
        });
    }
}
ContactoComponent.ɵfac = function ContactoComponent_Factory(t) { return new (t || ContactoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ContactoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactoComponent, selectors: [["app-contacto"]], decls: 24, vars: 12, consts: [["id", "contacto", 1, "contacto"], [1, "container"], [1, "row", "align-items-center"], [1, "col-md-6"], ["src", "./assets/images/contacto-ilustracion.png", "alt", "Contacto", 1, "img-fluid"], [1, "col-md-6", "text-center"], [3, "formGroup"], [1, "mt-5"], ["for", "nombre", 1, "form-label"], ["type", "text", "name", "nombre", "formControlName", "nombre", 1, "form-control", 3, "ngClass"], ["for", "input_email", 1, "form-label"], ["type", "email", "name", "email", "formControlName", "email", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "input_mensaje", 1, "form-label"], ["name", "mensaje", "formControlName", "mensaje", "id", "input_mensaje", "rows", "3", 1, "form-control", 3, "ngClass"], ["type", "button", 1, "btn", "btn-blue", "mt-5", 3, "disabled", "click"], [1, "invalid-feedback"]], template: function ContactoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5)(6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6)(9, "div", 7)(10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Nombre:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7)(14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Correo:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ContactoComponent_div_17_Template, 2, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7)(19, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Mensaje");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactoComponent_Template_button_click_22_listener() { return ctx.enviarFormulario(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Enviar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formDatos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.isValid("nombre")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.isValid("email")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formDatos.get("email").status == "INVALID" && ctx.formDatos.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.isValid("mensaje")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.formDatos.invalid);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName], styles: ["form[_ngcontent-%COMP%] {\n  text-align: left;\n}\nform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\nform[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%], form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  border-radius: 0px;\n  border: 0px;\n  border-bottom: 1px solid var(--blue);\n}\nform[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%]:active, form[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%]:focus, form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:active, form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus, form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:active, form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n}\nform[_ngcontent-%COMP%]   .btn-blue[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 50px;\n  width: 200px;\n  height: 55px;\n  font-size: 26px;\n  box-shadow: 0px 11px 15px -6px rgba(0, 0, 0, 0.6);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RvLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc2Fzc1xcX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksZ0JBQUE7QUFESjtBQUVJO0VBQ0ksZUFBQTtBQUFSO0FBR0k7OztFQUdJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0FBRFI7QUFHUTs7Ozs7RUFFSSxnQkFBQTtBQUVaO0FBRUk7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUNkSixpRERlSTtBQUVSIiwiZmlsZSI6ImNvbnRhY3RvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4vLi4vLi4vLi4vLi4vYXNzZXRzL3Nhc3MvbWl4aW5zXCI7XHJcblxyXG5mb3Jte1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGxhYmVse1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dFt0eXBlPVwiZW1haWxcIl0sXHJcbiAgICBpbnB1dFt0eXBlPVwidGV4dFwiXSxcclxuICAgIHRleHRhcmVhe1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgICAgICBib3JkZXI6MHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ibHVlKTtcclxuXHJcbiAgICAgICAgJjphY3RpdmUsXHJcbiAgICAgICAgJjpmb2N1c3tcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1ibHVle1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgICAgIEBpbmNsdWRlIGJveHNoYWRvdyggMHB4IDExcHggMTVweCAtNnB4IHJnYmEoMCwwLDAsMC42KSk7XHJcbiAgICB9XHJcbn0iLCJAbWl4aW4gZm9udHMoJGZhbWlseSwgJHBhdGgpIHtcclxuICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZmFtaWx5O1xyXG4gICAgICAgIHNyYzogdXJsKFwiI3skcGF0aH0uZW90XCIpO1xyXG4gICAgICAgIHNyYzogdXJsKFwiI3skcGF0aH0uZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgdXJsKFwiI3skcGF0aH0ud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCIjeyRwYXRofS50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBib3hzaGFkb3coJGFyZ3MuLi4pIHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogJGFyZ3M7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6ICRhcmdzO1xyXG4gICAgYm94LXNoYWRvdzogJGFyZ3M7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc2l0aW9uKCRhcmdzLi4uKSB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiAkYXJncztcclxuICAgIC1tcy10cmFuc2l0aW9uOiAkYXJncztcclxuICAgIC1vLXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgdHJhbnNpdGlvbjogJGFyZ3M7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc2Zvcm0oJGFyZ3MuLi4pIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiAkYXJncztcclxuICAgIC1tb3otdHJhbnNmb3JtOiAkYXJncztcclxuICAgIC1tcy10cmFuc2Zvcm06ICRhcmdzO1xyXG4gICAgLW8tdHJhbnNmb3JtOiAkYXJncztcclxuICAgIHRyYW5zZm9ybTogJGFyZ3M7XHJcbn1cclxuXHJcbkBtaXhpbiBwbGFjZWhvbGRlcigkY29sb3IsICRmLXNpemUsICRmLWZhbWlseSkge1xyXG4gICAgJjo6cGxhY2Vob2xkZXIgeyAvKiBDaHJvbWUsIEZpcmVmb3gsIE9wZXJhLCBTYWZhcmkgMTAuMSsgKi9cclxuICAgICAgICBjb2xvcjogJGNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgb3BhY2l0eTogMTsgLyogRmlyZWZveCAqL1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJGYtc2l6ZTtcclxuICAgICAgICBmb250LWZhbWlseTogJGYtZmFtaWx5O1xyXG4gICAgfVxyXG5cclxuICAgICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cclxuICAgICAgICBjb2xvcjogJGNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAkZi1zaXplO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZi1mYW1pbHk7XHJcbiAgICB9XHJcblxyXG4gICAgJjo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogTWljcm9zb2Z0IEVkZ2UgKi9cclxuICAgICAgICBjb2xvcjogJGNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAkZi1zaXplO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZi1mYW1pbHk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBkZWdyYWRhZG8oJGFyZ3MuLi4pIHtcclxuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxuICAgIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbn1cclxuXHJcbkBtaXhpbiBpbWctZGVncmFkYWRvKCR1cmwsICRhcmdzLi4uKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHVybCksIC1tb3otbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxuICAgIGJhY2tncm91bmQ6IHVybCgkdXJsKSwgLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR1cmwpLCAtbXMtbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxuICAgIGJhY2tncm91bmQ6IHVybCgkdXJsKSwgLW8tbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxuICAgIGJhY2tncm91bmQ6IHVybCgkdXJsKSwgbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxufVxyXG5cclxuLy8gTWVkaWEgcXVlcnlzXHJcbiRtZWRpYV9xdWVyaWVzIDogKFxyXG4gICAgJ21vYmlsZScgOiBcIihtYXgtd2lkdGg6IDQ3OXB4KVwiLFxyXG4gICAgJ21vYmlsZTInOiBcIihtYXgtd2lkdGg6IDU5OXB4KVwiLFxyXG4gICAgJ3RhYmxldCcgOiBcIihtYXgtd2lkdGg6IDc2N3B4KVwiLFxyXG4gICAgJ3RhYmxldDInOiBcIihtYXgtd2lkdGg6IDk5MXB4KVwiLFxyXG4gICAgJ2Rlc2t0b3AnIDogXCIobWF4LXdpZHRoOjExOTlweClcIixcclxuICAgICdkZXNrdG9wMSc6IFwiKG1heC13aWR0aDoxMzk5cHgpXCIsXHJcbiAgICAnZGVza3RvcDInIDogXCIobWF4LXdpZHRoOjE1OTlweClcIlxyXG4pO1xyXG5cclxuQG1peGluIGZvcl9icmVha3BvaW50KCRicmVha3BvaW50KSB7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDojeyRicmVha3BvaW50fXB4KXtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 7839:
/*!***************************************************************!*\
  !*** ./src/app/components/Landing/header/header.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _work_experience_work_experience_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../work-experience/work-experience.component */ 3641);
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../skills/skills.component */ 6719);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../projects/projects.component */ 6031);
/* harmony import */ var _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contacto/contacto.component */ 362);





class HeaderComponent {
    constructor() {
        this.titulo = "Luis Vargas";
        this.puesto = "Desarrollador Front-End";
        this.cv = "./assets/curriculum-vitae-jorge-luis-vargas.pdf";
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 30, vars: 3, consts: [[1, "header"], [1, "animate__animated", "animate__backInDown"], [1, "animate__animated", "animate__backInLeft", "animate__delay-1s"], ["target", "_blank", 1, "btn", "btn-blue", "animate__animated", "animate__fadeInUp", 3, "href"], ["id", "about-me", 1, "about-me"], [1, "container"], [1, "row"], [1, "col-8", "offset-2", "col-sm-8", "offset-sm-2", "col-md-6", "offset-md-0", "d-flex", "justify-content-center", "align-items-center"], [1, "imagen"], ["src", "assets/images/about-me.png", "alt", "Acerca de m\u00ED", 1, "img-fluid", "m-auto"], [1, "col-sm-12", "col-md-6", "animate__animated", "animate__fadeInUp"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 0)(1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Descargar CV");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "section", 4)(8, "div", 5)(9, "div", 6)(10, "div", 7)(11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 10)(14, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Acerca de M\u00ED");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Soy una persona que est\u00E1 en busca de nuevos retos profesionales, uno de mis objetivos es seguir aprendiendo de este basto mundo de las ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "tecnolog\u00EDas de desarrollo web");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, ". De igual manera considero que podr\u00EDa aportar mis conocimientos en los proyectos, as\u00ED como tambi\u00E9n aprender de ellos.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Actualmente me desempe\u00F1o como desarrollador ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Front-End");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, ", y estoy dispuesto a seguir aprendiendo para mejorar en cada uno de los proyectos tanto personales como profesionales.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "app-work-experience")(27, "app-skills")(28, "app-projects")(29, "app-contacto");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.titulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.puesto);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("href", ctx.cv, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    } }, dependencies: [_work_experience_work_experience_component__WEBPACK_IMPORTED_MODULE_0__.WorkExperienceComponent, _skills_skills_component__WEBPACK_IMPORTED_MODULE_1__.SkillsComponent, _projects_projects_component__WEBPACK_IMPORTED_MODULE_2__.ProjectsComponent, _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_3__.ContactoComponent], styles: [".header[_ngcontent-%COMP%] {\n  background-image: url('portafolio-2.jpg');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 1080px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding-top: 5%;\n}\n@media (max-width: 1599px) {\n  .header[_ngcontent-%COMP%] {\n    height: 900px;\n  }\n}\n@media (max-width: 1399px) {\n  .header[_ngcontent-%COMP%] {\n    height: 800px;\n  }\n}\n@media (max-width: 991px) {\n  .header[_ngcontent-%COMP%] {\n    height: 650px;\n  }\n}\n@media (max-width: 575px) {\n  .header[_ngcontent-%COMP%] {\n    height: 550px;\n  }\n}\n.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 600;\n  font-size: 150px;\n}\n@media (max-width: 1599px) {\n  .header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 140px;\n  }\n}\n@media (max-width: 1399px) {\n  .header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 100px;\n  }\n}\n@media (max-width: 991px) {\n  .header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 80px;\n  }\n}\n@media (max-width: 767px) {\n  .header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 70px;\n  }\n}\n@media (max-width: 480px) {\n  .header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 50px;\n  }\n}\n.header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 400;\n  font-size: 80px;\n}\n@media (max-width: 1599px) {\n  .header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 60px;\n  }\n}\n@media (max-width: 1399px) {\n  .header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n}\n@media (max-width: 991px) {\n  .header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n}\n@media (max-width: 767px) {\n  .header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n}\n.header[_ngcontent-%COMP%]   .btn-blue[_ngcontent-%COMP%] {\n  width: 320px;\n  height: 60px;\n  margin-top: 20px;\n}\n@media (max-width: 1599px) {\n  .header[_ngcontent-%COMP%]   .btn-blue[_ngcontent-%COMP%] {\n    width: 280px;\n    font-size: 28px;\n  }\n}\n@media (max-width: 1399px) {\n  .header[_ngcontent-%COMP%]   .btn-blue[_ngcontent-%COMP%] {\n    width: 250px;\n    font-size: 24px;\n  }\n}\n@media (max-width: 767px) {\n  .header[_ngcontent-%COMP%]   .btn-blue[_ngcontent-%COMP%] {\n    width: 220px;\n    font-size: 22px;\n    height: 55px;\n  }\n}\n@media (max-width: 479px) {\n  .header[_ngcontent-%COMP%]   .btn-blue[_ngcontent-%COMP%] {\n    width: 200px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHNhc3NcXF9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHlDQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FBREo7QUNzRUk7RUQvRUo7SUFhUSxhQUFBO0VBQU47QUFDRjtBQ2lFSTtFRC9FSjtJQWtCUSxhQUFBO0VBQU47QUFDRjtBQzRESTtFRC9FSjtJQXVCUSxhQUFBO0VBQU47QUFDRjtBQ3VESTtFRC9FSjtJQTJCUSxhQUFBO0VBQ047QUFDRjtBQUVJO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFBUjtBQzZDSTtFRGhEQTtJQU1RLGdCQUFBO0VBQ1Y7QUFDRjtBQ3dDSTtFRGhEQTtJQVdRLGdCQUFBO0VBQ1Y7QUFDRjtBQ21DSTtFRGhEQTtJQWdCUSxlQUFBO0VBQ1Y7QUFDRjtBQzhCSTtFRGhEQTtJQXFCUSxlQUFBO0VBQ1Y7QUFDRjtBQ3lCSTtFRGhEQTtJQXlCUSxlQUFBO0VBRVY7QUFDRjtBQUNJO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNSO0FDZUk7RURuQkE7SUFNUSxlQUFBO0VBRVY7QUFDRjtBQ1VJO0VEbkJBO0lBV1EsZUFBQTtFQUVWO0FBQ0Y7QUNLSTtFRG5CQTtJQWdCUSxlQUFBO0VBRVY7QUFDRjtBQ0FJO0VEbkJBO0lBcUJRLGVBQUE7RUFFVjtBQUNGO0FBQ0k7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQ1I7QUNWSTtFRE1BO0lBTVEsWUFBQTtJQUNBLGVBQUE7RUFFVjtBQUNGO0FDaEJJO0VETUE7SUFZUSxZQUFBO0lBQ0EsZUFBQTtFQUVWO0FBQ0Y7QUN0Qkk7RURNQTtJQWlCUSxZQUFBO0lBQ0EsZUFBQTtJQUNBLFlBQUE7RUFHVjtBQUNGO0FDN0JJO0VETUE7SUF1QlEsWUFBQTtFQUlWO0FBQ0YiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL2Fzc2V0cy9zYXNzL21peGluc1wiO1xyXG5cclxuLmhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9wb3J0YWZvbGlvLTIuanBnKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgaGVpZ2h0OiAxMDgwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmctdG9wOiA1JTtcclxuXHJcbiAgICBAaW5jbHVkZSBmb3JfYnJlYWtwb2ludCgxNTk5KSB7XHJcbiAgICAgICAgaGVpZ2h0OiA5MDBweDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgQGluY2x1ZGUgZm9yX2JyZWFrcG9pbnQoMTM5OSkge1xyXG4gICAgICAgIGhlaWdodDogODAwcHg7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KDk5MSkge1xyXG4gICAgICAgIGhlaWdodDogNjUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgICBAaW5jbHVkZSBmb3JfYnJlYWtwb2ludCg1NzUpIHtcclxuICAgICAgICBoZWlnaHQ6IDU1MHB4O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBoMSB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNTBweDtcclxuXHJcbiAgICAgICAgQGluY2x1ZGUgZm9yX2JyZWFrcG9pbnQoMTU5OSkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0MHB4O1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KDEzOTkpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBAaW5jbHVkZSBmb3JfYnJlYWtwb2ludCg5OTEpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA4MHB4O1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KDc2Nykge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDcwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAaW5jbHVkZSBmb3JfYnJlYWtwb2ludCg0ODApIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoMyB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiA4MHB4O1xyXG5cclxuICAgICAgICBAaW5jbHVkZSBmb3JfYnJlYWtwb2ludCgxNTk5KSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBAaW5jbHVkZSBmb3JfYnJlYWtwb2ludCgxMzk5KSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBAaW5jbHVkZSBmb3JfYnJlYWtwb2ludCg5OTEpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KDc2Nykge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5idG4tYmx1ZSB7XHJcbiAgICAgICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG5cclxuICAgICAgICBAaW5jbHVkZSBmb3JfYnJlYWtwb2ludCgxNTk5KSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyODBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KDEzOTkpIHtcclxuICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAgQGluY2x1ZGUgZm9yX2JyZWFrcG9pbnQoNzY3KSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMjBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAaW5jbHVkZSBmb3JfYnJlYWtwb2ludCg0NzkpIHtcclxuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbi5hYm91dC1tZXtcclxuICAgIFxyXG59XHJcbiIsIkBtaXhpbiBmb250cygkZmFtaWx5LCAkcGF0aCkge1xyXG4gICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmYW1pbHk7XHJcbiAgICAgICAgc3JjOiB1cmwoXCIjeyRwYXRofS5lb3RcIik7XHJcbiAgICAgICAgc3JjOiB1cmwoXCIjeyRwYXRofS5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCB1cmwoXCIjeyRwYXRofS53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcIiN7JHBhdGh9LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGJveHNoYWRvdygkYXJncy4uLikge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAkYXJncztcclxuICAgIC1tb3otYm94LXNoYWRvdzogJGFyZ3M7XHJcbiAgICBib3gtc2hhZG93OiAkYXJncztcclxufVxyXG5cclxuQG1peGluIHRyYW5zaXRpb24oJGFyZ3MuLi4pIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW1zLXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICB0cmFuc2l0aW9uOiAkYXJncztcclxufVxyXG5cclxuQG1peGluIHRyYW5zZm9ybSgkYXJncy4uLikge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06ICRhcmdzO1xyXG4gICAgLW1vei10cmFuc2Zvcm06ICRhcmdzO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogJGFyZ3M7XHJcbiAgICAtby10cmFuc2Zvcm06ICRhcmdzO1xyXG4gICAgdHJhbnNmb3JtOiAkYXJncztcclxufVxyXG5cclxuQG1peGluIHBsYWNlaG9sZGVyKCRjb2xvciwgJGYtc2l6ZSwgJGYtZmFtaWx5KSB7XHJcbiAgICAmOjpwbGFjZWhvbGRlciB7IC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXHJcbiAgICAgICAgZm9udC1zaXplOiAkZi1zaXplO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZi1mYW1pbHk7XHJcbiAgICB9XHJcblxyXG4gICAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6ICRmLXNpemU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmLWZhbWlseTtcclxuICAgIH1cclxuXHJcbiAgICAmOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBNaWNyb3NvZnQgRWRnZSAqL1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6ICRmLXNpemU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmLWZhbWlseTtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGRlZ3JhZGFkbygkYXJncy4uLikge1xyXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxufVxyXG5cclxuQG1peGluIGltZy1kZWdyYWRhZG8oJHVybCwgJGFyZ3MuLi4pIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgkdXJsKSwgLW1vei1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR1cmwpLCAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHVybCksIC1tcy1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR1cmwpLCAtby1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR1cmwpLCBsaW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG59XHJcblxyXG4vLyBNZWRpYSBxdWVyeXNcclxuJG1lZGlhX3F1ZXJpZXMgOiAoXHJcbiAgICAnbW9iaWxlJyA6IFwiKG1heC13aWR0aDogNDc5cHgpXCIsXHJcbiAgICAnbW9iaWxlMic6IFwiKG1heC13aWR0aDogNTk5cHgpXCIsXHJcbiAgICAndGFibGV0JyA6IFwiKG1heC13aWR0aDogNzY3cHgpXCIsXHJcbiAgICAndGFibGV0Mic6IFwiKG1heC13aWR0aDogOTkxcHgpXCIsXHJcbiAgICAnZGVza3RvcCcgOiBcIihtYXgtd2lkdGg6MTE5OXB4KVwiLFxyXG4gICAgJ2Rlc2t0b3AxJzogXCIobWF4LXdpZHRoOjEzOTlweClcIixcclxuICAgICdkZXNrdG9wMicgOiBcIihtYXgtd2lkdGg6MTU5OXB4KVwiXHJcbik7XHJcblxyXG5AbWl4aW4gZm9yX2JyZWFrcG9pbnQoJGJyZWFrcG9pbnQpIHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiN7JGJyZWFrcG9pbnR9cHgpe1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 6031:
/*!*******************************************************************!*\
  !*** ./src/app/components/Landing/projects/projects.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsComponent": () => (/* binding */ ProjectsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function ProjectsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5)(1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p")(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const proyecto_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", proyecto_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", proyecto_r1.screen, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](proyecto_r1.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", proyecto_r1.tecnologia, " ");
} }
class ProjectsComponent {
    constructor() {
        this.proyectos = [
            {
                screen: "./assets/images/proyectos/superior-56.jpg",
                nombre: "Superior 56",
                tecnologia: "Angular",
                url: "https://superior56.com.mx/"
            },
            {
                screen: "./assets/images/proyectos/anafloresabogada.png",
                nombre: "Ana Flores Abogada",
                tecnologia: "Bootstrap & Wordpress",
                url: "https://anafloresabogada.com/"
            },
            {
                screen: "./assets/images/proyectos/banners.png",
                nombre: "Banners (Google & Amazon)",
                tecnologia: "Google Web Designer (HTML5)"
            },
            {
                screen: "./assets/images/proyectos/hersheys-reposteria.png",
                nombre: "hershey's Repostería",
                tecnologia: "Bootstrap & Wordpress",
                url: "https://hersheysreposteria.com.mx/reposteria-en-casa-hersheys/"
            },
            {
                screen: "./assets/images/proyectos/hersheys-profesional.png",
                nombre: "hershey's Profesional",
                tecnologia: "Bootstrap & Wordpress",
                url: "https://hersheysreposteria.com.mx/profesional/"
            },
            {
                screen: "./assets/images/proyectos/acento-mixcoac.png",
                nombre: "Acento Mixcoac",
                tecnologia: "Landing Page: HTML, JQuery, CSS, PHP",
                url: "https://www.acentomixcoac.com/"
            },
            {
                screen: "./assets/images/proyectos/jorgevargsbooks.png",
                nombre: "Jorgevargsbooks",
                tecnologia: "Materialize & Wordpress",
                url: "https://jorgevargsbooks.com"
            },
            {
                screen: "./assets/images/proyectos/msmedia.png",
                nombre: "Ms&Media",
                tecnologia: "Bootstrap & Wordpress",
                url: "https://msmedia.com.mx/publicidad-exterior/"
            },
            {
                screen: "./assets/images/proyectos/openfinancehub.png",
                nombre: "Open Finance Hub",
                tecnologia: "Bootstrap & Wordpress",
                url: "https://cecoban.com/openfinancehub/"
            },
            {
                screen: "./assets/images/proyectos/periferico1991.png",
                nombre: "Landing Periferico 1991",
                tecnologia: "Landing Page: HTML, Jquery, CSS, PHP",
                url: "https://my-home.mx/periferico1991/"
            },
            {
                screen: "./assets/images/proyectos/olimpiadasespeciales.png",
                nombre: "Olimpiadas Especiales",
                tecnologia: "Bootstrap & Wordpress",
                url: "https://specialolympics.org.mx/"
            }
        ];
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(); };
ProjectsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 8, vars: 1, consts: [["id", "portafolio", 1, "projects"], [1, "container"], [1, "row"], [1, "col-md-12", "text-center"], ["class", "col-6 col-md-4", 4, "ngFor", "ngForOf"], [1, "col-6", "col-md-4"], ["target", "_blank", 1, "proyecto"], [1, "img-fluid", 3, "src"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Portafolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProjectsComponent_div_7_Template, 7, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.proyectos);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: [".proyecto[_ngcontent-%COMP%] {\n  display: block;\n  text-decoration: none;\n  margin: 30px 0px;\n  text-align: center;\n}\n.proyecto[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 30px auto;\n  box-shadow: 5px 12px 25px 4px rgba(0, 0, 0, 0.39);\n}\n@media (max-width: 480px) {\n  .proyecto[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 20px auto;\n  }\n}\n.proyecto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 22px;\n  color: black;\n}\n@media (max-width: 1399px) {\n  .proyecto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n@media (max-width: 1199px) {\n  .proyecto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n@media (max-width: 480px) {\n  .proyecto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.proyecto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 26px;\n}\n@media (max-width: 1399px) {\n  .proyecto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n@media (max-width: 1199px) {\n  .proyecto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n@media (max-width: 1199px) {\n  .proyecto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n@media (max-width: 480px) {\n  .proyecto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc2Fzc1xcX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQURKO0FBR0k7RUFDSSxpQkFBQTtFQ0lKLGlEREhJO0FBQ1I7QUNzRUk7RUR6RUE7SUFJUSxpQkFBQTtFQUdWO0FBQ0Y7QUFBSTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFFUjtBQzRESTtFRGpFQTtJQU1RLGVBQUE7RUFHVjtBQUNGO0FDdURJO0VEakVBO0lBU1EsZUFBQTtFQUtWO0FBQ0Y7QUNrREk7RURqRUE7SUFZUSxlQUFBO0VBT1Y7QUFDRjtBQUhRO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFLWjtBQ3lDSTtFRGhESTtJQUtRLGVBQUE7RUFNZDtBQUNGO0FDb0NJO0VEaERJO0lBUVEsZUFBQTtFQVFkO0FBQ0Y7QUMrQkk7RURoREk7SUFXUSxlQUFBO0VBVWQ7QUFDRjtBQzBCSTtFRGhESTtJQWNRLGVBQUE7RUFZZDtBQUNGIiwiZmlsZSI6InByb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vYXNzZXRzL3Nhc3MvbWl4aW5zJztcclxuXHJcbi5wcm95ZWN0b3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgbWFyZ2luOjMwcHggMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgXHJcbiAgICBpbWd7XHJcbiAgICAgICAgbWFyZ2luOiAzMHB4IGF1dG87XHJcbiAgICAgICAgQGluY2x1ZGUgYm94c2hhZG93KDVweCAxMnB4IDI1cHggNHB4IHJnYmEoMCwwLDAsMC4zOSkpO1xyXG4gICAgICAgIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KDQ4MCkge1xyXG4gICAgICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuXHJcbiAgICAgICAgQGluY2x1ZGUgZm9yX2JyZWFrcG9pbnQoMTM5OSkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KDExOTkpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBAaW5jbHVkZSBmb3JfYnJlYWtwb2ludCg0ODApIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIFxyXG5cclxuICAgICAgICBzdHJvbmd7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcblxyXG4gICAgICAgICAgICBAaW5jbHVkZSBmb3JfYnJlYWtwb2ludCgxMzk5KSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQGluY2x1ZGUgZm9yX2JyZWFrcG9pbnQoMTE5OSkge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KDExOTkpIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAaW5jbHVkZSBmb3JfYnJlYWtwb2ludCg0ODApIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxufSIsIkBtaXhpbiBmb250cygkZmFtaWx5LCAkcGF0aCkge1xyXG4gICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmYW1pbHk7XHJcbiAgICAgICAgc3JjOiB1cmwoXCIjeyRwYXRofS5lb3RcIik7XHJcbiAgICAgICAgc3JjOiB1cmwoXCIjeyRwYXRofS5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCB1cmwoXCIjeyRwYXRofS53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcIiN7JHBhdGh9LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGJveHNoYWRvdygkYXJncy4uLikge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAkYXJncztcclxuICAgIC1tb3otYm94LXNoYWRvdzogJGFyZ3M7XHJcbiAgICBib3gtc2hhZG93OiAkYXJncztcclxufVxyXG5cclxuQG1peGluIHRyYW5zaXRpb24oJGFyZ3MuLi4pIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW1zLXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICB0cmFuc2l0aW9uOiAkYXJncztcclxufVxyXG5cclxuQG1peGluIHRyYW5zZm9ybSgkYXJncy4uLikge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06ICRhcmdzO1xyXG4gICAgLW1vei10cmFuc2Zvcm06ICRhcmdzO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogJGFyZ3M7XHJcbiAgICAtby10cmFuc2Zvcm06ICRhcmdzO1xyXG4gICAgdHJhbnNmb3JtOiAkYXJncztcclxufVxyXG5cclxuQG1peGluIHBsYWNlaG9sZGVyKCRjb2xvciwgJGYtc2l6ZSwgJGYtZmFtaWx5KSB7XHJcbiAgICAmOjpwbGFjZWhvbGRlciB7IC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXHJcbiAgICAgICAgZm9udC1zaXplOiAkZi1zaXplO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZi1mYW1pbHk7XHJcbiAgICB9XHJcblxyXG4gICAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6ICRmLXNpemU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmLWZhbWlseTtcclxuICAgIH1cclxuXHJcbiAgICAmOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBNaWNyb3NvZnQgRWRnZSAqL1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6ICRmLXNpemU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmLWZhbWlseTtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGRlZ3JhZGFkbygkYXJncy4uLikge1xyXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxufVxyXG5cclxuQG1peGluIGltZy1kZWdyYWRhZG8oJHVybCwgJGFyZ3MuLi4pIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgkdXJsKSwgLW1vei1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR1cmwpLCAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHVybCksIC1tcy1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR1cmwpLCAtby1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR1cmwpLCBsaW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG59XHJcblxyXG4vLyBNZWRpYSBxdWVyeXNcclxuJG1lZGlhX3F1ZXJpZXMgOiAoXHJcbiAgICAnbW9iaWxlJyA6IFwiKG1heC13aWR0aDogNDc5cHgpXCIsXHJcbiAgICAnbW9iaWxlMic6IFwiKG1heC13aWR0aDogNTk5cHgpXCIsXHJcbiAgICAndGFibGV0JyA6IFwiKG1heC13aWR0aDogNzY3cHgpXCIsXHJcbiAgICAndGFibGV0Mic6IFwiKG1heC13aWR0aDogOTkxcHgpXCIsXHJcbiAgICAnZGVza3RvcCcgOiBcIihtYXgtd2lkdGg6MTE5OXB4KVwiLFxyXG4gICAgJ2Rlc2t0b3AxJzogXCIobWF4LXdpZHRoOjEzOTlweClcIixcclxuICAgICdkZXNrdG9wMicgOiBcIihtYXgtd2lkdGg6MTU5OXB4KVwiXHJcbik7XHJcblxyXG5AbWl4aW4gZm9yX2JyZWFrcG9pbnQoJGJyZWFrcG9pbnQpIHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiN7JGJyZWFrcG9pbnR9cHgpe1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 6719:
/*!***************************************************************!*\
  !*** ./src/app/components/Landing/skills/skills.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillsComponent": () => (/* binding */ SkillsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ngx_scrollreveal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-scrollreveal */ 8211);



const _c0 = function () { return { reset: false }; };
function SkillsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngsRevealSet", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c0))("ngsInterval", 250)("ngsSelector", ".skill");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", skill_r1.logo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", skill_r1.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", skill_r1.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](skill_r1.nombre);
} }
class SkillsComponent {
    constructor() {
        this.skills = [
            {
                logo: "./assets/images/skills/html5.png",
                nombre: "HTML 5"
            },
            {
                logo: "./assets/images/skills/css3.png",
                nombre: "CSS 3"
            },
            {
                logo: "./assets/images/skills/javascript.png",
                nombre: "JAVASCRIPT"
            },
            {
                logo: "./assets/images/skills/sass.png",
                nombre: "SASS"
            },
            {
                logo: "./assets/images/skills/wordpress.png",
                nombre: "WORDPRESS"
            },
            {
                logo: "./assets/images/skills/bootstrap.png",
                nombre: "BOOTSTRAP"
            },
            {
                logo: "./assets/images/skills/materialize.png",
                nombre: "MATERIALIZE"
            },
            {
                logo: "./assets/images/skills/php.png",
                nombre: "PHP"
            },
            {
                logo: "./assets/images/skills/jquery.png",
                nombre: "JQUERY"
            },
            {
                logo: "./assets/images/skills/git.png",
                nombre: "GIT"
            },
            {
                logo: "./assets/images/skills/google-web-designer.png",
                nombre: "GOOGLE WEB DESIGNER"
            },
            {
                logo: "./assets/images/skills/mailchimp.png",
                nombre: "MAILCHIMP"
            },
            {
                logo: "./assets/images/skills/angular.png",
                nombre: "ANGULAR"
            },
            {
                logo: "./assets/images/skills/mysql.png",
                nombre: "MYSQL"
            }
        ];
    }
}
SkillsComponent.ɵfac = function SkillsComponent_Factory(t) { return new (t || SkillsComponent)(); };
SkillsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["app-skills"]], decls: 8, vars: 1, consts: [["id", "habilidades", 1, "habilidades"], [1, "container"], [1, "row"], [1, "col-md-12", "text-center"], ["class", "col-6 col-sm-4 col-md-3", 3, "ngsRevealSet", "ngsInterval", "ngsSelector", 4, "ngFor", "ngForOf"], [1, "col-6", "col-sm-4", "col-md-3", 3, "ngsRevealSet", "ngsInterval", "ngsSelector"], [1, "skill"], [1, "img-fluid", 3, "src", "alt", "title"]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Habilidades");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SkillsComponent_div_7_Template, 5, 8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.skills);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, ngx_scrollreveal__WEBPACK_IMPORTED_MODULE_0__.NgsRevealSetDirective], styles: [".skill[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 160px;\n  display: block;\n  margin: 50px auto;\n  border-radius: 50%;\n  box-shadow: 0px 10px 22px -4px rgba(0, 0, 0, 0.75);\n}\n.skill[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  text-align: center;\n  font-weight: bold;\n  margin-top: 20px;\n}\n@media (max-width: 480px) {\n  .skill[_ngcontent-%COMP%] {\n    width: 130px;\n    height: 130px;\n  }\n  .skill[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNraWxscy5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHNhc3NcXF9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUNNQSxrRERMQTtBQUNKO0FBQ0k7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQ1I7QUNrRUk7RUQvRUo7SUFnQlEsWUFBQTtJQUNBLGFBQUE7RUFDTjtFQUNNO0lBQ0ksZUFBQTtFQUNWO0FBQ0YiLCJmaWxlIjoic2tpbGxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vYXNzZXRzL3Nhc3MvbWl4aW5zJztcclxuXHJcbi5za2lsbHtcclxuICAgIHdpZHRoOjE2MHB4O1xyXG4gICAgaGVpZ2h0OiAxNjBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBAaW5jbHVkZSBib3hzaGFkb3coMHB4IDEwcHggMjJweCAtNHB4IHJnYmEoMCwwLDAsMC43NSkpO1xyXG5cclxuICAgIHB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KDQ4MCkge1xyXG4gICAgICAgIHdpZHRoOjEzMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTMwcHg7XHJcblxyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJAbWl4aW4gZm9udHMoJGZhbWlseSwgJHBhdGgpIHtcclxuICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZmFtaWx5O1xyXG4gICAgICAgIHNyYzogdXJsKFwiI3skcGF0aH0uZW90XCIpO1xyXG4gICAgICAgIHNyYzogdXJsKFwiI3skcGF0aH0uZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgdXJsKFwiI3skcGF0aH0ud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCIjeyRwYXRofS50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBib3hzaGFkb3coJGFyZ3MuLi4pIHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogJGFyZ3M7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6ICRhcmdzO1xyXG4gICAgYm94LXNoYWRvdzogJGFyZ3M7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc2l0aW9uKCRhcmdzLi4uKSB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiAkYXJncztcclxuICAgIC1tcy10cmFuc2l0aW9uOiAkYXJncztcclxuICAgIC1vLXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgdHJhbnNpdGlvbjogJGFyZ3M7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc2Zvcm0oJGFyZ3MuLi4pIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiAkYXJncztcclxuICAgIC1tb3otdHJhbnNmb3JtOiAkYXJncztcclxuICAgIC1tcy10cmFuc2Zvcm06ICRhcmdzO1xyXG4gICAgLW8tdHJhbnNmb3JtOiAkYXJncztcclxuICAgIHRyYW5zZm9ybTogJGFyZ3M7XHJcbn1cclxuXHJcbkBtaXhpbiBwbGFjZWhvbGRlcigkY29sb3IsICRmLXNpemUsICRmLWZhbWlseSkge1xyXG4gICAgJjo6cGxhY2Vob2xkZXIgeyAvKiBDaHJvbWUsIEZpcmVmb3gsIE9wZXJhLCBTYWZhcmkgMTAuMSsgKi9cclxuICAgICAgICBjb2xvcjogJGNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgb3BhY2l0eTogMTsgLyogRmlyZWZveCAqL1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJGYtc2l6ZTtcclxuICAgICAgICBmb250LWZhbWlseTogJGYtZmFtaWx5O1xyXG4gICAgfVxyXG5cclxuICAgICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cclxuICAgICAgICBjb2xvcjogJGNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAkZi1zaXplO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZi1mYW1pbHk7XHJcbiAgICB9XHJcblxyXG4gICAgJjo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogTWljcm9zb2Z0IEVkZ2UgKi9cclxuICAgICAgICBjb2xvcjogJGNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAkZi1zaXplO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZi1mYW1pbHk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBkZWdyYWRhZG8oJGFyZ3MuLi4pIHtcclxuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxuICAgIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbn1cclxuXHJcbkBtaXhpbiBpbWctZGVncmFkYWRvKCR1cmwsICRhcmdzLi4uKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHVybCksIC1tb3otbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxuICAgIGJhY2tncm91bmQ6IHVybCgkdXJsKSwgLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR1cmwpLCAtbXMtbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxuICAgIGJhY2tncm91bmQ6IHVybCgkdXJsKSwgLW8tbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxuICAgIGJhY2tncm91bmQ6IHVybCgkdXJsKSwgbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxufVxyXG5cclxuLy8gTWVkaWEgcXVlcnlzXHJcbiRtZWRpYV9xdWVyaWVzIDogKFxyXG4gICAgJ21vYmlsZScgOiBcIihtYXgtd2lkdGg6IDQ3OXB4KVwiLFxyXG4gICAgJ21vYmlsZTInOiBcIihtYXgtd2lkdGg6IDU5OXB4KVwiLFxyXG4gICAgJ3RhYmxldCcgOiBcIihtYXgtd2lkdGg6IDc2N3B4KVwiLFxyXG4gICAgJ3RhYmxldDInOiBcIihtYXgtd2lkdGg6IDk5MXB4KVwiLFxyXG4gICAgJ2Rlc2t0b3AnIDogXCIobWF4LXdpZHRoOjExOTlweClcIixcclxuICAgICdkZXNrdG9wMSc6IFwiKG1heC13aWR0aDoxMzk5cHgpXCIsXHJcbiAgICAnZGVza3RvcDInIDogXCIobWF4LXdpZHRoOjE1OTlweClcIlxyXG4pO1xyXG5cclxuQG1peGluIGZvcl9icmVha3BvaW50KCRicmVha3BvaW50KSB7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDojeyRicmVha3BvaW50fXB4KXtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 3641:
/*!*********************************************************************************!*\
  !*** ./src/app/components/Landing/work-experience/work-experience.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkExperienceComponent": () => (/* binding */ WorkExperienceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_companys_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/companys.service */ 8120);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-owl-carousel-o */ 7297);




function WorkExperienceComponent_8_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const company_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", company_r1.logo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](company_r1.puesto);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](company_r1.periodo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](company_r1.descripcion);
} }
function WorkExperienceComponent_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, WorkExperienceComponent_8_ng_template_0_Template, 8, 4, "ng-template", 6);
} }
class WorkExperienceComponent {
    constructor(_companysService) {
        this._companysService = _companysService;
        this.companys = [];
        this.owlOptions = {
            loop: false,
            mouseDrag: false,
            touchDrag: true,
            pullDrag: false,
            dots: true,
            navSpeed: 700,
            navText: ['&#8249', '&#8250;'],
            responsive: {
                0: {
                    items: 1
                },
                767: {
                    items: 2
                },
                991: {
                    items: 3
                }
            },
            nav: false
        };
    }
    ngOnInit() {
        this.companys = this._companysService.getCompanys();
    }
}
WorkExperienceComponent.ɵfac = function WorkExperienceComponent_Factory(t) { return new (t || WorkExperienceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_companys_service__WEBPACK_IMPORTED_MODULE_0__.CompanysService)); };
WorkExperienceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WorkExperienceComponent, selectors: [["app-work-experience"]], decls: 9, vars: 2, consts: [["id", "experiencia", 1, "experiencia"], [1, "container"], [1, "row"], [1, "col-lg-12", "text-center"], [3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", ""], [1, "slide", "card"], ["alt", "Content 1", 3, "src"]], template: function WorkExperienceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Experiencia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2)(7, "owl-carousel-o", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, WorkExperienceComponent_8_Template, 1, 0, null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.owlOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.companys);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__.CarouselSlideDirective], styles: [".experiencia[_ngcontent-%COMP%] {\n  background-color: var(--gray);\n  padding: 7% 0px;\n}\n\n.card[_ngcontent-%COMP%] {\n  max-width: 335px;\n  background-color: white;\n  padding: 30px 25px;\n  box-shadow: 0px 10px 19px -1px rgba(0, 0, 0, 0.24);\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 40px;\n  border-radius: 10px;\n}\n\n@media (max-width: 480px) {\n  .card[_ngcontent-%COMP%] {\n    max-width: 300px;\n  }\n}\n\n.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--blue-title);\n  font-weight: 700;\n  margin-top: 40px;\n  font-size: 30px;\n  height: 75px;\n}\n\n@media (max-width: 767px) {\n  .card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 25px;\n    height: 55px;\n  }\n}\n\n@media (max-width: 480px) {\n  .card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 22px;\n    height: 50px;\n    margin-top: 25px;\n  }\n}\n\n.card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 300;\n  font-size: 24px;\n  margin: 20px auto;\n}\n\n@media (max-width: 767px) {\n  .card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n\n.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 500;\n  font-size: 20px;\n  height: 120px;\n}\n\n@media (max-width: 767px) {\n  .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmstZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHNhc3NcXF9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtBQURKOztBQUlBO0VBQ0ksZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VDR0Esa0RERkE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQ2lFSTtFRDFFSjtJQVdRLGdCQUFBO0VBRU47QUFDRjs7QUFJSTtFQUNJLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFGUjs7QUNvREk7RUR4REE7SUFTUSxlQUFBO0lBQ0EsWUFBQTtFQURWO0FBQ0Y7O0FDOENJO0VEeERBO0lBY1EsZUFBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtFQUFWO0FBQ0Y7O0FBR0k7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBRFI7O0FDaUNJO0VEcENBO0lBT1EsZUFBQTtFQUFWO0FBQ0Y7O0FBSUk7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFGUjs7QUNzQkk7RUR4QkE7SUFPUSxlQUFBO0VBRFY7QUFDRiIsImZpbGUiOiJ3b3JrLWV4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi8uLi8uLi8uLi8uLi9hc3NldHMvc2Fzcy9taXhpbnNcIjtcclxuXHJcbi5leHBlcmllbmNpYSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5KTtcclxuICAgIHBhZGRpbmc6IDclIDBweDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiAzMzVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMzBweCAyNXB4O1xyXG4gICAgQGluY2x1ZGUgYm94c2hhZG93KCAwcHggMTBweCAxOXB4IC0xcHggcmdiYSgwLDAsMCwwLjI0KSk7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cclxuICAgIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KDQ4MCkge1xyXG4gICAgICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW1ne1xyXG4gICAgICAgIC8vIG1hcmdpbjowIGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgaDN7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6dmFyKC0tYmx1ZS10aXRsZSk7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBtYXJnaW4tdG9wOjQwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOjMwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA3NXB4O1xyXG5cclxuICAgICAgICBAaW5jbHVkZSBmb3JfYnJlYWtwb2ludCg3NjcpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAaW5jbHVkZSBmb3JfYnJlYWtwb2ludCg0ODApIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGg1e1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXdlaWdodDozMDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIG1hcmdpbjoyMHB4IGF1dG87XHJcblxyXG4gICAgICAgIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KDc2Nykge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwe1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBoZWlnaHQ6MTIwcHg7XHJcblxyXG4gICAgICAgIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KDc2Nykge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIkBtaXhpbiBmb250cygkZmFtaWx5LCAkcGF0aCkge1xyXG4gICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmYW1pbHk7XHJcbiAgICAgICAgc3JjOiB1cmwoXCIjeyRwYXRofS5lb3RcIik7XHJcbiAgICAgICAgc3JjOiB1cmwoXCIjeyRwYXRofS5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCB1cmwoXCIjeyRwYXRofS53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcIiN7JHBhdGh9LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGJveHNoYWRvdygkYXJncy4uLikge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAkYXJncztcclxuICAgIC1tb3otYm94LXNoYWRvdzogJGFyZ3M7XHJcbiAgICBib3gtc2hhZG93OiAkYXJncztcclxufVxyXG5cclxuQG1peGluIHRyYW5zaXRpb24oJGFyZ3MuLi4pIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW1zLXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICB0cmFuc2l0aW9uOiAkYXJncztcclxufVxyXG5cclxuQG1peGluIHRyYW5zZm9ybSgkYXJncy4uLikge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06ICRhcmdzO1xyXG4gICAgLW1vei10cmFuc2Zvcm06ICRhcmdzO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogJGFyZ3M7XHJcbiAgICAtby10cmFuc2Zvcm06ICRhcmdzO1xyXG4gICAgdHJhbnNmb3JtOiAkYXJncztcclxufVxyXG5cclxuQG1peGluIHBsYWNlaG9sZGVyKCRjb2xvciwgJGYtc2l6ZSwgJGYtZmFtaWx5KSB7XHJcbiAgICAmOjpwbGFjZWhvbGRlciB7IC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXHJcbiAgICAgICAgZm9udC1zaXplOiAkZi1zaXplO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZi1mYW1pbHk7XHJcbiAgICB9XHJcblxyXG4gICAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6ICRmLXNpemU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmLWZhbWlseTtcclxuICAgIH1cclxuXHJcbiAgICAmOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBNaWNyb3NvZnQgRWRnZSAqL1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6ICRmLXNpemU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmLWZhbWlseTtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGRlZ3JhZGFkbygkYXJncy4uLikge1xyXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxufVxyXG5cclxuQG1peGluIGltZy1kZWdyYWRhZG8oJHVybCwgJGFyZ3MuLi4pIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgkdXJsKSwgLW1vei1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR1cmwpLCAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHVybCksIC1tcy1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR1cmwpLCAtby1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR1cmwpLCBsaW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG59XHJcblxyXG4vLyBNZWRpYSBxdWVyeXNcclxuJG1lZGlhX3F1ZXJpZXMgOiAoXHJcbiAgICAnbW9iaWxlJyA6IFwiKG1heC13aWR0aDogNDc5cHgpXCIsXHJcbiAgICAnbW9iaWxlMic6IFwiKG1heC13aWR0aDogNTk5cHgpXCIsXHJcbiAgICAndGFibGV0JyA6IFwiKG1heC13aWR0aDogNzY3cHgpXCIsXHJcbiAgICAndGFibGV0Mic6IFwiKG1heC13aWR0aDogOTkxcHgpXCIsXHJcbiAgICAnZGVza3RvcCcgOiBcIihtYXgtd2lkdGg6MTE5OXB4KVwiLFxyXG4gICAgJ2Rlc2t0b3AxJzogXCIobWF4LXdpZHRoOjEzOTlweClcIixcclxuICAgICdkZXNrdG9wMicgOiBcIihtYXgtd2lkdGg6MTU5OXB4KVwiXHJcbik7XHJcblxyXG5AbWl4aW4gZm9yX2JyZWFrcG9pbnQoJGJyZWFrcG9pbnQpIHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiN7JGJyZWFrcG9pbnR9cHgpe1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 4662:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 22, vars: 0, consts: [[1, "container"], [1, "row"], [1, "col-12"], ["src", "./assets/images/logo-luis-vargas-blanco.png", 1, "img-fluid", "d-block", "m-auto"], ["href", "#about-me"], ["href", "#experiencia"], ["href", "#habilidades"], ["href", "#portafolio"], ["href", "#contacto"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer")(1, "div", 0)(2, "div", 1)(3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2)(6, "ul")(7, "li")(8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Acerca de M\u00ED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li")(11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Experiencia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li")(14, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Habilidades");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li")(17, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Portafolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li")(20, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
    } }, styles: ["footer[_ngcontent-%COMP%] {\n  padding: 30px 0px;\n  background-color: var(--blue);\n}\n@media (max-width: 480px) {\n  footer[_ngcontent-%COMP%] {\n    padding: 30px 0px 10px;\n  }\n}\n@media (max-width: 991px) {\n  footer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 80px;\n  }\n}\nfooter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  margin-top: 30px;\n  padding-left: 0px;\n  flex-wrap: wrap;\n}\n@media (max-width: 480px) {\n  footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n  }\n}\nfooter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0px 30px;\n}\n@media (max-width: 991px) {\n  footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin: 0px 20px;\n  }\n}\n@media (max-width: 767px) {\n  footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin: 0px 20px 10px;\n  }\n}\n@media (max-width: 480px) {\n  footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin: 0px 20px 20px;\n  }\n}\nfooter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: white;\n  font-size: 22px;\n  text-decoration: none;\n}\n@media (max-width: 991px) {\n  footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXGFzc2V0c1xcc2Fzc1xcX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsaUJBQUE7RUFDQSw2QkFBQTtBQURGO0FDOEVJO0VEL0VKO0lBS0csc0JBQUE7RUFBRDtBQUNGO0FDeUVJO0VEdkVGO0lBRUksZUFBQTtFQUFKO0FBQ0Y7QUFHRTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQURKO0FDMkRJO0VEakVGO0lBVUksc0JBQUE7SUFDQSxrQkFBQTtFQUFKO0FBQ0Y7QUFFSTtFQUNFLGdCQUFBO0FBQU47QUNrREk7RURuREE7SUFJSSxnQkFBQTtFQUNOO0FBQ0Y7QUM2Q0k7RURuREE7SUFRSSxxQkFBQTtFQUVOO0FBQ0Y7QUN3Q0k7RURuREE7SUFXSSxxQkFBQTtFQUlOO0FBQ0Y7QUFGTTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQUlSO0FDNkJJO0VEckNFO0lBT0ksZUFBQTtFQUtSO0FBQ0YiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3Nhc3MvbWl4aW5zJztcclxuXHJcbmZvb3RlciB7XHJcbiAgcGFkZGluZzogMzBweCAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XHJcblxyXG4gIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KDQ4MCkge1xyXG4gICBwYWRkaW5nOiAzMHB4IDBweCAxMHB4O1xyXG4gIH1cclxuXHJcbiAgaW1nIHtcclxuICAgIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KDk5MSkge1xyXG4gICAgICBtYXgtd2lkdGg6IDgwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1bCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KDQ4MCkge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgbGkge1xyXG4gICAgICBtYXJnaW46IDBweCAzMHB4O1xyXG5cclxuICAgICAgQGluY2x1ZGUgZm9yX2JyZWFrcG9pbnQoOTkxKSB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggMjBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgQGluY2x1ZGUgZm9yX2JyZWFrcG9pbnQoNzY3KSB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggMjBweCAxMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KDQ4MCkge1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDIwcHggMjBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgYSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgICAgICAgQGluY2x1ZGUgZm9yX2JyZWFrcG9pbnQoOTkxKSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiQG1peGluIGZvbnRzKCRmYW1pbHksICRwYXRoKSB7XHJcbiAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogJGZhbWlseTtcclxuICAgICAgICBzcmM6IHVybChcIiN7JHBhdGh9LmVvdFwiKTtcclxuICAgICAgICBzcmM6IHVybChcIiN7JHBhdGh9LmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIHVybChcIiN7JHBhdGh9LndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiI3skcGF0aH0udHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gYm94c2hhZG93KCRhcmdzLi4uKSB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6ICRhcmdzO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAkYXJncztcclxuICAgIGJveC1zaGFkb3c6ICRhcmdzO1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNpdGlvbigkYXJncy4uLikge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAkYXJncztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICAtby10cmFuc2l0aW9uOiAkYXJncztcclxuICAgIHRyYW5zaXRpb246ICRhcmdzO1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNmb3JtKCRhcmdzLi4uKSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogJGFyZ3M7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogJGFyZ3M7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiAkYXJncztcclxuICAgIC1vLXRyYW5zZm9ybTogJGFyZ3M7XHJcbiAgICB0cmFuc2Zvcm06ICRhcmdzO1xyXG59XHJcblxyXG5AbWl4aW4gcGxhY2Vob2xkZXIoJGNvbG9yLCAkZi1zaXplLCAkZi1mYW1pbHkpIHtcclxuICAgICY6OnBsYWNlaG9sZGVyIHsgLyogQ2hyb21lLCBGaXJlZm94LCBPcGVyYSwgU2FmYXJpIDEwLjErICovXHJcbiAgICAgICAgY29sb3I6ICRjb2xvciAhaW1wb3J0YW50O1xyXG4gICAgICAgIG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi9cclxuICAgICAgICBmb250LXNpemU6ICRmLXNpemU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmLWZhbWlseTtcclxuICAgIH1cclxuXHJcbiAgICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXHJcbiAgICAgICAgY29sb3I6ICRjb2xvciAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJGYtc2l6ZTtcclxuICAgICAgICBmb250LWZhbWlseTogJGYtZmFtaWx5O1xyXG4gICAgfVxyXG5cclxuICAgICY6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIE1pY3Jvc29mdCBFZGdlICovXHJcbiAgICAgICAgY29sb3I6ICRjb2xvciAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJGYtc2l6ZTtcclxuICAgICAgICBmb250LWZhbWlseTogJGYtZmFtaWx5O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZGVncmFkYWRvKCRhcmdzLi4uKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG59XHJcblxyXG5AbWl4aW4gaW1nLWRlZ3JhZGFkbygkdXJsLCAkYXJncy4uLikge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR1cmwpLCAtbW96LWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHVybCksIC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxuICAgIGJhY2tncm91bmQ6IHVybCgkdXJsKSwgLW1zLWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHVybCksIC1vLWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHVybCksIGxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbn1cclxuXHJcbi8vIE1lZGlhIHF1ZXJ5c1xyXG4kbWVkaWFfcXVlcmllcyA6IChcclxuICAgICdtb2JpbGUnIDogXCIobWF4LXdpZHRoOiA0NzlweClcIixcclxuICAgICdtb2JpbGUyJzogXCIobWF4LXdpZHRoOiA1OTlweClcIixcclxuICAgICd0YWJsZXQnIDogXCIobWF4LXdpZHRoOiA3NjdweClcIixcclxuICAgICd0YWJsZXQyJzogXCIobWF4LXdpZHRoOiA5OTFweClcIixcclxuICAgICdkZXNrdG9wJyA6IFwiKG1heC13aWR0aDoxMTk5cHgpXCIsXHJcbiAgICAnZGVza3RvcDEnOiBcIihtYXgtd2lkdGg6MTM5OXB4KVwiLFxyXG4gICAgJ2Rlc2t0b3AyJyA6IFwiKG1heC13aWR0aDoxNTk5cHgpXCJcclxuKTtcclxuXHJcbkBtaXhpbiBmb3JfYnJlYWtwb2ludCgkYnJlYWtwb2ludCkge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6I3skYnJlYWtwb2ludH1weCl7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 3252:
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


const _c0 = function (a0) { return { "small": a0 }; };
const _c1 = function (a0) { return { "active": a0 }; };
const _c2 = function (a0) { return { "show": a0 }; };
class NavbarComponent {
    constructor() {
        this.scrolled = false;
        this.winWidth = 0;
        this.currentSection = 'section1';
        this.isShown = false;
    }
    changeState() {
        this.isShown = !this.isShown;
    }
    onSectionChange(sectionId) {
        this.currentSection = sectionId;
        console.log(this.currentSection);
    }
    onWindowScroll() {
        this.scrolled = window.pageYOffset > 150;
        if (this.scrolled) {
            this.isShown = false;
        }
        else {
            this.scrolled = false;
        }
    }
    onResize(event) {
        this.winWidth = event.target.innerWidth;
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], hostBindings: function NavbarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NavbarComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("resize", function NavbarComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 23, vars: 9, consts: [["id", "navbar-main2", 1, "navbar", "navbar-expand-lg", "navbar-light", "fixed-top", 3, "ngClass"], [1, "container-xl", "p-0", "p-lg-4"], ["href", "#", 1, "navbar-brand"], ["src", "assets/images/logo-luis-vargas.png", "alt", "logo luis vargas", 1, "img-fluid"], [1, "navbar-toggler", 3, "ngClass", "click"], [1, "menu-icon"], ["id", "navbar-main", 1, "navbar-collapse", "collapse", 3, "ngClass"], [1, "navbar-nav", "ml-auto"], [1, "nav-item"], ["href", "#about-me", 1, "nav-link"], ["href", "#experiencia", 1, "nav-link"], ["href", "#habilidades", 1, "nav-link"], ["href", "#portafolio", 1, "nav-link"], [1, "nav-item", "btn", "btn-blue"], ["href", "#contacto", 1, "nav-link"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_4_listener() { return ctx.changeState(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6)(7, "ul", 7)(8, "li", 8)(9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Acerca de M\u00ED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 8)(12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Experiencia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 8)(15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Habilidades");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 8)(18, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Portafolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 13)(21, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.scrolled && ctx.winWidth > 991));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx.isShown));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, ctx.isShown));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass], styles: [".ml-auto[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  height: 120px;\n  background-color: white;\n  box-shadow: 0px 11px 15px -6px rgba(0, 0, 0, 0.6);\n  transition: height 0.3s linear;\n}\n\n@media (max-width: 991px) {\n  .navbar[_ngcontent-%COMP%] {\n    height: 90px;\n  }\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 90%;\n}\n\n@media (max-width: 991px) {\n  .navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n  padding: 0px;\n  width: 50px;\n  height: 40px;\n  position: relative;\n  margin-right: 20px;\n  color: transparent;\n  background-color: var(--blue);\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 4px;\n  background-color: white;\n  border-radius: 5px;\n  transition: all 0.2s linear;\n  display: block;\n  margin: 0 auto;\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: block;\n  width: 40px;\n  height: 4px;\n  background-color: white;\n  top: 4px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  position: absolute;\n  border-radius: 5px;\n  transition: all 0.2s linear;\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  width: 40px;\n  height: 4px;\n  background-color: white;\n  bottom: 4px;\n  position: absolute;\n  border-radius: 5px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  transition: all 0.2s linear;\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-toggler.active[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-toggler.active[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]::before {\n  top: 16px;\n  transform: rotate(45deg);\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-toggler.active[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]::after {\n  top: 3px;\n  transform: rotate(-45deg);\n}\n\n.navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  margin: 0px 10px;\n}\n\n.navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: black;\n  font-weight: 600;\n  font-size: 22px;\n}\n\n.navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .nav-item.active[_ngcontent-%COMP%]::after {\n  background-color: var(--blue);\n}\n\n.navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .nav-item.btn-blue[_ngcontent-%COMP%] {\n  height: 50px;\n}\n\n.navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .nav-item.btn-blue[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .nav-item.btn-blue[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: var(--blue);\n}\n\n.navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  width: 100%;\n  height: 3px;\n}\n\n.navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:hover::after {\n  background-color: var(--blue);\n}\n\n@media (max-width: 991px) {\n  .navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%] {\n    background-color: white;\n    padding: 5%;\n    box-shadow: 0px 11px 15px -6px rgba(0, 0, 0, 0.6);\n  }\n  .navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n    margin: 10px 0px;\n  }\n  .navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]::after {\n    width: 20%;\n    margin: auto;\n  }\n  .navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item.btn-blue[_ngcontent-%COMP%] {\n    width: 200px;\n    margin: auto;\n    text-align: center;\n  }\n  .navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item.btn-blue[_ngcontent-%COMP%]::after {\n    display: none;\n  }\n  .navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item.btn-blue[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n  }\n}\n\n.navbar.small[_ngcontent-%COMP%] {\n  height: 80px;\n}\n\n.navbar.small[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 60%;\n}\n\n.navbar.small[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXGFzc2V0c1xcc2Fzc1xcX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsaUJBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQ0tFLGlEREhGO0VDV0UsOEJEVkY7QUFJRjs7QUNrRUk7RUQzRUo7SUFRSSxZQUFBO0VBS0Y7QUFDRjs7QUFGSTtFQUNFLGNBQUE7QUFJTjs7QUMwREk7RURoRUY7SUFRSSxrQkFBQTtFQUVKO0VBQUk7SUFDRSxVQUFBO0VBRU47QUFDRjs7QUFFRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0FBQUo7O0FBRUk7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBQU47O0FBRU07RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FBQVI7O0FBR007RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0FBRFI7O0FBTVE7RUFDSSw2QkFBQTtBQUpaOztBQU1ZO0VBQ0ksU0FBQTtFQzFEWix3QkQyRFk7QUFBaEI7O0FBR1k7RUFDSSxRQUFBO0VDL0RaLHlCRGdFWTtBQUdoQjs7QUFLSTtFQUNFLGdCQUFBO0FBSE47O0FBS007RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBSFI7O0FBT1E7RUFDRSw2QkFBQTtBQUxWOztBQVNNO0VBQ0UsWUFBQTtBQVBSOztBQVNRO0VBQ0UsWUFBQTtBQVBWOztBQVNVO0VBQ0Usa0JBQUE7QUFQWjs7QUFZTTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFWUjs7QUFjUTtFQUNFLDZCQUFBO0FBWlY7O0FDNUNJO0VEbUJGO0lBMkNLLHVCQUFBO0lBQ0MsV0FBQTtJQ25JSixpRERvSUk7RUFaTjtFQWFLO0lBQ0ksa0JBQUE7RUFYVDtFQWFTO0lBQ0ksZ0JBQUE7RUFYYjtFQVlVO0lBQ0ksVUFBQTtJQUNBLFlBQUE7RUFWZDtFQWFVO0lBQ0ksWUFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtFQVhkO0VBWWM7SUFDSSxhQUFBO0VBVmxCO0VBWWM7SUFDSSxjQUFBO0lBQ0EsV0FBQTtFQVZsQjtBQUNGOztBQWlCRTtFQUNFLFlBQUE7QUFmSjs7QUFtQk07RUFDRSxjQUFBO0FBakJSOztBQXVCUTtFQUNFLGVBQUE7QUFyQlYiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zYXNzL21peGluc1wiO1xyXG5cclxuLm1sLWF1dG8ge1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG4ubmF2YmFyIHtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxuICBAaW5jbHVkZSBib3hzaGFkb3coMHB4IDExcHggMTVweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC42KSk7XHJcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbihoZWlnaHQgLjNzIGxpbmVhcik7XHJcblxyXG4gIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KDk5MSkge1xyXG4gICAgaGVpZ2h0OiA5MHB4O1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhci1icmFuZCB7XHJcbiAgICBpbWcge1xyXG4gICAgICBtYXgtd2lkdGg6IDkwJTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KDk5MSkge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5uYXZiYXItdG9nZ2xlciB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xyXG5cclxuICAgIC5tZW51LWljb24ge1xyXG4gICAgICB3aWR0aDogNDBweDtcclxuICAgICAgaGVpZ2h0OiA0cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuMnMgbGluZWFyO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgdG9wOiA0cHg7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGxpbmVhcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm90dG9tOiA0cHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGxpbmVhcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmLmFjdGl2ZXtcclxuICAgICAgICAubWVudS1pY29ue1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgICAgICAgICAgICY6OmJlZm9yZXtcclxuICAgICAgICAgICAgICAgIHRvcDogMTZweDtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybShyb3RhdGUoNDVkZWcpKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOjphZnRlcntcclxuICAgICAgICAgICAgICAgIHRvcDogM3B4O1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHJvdGF0ZSgtNDVkZWcpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIC5jb2xsYXBzZSB7XHJcbiAgICAubmF2LWl0ZW0ge1xyXG4gICAgICBtYXJnaW46IDBweCAxMHB4O1xyXG5cclxuICAgICAgLm5hdi1saW5rIHtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYnRuLWJsdWUge1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuXHJcbiAgICAgICAgLm5hdi1saW5rIHtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWJsdWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAzcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBAaW5jbHVkZSBmb3JfYnJlYWtwb2ludCg5OTEpIHtcclxuICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDUlO1xyXG4gICAgICAgIEBpbmNsdWRlIGJveHNoYWRvdygwcHggMTFweCAxNXB4IC02cHggcmdiKDAgMCAwIC8gNjAlKSk7XHJcbiAgICAgICAubmF2YmFyLW5hdntcclxuICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgIC5uYXYtaXRlbXsgICAgICBcclxuICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcclxuICAgICAgICAgICAgJjo6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDoyMCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuYnRuLWJsdWV7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAmOjphZnRlcntcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIH1cclxuICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuc21hbGwge1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG5cclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xyXG4gICAgLm5hdmJhci1icmFuZCB7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA2MCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY29sbGFwc2Uge1xyXG4gICAgICAubmF2LWl0ZW0ge1xyXG4gICAgICAgIC5uYXYtbGluayB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIkBtaXhpbiBmb250cygkZmFtaWx5LCAkcGF0aCkge1xyXG4gICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmYW1pbHk7XHJcbiAgICAgICAgc3JjOiB1cmwoXCIjeyRwYXRofS5lb3RcIik7XHJcbiAgICAgICAgc3JjOiB1cmwoXCIjeyRwYXRofS5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCB1cmwoXCIjeyRwYXRofS53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcIiN7JHBhdGh9LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGJveHNoYWRvdygkYXJncy4uLikge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAkYXJncztcclxuICAgIC1tb3otYm94LXNoYWRvdzogJGFyZ3M7XHJcbiAgICBib3gtc2hhZG93OiAkYXJncztcclxufVxyXG5cclxuQG1peGluIHRyYW5zaXRpb24oJGFyZ3MuLi4pIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW1zLXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICB0cmFuc2l0aW9uOiAkYXJncztcclxufVxyXG5cclxuQG1peGluIHRyYW5zZm9ybSgkYXJncy4uLikge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06ICRhcmdzO1xyXG4gICAgLW1vei10cmFuc2Zvcm06ICRhcmdzO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogJGFyZ3M7XHJcbiAgICAtby10cmFuc2Zvcm06ICRhcmdzO1xyXG4gICAgdHJhbnNmb3JtOiAkYXJncztcclxufVxyXG5cclxuQG1peGluIHBsYWNlaG9sZGVyKCRjb2xvciwgJGYtc2l6ZSwgJGYtZmFtaWx5KSB7XHJcbiAgICAmOjpwbGFjZWhvbGRlciB7IC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXHJcbiAgICAgICAgZm9udC1zaXplOiAkZi1zaXplO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZi1mYW1pbHk7XHJcbiAgICB9XHJcblxyXG4gICAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6ICRmLXNpemU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmLWZhbWlseTtcclxuICAgIH1cclxuXHJcbiAgICAmOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBNaWNyb3NvZnQgRWRnZSAqL1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6ICRmLXNpemU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmLWZhbWlseTtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGRlZ3JhZGFkbygkYXJncy4uLikge1xyXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxufVxyXG5cclxuQG1peGluIGltZy1kZWdyYWRhZG8oJHVybCwgJGFyZ3MuLi4pIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgkdXJsKSwgLW1vei1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR1cmwpLCAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHVybCksIC1tcy1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR1cmwpLCAtby1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR1cmwpLCBsaW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG59XHJcblxyXG4vLyBNZWRpYSBxdWVyeXNcclxuJG1lZGlhX3F1ZXJpZXMgOiAoXHJcbiAgICAnbW9iaWxlJyA6IFwiKG1heC13aWR0aDogNDc5cHgpXCIsXHJcbiAgICAnbW9iaWxlMic6IFwiKG1heC13aWR0aDogNTk5cHgpXCIsXHJcbiAgICAndGFibGV0JyA6IFwiKG1heC13aWR0aDogNzY3cHgpXCIsXHJcbiAgICAndGFibGV0Mic6IFwiKG1heC13aWR0aDogOTkxcHgpXCIsXHJcbiAgICAnZGVza3RvcCcgOiBcIihtYXgtd2lkdGg6MTE5OXB4KVwiLFxyXG4gICAgJ2Rlc2t0b3AxJzogXCIobWF4LXdpZHRoOjEzOTlweClcIixcclxuICAgICdkZXNrdG9wMicgOiBcIihtYXgtd2lkdGg6MTU5OXB4KVwiXHJcbik7XHJcblxyXG5AbWl4aW4gZm9yX2JyZWFrcG9pbnQoJGJyZWFrcG9pbnQpIHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiN7JGJyZWFrcG9pbnR9cHgpe1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 8120:
/*!**********************************************!*\
  !*** ./src/app/services/companys.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanysService": () => (/* binding */ CompanysService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.service */ 2468);


class CompanysService {
    constructor(dataService) {
        this.dataService = dataService;
        this.companys = [
            {
                logo: "./assets/images/valenetwork.jpg",
                puesto: "Programador Web",
                periodo: "2020 - Actual",
                descripcion: "Maquetación e integración de sitios web. Creación de maillings y configuración de los mismos."
            },
            {
                logo: "./assets/images/clickspublicitarios.jpg",
                puesto: "Desarrollador Front-End",
                periodo: "2018 - 2020",
                descripcion: "Maquetación, integración y mantenimiento de sitios web."
            },
            {
                //publicidad en línea
                logo: "./assets/images/publicidadenlinea.jpg",
                puesto: "Desarrollador Web",
                periodo: "2017 - 2019",
                descripcion: "Maquetación, integración, mantenimiento de sitios web."
            },
            {
                logo: "./assets/images/anzen-digital.png",
                puesto: "Desarrollador Front-End",
                periodo: "2016 - 2017",
                descripcion: "Maquetación de prototipos para bancas empresariales y personales."
            },
            {
                //grupo dara
                logo: "./assets/images/grupo-dara.jpg",
                puesto: "Coordinador de TI",
                periodo: "2014 - 2015",
                descripcion: "Mantenimiento de equipos de computo, sitios web e implementación de sistemas web."
            },
            {
                logo: "./assets/images/innovattia.jpg",
                puesto: "Desarrollador Web",
                periodo: "2014 (Prácticas)",
                descripcion: "Maquetación, integración, mantenimiento de sitios web."
            }
        ];
    }
    getCompanys() {
        return this.companys;
    }
    agregarCompany() {
        this.dataService.guardarCompanys(this.companys);
    }
}
CompanysService.ɵfac = function CompanysService_Factory(t) { return new (t || CompanysService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_data_service__WEBPACK_IMPORTED_MODULE_0__.DataServices)); };
CompanysService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CompanysService, factory: CompanysService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2468:
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataServices": () => (/* binding */ DataServices)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);


class DataServices {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    guardarCompanys(companys) {
        this.httpClient.post('https://portafolio-91-default-rtdb.firebaseio.com/datos.json', companys).subscribe(Response => console.log("Se han guardado los empleados:" + Response), error => console.log("Error: " + error));
    }
}
DataServices.ɵfac = function DataServices_Factory(t) { return new (t || DataServices)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
DataServices.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataServices, factory: DataServices.ɵfac });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map