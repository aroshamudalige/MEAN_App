webpackJsonp([1],{

/***/ "./src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src async recursive";

/***/ }),

/***/ "./src/app/aboutme/aboutme.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".aboutimage {\r\n  background-color: #ffffff;\r\n  color: #f2a3a5;\r\n  padding: 6.5em 0 7em 0;\r\n  background-color: #0c0c0c;\r\n  background-image: url(" + __webpack_require__("./src/assets/images/about.jpg") + ");\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: 15% left;\r\n  text-align: left;\r\n  position: relative;\r\n  z-index: 9999;\r\n}\r\n\r\np{\r\n  color: #ffffff;\r\n  font-weight: 600;\r\n  text-align: justify;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/aboutme/aboutme.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"aboutimage\">\n        <div class=\"inner\">\n            <p>\n                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\n            </p>\n        </div>\n</section>\n"

/***/ }),

/***/ "./src/app/aboutme/aboutme.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutmeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutmeComponent = (function () {
    function AboutmeComponent() {
    }
    AboutmeComponent.prototype.ngOnInit = function () {
    };
    return AboutmeComponent;
}());
AboutmeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-aboutme',
        template: __webpack_require__("./src/app/aboutme/aboutme.component.html"),
        styles: [__webpack_require__("./src/app/aboutme/aboutme.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutmeComponent);

//# sourceMappingURL=aboutme.component.js.map

/***/ }),

/***/ "./src/app/add-list/add-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".push-button-down {\n\tmargin-top: 5%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/add-list/add-list.component.html":
/***/ (function(module, exports) {

module.exports = "<form ngForm [formGroup]=\"complexForm\" (ngSubmit)=\"onSubmit(complexForm.value); complexForm.reset();\">\n\n    <div  class=\"form-group\">\n        <label for=\"sender\"><h4>Your Name</h4></label>\n        <input class=\"col-sm-12\" type=\"text\" class=\"form-control\" [formControl]=\"complexForm.controls['sender']\" [(ngModel)]=\"newList.sender\" name=\"sender\" required>\n        <div [hidden]=\"complexForm.controls['sender'].valid\" class=\"alert alert-danger\">\n          Your name is required\n        </div>\n    </div>\n\n    <br>\n\n    <div  class=\"form-group\">\n        <label for=\"message\"><h4>Comment</h4></label>\n        <div class=\"control-field\">\n          <textarea class=\"form-control\" cols=\"15\" rows=\"5\" [formControl]=\"complexForm.controls['message']\" name=\"message\" tabindex=\"3\" [(ngModel)]=\"newList.message\" required></textarea>\n        </div>\n        <div [hidden]=\"complexForm.controls['message'].valid\" class=\"alert alert-danger\">\n            This field is required\n        </div>\n    </div>\n\n    <button type=\"submit\" class=\"push-button-down btn btn-success\" [disabled]=\"!complexForm.valid\">Submit</button>\n    <button type=\"reset\" class=\"push-button-down btn btn-success\">Reset</button>\n\n</form>\n"

/***/ }),

/***/ "./src/app/add-list/add-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_list_service__ = __webpack_require__("./src/app/services/list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddListComponent = (function () {
    function AddListComponent(listServ, fb) {
        this.listServ = listServ;
        this.addList = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.complexForm = fb.group({
            'sender': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
            'message': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
        });
    }
    AddListComponent.prototype.ngOnInit = function () {
        this.newList = {
            sender: '',
            message: '',
            _id: ''
        };
    };
    AddListComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.listServ.addList(this.newList).subscribe(function (response) {
            if (response.success === true) {
                _this.addList.emit(_this.newList);
            }
        });
        alert('Thank you for your feedback! Your comment is submitted for reviewing.');
    };
    return AddListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _a || Object)
], AddListComponent.prototype, "addList", void 0);
AddListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-add-list',
        template: __webpack_require__("./src/app/add-list/add-list.component.html"),
        styles: [__webpack_require__("./src/app/add-list/add-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_list_service__["a" /* ListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_list_service__["a" /* ListService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */]) === "function" && _c || Object])
], AddListComponent);

var _a, _b, _c;
//# sourceMappingURL=add-list.component.js.map

/***/ }),

/***/ "./src/app/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  admin works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminComponent = (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-admin',
        template: __webpack_require__("./src/app/admin/admin.component.html"),
        styles: [__webpack_require__("./src/app/admin/admin.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AdminComponent);

//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header id=\"header\">\n  <div class=\"inner\">\n    <a routerLink=\"\" class=\"logo\">Welcome</a>\n    <nav id=\"nav\">\n      <a routerLink=\"\">Home</a>\n      <a routerLink=\"/projects\">Projects</a>\n      <a routerLink=\"/blog\">Blog</a>\n      <a routerLink=\"/about\">About Me</a>\n      <a routerLink=\"/contact\">Contact</a>\n      <a routerLink=\"/comments\">Leave a Comment</a>\n    </nav>\n  </div>\n</header>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__aboutme_aboutme_component__ = __webpack_require__("./src/app/aboutme/aboutme.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contact_contact_component__ = __webpack_require__("./src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__blog_blog_component__ = __webpack_require__("./src/app/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__projects_projects_component__ = __webpack_require__("./src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__notfound_notfound_component__ = __webpack_require__("./src/app/notfound/notfound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__admin_admin_component__ = __webpack_require__("./src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__comments_comments_component__ = __webpack_require__("./src/app/comments/comments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__add_list_add_list_component__ = __webpack_require__("./src/app/add-list/add-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_list_service__ = __webpack_require__("./src/app/services/list.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var routes = [
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_13__admin_admin_component__["a" /* AdminComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_7__aboutme_aboutme_component__["a" /* AboutmeComponent */] },
    { path: 'blog', component: __WEBPACK_IMPORTED_MODULE_10__blog_blog_component__["a" /* BlogComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_9__contact_contact_component__["a" /* ContactComponent */] },
    { path: 'projects', component: __WEBPACK_IMPORTED_MODULE_11__projects_projects_component__["a" /* ProjectsComponent */] },
    { path: 'comments', component: __WEBPACK_IMPORTED_MODULE_14__comments_comments_component__["a" /* CommentsComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_12__notfound_notfound_component__["a" /* NotfoundComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_7__aboutme_aboutme_component__["a" /* AboutmeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_10__blog_blog_component__["a" /* BlogComponent */],
            __WEBPACK_IMPORTED_MODULE_11__projects_projects_component__["a" /* ProjectsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__notfound_notfound_component__["a" /* NotfoundComponent */],
            __WEBPACK_IMPORTED_MODULE_13__admin_admin_component__["a" /* AdminComponent */],
            __WEBPACK_IMPORTED_MODULE_14__comments_comments_component__["a" /* CommentsComponent */],
            __WEBPACK_IMPORTED_MODULE_15__add_list_add_list_component__["a" /* AddListComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(routes)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_16__services_list_service__["a" /* ListService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_6__footer_footer_component__["a" /* FooterComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/blog/blog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".blogimage {\r\n  background-color: #e5474b;\r\n  color: #f2a3a5;\r\n  padding: 12.5em 0 11em 0;\r\n  background-color: #0c0c0c;\r\n  background-image: url(" + __webpack_require__("./src/assets/images/blog.jpg") + ");\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: 15% left;\r\n  text-align: left;\r\n  position: relative;\r\n  z-index: 9999;\r\n}\r\n\r\n#oneblog {\r\n  padding: 5em 0 17.5em 0;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/blog/blog.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"oneblog\" class=\"blogimage\">\n    <div class=\"inner\">\n        <ul class=\"actions\">\n\t\t\t<li><a href=\"https://whatiknow94.wordpress.com/\" class=\"button alt\" target=\"_blank\">Visit Blog</a></li>\n\t\t</ul>\n    </div>\n</section>\n"

/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogComponent = (function () {
    function BlogComponent() {
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    return BlogComponent;
}());
BlogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-blog',
        template: __webpack_require__("./src/app/blog/blog.component.html"),
        styles: [__webpack_require__("./src/app/blog/blog.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BlogComponent);

//# sourceMappingURL=blog.component.js.map

/***/ }),

/***/ "./src/app/comments/comments.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".commentpage {\r\n  background-color: #f8f2f20e;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/comments/comments.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"one\" class=\"commentpage\">\n    <div class=\"inner\">\n      <h2>Leave a comment</h2>\n      <app-add-list></app-add-list>\n      <h2>What others say!</h2>\n      <table id=\"table\" class=\"table table-hover table-mc-light-blue\">\n        <thead>\n          <tr class=\"align-left\">\n            <th class=\"align-left\">Name</th>\n            <th class=\"align-left\">Comment</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let list of lists\">\n            <td>{{list.sender}}</td>\n            <td>{{list.message}}</td>\n          </tr>\n        </tbody>\n     </table>\n\n    </div>\n</section>\n"

/***/ }),

/***/ "./src/app/comments/comments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_list_service__ = __webpack_require__("./src/app/services/list.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommentsComponent = (function () {
    function CommentsComponent(listServ) {
        this.listServ = listServ;
        this.lists = [];
    }
    CommentsComponent.prototype.ngOnInit = function () {
        this.loadLists();
    };
    CommentsComponent.prototype.loadLists = function () {
        var _this = this;
        this.listServ.getAllMsgs().subscribe(function (response) { return _this.lists = response; });
    };
    return CommentsComponent;
}());
CommentsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-comments',
        template: __webpack_require__("./src/app/comments/comments.component.html"),
        styles: [__webpack_require__("./src/app/comments/comments.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_list_service__["a" /* ListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_list_service__["a" /* ListService */]) === "function" && _a || Object])
], CommentsComponent);

var _a;
//# sourceMappingURL=comments.component.js.map

/***/ }),

/***/ "./src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".contatctimage {\r\n  background-color: #ffffff;\r\n  color: #f2a3a5;\r\n  padding: 8em 0 9em 0;\r\n  background-color: #0c0c0c;\r\n  background-image: url(" + __webpack_require__("./src/assets/images/contact.jpg") + ");\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: 15% left;\r\n  text-align: left;\r\n  position: relative;\r\n  z-index: 9999;\r\n}\r\n\r\nh3{\r\n  color: #ffffff;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"contatctimage\">\n    <div class=\"inner\">\n      <h3>Email: aroshamudalige1@gmail.com</h3>\n      <h3>Tel: +94 770 177 440</h3>\n      <div>\n        <button type=\"button\" onclick=\"window.open('https://facebook.com','_blank')\" class=\"btn btn-fb waves-light\" mdbWavesEffect><i class=\"fa fa-facebook\"></i></button>\n        <button type=\"button\" onclick=\"window.open('https://twitter.com','_blank')\" class=\"btn btn-tw waves-light\" mdbWavesEffect><i class=\"fa fa-twitter\"></i></button>\n        <button type=\"button\" onclick=\"window.open('https://google.com','_blank')\" class=\"btn btn-gplus waves-light\" mdbWavesEffect><i class=\"fa fa-google-plus\"></i></button>\n        <button type=\"button\" onclick=\"window.open('https://linkedin.com','_blank')\" class=\"btn btn-li waves-light\" mdbWavesEffect><i class=\"fa fa-linkedin\"></i></button>\n      </div>\n    </div>\n</section>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-contact',
        template: __webpack_require__("./src/app/contact/contact.component.html"),
        styles: [__webpack_require__("./src/app/contact/contact.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"footer\">\n  <div class=\"inner\">\n    <div class=\"copyright\">\n      &copy; 2018: Arosha Mudalige\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("./src/app/footer/footer.component.html"),
        styles: [__webpack_require__("./src/app/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300italic,400,400italic,600);", ""]);

// module
exports.push([module.i, ".avatar {\r\n    vertical-align: middle;\r\n    width: 150px;\r\n    height: 150px;\r\n    border-radius: 50%;\r\n}\r\n\r\n.homeimage {\r\n  background-color: #ffffff;\r\n  color: #f2a3a5;\r\n  padding: 8em 0 9em 0;\r\n  background-color: #0c0c0c;\r\n  background-image: url(" + __webpack_require__("./src/assets/images/banner.jpg") + ");\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: 15% left;\r\n  text-align: center;\r\n  position: relative;\r\n  z-index: 9999;\r\n}\r\n\r\n/*\r\n\tHelios by HTML5 UP\r\n\thtml5up.net | @ajlkn\r\n\tFree for personal and commercial use under the CCA 3.0 license (html5up.net/license)\r\n*/\r\n\r\nhtml, body, div, span, applet, object,\r\niframe, h1, h2, h3, h4, h5, h6, p, blockquote,\r\npre, a, abbr, acronym, address, big, cite,\r\ncode, del, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var, b,\r\nu, i, center, dl, dt, dd, ol, ul, li, fieldset,\r\nform, label, legend, table, caption, tbody,\r\ntfoot, thead, tr, th, td, article, aside,\r\ncanvas, details, embed, figure, figcaption,\r\nfooter, header, hgroup, menu, nav, output, ruby,\r\nsection, summary, time, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;}\r\n\r\narticle, aside, details, figcaption, figure,\r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;}\r\n\r\nbody {\r\n\tline-height: 1;\r\n}\r\n\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\n\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\n\r\n\tblockquote:before, blockquote:after, q:before, q:after {\r\n\t\tcontent: '';\r\n\t\tcontent: none;\r\n\t}\r\n\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\nbody {\r\n\t-webkit-text-size-adjust: none;\r\n}\r\n\r\nmark {\r\n\tbackground-color: transparent;\r\n\tcolor: inherit;\r\n}\r\n\r\ninput::-moz-focus-inner {\r\n\tborder: 0;\r\n\tpadding: 0;\r\n}\r\n\r\ninput, select, textarea {\r\n\t-moz-appearance: none;\r\n\t-webkit-appearance: none;\r\n\t-ms-appearance: none;\r\n\tappearance: none;\r\n}\r\n\r\n/* Basic */\r\n\r\n\thtml {\r\n\t\tbox-sizing: border-box;\r\n\t}\r\n\r\n\t*, *:before, *:after {\r\n\t\tbox-sizing: inherit;\r\n\t}\r\n\r\n\tbody {\r\n\t\tbackground: #f0f4f4;\r\n\t\tcolor: #5b5b5b;\r\n\t\tfont-size: 15pt;\r\n\t\tline-height: 1.85em;\r\n\t\tfont-family: 'Source Sans Pro', sans-serif;\r\n\t\tfont-weight: 300;\r\n\t}\r\n\r\n\t\tbody.is-preload *, body.is-preload *:before, body.is-preload *:after {\r\n\t\t\t-webkit-animation: none !important;\r\n\t\t\tanimation: none !important;\r\n\t\t\ttransition: none !important;\r\n\t\t}\r\n\r\n\tinput, textarea, select {\r\n\t\tfont-size: 15pt;\r\n\t\tline-height: 1.85em;\r\n\t\tfont-family: 'Source Sans Pro', sans-serif;\r\n\t\tfont-weight: 300;\r\n\t}\r\n\r\n\th1, h2, h3, h4, h5, h6 {\r\n\t\tfont-weight: 400;\r\n\t\tcolor: #483949;\r\n\t\tline-height: 1.25em;\r\n\t}\r\n\r\n\th1 a, h2 a, h3 a, h4 a, h5 a, h6 a {\r\n\t\tcolor: inherit;\r\n\t\ttext-decoration: none;\r\n\t\tborder-bottom-color: transparent;\r\n\t}\r\n\r\n\th1 strong, h2 strong, h3 strong, h4 strong, h5 strong, h6 strong {\r\n\t\tfont-weight: 600;\r\n\t}\r\n\r\n\th2 {\r\n\t\tfont-size: 2.85em;\r\n\t}\r\n\r\n\th3 {\r\n\t\tfont-size: 1.25em;\r\n\t}\r\n\r\n\th4 {\r\n\t\tfont-size: 1em;\r\n\t\tmargin: 0 0 0.25em 0;\r\n\t}\r\n\r\n\tstrong, b {\r\n\t\tfont-weight: 400;\r\n\t\tcolor: #483949;\r\n\t}\r\n\r\n\tem, i {\r\n\t\tfont-style: italic;\r\n\t}\r\n\r\n\ta {\r\n\t\tcolor: inherit;\r\n\t\tborder-bottom: solid 1px rgba(128, 128, 128, 0.15);\r\n\t\ttext-decoration: none;\r\n\t\ttransition: background-color 0.35s ease-in-out, color 0.35s ease-in-out, border-bottom-color 0.35s ease-in-out;\r\n\t}\r\n\r\n\t\ta:hover {\r\n\t\t\tcolor: #ef8376;\r\n\t\t\tborder-bottom-color: transparent;\r\n\t\t}\r\n\r\n\tsub {\r\n\t\tposition: relative;\r\n\t\ttop: 0.5em;\r\n\t\tfont-size: 0.8em;\r\n\t}\r\n\r\n\tsup {\r\n\t\tposition: relative;\r\n\t\ttop: -0.5em;\r\n\t\tfont-size: 0.8em;\r\n\t}\r\n\r\n\tblockquote {\r\n\t\tborder-left: solid 0.5em #ddd;\r\n\t\tpadding: 1em 0 1em 2em;\r\n\t\tfont-style: italic;\r\n\t}\r\n\r\n\tp, ul, ol, dl, table {\r\n\t\tmargin-bottom: 1em;\r\n\t}\r\n\r\n\tp {\r\n\t\ttext-align: justify;\r\n\t}\r\n\r\n\tbr.clear {\r\n\t\tclear: both;\r\n\t}\r\n\r\n\thr {\r\n\t\tposition: relative;\r\n\t\tdisplay: block;\r\n\t\tborder: 0;\r\n\t\ttop: 4.5em;\r\n\t\tmargin-bottom: 9em;\r\n\t\theight: 6px;\r\n\t\tborder-top: solid 1px rgba(128, 128, 128, 0.2);\r\n\t\tborder-bottom: solid 1px rgba(128, 128, 128, 0.2);\r\n\t}\r\n\r\n\t\thr:before, hr:after {\r\n\t\t\tcontent: '';\r\n\t\t\tposition: absolute;\r\n\t\t\ttop: -8px;\r\n\t\t\tdisplay: block;\r\n\t\t\twidth: 1px;\r\n\t\t\theight: 21px;\r\n\t\t\tbackground: rgba(128, 128, 128, 0.2);\r\n\t\t}\r\n\r\n\t\thr:before {\r\n\t\t\tleft: -1px;\r\n\t\t}\r\n\r\n\t\thr:after {\r\n\t\t\tright: -1px;\r\n\t\t}\r\n\r\n\t.timestamp {\r\n\t\tcolor: rgba(128, 128, 128, 0.75);\r\n\t\tfont-size: 0.8em;\r\n\t}\r\n\r\n/* Container */\r\n\r\n\t.container {\r\n\t\tmargin: 0 auto;\r\n\t\tmax-width: 100%;\r\n\t\twidth: 1400px;\r\n\t}\r\n\r\n\t\t@media screen and (max-width: 1680px) {\r\n\r\n\t\t\t.container {\r\n\t\t\t\twidth: 1200px;\r\n\t\t\t}\r\n\r\n\t\t}\r\n\r\n\t\t@media screen and (max-width: 1280px) {\r\n\r\n\t\t\t.container {\r\n\t\t\t\twidth: 100%;\r\n\t\t\t}\r\n\r\n\t\t}\r\n\r\n\t\t@media screen and (max-width: 960px) {\r\n\r\n\t\t\t.container {\r\n\t\t\t\twidth: 100%;\r\n\t\t\t}\r\n\r\n\t\t}\r\n\r\n\t\t@media screen and (max-width: 840px) {\r\n\r\n\t\t\t.container {\r\n\t\t\t\twidth: 100%;\r\n\t\t\t}\r\n\r\n\t\t}\r\n\r\n\t\t@media screen and (max-width: 736px) {\r\n\r\n\t\t\t.container {\r\n\t\t\t\twidth: 100%;\r\n\t\t\t}\r\n\r\n\t\t}\r\n\r\n/* Row */\r\n\r\n\t.row {\r\n\t\tdisplay: -webkit-box;\r\n\t\tdisplay: -ms-flexbox;\r\n\t\tdisplay: flex;\r\n\t\t-ms-flex-wrap: wrap;\r\n\t\t    flex-wrap: wrap;\r\n\t\tbox-sizing: border-box;\r\n\t\t-webkit-box-align: stretch;\r\n\t\t    -ms-flex-align: stretch;\r\n\t\t        align-items: stretch;\r\n\t}\r\n\r\n\t\t.row > * {\r\n\t\t\tbox-sizing: border-box;\r\n\t\t}\r\n\r\n\t\t.row.gtr-uniform > * > :last-child {\r\n\t\t\tmargin-bottom: 0;\r\n\t\t}\r\n\r\n\t\t.row.aln-left {\r\n\t\t\t-webkit-box-pack: start;\r\n\t\t\t    -ms-flex-pack: start;\r\n\t\t\t        justify-content: flex-start;\r\n\t\t}\r\n\r\n\t\t.row.aln-center {\r\n\t\t\t-webkit-box-pack: center;\r\n\t\t\t    -ms-flex-pack: center;\r\n\t\t\t        justify-content: center;\r\n\t\t}\r\n\r\n\t\t.row.aln-right {\r\n\t\t\t-webkit-box-pack: end;\r\n\t\t\t    -ms-flex-pack: end;\r\n\t\t\t        justify-content: flex-end;\r\n\t\t}\r\n\r\n\t\t.row.aln-top {\r\n\t\t\t-webkit-box-align: start;\r\n\t\t\t    -ms-flex-align: start;\r\n\t\t\t        align-items: flex-start;\r\n\t\t}\r\n\r\n\t\t.row.aln-middle {\r\n\t\t\t-webkit-box-align: center;\r\n\t\t\t    -ms-flex-align: center;\r\n\t\t\t        align-items: center;\r\n\t\t}\r\n\r\n\t\t.row.aln-bottom {\r\n\t\t\t-webkit-box-align: end;\r\n\t\t\t    -ms-flex-align: end;\r\n\t\t\t        align-items: flex-end;\r\n\t\t}\r\n\r\n\t\t.row > .imp {\r\n\t\t\t-webkit-box-ordinal-group: 0;\r\n\t\t\t    -ms-flex-order: -1;\r\n\t\t\t        order: -1;\r\n\t\t}\r\n\r\n\t\t.row > .col-1 {\r\n\t\t\twidth: 8.3333333333%;\r\n\t\t}\r\n\r\n\t\t.row > .off-1 {\r\n\t\t\tmargin-left: 8.3333333333%;\r\n\t\t}\r\n\r\n\t\t.row > .col-2 {\r\n\t\t\twidth: 16.6666666667%;\r\n\t\t}\r\n\r\n\t\t.row > .off-2 {\r\n\t\t\tmargin-left: 16.6666666667%;\r\n\t\t}\r\n\r\n\t\t.row > .col-3 {\r\n\t\t\twidth: 25%;\r\n\t\t}\r\n\r\n\t\t.row > .off-3 {\r\n\t\t\tmargin-left: 25%;\r\n\t\t}\r\n\r\n\t\t.row > .col-4 {\r\n\t\t\twidth: 33.3333333333%;\r\n\t\t}\r\n\r\n\t\t.row > .off-4 {\r\n\t\t\tmargin-left: 33.3333333333%;\r\n\t\t}\r\n\r\n\t\t.row > .col-5 {\r\n\t\t\twidth: 41.6666666667%;\r\n\t\t}\r\n\r\n\t\t.row > .off-5 {\r\n\t\t\tmargin-left: 41.6666666667%;\r\n\t\t}\r\n\r\n\t\t.row > .col-6 {\r\n\t\t\twidth: 50%;\r\n\t\t}\r\n\r\n\t\t.row > .off-6 {\r\n\t\t\tmargin-left: 50%;\r\n\t\t}\r\n\r\n\t\t.row > .col-7 {\r\n\t\t\twidth: 58.3333333333%;\r\n\t\t}\r\n\r\n\t\t.row > .off-7 {\r\n\t\t\tmargin-left: 58.3333333333%;\r\n\t\t}\r\n\r\n\t\t.row > .col-8 {\r\n\t\t\twidth: 66.6666666667%;\r\n\t\t}\r\n\r\n\t\t.row > .off-8 {\r\n\t\t\tmargin-left: 66.6666666667%;\r\n\t\t}\r\n\r\n\t\t.row > .col-9 {\r\n\t\t\twidth: 75%;\r\n\t\t}\r\n\r\n\t\t.row > .off-9 {\r\n\t\t\tmargin-left: 75%;\r\n\t\t}\r\n\r\n\t\t.row > .col-10 {\r\n\t\t\twidth: 83.3333333333%;\r\n\t\t}\r\n\r\n\t\t.row > .off-10 {\r\n\t\t\tmargin-left: 83.3333333333%;\r\n\t\t}\r\n\r\n\t\t.row > .col-11 {\r\n\t\t\twidth: 91.6666666667%;\r\n\t\t}\r\n\r\n\t\t.row > .off-11 {\r\n\t\t\tmargin-left: 91.6666666667%;\r\n\t\t}\r\n\r\n\t\t.row > .col-12 {\r\n\t\t\twidth: 100%;\r\n\t\t}\r\n\r\n\t\t.row > .off-12 {\r\n\t\t\tmargin-left: 100%;\r\n\t\t}\r\n\r\n\t\t.row.gtr-0 {\r\n\t\t\tmargin-top: 0px;\r\n\t\t\tmargin-left: 0px;\r\n\t\t}\r\n\r\n\t\t\t.row.gtr-0 > * {\r\n\t\t\t\tpadding: 0px 0 0 0px;\r\n\t\t\t}\r\n\r\n\t\t\t.row.gtr-0.gtr-uniform {\r\n\t\t\t\tmargin-top: 0px;\r\n\t\t\t}\r\n\r\n\t\t\t\t.row.gtr-0.gtr-uniform > * {\r\n\t\t\t\t\tpadding-top: 0px;\r\n\t\t\t\t}\r\n\r\n\t\t.row.gtr-25 {\r\n\t\t\tmargin-top: -10px;\r\n\t\t\tmargin-left: -10px;\r\n\t\t}\r\n\r\n\t\t\t.row.gtr-25 > * {\r\n\t\t\t\tpadding: 10px 0 0 10px;\r\n\t\t\t}\r\n\r\n\t\t\t.row.gtr-25.gtr-uniform {\r\n\t\t\t\tmargin-top: -10px;\r\n\t\t\t}\r\n\r\n\t\t\t\t.row.gtr-25.gtr-uniform > * {\r\n\t\t\t\t\tpadding-top: 10px;\r\n\t\t\t\t}\r\n\r\n\t\t.row.gtr-50 {\r\n\t\t\tmargin-top: -20px;\r\n\t\t\tmargin-left: -20px;\r\n\t\t}\r\n\r\n\t\t\t.row.gtr-50 > * {\r\n\t\t\t\tpadding: 20px 0 0 20px;\r\n\t\t\t}\r\n\r\n\t\t\t.row.gtr-50.gtr-uniform {\r\n\t\t\t\tmargin-top: -20px;\r\n\t\t\t}\r\n\r\n\t\t\t\t.row.gtr-50.gtr-uniform > * {\r\n\t\t\t\t\tpadding-top: 20px;\r\n\t\t\t\t}\r\n\r\n\t\t.row {\r\n\t\t\tmargin-top: -40px;\r\n\t\t\tmargin-left: -40px;\r\n\t\t}\r\n\r\n\t\t\t.row > * {\r\n\t\t\t\tpadding: 40px 0 0 40px;\r\n\t\t\t}\r\n\r\n\t\t\t.row.gtr-uniform {\r\n\t\t\t\tmargin-top: -40px;\r\n\t\t\t}\r\n\r\n\t\t\t\t.row.gtr-uniform > * {\r\n\t\t\t\t\tpadding-top: 40px;\r\n\t\t\t\t}\r\n\r\n\t\t.row.gtr-150 {\r\n\t\t\tmargin-top: -60px;\r\n\t\t\tmargin-left: -60px;\r\n\t\t}\r\n\r\n\t\t\t.row.gtr-150 > * {\r\n\t\t\t\tpadding: 60px 0 0 60px;\r\n\t\t\t}\r\n\r\n\t\t\t.row.gtr-150.gtr-uniform {\r\n\t\t\t\tmargin-top: -60px;\r\n\t\t\t}\r\n\r\n\t\t\t\t.row.gtr-150.gtr-uniform > * {\r\n\t\t\t\t\tpadding-top: 60px;\r\n\t\t\t\t}\r\n\r\n\t\t.row.gtr-200 {\r\n\t\t\tmargin-top: -80px;\r\n\t\t\tmargin-left: -80px;\r\n\t\t}\r\n\r\n\t\t\t.row.gtr-200 > * {\r\n\t\t\t\tpadding: 80px 0 0 80px;\r\n\t\t\t}\r\n\r\n\t\t\t.row.gtr-200.gtr-uniform {\r\n\t\t\t\tmargin-top: -80px;\r\n\t\t\t}\r\n\r\n\t\t\t\t.row.gtr-200.gtr-uniform > * {\r\n\t\t\t\t\tpadding-top: 80px;\r\n\t\t\t\t}\r\n\r\n\t\t@media screen and (max-width: 1680px) {\r\n\r\n\t\t\t.row {\r\n\t\t\t\tdisplay: -webkit-box;\r\n\t\t\t\tdisplay: -ms-flexbox;\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\t-ms-flex-wrap: wrap;\r\n\t\t\t\t    flex-wrap: wrap;\r\n\t\t\t\tbox-sizing: border-box;\r\n\t\t\t\t-webkit-box-align: stretch;\r\n\t\t\t\t    -ms-flex-align: stretch;\r\n\t\t\t\t        align-items: stretch;\r\n\t\t\t}\r\n\r\n\t\t\t\t.row > * {\r\n\t\t\t\t\tbox-sizing: border-box;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row.gtr-uniform > * > :last-child {\r\n\t\t\t\t\tmargin-bottom: 0;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row.aln-left {\r\n\t\t\t\t\t-webkit-box-pack: start;\r\n\t\t\t\t\t    -ms-flex-pack: start;\r\n\t\t\t\t\t        justify-content: flex-start;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row.aln-center {\r\n\t\t\t\t\t-webkit-box-pack: center;\r\n\t\t\t\t\t    -ms-flex-pack: center;\r\n\t\t\t\t\t        justify-content: center;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row.aln-right {\r\n\t\t\t\t\t-webkit-box-pack: end;\r\n\t\t\t\t\t    -ms-flex-pack: end;\r\n\t\t\t\t\t        justify-content: flex-end;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row.aln-top {\r\n\t\t\t\t\t-webkit-box-align: start;\r\n\t\t\t\t\t    -ms-flex-align: start;\r\n\t\t\t\t\t        align-items: flex-start;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row.aln-middle {\r\n\t\t\t\t\t-webkit-box-align: center;\r\n\t\t\t\t\t    -ms-flex-align: center;\r\n\t\t\t\t\t        align-items: center;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row.aln-bottom {\r\n\t\t\t\t\t-webkit-box-align: end;\r\n\t\t\t\t\t    -ms-flex-align: end;\r\n\t\t\t\t\t        align-items: flex-end;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .imp-wide {\r\n\t\t\t\t\t-webkit-box-ordinal-group: 0;\r\n\t\t\t\t\t    -ms-flex-order: -1;\r\n\t\t\t\t\t        order: -1;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .col-1-wide {\r\n\t\t\t\t\twidth: 8.3333333333%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .off-1-wide {\r\n\t\t\t\t\tmargin-left: 8.3333333333%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .col-2-wide {\r\n\t\t\t\t\twidth: 16.6666666667%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .off-2-wide {\r\n\t\t\t\t\tmargin-left: 16.6666666667%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .col-3-wide {\r\n\t\t\t\t\twidth: 25%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .off-3-wide {\r\n\t\t\t\t\tmargin-left: 25%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .col-4-wide {\r\n\t\t\t\t\twidth: 33.3333333333%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .off-4-wide {\r\n\t\t\t\t\tmargin-left: 33.3333333333%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .col-5-wide {\r\n\t\t\t\t\twidth: 41.6666666667%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .off-5-wide {\r\n\t\t\t\t\tmargin-left: 41.6666666667%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .col-6-wide {\r\n\t\t\t\t\twidth: 50%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .off-6-wide {\r\n\t\t\t\t\tmargin-left: 50%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .col-7-wide {\r\n\t\t\t\t\twidth: 58.3333333333%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .off-7-wide {\r\n\t\t\t\t\tmargin-left: 58.3333333333%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .col-8-wide {\r\n\t\t\t\t\twidth: 66.6666666667%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .off-8-wide {\r\n\t\t\t\t\tmargin-left: 66.6666666667%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .col-9-wide {\r\n\t\t\t\t\twidth: 75%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .off-9-wide {\r\n\t\t\t\t\tmargin-left: 75%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .col-10-wide {\r\n\t\t\t\t\twidth: 83.3333333333%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .off-10-wide {\r\n\t\t\t\t\tmargin-left: 83.3333333333%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .col-11-wide {\r\n\t\t\t\t\twidth: 91.6666666667%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .off-11-wide {\r\n\t\t\t\t\tmargin-left: 91.6666666667%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .col-12-wide {\r\n\t\t\t\t\twidth: 100%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .off-12-wide {\r\n\t\t\t\t\tmargin-left: 100%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row.gtr-0 {\r\n\t\t\t\t\tmargin-top: 0px;\r\n\t\t\t\t\tmargin-left: 0px;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\t.row.gtr-0 > * {\r\n\t\t\t\t\t\tpadding: 0px 0 0 0px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.row.gtr-0.gtr-uniform {\r\n\t\t\t\t\t\tmargin-top: 0px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t.row.gtr-0.gtr-uniform > * {\r\n\t\t\t\t\t\t\tpadding-top: 0px;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t.row.gtr-25 {\r\n\t\t\t\t\tmargin-top: -10px;\r\n\t\t\t\t\tmargin-left: -10px;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\t.row.gtr-25 > * {\r\n\t\t\t\t\t\tpadding: 10px 0 0 10px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.row.gtr-25.gtr-uniform {\r\n\t\t\t\t\t\tmargin-top: -10px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t.row.gtr-25.gtr-uniform > * {\r\n\t\t\t\t\t\t\tpadding-top: 10px;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t.row.gtr-50 {\r\n\t\t\t\t\tmargin-top: -20px;\r\n\t\t\t\t\tmargin-left: -20px;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\t.row.gtr-50 > * {\r\n\t\t\t\t\t\tpadding: 20px 0 0 20px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.row.gtr-50.gtr-uniform {\r\n\t\t\t\t\t\tmargin-top: -20px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t.row.gtr-50.gtr-uniform > * {\r\n\t\t\t\t\t\t\tpadding-top: 20px;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t.row {\r\n\t\t\t\t\tmargin-top: -40px;\r\n\t\t\t\t\tmargin-left: -40px;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\t.row > * {\r\n\t\t\t\t\t\tpadding: 40px 0 0 40px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.row.gtr-uniform {\r\n\t\t\t\t\t\tmargin-top: -40px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t.row.gtr-uniform > * {\r\n\t\t\t\t\t\t\tpadding-top: 40px;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t.row.gtr-150 {\r\n\t\t\t\t\tmargin-top: -60px;\r\n\t\t\t\t\tmargin-left: -60px;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\t.row.gtr-150 > * {\r\n\t\t\t\t\t\tpadding: 60px 0 0 60px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.row.gtr-150.gtr-uniform {\r\n\t\t\t\t\t\tmargin-top: -60px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t.row.gtr-150.gtr-uniform > * {\r\n\t\t\t\t\t\t\tpadding-top: 60px;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t.row.gtr-200 {\r\n\t\t\t\t\tmargin-top: -80px;\r\n\t\t\t\t\tmargin-left: -80px;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\t.row.gtr-200 > * {\r\n\t\t\t\t\t\tpadding: 80px 0 0 80px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.row.gtr-200.gtr-uniform {\r\n\t\t\t\t\t\tmargin-top: -80px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t.row.gtr-200.gtr-uniform > * {\r\n\t\t\t\t\t\t\tpadding-top: 80px;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t}\r\n\r\n\t\t@media screen and (max-width: 1280px) {\r\n\r\n\t\t\t.row {\r\n\t\t\t\tdisplay: -webkit-box;\r\n\t\t\t\tdisplay: -ms-flexbox;\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\t-ms-flex-wrap: wrap;\r\n\t\t\t\t    flex-wrap: wrap;\r\n\t\t\t\tbox-sizing: border-box;\r\n\t\t\t\t-webkit-box-align: stretch;\r\n\t\t\t\t    -ms-flex-align: stretch;\r\n\t\t\t\t        align-items: stretch;\r\n\t\t\t}\r\n\r\n\t\t\t\t.row > * {\r\n\t\t\t\t\tbox-sizing: border-box;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row.gtr-uniform > * > :last-child {\r\n\t\t\t\t\tmargin-bottom: 0;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row.aln-left {\r\n\t\t\t\t\t-webkit-box-pack: start;\r\n\t\t\t\t\t    -ms-flex-pack: start;\r\n\t\t\t\t\t        justify-content: flex-start;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row.aln-center {\r\n\t\t\t\t\t-webkit-box-pack: center;\r\n\t\t\t\t\t    -ms-flex-pack: center;\r\n\t\t\t\t\t        justify-content: center;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row.aln-right {\r\n\t\t\t\t\t-webkit-box-pack: end;\r\n\t\t\t\t\t    -ms-flex-pack: end;\r\n\t\t\t\t\t        justify-content: flex-end;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row.aln-top {\r\n\t\t\t\t\t-webkit-box-align: start;\r\n\t\t\t\t\t    -ms-flex-align: start;\r\n\t\t\t\t\t        align-items: flex-start;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row.aln-middle {\r\n\t\t\t\t\t-webkit-box-align: center;\r\n\t\t\t\t\t    -ms-flex-align: center;\r\n\t\t\t\t\t        align-items: center;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row.aln-bottom {\r\n\t\t\t\t\t-webkit-box-align: end;\r\n\t\t\t\t\t    -ms-flex-align: end;\r\n\t\t\t\t\t        align-items: flex-end;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .imp-normal {\r\n\t\t\t\t\t-webkit-box-ordinal-group: 0;\r\n\t\t\t\t\t    -ms-flex-order: -1;\r\n\t\t\t\t\t        order: -1;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .col-1-normal {\r\n\t\t\t\t\twidth: 8.3333333333%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .off-1-normal {\r\n\t\t\t\t\tmargin-left: 8.3333333333%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .col-2-normal {\r\n\t\t\t\t\twidth: 16.6666666667%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .off-2-normal {\r\n\t\t\t\t\tmargin-left: 16.6666666667%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .col-3-normal {\r\n\t\t\t\t\twidth: 25%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .off-3-normal {\r\n\t\t\t\t\tmargin-left: 25%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .col-4-normal {\r\n\t\t\t\t\twidth: 33.3333333333%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .off-4-normal {\r\n\t\t\t\t\tmargin-left: 33.3333333333%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .col-5-normal {\r\n\t\t\t\t\twidth: 41.6666666667%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .off-5-normal {\r\n\t\t\t\t\tmargin-left: 41.6666666667%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .col-6-normal {\r\n\t\t\t\t\twidth: 50%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .off-6-normal {\r\n\t\t\t\t\tmargin-left: 50%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .col-7-normal {\r\n\t\t\t\t\twidth: 58.3333333333%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .off-7-normal {\r\n\t\t\t\t\tmargin-left: 58.3333333333%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .col-8-normal {\r\n\t\t\t\t\twidth: 66.6666666667%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .off-8-normal {\r\n\t\t\t\t\tmargin-left: 66.6666666667%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .col-9-normal {\r\n\t\t\t\t\twidth: 75%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .off-9-normal {\r\n\t\t\t\t\tmargin-left: 75%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .col-10-normal {\r\n\t\t\t\t\twidth: 83.3333333333%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .off-10-normal {\r\n\t\t\t\t\tmargin-left: 83.3333333333%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .col-11-normal {\r\n\t\t\t\t\twidth: 91.6666666667%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .off-11-normal {\r\n\t\t\t\t\tmargin-left: 91.6666666667%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .col-12-normal {\r\n\t\t\t\t\twidth: 100%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .off-12-normal {\r\n\t\t\t\t\tmargin-left: 100%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row.gtr-0 {\r\n\t\t\t\t\tmargin-top: 0px;\r\n\t\t\t\t\tmargin-left: 0px;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\t.row.gtr-0 > * {\r\n\t\t\t\t\t\tpadding: 0px 0 0 0px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.row.gtr-0.gtr-uniform {\r\n\t\t\t\t\t\tmargin-top: 0px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t.row.gtr-0.gtr-uniform > * {\r\n\t\t\t\t\t\t\tpadding-top: 0px;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t.row.gtr-25 {\r\n\t\t\t\t\tmargin-top: -9px;\r\n\t\t\t\t\tmargin-left: -9px;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\t.row.gtr-25 > * {\r\n\t\t\t\t\t\tpadding: 9px 0 0 9px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.row.gtr-25.gtr-uniform {\r\n\t\t\t\t\t\tmargin-top: -9px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t.row.gtr-25.gtr-uniform > * {\r\n\t\t\t\t\t\t\tpadding-top: 9px;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t.row.gtr-50 {\r\n\t\t\t\t\tmargin-top: -18px;\r\n\t\t\t\t\tmargin-left: -18px;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\t.row.gtr-50 > * {\r\n\t\t\t\t\t\tpadding: 18px 0 0 18px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.row.gtr-50.gtr-uniform {\r\n\t\t\t\t\t\tmargin-top: -18px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t.row.gtr-50.gtr-uniform > * {\r\n\t\t\t\t\t\t\tpadding-top: 18px;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t.row {\r\n\t\t\t\t\tmargin-top: -36px;\r\n\t\t\t\t\tmargin-left: -36px;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\t.row > * {\r\n\t\t\t\t\t\tpadding: 36px 0 0 36px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.row.gtr-uniform {\r\n\t\t\t\t\t\tmargin-top: -36px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t.row.gtr-uniform > * {\r\n\t\t\t\t\t\t\tpadding-top: 36px;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t.row.gtr-150 {\r\n\t\t\t\t\tmargin-top: -54px;\r\n\t\t\t\t\tmargin-left: -54px;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\t.row.gtr-150 > * {\r\n\t\t\t\t\t\tpadding: 54px 0 0 54px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.row.gtr-150.gtr-uniform {\r\n\t\t\t\t\t\tmargin-top: -54px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t.row.gtr-150.gtr-uniform > * {\r\n\t\t\t\t\t\t\tpadding-top: 54px;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t.row.gtr-200 {\r\n\t\t\t\t\tmargin-top: -72px;\r\n\t\t\t\t\tmargin-left: -72px;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\t.row.gtr-200 > * {\r\n\t\t\t\t\t\tpadding: 72px 0 0 72px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.row.gtr-200.gtr-uniform {\r\n\t\t\t\t\t\tmargin-top: -72px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t.row.gtr-200.gtr-uniform > * {\r\n\t\t\t\t\t\t\tpadding-top: 72px;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t}\r\n\r\n\t\t@media screen and (max-width: 960px) {\r\n\r\n\t\t\t.row {\r\n\t\t\t\tdisplay: -webkit-box;\r\n\t\t\t\tdisplay: -ms-flexbox;\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\t-ms-flex-wrap: wrap;\r\n\t\t\t\t    flex-wrap: wrap;\r\n\t\t\t\tbox-sizing: border-box;\r\n\t\t\t\t-webkit-box-align: stretch;\r\n\t\t\t\t    -ms-flex-align: stretch;\r\n\t\t\t\t        align-items: stretch;\r\n\t\t\t}\r\n\r\n\t\t\t\t.row > * {\r\n\t\t\t\t\tbox-sizing: border-box;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row.gtr-uniform > * > :last-child {\r\n\t\t\t\t\tmargin-bottom: 0;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row.aln-left {\r\n\t\t\t\t\t-webkit-box-pack: start;\r\n\t\t\t\t\t    -ms-flex-pack: start;\r\n\t\t\t\t\t        justify-content: flex-start;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row.aln-center {\r\n\t\t\t\t\t-webkit-box-pack: center;\r\n\t\t\t\t\t    -ms-flex-pack: center;\r\n\t\t\t\t\t        justify-content: center;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row.aln-right {\r\n\t\t\t\t\t-webkit-box-pack: end;\r\n\t\t\t\t\t    -ms-flex-pack: end;\r\n\t\t\t\t\t        justify-content: flex-end;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row.aln-top {\r\n\t\t\t\t\t-webkit-box-align: start;\r\n\t\t\t\t\t    -ms-flex-align: start;\r\n\t\t\t\t\t        align-items: flex-start;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row.aln-middle {\r\n\t\t\t\t\t-webkit-box-align: center;\r\n\t\t\t\t\t    -ms-flex-align: center;\r\n\t\t\t\t\t        align-items: center;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row.aln-bottom {\r\n\t\t\t\t\t-webkit-box-align: end;\r\n\t\t\t\t\t    -ms-flex-align: end;\r\n\t\t\t\t\t        align-items: flex-end;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .imp-narrow {\r\n\t\t\t\t\t-webkit-box-ordinal-group: 0;\r\n\t\t\t\t\t    -ms-flex-order: -1;\r\n\t\t\t\t\t        order: -1;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .col-1-narrow {\r\n\t\t\t\t\twidth: 8.3333333333%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .off-1-narrow {\r\n\t\t\t\t\tmargin-left: 8.3333333333%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .col-2-narrow {\r\n\t\t\t\t\twidth: 16.6666666667%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .off-2-narrow {\r\n\t\t\t\t\tmargin-left: 16.6666666667%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .col-3-narrow {\r\n\t\t\t\t\twidth: 25%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .off-3-narrow {\r\n\t\t\t\t\tmargin-left: 25%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .col-4-narrow {\r\n\t\t\t\t\twidth: 33.3333333333%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .off-4-narrow {\r\n\t\t\t\t\tmargin-left: 33.3333333333%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .col-5-narrow {\r\n\t\t\t\t\twidth: 41.6666666667%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .off-5-narrow {\r\n\t\t\t\t\tmargin-left: 41.6666666667%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .col-6-narrow {\r\n\t\t\t\t\twidth: 50%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .off-6-narrow {\r\n\t\t\t\t\tmargin-left: 50%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .col-7-narrow {\r\n\t\t\t\t\twidth: 58.3333333333%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .off-7-narrow {\r\n\t\t\t\t\tmargin-left: 58.3333333333%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .col-8-narrow {\r\n\t\t\t\t\twidth: 66.6666666667%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .off-8-narrow {\r\n\t\t\t\t\tmargin-left: 66.6666666667%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .col-9-narrow {\r\n\t\t\t\t\twidth: 75%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .off-9-narrow {\r\n\t\t\t\t\tmargin-left: 75%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .col-10-narrow {\r\n\t\t\t\t\twidth: 83.3333333333%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .off-10-narrow {\r\n\t\t\t\t\tmargin-left: 83.3333333333%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .col-11-narrow {\r\n\t\t\t\t\twidth: 91.6666666667%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .off-11-narrow {\r\n\t\t\t\t\tmargin-left: 91.6666666667%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .col-12-narrow {\r\n\t\t\t\t\twidth: 100%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .off-12-narrow {\r\n\t\t\t\t\tmargin-left: 100%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row.gtr-0 {\r\n\t\t\t\t\tmargin-top: 0px;\r\n\t\t\t\t\tmargin-left: 0px;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\t.row.gtr-0 > * {\r\n\t\t\t\t\t\tpadding: 0px 0 0 0px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.row.gtr-0.gtr-uniform {\r\n\t\t\t\t\t\tmargin-top: 0px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t.row.gtr-0.gtr-uniform > * {\r\n\t\t\t\t\t\t\tpadding-top: 0px;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t.row.gtr-25 {\r\n\t\t\t\t\tmargin-top: -8px;\r\n\t\t\t\t\tmargin-left: -8px;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\t.row.gtr-25 > * {\r\n\t\t\t\t\t\tpadding: 8px 0 0 8px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.row.gtr-25.gtr-uniform {\r\n\t\t\t\t\t\tmargin-top: -8px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t.row.gtr-25.gtr-uniform > * {\r\n\t\t\t\t\t\t\tpadding-top: 8px;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t.row.gtr-50 {\r\n\t\t\t\t\tmargin-top: -16px;\r\n\t\t\t\t\tmargin-left: -16px;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\t.row.gtr-50 > * {\r\n\t\t\t\t\t\tpadding: 16px 0 0 16px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.row.gtr-50.gtr-uniform {\r\n\t\t\t\t\t\tmargin-top: -16px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t.row.gtr-50.gtr-uniform > * {\r\n\t\t\t\t\t\t\tpadding-top: 16px;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t.row {\r\n\t\t\t\t\tmargin-top: -32px;\r\n\t\t\t\t\tmargin-left: -32px;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\t.row > * {\r\n\t\t\t\t\t\tpadding: 32px 0 0 32px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.row.gtr-uniform {\r\n\t\t\t\t\t\tmargin-top: -32px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t.row.gtr-uniform > * {\r\n\t\t\t\t\t\t\tpadding-top: 32px;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t.row.gtr-150 {\r\n\t\t\t\t\tmargin-top: -48px;\r\n\t\t\t\t\tmargin-left: -48px;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\t.row.gtr-150 > * {\r\n\t\t\t\t\t\tpadding: 48px 0 0 48px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.row.gtr-150.gtr-uniform {\r\n\t\t\t\t\t\tmargin-top: -48px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t.row.gtr-150.gtr-uniform > * {\r\n\t\t\t\t\t\t\tpadding-top: 48px;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t.row.gtr-200 {\r\n\t\t\t\t\tmargin-top: -64px;\r\n\t\t\t\t\tmargin-left: -64px;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\t.row.gtr-200 > * {\r\n\t\t\t\t\t\tpadding: 64px 0 0 64px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.row.gtr-200.gtr-uniform {\r\n\t\t\t\t\t\tmargin-top: -64px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t.row.gtr-200.gtr-uniform > * {\r\n\t\t\t\t\t\t\tpadding-top: 64px;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t}\r\n\r\n\t\t@media screen and (max-width: 840px) {\r\n\r\n\t\t\t.row {\r\n\t\t\t\tdisplay: -webkit-box;\r\n\t\t\t\tdisplay: -ms-flexbox;\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\t-ms-flex-wrap: wrap;\r\n\t\t\t\t    flex-wrap: wrap;\r\n\t\t\t\tbox-sizing: border-box;\r\n\t\t\t\t-webkit-box-align: stretch;\r\n\t\t\t\t    -ms-flex-align: stretch;\r\n\t\t\t\t        align-items: stretch;\r\n\t\t\t}\r\n\r\n\t\t\t\t.row > * {\r\n\t\t\t\t\tbox-sizing: border-box;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row.gtr-uniform > * > :last-child {\r\n\t\t\t\t\tmargin-bottom: 0;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row.aln-left {\r\n\t\t\t\t\t-webkit-box-pack: start;\r\n\t\t\t\t\t    -ms-flex-pack: start;\r\n\t\t\t\t\t        justify-content: flex-start;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row.aln-center {\r\n\t\t\t\t\t-webkit-box-pack: center;\r\n\t\t\t\t\t    -ms-flex-pack: center;\r\n\t\t\t\t\t        justify-content: center;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row.aln-right {\r\n\t\t\t\t\t-webkit-box-pack: end;\r\n\t\t\t\t\t    -ms-flex-pack: end;\r\n\t\t\t\t\t        justify-content: flex-end;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row.aln-top {\r\n\t\t\t\t\t-webkit-box-align: start;\r\n\t\t\t\t\t    -ms-flex-align: start;\r\n\t\t\t\t\t        align-items: flex-start;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row.aln-middle {\r\n\t\t\t\t\t-webkit-box-align: center;\r\n\t\t\t\t\t    -ms-flex-align: center;\r\n\t\t\t\t\t        align-items: center;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row.aln-bottom {\r\n\t\t\t\t\t-webkit-box-align: end;\r\n\t\t\t\t\t    -ms-flex-align: end;\r\n\t\t\t\t\t        align-items: flex-end;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .imp-narrower {\r\n\t\t\t\t\t-webkit-box-ordinal-group: 0;\r\n\t\t\t\t\t    -ms-flex-order: -1;\r\n\t\t\t\t\t        order: -1;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .col-1-narrower {\r\n\t\t\t\t\twidth: 8.3333333333%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .off-1-narrower {\r\n\t\t\t\t\tmargin-left: 8.3333333333%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .col-2-narrower {\r\n\t\t\t\t\twidth: 16.6666666667%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .off-2-narrower {\r\n\t\t\t\t\tmargin-left: 16.6666666667%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .col-3-narrower {\r\n\t\t\t\t\twidth: 25%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .off-3-narrower {\r\n\t\t\t\t\tmargin-left: 25%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .col-4-narrower {\r\n\t\t\t\t\twidth: 33.3333333333%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .off-4-narrower {\r\n\t\t\t\t\tmargin-left: 33.3333333333%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .col-5-narrower {\r\n\t\t\t\t\twidth: 41.6666666667%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .off-5-narrower {\r\n\t\t\t\t\tmargin-left: 41.6666666667%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .col-6-narrower {\r\n\t\t\t\t\twidth: 50%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .off-6-narrower {\r\n\t\t\t\t\tmargin-left: 50%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .col-7-narrower {\r\n\t\t\t\t\twidth: 58.3333333333%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .off-7-narrower {\r\n\t\t\t\t\tmargin-left: 58.3333333333%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .col-8-narrower {\r\n\t\t\t\t\twidth: 66.6666666667%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .off-8-narrower {\r\n\t\t\t\t\tmargin-left: 66.6666666667%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .col-9-narrower {\r\n\t\t\t\t\twidth: 75%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .off-9-narrower {\r\n\t\t\t\t\tmargin-left: 75%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .col-10-narrower {\r\n\t\t\t\t\twidth: 83.3333333333%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .off-10-narrower {\r\n\t\t\t\t\tmargin-left: 83.3333333333%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .col-11-narrower {\r\n\t\t\t\t\twidth: 91.6666666667%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .off-11-narrower {\r\n\t\t\t\t\tmargin-left: 91.6666666667%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .col-12-narrower {\r\n\t\t\t\t\twidth: 100%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .off-12-narrower {\r\n\t\t\t\t\tmargin-left: 100%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row.gtr-0 {\r\n\t\t\t\t\tmargin-top: 0px;\r\n\t\t\t\t\tmargin-left: 0px;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\t.row.gtr-0 > * {\r\n\t\t\t\t\t\tpadding: 0px 0 0 0px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.row.gtr-0.gtr-uniform {\r\n\t\t\t\t\t\tmargin-top: 0px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t.row.gtr-0.gtr-uniform > * {\r\n\t\t\t\t\t\t\tpadding-top: 0px;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t.row.gtr-25 {\r\n\t\t\t\t\tmargin-top: -8px;\r\n\t\t\t\t\tmargin-left: -8px;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\t.row.gtr-25 > * {\r\n\t\t\t\t\t\tpadding: 8px 0 0 8px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.row.gtr-25.gtr-uniform {\r\n\t\t\t\t\t\tmargin-top: -8px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t.row.gtr-25.gtr-uniform > * {\r\n\t\t\t\t\t\t\tpadding-top: 8px;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t.row.gtr-50 {\r\n\t\t\t\t\tmargin-top: -16px;\r\n\t\t\t\t\tmargin-left: -16px;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\t.row.gtr-50 > * {\r\n\t\t\t\t\t\tpadding: 16px 0 0 16px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.row.gtr-50.gtr-uniform {\r\n\t\t\t\t\t\tmargin-top: -16px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t.row.gtr-50.gtr-uniform > * {\r\n\t\t\t\t\t\t\tpadding-top: 16px;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t.row {\r\n\t\t\t\t\tmargin-top: -32px;\r\n\t\t\t\t\tmargin-left: -32px;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\t.row > * {\r\n\t\t\t\t\t\tpadding: 32px 0 0 32px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.row.gtr-uniform {\r\n\t\t\t\t\t\tmargin-top: -32px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t.row.gtr-uniform > * {\r\n\t\t\t\t\t\t\tpadding-top: 32px;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t.row.gtr-150 {\r\n\t\t\t\t\tmargin-top: -48px;\r\n\t\t\t\t\tmargin-left: -48px;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\t.row.gtr-150 > * {\r\n\t\t\t\t\t\tpadding: 48px 0 0 48px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.row.gtr-150.gtr-uniform {\r\n\t\t\t\t\t\tmargin-top: -48px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t.row.gtr-150.gtr-uniform > * {\r\n\t\t\t\t\t\t\tpadding-top: 48px;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t.row.gtr-200 {\r\n\t\t\t\t\tmargin-top: -64px;\r\n\t\t\t\t\tmargin-left: -64px;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\t.row.gtr-200 > * {\r\n\t\t\t\t\t\tpadding: 64px 0 0 64px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.row.gtr-200.gtr-uniform {\r\n\t\t\t\t\t\tmargin-top: -64px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t.row.gtr-200.gtr-uniform > * {\r\n\t\t\t\t\t\t\tpadding-top: 64px;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t}\r\n\r\n\t\t@media screen and (max-width: 736px) {\r\n\r\n\t\t\t.row {\r\n\t\t\t\tdisplay: -webkit-box;\r\n\t\t\t\tdisplay: -ms-flexbox;\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\t-ms-flex-wrap: wrap;\r\n\t\t\t\t    flex-wrap: wrap;\r\n\t\t\t\tbox-sizing: border-box;\r\n\t\t\t\t-webkit-box-align: stretch;\r\n\t\t\t\t    -ms-flex-align: stretch;\r\n\t\t\t\t        align-items: stretch;\r\n\t\t\t}\r\n\r\n\t\t\t\t.row > * {\r\n\t\t\t\t\tbox-sizing: border-box;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row.gtr-uniform > * > :last-child {\r\n\t\t\t\t\tmargin-bottom: 0;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row.aln-left {\r\n\t\t\t\t\t-webkit-box-pack: start;\r\n\t\t\t\t\t    -ms-flex-pack: start;\r\n\t\t\t\t\t        justify-content: flex-start;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row.aln-center {\r\n\t\t\t\t\t-webkit-box-pack: center;\r\n\t\t\t\t\t    -ms-flex-pack: center;\r\n\t\t\t\t\t        justify-content: center;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row.aln-right {\r\n\t\t\t\t\t-webkit-box-pack: end;\r\n\t\t\t\t\t    -ms-flex-pack: end;\r\n\t\t\t\t\t        justify-content: flex-end;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row.aln-top {\r\n\t\t\t\t\t-webkit-box-align: start;\r\n\t\t\t\t\t    -ms-flex-align: start;\r\n\t\t\t\t\t        align-items: flex-start;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row.aln-middle {\r\n\t\t\t\t\t-webkit-box-align: center;\r\n\t\t\t\t\t    -ms-flex-align: center;\r\n\t\t\t\t\t        align-items: center;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row.aln-bottom {\r\n\t\t\t\t\t-webkit-box-align: end;\r\n\t\t\t\t\t    -ms-flex-align: end;\r\n\t\t\t\t\t        align-items: flex-end;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .imp-mobile {\r\n\t\t\t\t\t-webkit-box-ordinal-group: 0;\r\n\t\t\t\t\t    -ms-flex-order: -1;\r\n\t\t\t\t\t        order: -1;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .col-1-mobile {\r\n\t\t\t\t\twidth: 8.3333333333%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .off-1-mobile {\r\n\t\t\t\t\tmargin-left: 8.3333333333%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .col-2-mobile {\r\n\t\t\t\t\twidth: 16.6666666667%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .off-2-mobile {\r\n\t\t\t\t\tmargin-left: 16.6666666667%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .col-3-mobile {\r\n\t\t\t\t\twidth: 25%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .off-3-mobile {\r\n\t\t\t\t\tmargin-left: 25%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .col-4-mobile {\r\n\t\t\t\t\twidth: 33.3333333333%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .off-4-mobile {\r\n\t\t\t\t\tmargin-left: 33.3333333333%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .col-5-mobile {\r\n\t\t\t\t\twidth: 41.6666666667%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .off-5-mobile {\r\n\t\t\t\t\tmargin-left: 41.6666666667%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .col-6-mobile {\r\n\t\t\t\t\twidth: 50%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .off-6-mobile {\r\n\t\t\t\t\tmargin-left: 50%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .col-7-mobile {\r\n\t\t\t\t\twidth: 58.3333333333%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .off-7-mobile {\r\n\t\t\t\t\tmargin-left: 58.3333333333%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .col-8-mobile {\r\n\t\t\t\t\twidth: 66.6666666667%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .off-8-mobile {\r\n\t\t\t\t\tmargin-left: 66.6666666667%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .col-9-mobile {\r\n\t\t\t\t\twidth: 75%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .off-9-mobile {\r\n\t\t\t\t\tmargin-left: 75%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .col-10-mobile {\r\n\t\t\t\t\twidth: 83.3333333333%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .off-10-mobile {\r\n\t\t\t\t\tmargin-left: 83.3333333333%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .col-11-mobile {\r\n\t\t\t\t\twidth: 91.6666666667%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .off-11-mobile {\r\n\t\t\t\t\tmargin-left: 91.6666666667%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .col-12-mobile {\r\n\t\t\t\t\twidth: 100%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row > .off-12-mobile {\r\n\t\t\t\t\tmargin-left: 100%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.row.gtr-0 {\r\n\t\t\t\t\tmargin-top: 0px;\r\n\t\t\t\t\tmargin-left: 0px;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\t.row.gtr-0 > * {\r\n\t\t\t\t\t\tpadding: 0px 0 0 0px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.row.gtr-0.gtr-uniform {\r\n\t\t\t\t\t\tmargin-top: 0px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t.row.gtr-0.gtr-uniform > * {\r\n\t\t\t\t\t\t\tpadding-top: 0px;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t.row.gtr-25 {\r\n\t\t\t\t\tmargin-top: -5px;\r\n\t\t\t\t\tmargin-left: -5px;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\t.row.gtr-25 > * {\r\n\t\t\t\t\t\tpadding: 5px 0 0 5px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.row.gtr-25.gtr-uniform {\r\n\t\t\t\t\t\tmargin-top: -5px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t.row.gtr-25.gtr-uniform > * {\r\n\t\t\t\t\t\t\tpadding-top: 5px;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t.row.gtr-50 {\r\n\t\t\t\t\tmargin-top: -10px;\r\n\t\t\t\t\tmargin-left: -10px;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\t.row.gtr-50 > * {\r\n\t\t\t\t\t\tpadding: 10px 0 0 10px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.row.gtr-50.gtr-uniform {\r\n\t\t\t\t\t\tmargin-top: -10px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t.row.gtr-50.gtr-uniform > * {\r\n\t\t\t\t\t\t\tpadding-top: 10px;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t.row {\r\n\t\t\t\t\tmargin-top: -20px;\r\n\t\t\t\t\tmargin-left: -20px;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\t.row > * {\r\n\t\t\t\t\t\tpadding: 20px 0 0 20px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.row.gtr-uniform {\r\n\t\t\t\t\t\tmargin-top: -20px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t.row.gtr-uniform > * {\r\n\t\t\t\t\t\t\tpadding-top: 20px;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t.row.gtr-150 {\r\n\t\t\t\t\tmargin-top: -30px;\r\n\t\t\t\t\tmargin-left: -30px;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\t.row.gtr-150 > * {\r\n\t\t\t\t\t\tpadding: 30px 0 0 30px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.row.gtr-150.gtr-uniform {\r\n\t\t\t\t\t\tmargin-top: -30px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t.row.gtr-150.gtr-uniform > * {\r\n\t\t\t\t\t\t\tpadding-top: 30px;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t.row.gtr-200 {\r\n\t\t\t\t\tmargin-top: -40px;\r\n\t\t\t\t\tmargin-left: -40px;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\t.row.gtr-200 > * {\r\n\t\t\t\t\t\tpadding: 40px 0 0 40px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.row.gtr-200.gtr-uniform {\r\n\t\t\t\t\t\tmargin-top: -40px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t.row.gtr-200.gtr-uniform > * {\r\n\t\t\t\t\t\t\tpadding-top: 40px;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t}\r\n\r\n/* Sections/Article */\r\n\r\n\tsection, article {\r\n\t\tmargin-bottom: 3em;\r\n\t}\r\n\r\n\t\tsection > :last-child, section:last-child, article > :last-child, article:last-child {\r\n\t\t\tmargin-bottom: 0;\r\n\t\t}\r\n\r\n\t\tsection.special > header, section.special > footer, article.special > header, article.special > footer {\r\n\t\t\ttext-align: center;\r\n\t\t}\r\n\r\n\t.row > section, .row > article {\r\n\t\tmargin-bottom: 0;\r\n\t}\r\n\r\n\theader {\r\n\t\tmargin: 0 0 1em 0;\r\n\t}\r\n\r\n\t\theader > p {\r\n\t\t\tdisplay: block;\r\n\t\t\tfont-size: 1.5em;\r\n\t\t\tmargin: 1em 0 2em 0;\r\n\t\t\tline-height: 1.5em;\r\n\t\t\ttext-align: inherit;\r\n\t\t}\r\n\r\n\tfooter {\r\n\t\tmargin: 2.5em 0 0 0;\r\n\t}\r\n\r\n/* Image */\r\n\r\n\t.image {\r\n\t\tposition: relative;\r\n\t\tdisplay: inline-block;\r\n\t\tborder: 0;\r\n\t\toutline: 0;\r\n\t}\r\n\r\n\t\t.image img {\r\n\t\t\tdisplay: block;\r\n\t\t\twidth: 100%;\r\n\t\t}\r\n\r\n\t\t.image.fit {\r\n\t\t\tdisplay: block;\r\n\t\t\twidth: 100%;\r\n\t\t}\r\n\r\n\t\t.image.featured {\r\n\t\t\tdisplay: block;\r\n\t\t\twidth: 100%;\r\n\t\t\tmargin: 0 0 4em 0;\r\n\t\t}\r\n\r\n\t\t.image.left {\r\n\t\t\tfloat: left;\r\n\t\t\tmargin: 0 2em 2em 0;\r\n\t\t}\r\n\r\n\t\t.image.centered {\r\n\t\t\tdisplay: block;\r\n\t\t\tmargin: 0 0 2em 0;\r\n\t\t}\r\n\r\n\t\t\t.image.centered img {\r\n\t\t\t\tmargin: 0 auto;\r\n\t\t\t\twidth: auto;\r\n\t\t\t}\r\n\r\n/* List */\r\n\r\n\tul {\r\n\t\tlist-style: disc;\r\n\t\tpadding-left: 1em;\r\n\t}\r\n\r\n\t\tul li {\r\n\t\t\tpadding-left: 0.5em;\r\n\t\t}\r\n\r\n\tol {\r\n\t\tlist-style: decimal;\r\n\t\tpadding-left: 1.25em;\r\n\t}\r\n\r\n\t\tol li {\r\n\t\t\tpadding-left: 0.25em;\r\n\t\t}\r\n\r\n/* Actions */\r\n\r\n\tul.actions {\r\n\t\tmargin: 3em 0 0 0;\r\n\t\tlist-style: none;\r\n\t\tpadding-left: 0;\r\n\t}\r\n\r\n\t\tform ul.actions {\r\n\t\t\tmargin-top: 0;\r\n\t\t}\r\n\r\n\t\tul.actions li {\r\n\t\t\tdisplay: inline-block;\r\n\t\t\tmargin: 0 0.75em 0 0.75em;\r\n\t\t\tpadding-left: 0;\r\n\t\t}\r\n\r\n\t\t\tul.actions li:first-child {\r\n\t\t\t\tmargin-left: 0;\r\n\t\t\t}\r\n\r\n\t\t\tul.actions li:last-child {\r\n\t\t\t\tmargin-right: 0;\r\n\t\t\t}\r\n\r\n/* Divided */\r\n\r\n\tul.divided {\r\n\t\tlist-style: none;\r\n\t\tpadding-left: 0;\r\n\t}\r\n\r\n\t\tul.divided li {\r\n\t\t\tborder-top: solid 1px rgba(128, 128, 128, 0.2);\r\n\t\t\tpadding-top: 1.5em;\r\n\t\t\tmargin-top: 1.5em;\r\n\t\t\tpadding-left: 0;\r\n\t\t}\r\n\r\n\t\t\tul.divided li:first-child {\r\n\t\t\t\tborder-top: 0;\r\n\t\t\t\tpadding-top: 0;\r\n\t\t\t\tmargin-top: 0;\r\n\t\t\t}\r\n\r\n/* Menu */\r\n\r\n\tul.menu {\r\n\t\theight: 1em;\r\n\t\tline-height: 1em;\r\n\t\tlist-style: none;\r\n\t\tpadding-left: 0;\r\n\t}\r\n\r\n\t\tul.menu li {\r\n\t\t\tdisplay: inline-block;\r\n\t\t\tborder-left: solid 1px rgba(128, 128, 128, 0.2);\r\n\t\t\tpadding-left: 1.25em;\r\n\t\t\tmargin-left: 1.25em;\r\n\t\t}\r\n\r\n\t\t\tul.menu li:first-child {\r\n\t\t\t\tborder-left: 0;\r\n\t\t\t\tpadding-left: 0;\r\n\t\t\t\tmargin-left: 0;\r\n\t\t\t}\r\n\r\n/* Icons */\r\n\r\n\tul.icons {\r\n\t\tposition: relative;\r\n\t\tbackground: rgba(128, 128, 128, 0.05);\r\n\t\tborder-radius: 4em;\r\n\t\tdisplay: inline-block;\r\n\t\tpadding: 0.35em 0.75em 0.35em 0.75em;\r\n\t\tfont-size: 1.25em;\r\n\t\tcursor: default;\r\n\t\tlist-style: none;\r\n\t}\r\n\r\n\t\tul.icons li {\r\n\t\t\tdisplay: inline-block;\r\n\t\t\tpadding-left: 0;\r\n\t\t}\r\n\r\n\t\t\tul.icons li a {\r\n\t\t\t\tdisplay: inline-block;\r\n\t\t\t\tbackground: none;\r\n\t\t\t\twidth: 2.5em;\r\n\t\t\t\theight: 2.5em;\r\n\t\t\t\tline-height: 2.5em;\r\n\t\t\t\ttext-align: center;\r\n\t\t\t\tborder-radius: 100%;\r\n\t\t\t\tborder: 0;\r\n\t\t\t\tcolor: inherit;\r\n\t\t\t}\r\n\r\n\t\t\t\tul.icons li a:hover {\r\n\t\t\t\t\tcolor: #ef8376;\r\n\t\t\t\t}\r\n\r\n/* Form */\r\n\r\n\tform label {\r\n\t\tdisplay: block;\r\n\t\tfont-weight: 400;\r\n\t\tcolor: #483949;\r\n\t\tmargin: 0 0 1em 0;\r\n\t}\r\n\r\n\tform input[type=\"text\"],\r\n\tform input[type=\"email\"],\r\n\tform input[type=\"password\"],\r\n\tform select,\r\n\tform textarea {\r\n\t\t-webkit-appearance: none;\r\n\t\tdisplay: block;\r\n\t\tborder: 0;\r\n\t\tbackground: #fafafa;\r\n\t\twidth: 100%;\r\n\t\tborder-radius: 0.5em;\r\n\t\tborder: solid 1px #E5E5E5;\r\n\t\tpadding: 1em;\r\n\t\ttransition: background-color 0.35s ease-in-out, border-color 0.35s ease-in-out;\r\n\t}\r\n\r\n\t\tform input[type=\"text\"]:focus,\r\n\t\tform input[type=\"email\"]:focus,\r\n\t\tform input[type=\"password\"]:focus,\r\n\t\tform select:focus,\r\n\t\tform textarea:focus {\r\n\t\t\tbackground: #fff;\r\n\t\t\tborder-color: #df7366;\r\n\t\t}\r\n\r\n\tform input[type=\"text\"],\r\n\tform input[type=\"email\"],\r\n\tform input[type=\"password\"],\r\n\tform select {\r\n\t\tline-height: 1em;\r\n\t}\r\n\r\n\tform textarea {\r\n\t\tmin-height: 9em;\r\n\t}\r\n\r\n\tform ::-webkit-input-placeholder {\r\n\t\tcolor: #555 !important;\r\n\t}\r\n\r\n\tform :-moz-placeholder {\r\n\t\tcolor: #555 !important;\r\n\t}\r\n\r\n\tform ::-moz-placeholder {\r\n\t\tcolor: #555 !important;\r\n\t}\r\n\r\n\tform :-ms-input-placeholder {\r\n\t\tcolor: #555 !important;\r\n\t}\r\n\r\n\tform ::-moz-focus-inner {\r\n\t\tborder: 0;\r\n\t}\r\n\r\n/* Table */\r\n\r\n\ttable {\r\n\t\twidth: 100%;\r\n\t}\r\n\r\n\t\ttable.default {\r\n\t\t\twidth: 100%;\r\n\t\t}\r\n\r\n\t\t\ttable.default tbody tr {\r\n\t\t\t\tborder-top: solid 1px #e5e5e5;\r\n\t\t\t}\r\n\r\n\t\t\t\ttable.default tbody tr:first-child {\r\n\t\t\t\t\tborder-top: 0;\r\n\t\t\t\t}\r\n\r\n\t\t\t\ttable.default tbody tr:nth-child(2n+1) {\r\n\t\t\t\t\tbackground: #fafafa;\r\n\t\t\t\t}\r\n\r\n\t\t\ttable.default td {\r\n\t\t\t\tpadding: 0.5em 1em 0.5em 1em;\r\n\t\t\t}\r\n\r\n\t\t\ttable.default th {\r\n\t\t\t\ttext-align: left;\r\n\t\t\t\tfont-weight: 400;\r\n\t\t\t\tpadding: 0.5em 1em 0.5em 1em;\r\n\t\t\t}\r\n\r\n\t\t\ttable.default thead {\r\n\t\t\t\tborder-bottom: solid 2px #e5e5e5;\r\n\t\t\t}\r\n\r\n\t\t\ttable.default tfoot {\r\n\t\t\t\tborder-top: solid 2px #e5e5e5;\r\n\t\t\t}\r\n\r\n/* Button */\r\n\r\n\tinput[type=\"button\"],\r\n\tinput[type=\"submit\"],\r\n\tinput[type=\"reset\"],\r\n\tbutton,\r\n\t.button {\r\n\t\tposition: relative;\r\n\t\tdisplay: inline-block;\r\n\t\tbackground: #df7366;\r\n\t\tcolor: #fff;\r\n\t\ttext-align: center;\r\n\t\tborder-radius: 0.5em;\r\n\t\ttext-decoration: none;\r\n\t\tpadding: 0.65em 3em 0.65em 3em;\r\n\t\tborder: 0;\r\n\t\tcursor: pointer;\r\n\t\toutline: 0;\r\n\t\tfont-weight: 300;\r\n\t\ttransition: background-color 0.35s ease-in-out, color 0.35s ease-in-out, border-bottom-color 0.35s ease-in-out;\r\n\t}\r\n\r\n\t\tinput[type=\"button\"]:hover,\r\n\t\tinput[type=\"submit\"]:hover,\r\n\t\tinput[type=\"reset\"]:hover,\r\n\t\tbutton:hover,\r\n\t\t.button:hover {\r\n\t\t\tcolor: #fff;\r\n\t\t\tbackground: #ef8376;\r\n\t\t}\r\n\r\n\t\tinput[type=\"button\"].alt,\r\n\t\tinput[type=\"submit\"].alt,\r\n\t\tinput[type=\"reset\"].alt,\r\n\t\tbutton.alt,\r\n\t\t.button.alt {\r\n\t\t\tbackground: #2B252C;\r\n\t\t}\r\n\r\n\t\t\tinput[type=\"button\"].alt:hover,\r\n\t\t\tinput[type=\"submit\"].alt:hover,\r\n\t\t\tinput[type=\"reset\"].alt:hover,\r\n\t\t\tbutton.alt:hover,\r\n\t\t\t.button.alt:hover {\r\n\t\t\t\tbackground: #3B353C;\r\n\t\t\t}\r\n\r\n/* Post */\r\n\r\n\t.post.stub {\r\n\t\ttext-align: center;\r\n\t}\r\n\r\n\t\t.post.stub header {\r\n\t\t\tmargin: 0;\r\n\t\t}\r\n\r\n/* Icons */\r\n\r\n\t.icon {\r\n\t\ttext-decoration: none;\r\n\t}\r\n\r\n\t\t.icon:before {\r\n\t\t\tdisplay: inline-block;\r\n\t\t\tfont-family: FontAwesome;\r\n\t\t\tfont-size: 1.25em;\r\n\t\t\ttext-decoration: none;\r\n\t\t\tfont-style: normal;\r\n\t\t\tfont-weight: normal;\r\n\t\t\tline-height: 1;\r\n\t\t\t-webkit-font-smoothing: antialiased;\r\n\t\t\t-moz-osx-font-smoothing: grayscale;\r\n\t\t}\r\n\r\n\t\t.icon > .label {\r\n\t\t\tdisplay: none;\r\n\t\t}\r\n\r\n\t\t.icon.circled {\r\n\t\t\tposition: relative;\r\n\t\t\tdisplay: inline-block;\r\n\t\t\tbackground: #2b252c;\r\n\t\t\tcolor: #fff;\r\n\t\t\tborder-radius: 100%;\r\n\t\t\twidth: 3em;\r\n\t\t\theight: 3em;\r\n\t\t\tline-height: 3.25em;\r\n\t\t\ttext-align: center;\r\n\t\t\tfont-size: 1.25em;\r\n\t\t}\r\n\r\n\t\t\theader .icon.circled {\r\n\t\t\t\tmargin: 0 0 2em 0;\r\n\t\t\t}\r\n\r\n/* Wrapper */\r\n\r\n\t.wrapper {\r\n\t\tbackground: #fff;\r\n\t\tmargin: 0 0 2em 0;\r\n\t\tpadding: 6em 0 6em 0;\r\n\t}\r\n\r\n\t\t.wrapper.style2 {\r\n\t\t\tpadding-top: 0;\r\n\t\t}\r\n\r\n/* Header */\r\n\r\n\t#header {\r\n\t\tposition: relative;\r\n\t\tbackground-image: url(" + __webpack_require__("./src/assets/images/banner.jpg") + ");\r\n\t\tbackground-size: cover;\r\n\t\tbackground-position: center center;\r\n\t\tbackground-attachment: fixed;\r\n\t\tcolor: #fff;\r\n\t\ttext-align: center;\r\n\t\tpadding: 7.5em 0 2em 0;\r\n\t\tcursor: default;\r\n\t}\r\n\r\n\t\t#header:before {\r\n\t\t\tcontent: '';\r\n\t\t\tdisplay: inline-block;\r\n\t\t\tvertical-align: middle;\r\n\t\t\theight: 100%;\r\n\t\t}\r\n\r\n\t\t#header .inner {\r\n\t\t\tposition: relative;\r\n\t\t\tz-index: 1;\r\n\t\t\tmargin: 0;\r\n\t\t\tdisplay: inline-block;\r\n\t\t\tvertical-align: middle;\r\n\t\t}\r\n\r\n\t\t#header header {\r\n\t\t\tdisplay: inline-block;\r\n\t\t}\r\n\r\n\t\t\t#header header > p {\r\n\t\t\t\tfont-size: 1.25em;\r\n\t\t\t\tmargin: 0;\r\n\t\t\t}\r\n\r\n\t\t#header h1 {\r\n\t\t\tcolor: #fff;\r\n\t\t\tfont-size: 3em;\r\n\t\t\tline-height: 1em;\r\n\t\t}\r\n\r\n\t\t\t#header h1 a {\r\n\t\t\t\tcolor: inherit;\r\n\t\t\t}\r\n\r\n\t\t#header .button {\r\n\t\t\tdisplay: inline-block;\r\n\t\t\tborder-radius: 100%;\r\n\t\t\twidth: 4.5em;\r\n\t\t\theight: 4.5em;\r\n\t\t\tline-height: 4.5em;\r\n\t\t\ttext-align: center;\r\n\t\t\tfont-size: 1.25em;\r\n\t\t\tpadding: 0;\r\n\t\t}\r\n\r\n\t\t#header hr {\r\n\t\t\ttop: 1.5em;\r\n\t\t\tmargin-bottom: 3em;\r\n\t\t\tborder-bottom-color: rgba(192, 192, 192, 0.35);\r\n\t\t\tbox-shadow: inset 0 1px 0 0 rgba(192, 192, 192, 0.35);\r\n\t\t}\r\n\r\n\t\t\t#header hr:before, #header hr:after {\r\n\t\t\t\tbackground: rgba(192, 192, 192, 0.35);\r\n\t\t\t}\r\n\r\n\t\t#header footer {\r\n\t\t\tmargin: 1em 0 0 0;\r\n\t\t}\r\n\r\n\tbody.homepage #header {\r\n\t\theight: 100vh;\r\n\t\tmin-height: 40em;\r\n\t}\r\n\r\n\t\tbody.homepage #header h1 {\r\n\t\t\tfont-size: 4em;\r\n\t\t}\r\n\r\n\t\tbody.homepage #header:after {\r\n\t\t\tcontent: '';\r\n\t\t\tbackground: #1C0920;\r\n\t\t\tdisplay: block;\r\n\t\t\tposition: absolute;\r\n\t\t\tleft: 0;\r\n\t\t\ttop: 0;\r\n\t\t\twidth: 100%;\r\n\t\t\theight: 100%;\r\n\t\t\topacity: 0;\r\n\t\t\ttransition: opacity 2.5s ease-in-out;\r\n\t\t\ttransition-delay: 0.5s;\r\n\t\t}\r\n\r\n\tbody.homepage.is-preload #header:after {\r\n\t\topacity: 1;\r\n\t}\r\n\r\n/* Nav */\r\n\r\n\t#nav {\r\n\t\tposition: absolute;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\twidth: 100%;\r\n\t\ttext-align: center;\r\n\t\tpadding: 1.5em 0 1.5em 0;\r\n\t\tz-index: 1;\r\n\t\toverflow: hidden;\r\n\t}\r\n\r\n\t\t#nav > ul {\r\n\t\t\tline-height: 0px;\r\n\t\t\tposition: relative;\r\n\t\t\tdisplay: inline-block;\r\n\t\t\tmargin: 0;\r\n\t\t\theight: 21px;\r\n\t\t\tborder-left: solid 1px rgba(192, 192, 192, 0.35);\r\n\t\t\tborder-right: solid 1px rgba(192, 192, 192, 0.35);\r\n\t\t}\r\n\r\n\t\t\t#nav > ul:before, #nav > ul:after {\r\n\t\t\t\tcontent: '';\r\n\t\t\t\tdisplay: block;\r\n\t\t\t\twidth: 300%;\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\ttop: 50%;\r\n\t\t\t\tmargin-top: -2px;\r\n\t\t\t\theight: 5px;\r\n\t\t\t\tborder-top: solid 1px rgba(192, 192, 192, 0.35);\r\n\t\t\t\tborder-bottom: solid 1px rgba(192, 192, 192, 0.35);\r\n\t\t\t}\r\n\r\n\t\t\t#nav > ul:before {\r\n\t\t\t\tleft: 100%;\r\n\t\t\t\tmargin-left: 1px;\r\n\t\t\t}\r\n\r\n\t\t\t#nav > ul:after {\r\n\t\t\t\tright: 100%;\r\n\t\t\t\tmargin-right: 1px;\r\n\t\t\t}\r\n\r\n\t\t\t#nav > ul > li {\r\n\t\t\t\tdisplay: inline-block;\r\n\t\t\t\tmargin: -9px 0.5em 0 0.5em;\r\n\t\t\t\tborder-radius: 0.5em;\r\n\t\t\t\tpadding: 0.85em;\r\n\t\t\t\tborder: solid 1px transparent;\r\n\t\t\t\ttransition: color 0.35s ease-in-out, border-color 0.35s ease-in-out;\r\n\t\t\t}\r\n\r\n\t\t\t\t#nav > ul > li.active {\r\n\t\t\t\t\tborder-color: rgba(192, 192, 192, 0.35);\r\n\t\t\t\t}\r\n\r\n\t\t\t\t#nav > ul > li > a, #nav > ul > li > span {\r\n\t\t\t\t\tdisplay: block;\r\n\t\t\t\t\tcolor: inherit;\r\n\t\t\t\t\ttext-decoration: none;\r\n\t\t\t\t\tborder: 0;\r\n\t\t\t\t\toutline: 0;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t#nav > ul > li > ul {\r\n\t\t\t\t\tdisplay: none;\r\n\t\t\t\t}\r\n\r\n\t.dropotron {\r\n\t\tbackground: rgba(255, 255, 255, 0.975);\r\n\t\tpadding: 1em 1.25em 1em 1.25em;\r\n\t\tline-height: 1em;\r\n\t\theight: auto;\r\n\t\ttext-align: left;\r\n\t\tborder-radius: 0.5em;\r\n\t\tbox-shadow: 0 0.15em 0.25em 0 rgba(0, 0, 0, 0.25);\r\n\t\tmin-width: 12em;\r\n\t\tmargin-top: -1em;\r\n\t\tlist-style: none;\r\n\t}\r\n\r\n\t\t.dropotron li {\r\n\t\t\tborder-top: solid 1px rgba(128, 128, 128, 0.2);\r\n\t\t\tcolor: #5b5b5b;\r\n\t\t\tpadding-left: 0;\r\n\t\t}\r\n\r\n\t\t\t.dropotron li:first-child {\r\n\t\t\t\tborder-top: 0;\r\n\t\t\t}\r\n\r\n\t\t\t.dropotron li:hover {\r\n\t\t\t\tcolor: #ef8376;\r\n\t\t\t}\r\n\r\n\t\t\t.dropotron li a, .dropotron li span {\r\n\t\t\t\tdisplay: block;\r\n\t\t\t\tborder: 0;\r\n\t\t\t\tpadding: 0.5em 0 0.5em 0;\r\n\t\t\t\ttransition: color 0.35s ease-in-out;\r\n\t\t\t}\r\n\r\n\t\t.dropotron.level-0 {\r\n\t\t\tmargin-top: 2em;\r\n\t\t\tfont-size: 0.9em;\r\n\t\t}\r\n\r\n\t\t\t.dropotron.level-0:before {\r\n\t\t\t\tcontent: '';\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\tleft: 50%;\r\n\t\t\t\ttop: -0.7em;\r\n\t\t\t\tmargin-left: -0.75em;\r\n\t\t\t\tborder-bottom: solid 0.75em rgba(255, 255, 255, 0.975);\r\n\t\t\t\tborder-left: solid 0.75em rgba(64, 64, 64, 0);\r\n\t\t\t\tborder-right: solid 0.75em rgba(64, 64, 64, 0);\r\n\t\t\t}\r\n\r\n/* Banner */\r\n\r\n\t#banner {\r\n\t\tbackground: #fff;\r\n\t\ttext-align: center;\r\n\t\tpadding: 4.5em 0 4.5em 0;\r\n\t\tmargin-bottom: 0;\r\n\t}\r\n\r\n\t\t#banner header > p {\r\n\t\t\tmargin-bottom: 0;\r\n\t\t}\r\n\r\n/* Content */\r\n\r\n\t#content > hr {\r\n\t\ttop: 3em;\r\n\t\tmargin-bottom: 6em;\r\n\t}\r\n\r\n\t#content > section {\r\n\t\tmargin-bottom: 0;\r\n\t}\r\n\r\n/* Sidebar */\r\n\r\n\t#sidebar > hr {\r\n\t\ttop: 3em;\r\n\t\tmargin-bottom: 6em;\r\n\t}\r\n\r\n\t\t#sidebar > hr.first {\r\n\t\t\tdisplay: none;\r\n\t\t}\r\n\r\n\t#sidebar > section {\r\n\t\tmargin-bottom: 0;\r\n\t}\r\n\r\n/* Main */\r\n\r\n\t#main {\r\n\t\tmargin-bottom: 0;\r\n\t}\r\n\r\n\t\t#main section:first-of-type {\r\n\t\t\tpadding-top: 2em;\r\n\t\t}\r\n\r\n/* Footer */\r\n\r\n\t#footer {\r\n\t\tposition: relative;\r\n\t\toverflow: hidden;\r\n\t\tpadding: 6em 0 6em 0;\r\n\t\tbackground: #2b252c;\r\n\t\tcolor: #fff;\r\n\t}\r\n\r\n\t\t#footer .icon.circled {\r\n\t\t\tbackground: #fff;\r\n\t\t\tcolor: #2b252c;\r\n\t\t}\r\n\r\n\t\t#footer header {\r\n\t\t\ttext-align: center;\r\n\t\t\tcursor: default;\r\n\t\t}\r\n\r\n\t\t#footer h2, #footer h3, #footer h4, #footer h5, #footer h6 {\r\n\t\t\tcolor: #fff;\r\n\t\t}\r\n\r\n\t\t#footer .contact {\r\n\t\t\ttext-align: center;\r\n\t\t}\r\n\r\n\t\t\t#footer .contact p {\r\n\t\t\t\ttext-align: center;\r\n\t\t\t\tmargin: 0 0 3em 0;\r\n\t\t\t}\r\n\r\n\t\t#footer .copyright {\r\n\t\t\ttext-align: center;\r\n\t\t\tcolor: rgba(128, 128, 128, 0.75);\r\n\t\t\tfont-size: 0.8em;\r\n\t\t\tcursor: default;\r\n\t\t}\r\n\r\n\t\t\t#footer .copyright a {\r\n\t\t\t\tcolor: rgba(128, 128, 128, 0.75);\r\n\t\t\t}\r\n\r\n\t\t\t\t#footer .copyright a:hover {\r\n\t\t\t\t\tcolor: rgba(212, 212, 212, 0.85);\r\n\t\t\t\t}\r\n\r\n/* Carousel */\r\n\r\n\t.carousel {\r\n\t\tposition: relative;\r\n\t\toverflow: hidden;\r\n\t\tpadding: 2em 0 2em 0;\r\n\t\tmargin-bottom: 0;\r\n\t}\r\n\r\n\t\t.carousel .forward, .carousel .backward {\r\n\t\t\tposition: absolute;\r\n\t\t\ttop: 50%;\r\n\t\t\twidth: 6em;\r\n\t\t\theight: 12em;\r\n\t\t\tmargin-top: -6em;\r\n\t\t\tcursor: pointer;\r\n\t\t}\r\n\r\n\t\t\t.carousel .forward:before, .carousel .backward:before {\r\n\t\t\t\tcontent: '';\r\n\t\t\t\tdisplay: block;\r\n\t\t\t\twidth: 6em;\r\n\t\t\t\theight: 6em;\r\n\t\t\t\tborder-radius: 100%;\r\n\t\t\t\tbackground-color: rgba(72, 57, 73, 0.5);\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\ttop: 50%;\r\n\t\t\t\tmargin-top: -3em;\r\n\t\t\t\ttransition: background-color 0.35s ease-in-out;\r\n\t\t\t\t-webkit-backface-visibility: hidden;\r\n\t\t\t}\r\n\r\n\t\t\t.carousel .forward:after, .carousel .backward:after {\r\n\t\t\t\tcontent: '';\r\n\t\t\t\twidth: 3em;\r\n\t\t\t\theight: 3em;\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\ttop: 50%;\r\n\t\t\t\tmargin: -1.5em 0 0 0;\r\n\t\t\t}\r\n\r\n\t\t\t.carousel .forward:hover:before, .carousel .backward:hover:before {\r\n\t\t\t\tbackground-color: rgba(239, 131, 118, 0.75);\r\n\t\t\t}\r\n\r\n\t\t.carousel .forward {\r\n\t\t\tright: 0;\r\n\t\t}\r\n\r\n\t\t\t.carousel .forward:before {\r\n\t\t\t\tright: -3em;\r\n\t\t\t}\r\n\r\n\t\t\t.carousel .forward:after {\r\n\t\t\t\tright: -0.25em;\r\n\t\t\t}\r\n\r\n\t\t.carousel .backward {\r\n\t\t\tleft: 0;\r\n\t\t}\r\n\r\n\t\t\t.carousel .backward:before {\r\n\t\t\t\tleft: -3em;\r\n\t\t\t}\r\n\r\n\t\t\t.carousel .backward:after {\r\n\t\t\t\tleft: -0.25em;\r\n\t\t\t\t-webkit-transform: scaleX(-1);\r\n\t\t\t\ttransform: scaleX(-1);\r\n\t\t\t}\r\n\r\n\t\t.carousel .reel {\r\n\t\t\twhite-space: nowrap;\r\n\t\t\tposition: relative;\r\n\t\t\t-webkit-overflow-scrolling: touch;\r\n\t\t\tpadding: 0 2em 0 2em;\r\n\t\t}\r\n\r\n\t\t.carousel article {\r\n\t\t\tdisplay: inline-block;\r\n\t\t\twidth: 18em;\r\n\t\t\tbackground: #fff;\r\n\t\t\ttext-align: center;\r\n\t\t\tpadding: 0 1em 3em 1em;\r\n\t\t\tmargin: 0 2em 0 0;\r\n\t\t\twhite-space: normal;\r\n\t\t\topacity: 1.0;\r\n\t\t\ttransition: opacity 0.75s ease-in-out;\r\n\t\t}\r\n\r\n\t\t\t.carousel article.loading {\r\n\t\t\t\topacity: 0;\r\n\t\t\t}\r\n\r\n\t\t\t.carousel article .image {\r\n\t\t\t\tposition: relative;\r\n\t\t\t\tleft: -1em;\r\n\t\t\t\ttop: 0;\r\n\t\t\t\twidth: auto;\r\n\t\t\t\tmargin-right: -2em;\r\n\t\t\t\tmargin-bottom: 3em;\r\n\t\t\t}\r\n\r\n\t\t\t.carousel article p {\r\n\t\t\t\ttext-align: center;\r\n\t\t\t}\r\n\r\n/* Wide */\r\n\r\n\t@media screen and (max-width: 1680px) {\r\n\r\n\t\t/* Basic */\r\n\r\n\t\t\tbody, input, textarea, select {\r\n\t\t\t\tfont-size: 14pt;\r\n\t\t\t\tline-height: 1.75em;\r\n\t\t\t}\r\n\r\n\t\t/* Carousel */\r\n\r\n\t\t\t.carousel {\r\n\t\t\t\tpadding: 1.5em 0 1.5em 0;\r\n\t\t\t}\r\n\r\n\t\t\t\t.carousel .reel {\r\n\t\t\t\t\tpadding: 0 1.5em 0 1.5em;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.carousel article {\r\n\t\t\t\t\twidth: 18em;\r\n\t\t\t\t\tmargin: 0 1.25em 0 0;\r\n\t\t\t\t}\r\n\r\n\t}\r\n\r\n/* Normal */\r\n\r\n\t@media screen and (max-width: 1280px) {\r\n\r\n\t\t/* Basic */\r\n\r\n\t\t\tbody, input, textarea, select {\r\n\t\t\t\tfont-size: 12pt;\r\n\t\t\t\tline-height: 1.5em;\r\n\t\t\t}\r\n\r\n\t\t/* Wrapper */\r\n\r\n\t\t\t.wrapper {\r\n\t\t\t\tpadding-left: 2em;\r\n\t\t\t\tpadding-right: 2em;\r\n\t\t\t}\r\n\r\n\t\t/* Header */\r\n\r\n\t\t\t#header {\r\n\t\t\t\tbackground-attachment: scroll;\r\n\t\t\t}\r\n\r\n\t\t\t\t#header .inner {\r\n\t\t\t\t\tpadding-left: 2em;\r\n\t\t\t\t\tpadding-right: 2em;\r\n\t\t\t\t}\r\n\r\n\t\t/* Banner */\r\n\r\n\t\t\t#banner {\r\n\t\t\t\tpadding-left: 2em;\r\n\t\t\t\tpadding-right: 2em;\r\n\t\t\t}\r\n\r\n\t\t/* Footer */\r\n\r\n\t\t\t#footer {\r\n\t\t\t\tpadding-left: 2em;\r\n\t\t\t\tpadding-right: 2em;\r\n\t\t\t}\r\n\r\n\t}\r\n\r\n/* Narrow */\r\n\r\n/* Narrower */\r\n\r\n\t@media screen and (max-width: 840px) {\r\n\r\n\t\t/* Basic */\r\n\r\n\t\t\tbody, input, textarea, select {\r\n\t\t\t\tfont-size: 13pt;\r\n\t\t\t\tline-height: 1.65em;\r\n\t\t\t}\r\n\r\n\t\t\t.tweet {\r\n\t\t\t\ttext-align: center;\r\n\t\t\t}\r\n\r\n\t\t\t.timestamp {\r\n\t\t\t\tdisplay: block;\r\n\t\t\t\ttext-align: center;\r\n\t\t\t}\r\n\r\n\t\t/* Footer */\r\n\r\n\t\t\t#footer {\r\n\t\t\t\tpadding: 4em 2em 4em 2em;\r\n\t\t\t}\r\n\r\n\t\t/* Carousel */\r\n\r\n\t\t\t.carousel {\r\n\t\t\t\tpadding: 1.25em 0 1.25em 0;\r\n\t\t\t}\r\n\r\n\t\t\t\t.carousel article {\r\n\t\t\t\t\twidth: 18em;\r\n\t\t\t\t\tmargin: 0 1em 0 0;\r\n\t\t\t\t}\r\n\r\n\t}\r\n\r\n/* Mobile */\r\n\r\n\t#navPanel, #titleBar {\r\n\t\tdisplay: none;\r\n\t}\r\n\r\n\t@media screen and (max-width: 736px) {\r\n\r\n\t\t/* Basic */\r\n\r\n\t\t\thtml, body {\r\n\t\t\t\toverflow-x: hidden;\r\n\t\t\t}\r\n\r\n\t\t\tbody, input, textarea, select {\r\n\t\t\t\tfont-size: 12.5pt;\r\n\t\t\t\tline-height: 1.5em;\r\n\t\t\t}\r\n\r\n\t\t\th2 {\r\n\t\t\t\tfont-size: 1.75em;\r\n\t\t\t}\r\n\r\n\t\t\th3 {\r\n\t\t\t\tfont-size: 1.25em;\r\n\t\t\t}\r\n\r\n\t\t\thr {\r\n\t\t\t\ttop: 3em;\r\n\t\t\t\tmargin-bottom: 6em;\r\n\t\t\t}\r\n\r\n\t\t/* Section/Article */\r\n\r\n\t\t\tsection, article {\r\n\t\t\t\tmargin-bottom: 2em;\r\n\t\t\t}\r\n\r\n\t\t\t\tsection:last-child, article:last-child {\r\n\t\t\t\t\tmargin-bottom: 0;\r\n\t\t\t\t}\r\n\r\n\t\t\t.row > section, .row > article {\r\n\t\t\t\tmargin-bottom: 2em;\r\n\t\t\t}\r\n\r\n\t\t\theader > p {\r\n\t\t\t\tfont-size: 1.25em;\r\n\t\t\t}\r\n\r\n\t\t/* Image */\r\n\r\n\t\t\t.image.featured {\r\n\t\t\t\tmargin: 0 0 2em 0;\r\n\t\t\t}\r\n\r\n\t\t\t.image.left {\r\n\t\t\t\tmargin: 0 1em 1em 0;\r\n\t\t\t}\r\n\r\n\t\t\t.image.centered {\r\n\t\t\t\tmargin: 0 0 1em 0;\r\n\t\t\t}\r\n\r\n\t\t/* Actions */\r\n\r\n\t\t\tform ul.actions {\r\n\t\t\t\tmargin-top: 0;\r\n\t\t\t}\r\n\r\n\t\t\tul.actions li {\r\n\t\t\t\tdisplay: block;\r\n\t\t\t\tmargin: 0.75em 0 0 0;\r\n\t\t\t}\r\n\r\n\t\t\t\tul.actions li:first-child {\r\n\t\t\t\t\tmargin-top: 0;\r\n\t\t\t\t}\r\n\r\n\t\t/* Menu */\r\n\r\n\t\t\tul.menu {\r\n\t\t\t\theight: auto;\r\n\t\t\t\ttext-align: center;\r\n\t\t\t}\r\n\r\n\t\t\t\tul.menu li {\r\n\t\t\t\t\tdisplay: block;\r\n\t\t\t\t\tborder: 0;\r\n\t\t\t\t\tpadding: 0.75em 0 0 0;\r\n\t\t\t\t\tmargin: 0;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\tul.menu li:first-child {\r\n\t\t\t\t\t\tpadding-top: 0;\r\n\t\t\t\t\t}\r\n\r\n\t\t/* Icons */\r\n\r\n\t\t\tul.icons {\r\n\t\t\t\tfont-size: 1em;\r\n\t\t\t\tpadding: 0.35em 0.5em 0.35em 0.5em;\r\n\t\t\t}\r\n\r\n\t\t\t\tul.icons li a {\r\n\t\t\t\t\twidth: 2.25em;\r\n\t\t\t\t}\r\n\r\n\t\t/* Button */\r\n\r\n\t\t\tinput[type=\"button\"],\r\n\t\t\tinput[type=\"submit\"],\r\n\t\t\tinput[type=\"reset\"],\r\n\t\t\tbutton,\r\n\t\t\t.button {\r\n\t\t\t\tdisplay: block;\r\n\t\t\t\tpadding: 0;\r\n\t\t\t\tline-height: 3em;\r\n\t\t\t\twidth: 100%;\r\n\t\t\t}\r\n\r\n\t\t/* Nav */\r\n\r\n\t\t\t#page-wrapper {\r\n\t\t\t\t-webkit-backface-visibility: hidden;\r\n\t\t\t\tbackface-visibility: hidden;\r\n\t\t\t\ttransition: -webkit-transform 0.5s ease;\r\n\t\t\t\ttransition: transform 0.5s ease;\r\n\t\t\t\ttransition: transform 0.5s ease, -webkit-transform 0.5s ease;\r\n\t\t\t\tpadding-bottom: 1px;\r\n\t\t\t}\r\n\r\n\t\t\t#navButton {\r\n\t\t\t\t-webkit-backface-visibility: hidden;\r\n\t\t\t\tbackface-visibility: hidden;\r\n\t\t\t\ttransition: -webkit-transform 0.5s ease;\r\n\t\t\t\ttransition: transform 0.5s ease;\r\n\t\t\t\ttransition: transform 0.5s ease, -webkit-transform 0.5s ease;\r\n\t\t\t\tdisplay: block;\r\n\t\t\t\theight: 44px;\r\n\t\t\t\tleft: 0;\r\n\t\t\t\tposition: fixed;\r\n\t\t\t\ttop: 0;\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\tz-index: 10001;\r\n\t\t\t}\r\n\r\n\t\t\t\t#navButton .toggle {\r\n\t\t\t\t\tposition: absolute;\r\n\t\t\t\t\tleft: 0;\r\n\t\t\t\t\ttop: 0;\r\n\t\t\t\t\twidth: 100%;\r\n\t\t\t\t\theight: 100%;\r\n\t\t\t\t\tborder: 0;\r\n\t\t\t\t\toutline: 0;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\t#navButton .toggle:before {\r\n\t\t\t\t\t\tfont-family: FontAwesome;\r\n\t\t\t\t\t\ttext-decoration: none;\r\n\t\t\t\t\t\tfont-style: normal;\r\n\t\t\t\t\t\tfont-weight: normal;\r\n\t\t\t\t\t\t-webkit-font-smoothing: antialiased;\r\n\t\t\t\t\t\t-moz-osx-font-smoothing: grayscale;\r\n\t\t\t\t\t\tcontent: '\\F0C9';\r\n\t\t\t\t\t\tcolor: #fff;\r\n\t\t\t\t\t\tcolor: rgba(255, 255, 255, 0.75);\r\n\t\t\t\t\t\ttext-align: center;\r\n\t\t\t\t\t\tdisplay: block;\r\n\t\t\t\t\t\tfont-size: 14px;\r\n\t\t\t\t\t\twidth: 80px;\r\n\t\t\t\t\t\theight: 30px;\r\n\t\t\t\t\t\tline-height: 30px;\r\n\t\t\t\t\t\tposition: absolute;\r\n\t\t\t\t\t\tleft: 50%;\r\n\t\t\t\t\t\tmargin-left: -40px;\r\n\t\t\t\t\t\tbackground: rgba(132, 128, 136, 0.75);\r\n\t\t\t\t\t\tborder-top: 0;\r\n\t\t\t\t\t\tborder-radius: 0 0 0.35em 0.35em;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t#navPanel {\r\n\t\t\t\t-webkit-backface-visibility: hidden;\r\n\t\t\t\tbackface-visibility: hidden;\r\n\t\t\t\t-webkit-transform: translateY(-50vh);\r\n\t\t\t\ttransform: translateY(-50vh);\r\n\t\t\t\ttransition: -webkit-transform 0.5s ease;\r\n\t\t\t\ttransition: transform 0.5s ease;\r\n\t\t\t\ttransition: transform 0.5s ease, -webkit-transform 0.5s ease;\r\n\t\t\t\tdisplay: block;\r\n\t\t\t\theight: 50vh;\r\n\t\t\t\tleft: 0;\r\n\t\t\t\toverflow-y: auto;\r\n\t\t\t\tposition: fixed;\r\n\t\t\t\ttop: 0;\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\tz-index: 10002;\r\n\t\t\t\tbackground: #1f1920;\r\n\t\t\t\tbox-shadow: inset 0px -2px 5px 0px rgba(0, 0, 0, 0.25);\r\n\t\t\t\tfont-size: 1em;\r\n\t\t\t}\r\n\r\n\t\t\t\t#navPanel:before {\r\n\t\t\t\t\tcontent: '';\r\n\t\t\t\t\tdisplay: block;\r\n\t\t\t\t\tposition: absolute;\r\n\t\t\t\t\tleft: 0;\r\n\t\t\t\t\ttop: 0;\r\n\t\t\t\t\twidth: 100%;\r\n\t\t\t\t\theight: 100%;\r\n\t\t\t\t\tbackground-size: 128px 128px;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t#navPanel .link {\r\n\t\t\t\t\tposition: relative;\r\n\t\t\t\t\tz-index: 1;\r\n\t\t\t\t\tdisplay: block;\r\n\t\t\t\t\ttext-decoration: none;\r\n\t\t\t\t\tpadding: 0.5em;\r\n\t\t\t\t\tcolor: #ddd;\r\n\t\t\t\t\tborder: 0;\r\n\t\t\t\t\tborder-top: dotted 1px rgba(255, 255, 255, 0.05);\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\t#navPanel .link:first-child {\r\n\t\t\t\t\t\tborder-top: 0;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t#navPanel .link.depth-0 {\r\n\t\t\t\t\t\tcolor: #fff;\r\n\t\t\t\t\t\tfont-weight: 600;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t#navPanel .indent-1 {\r\n\t\t\t\t\tdisplay: inline-block;\r\n\t\t\t\t\twidth: 1em;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t#navPanel .indent-2 {\r\n\t\t\t\t\tdisplay: inline-block;\r\n\t\t\t\t\twidth: 2em;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t#navPanel .indent-3 {\r\n\t\t\t\t\tdisplay: inline-block;\r\n\t\t\t\t\twidth: 3em;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t#navPanel .indent-4 {\r\n\t\t\t\t\tdisplay: inline-block;\r\n\t\t\t\t\twidth: 4em;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t#navPanel .indent-5 {\r\n\t\t\t\t\tdisplay: inline-block;\r\n\t\t\t\t\twidth: 5em;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t#navPanel .depth-0 {\r\n\t\t\t\t\tcolor: #fff;\r\n\t\t\t\t}\r\n\r\n\t\t\tbody.navPanel-visible #page-wrapper {\r\n\t\t\t\t-webkit-transform: translateY(50vh);\r\n\t\t\t\ttransform: translateY(50vh);\r\n\t\t\t}\r\n\r\n\t\t\tbody.navPanel-visible #navButton {\r\n\t\t\t\t-webkit-transform: translateY(50vh);\r\n\t\t\t\ttransform: translateY(50vh);\r\n\t\t\t}\r\n\r\n\t\t\tbody.navPanel-visible #navPanel {\r\n\t\t\t\t-webkit-transform: translateY(0);\r\n\t\t\t\ttransform: translateY(0);\r\n\t\t\t}\r\n\r\n\t\t/* Wrapper */\r\n\r\n\t\t\t.wrapper {\r\n\t\t\t\tpadding: 3em 1em 3em 1em;\r\n\t\t\t}\r\n\r\n\t\t/* Header */\r\n\r\n\t\t\t#header {\r\n\t\t\t\tbackground-attachment: scroll;\r\n\t\t\t\tpadding: 2.5em 0 0 0;\r\n\t\t\t}\r\n\r\n\t\t\t\t#header .inner {\r\n\t\t\t\t\tpadding-top: 1.5em;\r\n\t\t\t\t\tpadding-left: 1em;\r\n\t\t\t\t\tpadding-right: 1em;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t#header header > p {\r\n\t\t\t\t\tfont-size: 1em;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t#header h1 {\r\n\t\t\t\t\tfont-size: 1.75em;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t#header hr {\r\n\t\t\t\t\ttop: 1em;\r\n\t\t\t\t\tmargin-bottom: 2.5em;\r\n\t\t\t\t}\r\n\r\n\t\t\tbody.homepage #header {\r\n\t\t\t\tmin-height: 0;\r\n\t\t\t\tpadding: 5.5em 0 5em 0;\r\n\t\t\t\theight: auto;\r\n\t\t\t}\r\n\r\n\t\t\t\tbody.homepage #header:before {\r\n\t\t\t\t\tdisplay: none;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tbody.homepage #header h1 {\r\n\t\t\t\t\tfont-size: 2.5em;\r\n\t\t\t\t}\r\n\r\n\t\t/* Nav */\r\n\r\n\t\t\t#nav {\r\n\t\t\t\tdisplay: none;\r\n\t\t\t}\r\n\r\n\t\t/* Banner */\r\n\r\n\t\t\t#banner {\r\n\t\t\t\tpadding: 3em 2em 3em 2em;\r\n\t\t\t}\r\n\r\n\t\t/* Sidebar */\r\n\r\n\t\t\t#sidebar > hr:first-of-type {\r\n\t\t\t\tdisplay: block;\r\n\t\t\t}\r\n\r\n\t\t/* Main */\r\n\r\n\t\t\t#main > header {\r\n\t\t\t\ttext-align: center;\r\n\t\t\t}\r\n\r\n\t\t/* Footer */\r\n\r\n\t\t\t#footer {\r\n\t\t\t\tpadding-left: 1em;\r\n\t\t\t\tpadding-right: 1em;\r\n\t\t\t}\r\n\r\n\t\t/* Carousel */\r\n\r\n\t\t\t.carousel {\r\n\t\t\t\tpadding: 0.5em 0 0.5em 0;\r\n\t\t\t}\r\n\r\n\t\t\t\t.carousel .reel {\r\n\t\t\t\t\tpadding: 0 0.5em 0 0.5em;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.carousel article {\r\n\t\t\t\t\twidth: 14em;\r\n\t\t\t\t\tpadding-bottom: 2em;\r\n\t\t\t\t\tmargin: 0 0.5em 0 0;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\t.carousel article .image {\r\n\t\t\t\t\t\tmargin-bottom: 2em;\r\n\t\t\t\t\t}\r\n\r\n\t}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"homeimage\">\n  <!-- <div class=\"inner\">\n    <figure>\n      <img src=\"../../assets/images/Me.jpg\" alt=\"Avatar\" class=\"avatar\">\n    </figure>\n    <h1>Arosha Mudalige</h1>\n    <p>Born and raised in Brooklyn. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the <a href=\"#\">Semantics</a>, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. </p>\n  </div> -->\n        <img src=\"../../assets/images/Me.jpg\" alt=\"Avatar\" class=\"avatar\"><br><br>\n        <a href=\"#banner\" class=\"button circled scrolly\">Hi!</a>\n</section>\n\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("./src/app/home/home.component.html"),
        styles: [__webpack_require__("./src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "./src/app/notfound/notfound.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/notfound/notfound.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"one\">\n    <div class=\"inner\">\n        <p>\n          404!\n        </p>\n        <ul class=\"actions\">\n            <li><a routerLink=\"\" class=\"button alt\">Go Back Home</a></li>\n        </ul>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/notfound/notfound.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotfoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotfoundComponent = (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    return NotfoundComponent;
}());
NotfoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-notfound',
        template: __webpack_require__("./src/app/notfound/notfound.component.html"),
        styles: [__webpack_require__("./src/app/notfound/notfound.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NotfoundComponent);

//# sourceMappingURL=notfound.component.js.map

/***/ }),

/***/ "./src/app/projects/projects.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".projectsimage {\r\n  background-color: #ffffff;\r\n  color: #f2a3a5;\r\n  padding: 8em 0 9em 0;\r\n  background-color: #0c0c0c;\r\n  background-image: url(" + __webpack_require__("./src/assets/images/projects.jpg") + ");\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: 15% left;\r\n  text-align: left;\r\n  position: relative;\r\n  z-index: 9999;\r\n}\r\n\r\nh3{\r\n  color: #ffffff;\r\n}\r\n\r\np{\r\n  color: #ffffff;\r\n  font-weight: 500;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"projectsimage\">\n    <div class=\"inner\">\n      <div>\n        <h3>A Framework for Secure Coding</h3>\n        <p>A plugin for Intellij Idea to detect securecoding rule violations</p>\n      </div>\n      <hr>\n      <div>\n        <h3>ICareU</h3>\n        <p>A management system to a health care clinic</p>\n      </div>\n    </div>\n</section>\n"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsComponent = (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    return ProjectsComponent;
}());
ProjectsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-projects',
        template: __webpack_require__("./src/app/projects/projects.component.html"),
        styles: [__webpack_require__("./src/app/projects/projects.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProjectsComponent);

//# sourceMappingURL=projects.component.js.map

/***/ }),

/***/ "./src/app/services/list.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListService = (function () {
    function ListService(http) {
        this.http = http;
        this.serverApi = 'http://localhost:3000';
    }
    ListService.prototype.getAllMsgs = function () {
        var URI = this.serverApi + "/messagelist/";
        return this.http
            .get(URI)
            .map(function (res) { return res.json(); })
            .map(function (res) { return res.lists; });
    };
    ListService.prototype.addList = function (list) {
        var URI = this.serverApi + "/messagelist/";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        var body = JSON.stringify({ sender: list.sender, message: list.message });
        headers.append('Content-Type', 'application/json');
        return this.http
            .post(URI, body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return ListService;
}());
ListService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ListService);

var _a;
//# sourceMappingURL=list.service.js.map

/***/ }),

/***/ "./src/assets/images/about.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "about.733e34959d6616039c3c.jpg";

/***/ }),

/***/ "./src/assets/images/banner.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "banner.49bda69f9c010ea7f0b8.jpg";

/***/ }),

/***/ "./src/assets/images/blog.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "blog.b8aa6a7b050a0caca84a.jpg";

/***/ }),

/***/ "./src/assets/images/contact.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "contact.9cdb97b7113e6ca5b073.jpg";

/***/ }),

/***/ "./src/assets/images/projects.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "projects.1a44a0aefcd9fec590cd.jpg";

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map