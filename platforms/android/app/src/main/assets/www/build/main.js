webpackJsonp([0],{

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dataService__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModalDetailsComponent = /** @class */ (function () {
    function ModalDetailsComponent(viewCtrl, dataService, navParams) {
        this.viewCtrl = viewCtrl;
        this.dataService = dataService;
        this.navParams = navParams;
        this.listUsuario = [];
        this.dataService.dataDetailsExpe = {
            NroExpedienteIntegral: "",
            NroExpedienteInterno: "",
            IdRolAsigna: "",
            Actividad: "",
            EstadoAprobacion: "",
            NombreEstadoAprobacion: "",
            FechaInicio: "",
            FechaAsignacion: "",
            IdSeguimientoFlujo: "",
            IdReferencia: "",
            Asigna: "",
            Aprobar: "",
            Asignar: "",
            Visualizar: "",
            NombreRazon: "",
            area: "Unidad General de Inspección",
            Observacion: "",
            Flujo: "Solicitud de Inspección",
            Porcentaje: 0,
            CausaMotivo: " "
        };
    }
    ModalDetailsComponent.prototype.changeClass = function () {
        __WEBPACK_IMPORTED_MODULE_3_jquery__("#Porcentaje").removeClass("range-disabled");
    };
    ModalDetailsComponent.prototype.ionViewDidLoad = function () {
        var _this = this;
        var body = JSON.parse(JSON.stringify(this.navParams.get("datapass")));
        this.listUsuario = (body.ListaAprobador && body.ListaAprobador != null && body.ListaAprobador.length > 0) ? body.ListaAprobador : [];
        this.dataService.dataDetailsExpe = body;
        this.dataService.dataDetailsExpe['Flujo'] = "Solicitud de Inspección";
        this.dataService.dataDetailsExpe['Porcentaje'] = body.Porcentaje;
        this.dataService.dataDetailsExpe['CausaMotivo'] = body.CausaMotivo;
        setTimeout(function () {
            _this.changeClass();
        }, 2000);
    };
    ModalDetailsComponent.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ModalDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'modal-details',template:/*ion-inline-start:"C:\Projects\APPSTSS\AppMovil\src\pages\modal-details\modal-details.html"*/'<!--\n  Generated template for the ModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="miTema">\n    <ion-title>\n      <strong>Detalle Expediente\n      </strong>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="closeModal()">Cerrar</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content no-padding>\n\n\n\n  <ion-content #popoverContent padding class="popover-page">\n\n    <form class="list-form-home">\n\n      <ion-grid>\n        <ion-row>\n          <ion-col col-12>\n            <ion-item>\n              <ion-label floating>\n                <ion-icon name="md-grid" item-start class="text-primary-login"></ion-icon>\n                Razón Social\n              </ion-label>\n              <ion-input type="text" class="text-primary-login" maxLength="200"\n                [(ngModel)]="dataService.dataDetailsExpe.NombreRazon" [ngModelOptions]="{standalone: true}"\n                [readonly]="true"></ion-input>\n\n            </ion-item>\n          </ion-col>\n          <ion-col col-12>\n            <ion-item>\n              <ion-label floating>\n                <ion-icon name="md-grid" item-start class="text-primary-login"></ion-icon>\n                Número de expediente\n              </ion-label>\n              <ion-input type="text" class="text-primary-login" maxLength="25"\n                [(ngModel)]="dataService.dataDetailsExpe.NroExpedienteIntegral" [ngModelOptions]="{standalone: true}"\n                [readonly]="true"></ion-input>\n\n            </ion-item>\n          </ion-col>\n          <ion-col col-12>\n            <ion-item>\n              <ion-label floating>\n                <ion-icon name="md-calendar" item-start class="text-primary-login"></ion-icon>\n                Fecha Registro\n              </ion-label>\n              <ion-input type="text" class="text-primary-login" maxLength="25"\n                [(ngModel)]="dataService.dataDetailsExpe.FechaInicio" [ngModelOptions]="{standalone: true}"\n                [readonly]="true"></ion-input>\n\n            </ion-item>\n          </ion-col>\n          <ion-col col-12>\n            <ion-item>\n              <ion-label floating>\n                <ion-icon name="md-grid" item-start class="text-primary-login"></ion-icon>\n                Motivo o Asunto\n              </ion-label>\n              <ion-input type="text" class="text-primary-login" maxLength="25"\n                [(ngModel)]="dataService.dataDetailsExpe.CausaMotivo" [ngModelOptions]="{standalone: true}" [readonly]="true">\n              </ion-input>\n\n            </ion-item>\n          </ion-col>\n          <ion-col col-12>\n            <ion-item>\n              <ion-label floating>\n                <ion-icon name="md-grid" item-start class="text-primary-login"></ion-icon>\n                Área/Unidad Correspondiente\n              </ion-label>\n              <ion-input type="text" class="text-primary-login" maxLength="25"\n                [(ngModel)]="dataService.dataDetailsExpe.area" [ngModelOptions]="{standalone: true}" [readonly]="true">\n              </ion-input>\n\n            </ion-item>\n          </ion-col>\n\n          <ion-col col-12 *ngIf="listUsuario.length>0" class="text-primary-login">\n            <ion-item no-lines class="input-cover">\n\n              <div for="" class="label label-md" style="color: #999;">\n                <ion-icon name="md-grid" style="font-size: 15px;" item-start class="text-primary-login"></ion-icon>\n\n                <span style="font-size: 14px;">Inspector</span> </div>\n              <ion-grid>\n                <ion-row>\n                  <ion-col col-12 *ngFor="let x of listUsuario">\n                    <div>\n\n                      {{x.NombreEmpleado}}\n\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n\n\n            </ion-item>\n          </ion-col>\n         \n          <ion-col col-12>\n            <ion-item>\n              <ion-label floating>\n                <ion-icon name="md-grid" item-start class="text-primary-login"></ion-icon>\n                Estado del proceso\n              </ion-label>\n              <ion-input type="text" class="text-primary-login" maxLength="25"\n                [(ngModel)]="dataService.dataDetailsExpe.Actividad" [ngModelOptions]="{standalone: true}"\n                [readonly]="true"></ion-input>\n\n            </ion-item>\n          </ion-col>\n          <ion-col col-12>\n            <ion-item>\n              <ion-label floating>\n                <ion-icon name="md-grid" item-start class="text-primary-login"></ion-icon>\n                Observación\n              </ion-label>\n              <ion-textarea rows="3" maxLength="500" class="text-primary-login" [(ngModel)]="dataService.dataDetailsExpe.Observacion" [ngModelOptions]="{standalone: true}"\n              [readonly]="true"></ion-textarea>\n              <!-- <ion-input type="text" class="text-primary-login" maxLength="25"\n                [(ngModel)]="dataService.dataDetailsExpe.Observacion" [ngModelOptions]="{standalone: true}"\n                [readonly]="true"></ion-input> -->\n\n            </ion-item>\n          </ion-col>\n          <ion-col col-12>\n            <ion-item>\n              <ion-label floating>\n                <ion-icon name="md-grid" item-start class="text-primary-login"></ion-icon>\n               <span style="font-size: 14px;">Porcentaje de avance del proceso:</span>    <br>\n               <div text-center>{{dataService.dataDetailsExpe.Porcentaje}}%</div> \n              </ion-label> <br> <br>\n              <ion-input type="text" style="display: none;" class="text-primary-login" maxLength="25"\n                [(ngModel)]="dataService.dataDetailsExpe.observacion" [ngModelOptions]="{standalone: true}"\n                [readonly]="true"></ion-input> \n\n              <ion-range style="pointer-events: none!important;padding-top: 10px;"  [disabled]=\'true\'  min="0" max="100" pin="true" \n                name="Porcentaje" id="Porcentaje" [(ngModel)]="dataService.dataDetailsExpe.Porcentaje"\n                color="secondary">\n                <ion-icon range-left small name="ios-remove-circle-outline"></ion-icon>\n                <ion-icon range-right name="md-checkbox"></ion-icon>\n              </ion-range>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6 ></ion-col>\n        <ion-col col-6 >\n          <button  text-right ion-button icon-start block color="danger" class="buttontn" (click)="closeModal()">\n            <ion-icon name="md-close"></ion-icon>\n            Cancelar\n          </button> <br><br>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n      \n\n    </form>\n\n\n\n\n\n  </ion-content>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Projects\APPSTSS\AppMovil\src\pages\modal-details\modal-details.html"*/,
            styles: ['./modal-details.scss'],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_dataService__["a" /* DataService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__services_dataService__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], ModalDetailsComponent);
    return ModalDetailsComponent;
}());

//# sourceMappingURL=modal-details.js.map

/***/ }),

/***/ 172:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 172;

/***/ }),

/***/ 216:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 216;

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DataService = /** @class */ (function () {
    function DataService() {
        this._urlLogin = "iniciosesion";
        //recuperar credenciales
        this._uriRecuperacion = "recuperacioncredenciales";
        this._uriVerificarPin = "verificarpinmovil?";
        this.ReportExpediente = [];
        //Flujos filtros
        this._uriFlujo = "filtroseguimientomovil?";
        //cambio contraseña
        this._uriCambio = "cambiocontraseniamovil";
        this._uriFlujoEspecial = "filtroseguimientomovilespecial?";
        //guardar archivo
        this.dataRegistrarExp = {};
        //solicitud de pago
        this.solPago = {};
        this.uriSolPago = "insertarsolicitudarreglopago";
        //uri pago
        this.uriPagoTesoreria = "insertarpagotesoreria";
        this.registrarEx = "insertarregistroacta";
        this.aprobaraccion = "aprobaracciones";
        //tipos de actas
        this.uriTipoActas = "obtenerdetallecatalogo?idCatalogo=36";
        this.dataTipoActas = [];
        this.uriFormaPago = "obtenerdetallecatalogo?idCatalogo=37";
        this.dataFormaPago = [];
        //registrar pago
        this.dataRegistrarPago = {};
    }
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], DataService);
    return DataService;
}());

//# sourceMappingURL=dataService.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceGlobals; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ConfigSystems_constants__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__ = __webpack_require__(356);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};








var ServiceGlobals = /** @class */ (function () {
    function ServiceGlobals(http, _url, storage, file) {
        this.http = http;
        this._url = _url;
        this.storage = storage;
        this.file = file;
        this.apiUrl = this._url.ServerLocal_Security;
        this.api_flujo = this._url.serverLocalFlujo;
        this.api_recuperarClaves = this._url.serverCambio;
        this.api_profesionales = this._url.profesionales;
        this.api_pagos = this._url.pagos;
    }
    ServiceGlobals.prototype.GetApi = function (url, param) {
        var _this = this;
        var uriServece = "";
        if (param == 1)
            uriServece = this.api_flujo;
        return new Promise(function (resolve, reject) {
            _this.http.get(uriServece + url, {
                headers: new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]().set('XAuthToken', localStorage.getItem('tokenSTS'))
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ServiceGlobals.prototype.GetApiCatalogo = function (url, param) {
        var _this = this;
        var uriServece = this.apiUrl;
        return new Promise(function (resolve, reject) {
            _this.http.get(uriServece + url, {
                headers: new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]().set('XAuthToken', localStorage.getItem('tokenSTS'))
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ServiceGlobals.prototype.login = function (body) {
        var _this = this;
        var url = this._url.BaseUrl + '/seguridad/iniciosesionappmovil';
        return new Promise(function (resolve, reject) {
            _this.http.post(url, body, {
                headers: new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'),
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ServiceGlobals.prototype.readFiles = function (uri, name) {
        return __awaiter(this, void 0, void 0, function () {
            var finalUri;
            return __generator(this, function (_a) {
                finalUri = uri.substr(0, uri.lastIndexOf('/') + 1);
                return [2 /*return*/, this.file.readAsArrayBuffer(finalUri, name).then(function (value) {
                        return value;
                    }).catch(function (ex) {
                        return null;
                    })];
            });
        });
    };
    ServiceGlobals.prototype.PingServer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.ping()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 2:
                        e_1 = _a.sent();
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ServiceGlobals.prototype.ping = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.http.get(_this._url.BaseUrl + "/ping")
                            .subscribe(function () {
                            resolve(true);
                        }, function () {
                            reject(false);
                        });
                    })];
            });
        });
    };
    ServiceGlobals.prototype.UpdateActa = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var data, actas, i, arry, attch, i, arry, payment, i, setDate, key, _a, _b, pair, e_2, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        data = new FormData();
                        data.append("IdRegistroActa", "0");
                        actas = request.rutasActas;
                        i = 0;
                        _d.label = 1;
                    case 1:
                        if (!(i <= actas.length - 1)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.readFiles(actas[i].path, actas[i].name)];
                    case 2:
                        arry = _d.sent();
                        if (arry == null) {
                            return [3 /*break*/, 3];
                        }
                        data.append("filesActas[" + i + "]", new Blob([arry]), actas[i].name);
                        _d.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4:
                        attch = request.rutasAttch;
                        i = 0;
                        _d.label = 5;
                    case 5:
                        if (!(i <= attch.length - 1)) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.readFiles(attch[i].path, attch[i].name)];
                    case 6:
                        arry = _d.sent();
                        if (arry == null) {
                            return [3 /*break*/, 7];
                        }
                        data.append("filesAttch[" + i + "]", new Blob([arry]), attch[i].name);
                        _d.label = 7;
                    case 7:
                        i++;
                        return [3 /*break*/, 5];
                    case 8:
                        //has payment FechaPago
                        if (request.ArregloPago != undefined || request.ArregloPago != null) {
                            if (request.ArregloPago.ArregloPago.length > 0) {
                                payment = request.ArregloPago.ArregloPago;
                                for (i = 0; i <= request.ArregloPago.ArregloPago.length - 1; i++) {
                                    setDate = (new Date(payment[i].FechaPago)).toUTCString();
                                    data.append("ArregloPago.ListaDetallePago[" + i + "].ValorPagar", payment[i].ValorPagar);
                                    data.append("ArregloPago.ListaDetallePago[" + i + "].FechaPago", setDate);
                                    data.append("ArregloPago.ListaDetallePago[" + i + "].IdPagoTesoreria", "0");
                                    data.append("ArregloPago.ListaDetallePago[" + i + "].IdDetallePago", "0");
                                }
                            }
                            data.append("ArregloPago.IdTrabajador", request.ArregloPago.IdTrabajador == null ? "0" :
                                request.ArregloPago.IdTrabajador.toString());
                            data.append("ArregloPago.IdPatronoEmpleador", request.ArregloPago.IdPatronoEmpleador.toString());
                            data.append("ArregloPago.NombreEncargado", request.ArregloPago.Nombre.toString());
                            data.append("ArregloPago.ConceptoPago", request.ArregloPago.ConceptoPago.toString());
                            data.append("ArregloPago.NroExpedienteIntegral", request.ArregloPago.NroExpedienteIntegral.toString());
                            data.append("ArregloPago.TotalPagar", request.ArregloPago.TotalPagar.toString());
                            data.append("ArregloPago.CantidadPago", request.ArregloPago.CantidadPago.toString());
                            data.append("ArregloPago.DescripcionActa", request.ArregloPago.DescripcionActa.toString());
                            data.append("ArregloPago.IdSolicitudArregloPago", "0");
                        }
                        data.append("IdAccionSeguimientoFlujo", request.IdAccionSeguimiento);
                        for (key in request) {
                            if (key == 'rutasActas' || key == 'rutasAttch' || key == 'ArregloPago') {
                                continue;
                            }
                            data.append("" + key, request[key]);
                        }
                        try {
                            for (_a = __values(data.entries()), _b = _a.next(); !_b.done; _b = _a.next()) {
                                pair = _b.value;
                                console.log(pair[0] + ', ' + pair[1]);
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        return [2 /*return*/, this.http.post(this._url.BaseUrl + "/riesgoprofesional/insertarregistroactaappmovil", data, {
                                headers: new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]().set('enctype', 'multipart/form-data').set('XAuthToken', localStorage.getItem('tokenSTS'))
                            }).toPromise()];
                }
            });
        });
    };
    ServiceGlobals.prototype.PostApiNotToken = function (url, data, tipo, param) {
        var _this = this;
        var urlFinal = "";
        //1 para api de seguridad
        if (param == 1) {
            urlFinal = this.apiUrl;
        }
        else if (param == 2) {
            urlFinal = this.api_flujo;
        }
        else if (param == 3) {
            urlFinal = this.api_recuperarClaves;
        }
        if (tipo == 1) {
            return new Promise(function (resolve, reject) {
                _this.http.post(urlFinal + url, data, {
                    headers: new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'),
                })
                    .subscribe(function (res) {
                    resolve(res);
                }, function (err) {
                    reject(err);
                });
            });
        }
        else {
            return new Promise(function (resolve, reject) {
                _this.http.post(urlFinal + url, {
                    headers: new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'),
                })
                    .subscribe(function (res) {
                    resolve(res);
                }, function (err) {
                    reject(err);
                });
            });
        }
    };
    ServiceGlobals.prototype.SendData = function (data, url, type, param) {
        var _this = this;
        var urlFinal = "";
        //1 para api de seguridad
        if (param == 1) {
            urlFinal = this.apiUrl;
        }
        else if (param == 2) {
            urlFinal = this.api_flujo;
        }
        else if (param == 3) {
            urlFinal = this.api_recuperarClaves;
        }
        else if (param == 4) {
            urlFinal = this.api_profesionales;
        }
        else if (param == 5) {
            urlFinal = this.api_pagos;
        }
        console.log(param);
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json; charset=utf-8',
                'XAuthToken': localStorage.getItem('tokenSTS'),
            })
        };
        /*let  headers= new HttpHeaders();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        headers.append('XAuthToken', localStorage.getItem('tokenSTS'));
         headers.set('Content-Type', 'application/json; charset=utf-8');
         headers.set('XAuthToken', localStorage.getItem('tokenSTS'));*/
        if (type == 1) {
            return new Promise(function (resolve, reject) {
                _this.http.post(urlFinal + url, data, httpOptions)
                    .subscribe(function (res) {
                    resolve(res);
                }, function (err) {
                    reject(err);
                });
            });
        }
        else {
            return new Promise(function (resolve, reject) {
                _this.http.put(urlFinal + url, data, httpOptions)
                    .subscribe(function (res) {
                    resolve(res);
                }, function (err) {
                    reject(err);
                });
            });
        }
        /*let  headers= new HttpHeaders();
            headers.append('Content-Type', 'application/json; charset=utf-8');
          //  headers.set('Authorization', 'Bearer '+'my-auth-token');
            //headers.set('Content-Type', 'application/json; charset=utf-8');
           
            return this.http.post(this.apiUrl + url, data, {
                headers:headers
              })
              .map((res) => res);*/
    };
    ServiceGlobals.prototype.SendFile = function (data, url) {
        var _this = this;
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]({
                //'Content-Type':  'application/json; charset=utf-8',
                'XAuthToken': localStorage.getItem('tokenSTS'),
            })
        };
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + url, data, httpOptions)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ServiceGlobals.prototype.parseResponse = function (data) {
        if (data && data != undefined && data != null)
            return JSON.parse(JSON.stringify(data));
        else
            return JSON.parse(JSON.stringify({
                status: 500
            }));
    };
    ServiceGlobals.prototype.closeSesion = function () {
        //this.storage.set('user', '');
        console.log('close session');
        localStorage.clear();
        this.storage.clear();
    };
    ServiceGlobals.prototype.validationCharacterNumerick = function () {
        __WEBPACK_IMPORTED_MODULE_6_jquery__('body').on('keypress', '.letrasandnum', function (e) {
            var key = e.keyCode || e.which;
            var tecla = String.fromCharCode(key).toLowerCase();
            var letras = " abcdefghijklmnñopqrstuvwxyz1234567890";
            var especiales = "8-37-39-46";
            var tecla_especial = false;
            for (var i in especiales) {
                if (key == especiales[i]) {
                    tecla_especial = true;
                    break;
                }
            }
            if (letras.indexOf(tecla) == -1 && !tecla_especial) {
                return false;
            }
            var text = __WEBPACK_IMPORTED_MODULE_6_jquery__(this).val();
            text = text.replace(/\s+/gi, ' ');
            __WEBPACK_IMPORTED_MODULE_6_jquery__(this).val(text);
        });
    };
    ServiceGlobals.prototype.replaceSpace = function (text) {
        if (text != '' && text != null && text != undefined) {
            text = text.trim();
        }
        return text;
    };
    ServiceGlobals.prototype.validationNumeros = function () {
        __WEBPACK_IMPORTED_MODULE_6_jquery__('body').on('keypress', '.numeros', function (e) {
            var key = e.keyCode || e.which;
            var tecla = String.fromCharCode(key).toLowerCase();
            var letras = " 1234567890%.";
            var especiales = "8-37-39-46";
            var tecla_especial = false;
            for (var i in especiales) {
                if (key == especiales[i]) {
                    tecla_especial = true;
                    break;
                }
            }
            if (letras.indexOf(tecla) == -1 && !tecla_especial) {
                return false;
            }
            var text = __WEBPACK_IMPORTED_MODULE_6_jquery__(this).val();
            text = text.replace(/\s+/gi, ' ');
            __WEBPACK_IMPORTED_MODULE_6_jquery__(this).val(text);
        });
    };
    ServiceGlobals.prototype.FormatCurrency = function () {
        __WEBPACK_IMPORTED_MODULE_6_jquery__('input.CurrencyInput').on('blur', function () {
            var value = this.value.replace(/,/g, '');
            this.value = parseFloat(value).toLocaleString('es-HN', {
                style: 'decimal',
                maximumFractionDigits: 2,
                minimumFractionDigits: 2
            });
        });
    };
    ServiceGlobals = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ConfigSystems_constants__["a" /* Configuration */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__["a" /* File */]])
    ], ServiceGlobals);
    return ServiceGlobals;
}());

//# sourceMappingURL=ServiceGlobals.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Configuration; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Configuration = /** @class */ (function () {
    function Configuration() {
        // public uriServer="https://201.220.133.207/";
        // public uriServer="http://201.220.133.207:81/";
        // public uriServer="http://201.220.133.218:8007/";
        // public uriServer="https://172.16.1.116:444/";
        // public uriServer = "https://192.168.0.10:45455/";
        // public uriServer = "https://ecms-backend.conveyor.cloud/";
        // public BaseUrl = "https://ecms-backend.conveyor.cloud/api";
        //public BaseUrl = "https://192.168.0.10:45455/api";
        //PRODUCION
        this.uriServer = "https://201.220.133.207:443/";
        this.BaseUrl = "https://201.220.133.207:443/api";
        this.ServerLocal_Security = this.uriServer + 'api/seguridad/';
        this.serverLocalFlujo = this.uriServer + "api/flujos/";
        this.serverCambio = this.uriServer + "api/";
        this.profesionales = this.uriServer + 'api/riesgoprofesional/';
        this.pagos = this.uriServer + 'api/tesoreria/';
    }
    Configuration = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], Configuration);
    return Configuration;
}());

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecuperarCredencialesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_dataService__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_ServiceGlobals__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_ServiceAlert__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_Messages__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var RecuperarCredencialesPage = /** @class */ (function () {
    function RecuperarCredencialesPage(nav, dataService, serviceGlobal, formBuilder, loadingController, _serviceAlert, _mensajes) {
        this.nav = nav;
        this.dataService = dataService;
        this.serviceGlobal = serviceGlobal;
        this.formBuilder = formBuilder;
        this.loadingController = loadingController;
        this._serviceAlert = _serviceAlert;
        this._mensajes = _mensajes;
        this.type = 'password';
        this.showPass = false;
        this.dataService._pasoRecuperar = {
            numberStep: 1
        };
    }
    RecuperarCredencialesPage.prototype.ngOnInit = function () {
        this.dataService._dataRecuperarCrendenciales = {
            NombreUsuario: "",
            CorreoElectronico: "",
            NumeroIdentificacion: "",
            pin: "",
        };
        this.dataService._form = this.formBuilder.group({
            NombreUsuario: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](null, [
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(1),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(10)
            ]),
            CorreoElectronico: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](null, [
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(1),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(200)
            ]),
            NumeroIdentificacion: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](null, [
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(1),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(13)
            ])
        });
        this.dataService._formPin = this.formBuilder.group({
            pin: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](null, [
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(1),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(10)
            ])
        });
    };
    // register and go to home page
    RecuperarCredencialesPage.prototype.register = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    RecuperarCredencialesPage.prototype.RecuperarCredenciales = function (front) {
        var _this = this;
        this._serviceAlert.showLoading();
        var body = JSON.stringify({
            NombreUsuario: front.NombreUsuario,
            CorreoElectronico: front.CorreoElectronico,
            NumeroIdentificacion: front.NumeroIdentificacion
        });
        this.serviceGlobal.PostApiNotToken(this.dataService._uriRecuperacion, body, 1, 1)
            .then(function (data) {
            if (data.Status == 200) {
                _this.ControlPasos(1);
                _this._serviceAlert.presentConfirm(_this._mensajes.VERIFICAR_PIN);
            }
            else {
                ;
                _this._serviceAlert.presentConfirm(data.Message);
            }
            _this._serviceAlert.dismissLoading();
        }, function (Error) {
            var dataVa = _this.serviceGlobal.parseResponse(Error.error);
            if (dataVa.Status == _this._mensajes.STATUS_NOT_FOUND || dataVa.Status == _this._mensajes.STATUS_TOKEN || dataVa.Status == _this._mensajes.STATUS_NOT_DATA) {
                _this._serviceAlert.presentConfirm(dataVa.Message);
            }
            else {
                _this._serviceAlert.presentConfirm(_this._mensajes.ERROR_GENERICO);
            }
            _this._serviceAlert.dismissLoading();
        });
    };
    RecuperarCredencialesPage.prototype.VerificarPin = function (dataFront) {
        var _this = this;
        this._serviceAlert.showLoading();
        this.serviceGlobal.PostApiNotToken(this.dataService._uriVerificarPin + "pin=" + dataFront.pin + "&nombreUsuario=" + dataFront.NombreUsuario, '', 1, 1)
            .then(function (data) {
            if (data.Status == 200) {
                _this._serviceAlert.presentConfirm(data.Message);
                //this.ControlPasos(1)
                _this.login();
            }
            else {
                _this._serviceAlert.presentConfirm(data.Message);
            }
            _this._serviceAlert.dismissLoading();
        }, function (Error) {
            var dataVa = _this.serviceGlobal.parseResponse(Error.error);
            if (dataVa.Status == _this._mensajes.STATUS_NOT_FOUND || dataVa.Status == _this._mensajes.STATUS_TOKEN || dataVa.Status == _this._mensajes.STATUS_NOT_DATA) {
                _this._serviceAlert.presentConfirm(dataVa.Message);
            }
            else {
                _this._serviceAlert.presentConfirm(_this._mensajes.ERROR_GENERICO);
            }
            _this._serviceAlert.dismissLoading();
        });
    };
    RecuperarCredencialesPage.prototype.ControlPasos = function (paso) {
        if (paso == 1)
            this.dataService._pasoRecuperar.numberStep++;
        else
            this.dataService._pasoRecuperar.numberStep--;
    };
    // go to login page
    RecuperarCredencialesPage.prototype.login = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    RecuperarCredencialesPage.prototype.showPassword = function () {
        this.showPass = !this.showPass;
        if (this.showPass) {
            this.type = 'text';
        }
        else {
            this.type = 'password';
        }
    };
    RecuperarCredencialesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Projects\APPSTSS\AppMovil\src\pages\RecuperarCredenciales\RecuperarCredenciales.html"*/'<!-- -->\n<ion-content class="auth-page-register">\n  <div class="register-content">\n\n    <!-- Logo -->\n    <div padding text-center style="padding-bottom: 0%;!important" >\n      <div class="logo"></div>\n\n      <h5 class="titulo" text-center>Recuperar Contraseña</h5>\n\n      <h5 class="titulo" text-center>Paso {{dataService._pasoRecuperar.numberStep}}/2</h5>\n\n    </div>\n\n    <!-- Inicio formulario de recuperacion de credenciales -->\n    <form class="list-form" style="padding-top: 0%;" [formGroup]="dataService._form" *ngIf="dataService._pasoRecuperar.numberStep==1">\n\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="person" item-start class="text-primary" maxLength="15"></ion-icon>\n          <span class="text-danger">*</span> Nombre Usuario\n        </ion-label>\n        <ion-input type="text" formControlName="NombreUsuario"\n          [(ngModel)]="dataService._dataRecuperarCrendenciales.NombreUsuario">\n        </ion-input>\n\n        <div text-center\n          *ngIf="!dataService._form.controls[\'NombreUsuario\'].valid && dataService._form.controls[\'NombreUsuario\'].touched">\n\n          <p class="text-danger animated fadeIn" *ngIf="dataService._form.controls[\'NombreUsuario\'].errors.required">\n            Nombre de usuario es\n            requerido!</p>\n          <p class="text-danger animated fadeIn" *ngIf="dataService._form.controls[\'NombreUsuario\'].errors.minlength">\n            Debe ser de al menos\n            {{dataService._form.controls[\'NombreUsuario\'].errors.minlength.requiredLength}} caracteres.</p>\n\n        </div>\n      </ion-item>\n\n\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="mail" item-start class="text-primary"></ion-icon>\n          <span class="text-danger">*</span> Correo Electrónico \n        </ion-label>\n        <ion-input type="email" maxLength="100" formControlName="CorreoElectronico"\n          [(ngModel)]="dataService._dataRecuperarCrendenciales.CorreoElectronico">\n        </ion-input>\n\n\n        <div text-center\n          *ngIf="!dataService._form.controls[\'CorreoElectronico\'].valid && dataService._form.controls[\'CorreoElectronico\'].touched">\n\n          <p class="text-danger animated fadeIn"\n            *ngIf="dataService._form.controls[\'CorreoElectronico\'].errors.required">Correo electrónico es\n            requerido!</p>\n          <p class="text-danger animated fadeIn"\n            *ngIf="dataService._form.controls[\'CorreoElectronico\'].errors.minlength">Debe ser de al menos\n            {{dataService._form.controls[\'CorreoElectronico\'].errors.minlength.requiredLength}} caracteres.</p>\n\n        </div>\n      </ion-item>\n\n\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="lock" item-start class="text-primary"></ion-icon>\n          <span class="text-danger">*</span> Numero Identidad\n        </ion-label>\n        <ion-input type="text" maxLength="13" formControlName="NumeroIdentificacion"\n          [(ngModel)]="dataService._dataRecuperarCrendenciales.NumeroIdentificacion"></ion-input>\n        <div text-center\n          *ngIf="!dataService._form.controls[\'NumeroIdentificacion\'].valid && dataService._form.controls[\'NumeroIdentificacion\'].touched">\n\n          <p class="text-danger animated fadeIn"\n            *ngIf="dataService._form.controls[\'NumeroIdentificacion\'].errors.required">Número de identidad es\n            requerido!</p>\n          <p class="text-danger animated fadeIn"\n            *ngIf="dataService._form.controls[\'NumeroIdentificacion\'].errors.minlength">Debe ser de al menos\n            {{dataService._form.controls[\'NumeroIdentificacion\'].errors.minlength.requiredLength}} caracteres.</p>\n\n        </div>\n      </ion-item>\n      <ion-item no-lines>\n        <div margin-top align="center">\n          <p class="text-danger"><strong>{{dataService.message}}</strong> </p>\n          <button [disabled]="!dataService._form.valid" ion-button block color="dark" class="buttontn" tappable\n            (click)="RecuperarCredenciales(dataService._dataRecuperarCrendenciales)">\n            <ion-icon name="send"></ion-icon>\n            Enviar\n          </button>\n        </div>\n    \n      </ion-item>\n\n    </form>\n    <!-- Fin formulario de recuperacion de credenciales -->\n\n\n    <!-- Inicio verificacion de pin -->\n    <form class="list-form" [formGroup]="dataService._formPin" *ngIf="dataService._pasoRecuperar.numberStep==2">\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="lock" item-start class="text-primary"></ion-icon>\n          <span class="text-danger">*</span> Pin\n        </ion-label>\n        <ion-input type="{{type}}" maxLength="10" formControlName="pin"\n          [(ngModel)]="dataService._dataRecuperarCrendenciales.pin"></ion-input>\n          <!--<button  ion-button clear color="dark" type="button" item-right (click)="showPassword()"> \n            <ion-icon name="eye-off" style="font-size:25px;"></ion-icon>\n         </button>-->\n        <div text-center\n          *ngIf="!dataService._formPin.controls[\'pin\'].valid && dataService._formPin.controls[\'pin\'].touched">\n\n          <p class="text-danger animated fadeIn" *ngIf="dataService._formPin.controls[\'pin\'].errors.required">El pin\n            requerido!</p>\n          <p class="text-danger animated fadeIn" *ngIf="dataService._formPin.controls[\'pin\'].errors.minlength">Debe ser\n            de\n            al menos\n            {{dataService._formPin.controls[\'pin\'].errors.minlength.requiredLength}} caracteres.</p>\n\n        </div>\n      </ion-item>\n      <ion-item no-lines> \n        <ion-label>Mostrar Pin</ion-label>\n        <ion-checkbox  style="margin-right: 10px;" color="dark" checked="false" (ionChange)="showPassword()"></ion-checkbox>\n      \n      </ion-item>\n\n      <ion-item no-lines>\n\n        <ion-grid>\n          <ion-row>\n            <ion-col col-6>\n              <div margin-top align="center">\n                <p class="text-danger"><strong>{{dataService.message}}</strong> </p>\n                <button ion-button block color="dark" class="buttontn" tappable (click)="ControlPasos(2)">\n                  <ion-icon name="back"></ion-icon>\n                  Atras\n                </button>\n              </div>\n            </ion-col>\n        \n            <ion-col col-6>\n              <div margin-top align="center">\n                <p class="text-danger"><strong>{{dataService.message}}</strong> </p>\n                <button ion-button block color="dark" class="buttontn" tappable\n                  (click)="VerificarPin(dataService._dataRecuperarCrendenciales)">\n                  <ion-icon name="send"></ion-icon>\n                  Verificar Pin\n                </button>\n\n              </div>\n            </ion-col>\n\n          </ion-row>\n        </ion-grid>\n\n\n      </ion-item>\n\n    </form>\n    <!-- Fin verificacion de pin -->\n\n    <div text-center margin-top>\n      <span ion-text class="text-primary-login" tappable (click)="login()"><strong>Volver al inicio</strong></span>\n    </div>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Projects\APPSTSS\AppMovil\src\pages\RecuperarCredenciales\RecuperarCredenciales.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_dataService__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_6__services_ServiceGlobals__["a" /* ServiceGlobals */], __WEBPACK_IMPORTED_MODULE_7__services_ServiceAlert__["a" /* ServiceAlert */], __WEBPACK_IMPORTED_MODULE_8__services_Messages__["a" /* Menssages */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__services_dataService__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_6__services_ServiceGlobals__["a" /* ServiceGlobals */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_7__services_ServiceAlert__["a" /* ServiceAlert */],
            __WEBPACK_IMPORTED_MODULE_8__services_Messages__["a" /* Menssages */]])
    ], RecuperarCredencialesPage);
    return RecuperarCredencialesPage;
}());

//# sourceMappingURL=RecuperarCredenciales.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ServiceGlobals__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Models_LoginResult__ = __webpack_require__(704);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(goblal) {
        this.goblal = goblal;
    }
    AuthenticationService.prototype.logIn = function (json) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                result = new __WEBPACK_IMPORTED_MODULE_2__Models_LoginResult__["a" /* LoginResult */]();
                return [2 /*return*/, this.goblal.login(json).then(function (data) {
                        localStorage.setItem('tokenSTS', data['Data'].Token);
                        localStorage.setItem('typouser', data['Data'].IdPatrono);
                        result.data = { typo: data['Data'].IdPatrono, changedPass: data['Data'].ChangedPass };
                        return result;
                    }, function (e) {
                        result.error = e.error;
                        return result;
                    })];
            });
        });
    };
    AuthenticationService.prototype.logOut = function () {
        localStorage.clear();
    };
    AuthenticationService.prototype.IsAuthenticated = function () {
        return localStorage.getItem('tokenSTS') !== null ? true : false;
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ServiceGlobals__["a" /* ServiceGlobals */]])
    ], AuthenticationService);
    return AuthenticationService;
}());

//# sourceMappingURL=AuthenticationService.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalRestPassComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_ServiceAlert__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_ServiceGlobals__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_dataService__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_Messages__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ModalRestPassComponent = /** @class */ (function () {
    function ModalRestPassComponent(viewCtrl, formBuilder, _serviceAlert, dataService, _mensajes, serviceGlobal) {
        this.viewCtrl = viewCtrl;
        this.formBuilder = formBuilder;
        this._serviceAlert = _serviceAlert;
        this.dataService = dataService;
        this._mensajes = _mensajes;
        this.serviceGlobal = serviceGlobal;
        this.type = 'password';
        this.showPass = false;
    }
    ModalRestPassComponent.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ModalRestPassComponent.prototype.ngOnInit = function () {
        this.dataService._dataRecuperarCrendenciales = {
            actualContrasenia: "",
            nuevaContrasenia: "",
            confirmarContrasenia: ""
        };
        this.dataService._formContrasena = this.formBuilder.group({
            actualContrasenia: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(1),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(20)
            ]),
            nuevaContrasenia: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(1),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(20)
            ]),
            confirmarContrasenia: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(1),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(20)
            ])
        });
    };
    ModalRestPassComponent.prototype.cambioContrasena = function (datafront) {
        var _this = this;
        this._serviceAlert.showLoading();
        var body = JSON.stringify({
            actualContrasenia: datafront.actualContrasenia,
            nuevaContrasenia: datafront.nuevaContrasenia,
            confirmarContrasenia: datafront.confirmarContrasenia
        });
        //console.log(datafront)
        this.serviceGlobal.SendData(body, this.dataService._uriCambio, 1, 3)
            .then(function (data) {
            if (data.Status == 200) {
                _this._serviceAlert.presentConfirm(data.Message);
                _this.closeModal();
            }
            else {
                _this._serviceAlert.presentConfirm(data.Message);
            }
            _this._serviceAlert.dismissLoading();
        }, function (Error) {
            var dataVa = _this.serviceGlobal.parseResponse(Error.error);
            if (dataVa.Status == _this._mensajes.STATUS_NOT_FOUND || dataVa.Status == _this._mensajes.STATUS_TOKEN || dataVa.Status == _this._mensajes.STATUS_NOT_DATA || dataVa.Status == _this._mensajes.STATUS_VALIDATE) {
                _this._serviceAlert.presentConfirm(dataVa.Message);
            }
            else {
                _this._serviceAlert.presentConfirm(_this._mensajes.ERROR_GENERICO);
            }
            _this._serviceAlert.dismissLoading();
        });
    };
    ModalRestPassComponent.prototype.showPassword = function () {
        this.showPass = !this.showPass;
        if (this.showPass) {
            this.type = 'text';
        }
        else {
            this.type = 'password';
        }
    };
    ModalRestPassComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'modal-details',template:/*ion-inline-start:"C:\Projects\APPSTSS\AppMovil\src\pages\modal-rest-pass\modal-rest-pass.html"*/'<ion-header>\n\n  <ion-navbar color="miTema">\n    <ion-title>\n      <strong>Cambiar Contraseña\n      </strong>\n    </ion-title>\n    <!--<ion-buttons end>\n        <button ion-button (click)="closeModal()">Cerrar</button>\n      </ion-buttons>-->\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content no-padding>\n\n\n\n  <ion-content #popoverContent padding class="popover-page">\n\n    <!-- Inicio formulario cambio de credenciales -->\n    <form class="list-form" [formGroup]="dataService._formContrasena">\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="lock" item-start class="text-primary"></ion-icon>\n          <span class="text-danger">*</span> Contraseña Actual\n        </ion-label>\n        <ion-input type="{{type}}" maxLength="20" formControlName="actualContrasenia"\n          [(ngModel)]="dataService._dataRecuperarCrendenciales.actualContrasenia"></ion-input>\n        <!--<button ion-button clear color="dark" type="button" item-right (click)="showPassword()">\n          <ion-icon name="eye-off" style="font-size:25px;"></ion-icon>\n        </button>-->\n          <div align="center"\n            *ngIf="dataService._formContrasena.get(\'actualContrasenia\')?.touched && (dataService._formContrasena.get(\'actualContrasenia\').errors || dataService._formContrasena.get(\'actualContrasenia\').dirty)">\n            <p class="text-danger animated fadeIn"\n              *ngIf="dataService._formContrasena.get(\'actualContrasenia\').hasError(\'required\')">\n              <span class="text-danger">*</span> ¡Campo contraseña actual es requerido!\n            </p>\n          </div>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="lock" item-start class="text-primary"></ion-icon>\n          <span class="text-danger">*</span> Nueva Contraseña\n        </ion-label>\n        <ion-input type="{{type}}" maxLength="20" formControlName="nuevaContrasenia"\n          [(ngModel)]="dataService._dataRecuperarCrendenciales.nuevaContrasenia"></ion-input>\n        <div align="center"\n          *ngIf="dataService._formContrasena.get(\'nuevaContrasenia\')?.touched && (dataService._formContrasena.get(\'nuevaContrasenia\').errors || dataService._formContrasena.get(\'nuevaContrasenia\').dirty)">\n          <p class="text-danger animated fadeIn"\n            *ngIf="dataService._formContrasena.get(\'nuevaContrasenia\').hasError(\'required\')">\n            <span class="text-danger">*</span> ¡Campo nueva contraseña de acceso requerido!\n          </p>\n        </div>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="lock" item-start class="text-primary"></ion-icon>\n          <span class="text-danger">*</span>Confirmar Contraseña\n        </ion-label>\n        <ion-input type="{{type}}" maxLength="20" formControlName="confirmarContrasenia"\n          [(ngModel)]="dataService._dataRecuperarCrendenciales.confirmarContrasenia"></ion-input>\n        <div align="center"\n          *ngIf="dataService._formContrasena.get(\'confirmarContrasenia\')?.touched && (dataService._formContrasena.get(\'confirmarContrasenia\').errors || dataService._formContrasena.get(\'confirmarContrasenia\').dirty)">\n          <p class="text-danger animated fadeIn"\n            *ngIf="dataService._formContrasena.get(\'confirmarContrasenia\').hasError(\'required\')">\n            ¡Campo verificar Contraseña de acceso requerido!\n          </p>\n        </div>\n      </ion-item> \n      <ion-item no-lines> \n        <ion-label>Mostrar Contraseña</ion-label>\n        <ion-checkbox style="margin-right: 10px;" color="dark" checked="false" (ionChange)="showPassword()"></ion-checkbox>\n      \n      </ion-item>\n      <br>\n\n\n      <div text-center class="text-danger"\n        *ngIf="dataService._dataRecuperarCrendenciales.confirmarContrasenia!=\'\' && \n              dataService._dataRecuperarCrendenciales.confirmarContrasenia!=\'\' &&\n               dataService._dataRecuperarCrendenciales.nuevaContrasenia!=\'\' && \n               dataService._dataRecuperarCrendenciales.nuevaContrasenia!=null &&\n                dataService._dataRecuperarCrendenciales.nuevaContrasenia!=dataService._dataRecuperarCrendenciales.confirmarContrasenia">\n        La nueva contraseña no coinciden</div> <br>\n\n      <button ion-button icon-start block color="info" class="buttontn" tappable\n        (click)="cambioContrasena(dataService._dataRecuperarCrendenciales)"\n        [disabled]="dataService._formContrasena.invalid || (dataService._dataRecuperarCrendenciales.nuevaContrasenia!=dataService._dataRecuperarCrendenciales.confirmarContrasenia)">\n        <ion-icon name="md-checkmark-circle-outline"></ion-icon>\n        Guardar\n      </button>\n\n\n\n    </form>\n    <!-- Fin formulario cambio de credenciales -->\n\n  </ion-content>\n\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Projects\APPSTSS\AppMovil\src\pages\modal-rest-pass\modal-rest-pass.html"*/,
            styles: ['./modal-rest-pass.scss'],
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_ServiceGlobals__["a" /* ServiceGlobals */], __WEBPACK_IMPORTED_MODULE_3__services_ServiceAlert__["a" /* ServiceAlert */], __WEBPACK_IMPORTED_MODULE_5__services_dataService__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_6__services_Messages__["a" /* Menssages */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_3__services_ServiceAlert__["a" /* ServiceAlert */],
            __WEBPACK_IMPORTED_MODULE_5__services_dataService__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_6__services_Messages__["a" /* Menssages */],
            __WEBPACK_IMPORTED_MODULE_4__services_ServiceGlobals__["a" /* ServiceGlobals */]])
    ], ModalRestPassComponent);
    return ModalRestPassComponent;
}());

//# sourceMappingURL=modal-rest-pass.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsultaExpedienteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dataService__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_ServiceGlobals__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_details_modal_details__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_ServiceAlert__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_Messages__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ConsultaExpedienteComponent = /** @class */ (function () {
    function ConsultaExpedienteComponent(nav, popoverCtrl, navParams, dataService, actionSheetCtrl, myModal, _serviceAlert, serviceGlobal, _mensajes) {
        // this.serviceGlobal.replaceSpace()
        this.nav = nav;
        this.popoverCtrl = popoverCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.actionSheetCtrl = actionSheetCtrl;
        this.myModal = myModal;
        this._serviceAlert = _serviceAlert;
        this.serviceGlobal = serviceGlobal;
        this._mensajes = _mensajes;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */];
        this.colapse = false;
        this.myDate = new Date();
    }
    ConsultaExpedienteComponent.prototype.ngOnInit = function () {
        this.dataService._form = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormGroup"]({
            'numeroExpedienteIntegral': new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"](null, [
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].maxLength(30)
            ]),
            'numeroExpedienteInterno': new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"](null, [
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].maxLength(30)
            ]),
            'fechaDesde': new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"](null, [
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].maxLength(30)
            ]),
            'fechaHasta': new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"](null, null),
        });
        this.dataService.dataExpediente = {
            numeroExpedienteIntegral: "",
            numeroExpedienteInterno: "",
            fechaDesde: "",
            fechaHasta: ""
        };
    };
    ConsultaExpedienteComponent.prototype.showModal = function (datafront) {
        var dataMo = {
            datapass: datafront
        };
        var modal = this.myModal.create(__WEBPACK_IMPORTED_MODULE_5__modal_details_modal_details__["a" /* ModalDetailsComponent */], dataMo);
        modal.present();
    };
    ConsultaExpedienteComponent.prototype.loadDataExpedientes = function (datafront) {
        var _this = this;
        if (datafront.fechaDesde > datafront.fechaHasta) {
            this._serviceAlert.presentConfirm(this._mensajes.VALIDAR_FECHAS);
            return;
        }
        if (datafront.numeroExpedienteIntegral != '')
            datafront.numeroExpedienteIntegral = this.serviceGlobal.replaceSpace(datafront.numeroExpedienteIntegral);
        if (datafront.numeroExpedienteInterno != '')
            datafront.numeroExpedienteInterno = this.serviceGlobal.replaceSpace(datafront.numeroExpedienteInterno);
        if (datafront.nombreEmpresa != '')
            datafront.nombreEmpresa = this.serviceGlobal.replaceSpace(datafront.nombreEmpresa);
        this._serviceAlert.showLoading();
        var urlSend = this.dataService._uriFlujo + 'nroExpedienteIntegral=' + datafront.numeroExpedienteIntegral + '&nroExpedienteInterno=' + datafront.numeroExpedienteInterno + '&nombreRazon=&fechaDesde=' + datafront.fechaDesde + "&fechaHasta=" + datafront.fechaHasta + "&estado=0&IdFlujo=3";
        this.serviceGlobal.GetApi(urlSend, 1)
            .then(function (data) {
            if (data.Status == 200) {
                _this.dataService.ReportExpediente = data.Data;
            }
            else {
                _this.dataService.message = data.message;
            }
            _this._serviceAlert.dismissLoading();
        }, function (Error) {
            var dataVa = _this.serviceGlobal.parseResponse(Error.error);
            console.log(Error);
            if (dataVa.Status == _this._mensajes.STATUS_NOT_FOUND || dataVa.Status == _this._mensajes.STATUS_TOKEN || dataVa.Status == _this._mensajes.STATUS_NOT_DATA) {
                _this._serviceAlert.presentConfirm(dataVa.Message);
            }
            else {
                _this._serviceAlert.presentConfirm(_this._mensajes.ERROR_GENERICO);
            }
            _this._serviceAlert.dismissLoading();
        });
    };
    ConsultaExpedienteComponent.prototype.logout = function () {
        localStorage.clear();
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], ConsultaExpedienteComponent.prototype, "nav2", void 0);
    ConsultaExpedienteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-consulta',template:/*ion-inline-start:"C:\Projects\APPSTSS\AppMovil\src\pages\ConsultaExpediente\ConsultaExpediente.html"*/'<!-- -->\n<ion-header>\n  <ion-navbar color="miTema">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <strong>Consulta de Expediente\n      </strong>\n    </ion-title>\n    <ion-buttons end>\n\n      <button ion-button tappable (click)="logout()">\n        <ion-icon name="log-out" style="zoom: 130%"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding class="animated fadeIn  common-bg page-consulta">\n\n\n  <form class="list-form-home" [formGroup]="dataService._form" *ngIf="!colapse">\n\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6>\n          <ion-item>\n            <ion-label floating class="lableFont">\n              <ion-icon name="md-grid" item-start class="text-primary-login"></ion-icon>\n              Nro. Exp. Integral\n            </ion-label>\n            <ion-input type="text" class="text-primary-login sinespacio" maxLength="30" name="numeroExpedienteIntegral"\n              id="numeroExpedienteIntegral" formControlName="numeroExpedienteIntegral"\n              [(ngModel)]="dataService.dataExpediente.numeroExpedienteIntegral"></ion-input>\n\n          </ion-item>\n        </ion-col>\n        <ion-col col-6>\n          <ion-item>\n            <ion-label floating>\n              <ion-icon name="md-grid" item-start class="text-primary-login"></ion-icon>\n              Nro. Exp. Interno\n            </ion-label>\n            <ion-input type="text" class="text-primary-login sinespacio" maxLength="30" name="numeroExpedienteInterno"\n              id="numeroExpedienteInterno" formControlName="numeroExpedienteInterno"\n              [(ngModel)]="dataService.dataExpediente.numeroExpedienteInterno"></ion-input>\n\n          </ion-item>\n        </ion-col>\n        <ion-col col-6>\n          <ion-item>\n            <ion-label floating>\n              <ion-icon item-start class="text-primary-login"></ion-icon>\n              Fecha Desde\n            </ion-label>\n            <ion-datetime cancelText ="Cancelar" doneText="Guardar" max ="{{myDate | date:\'yyyy-MM-dd\'}}" displayFormat="YYYY-MM-DD" name="fechaDesde" id="fechaDesde" formControlName="fechaDesde"\n              [(ngModel)]="dataService.dataExpediente.fechaDesde"></ion-datetime>\n\n          </ion-item>\n        </ion-col>\n        <ion-col col-6>\n          <ion-item>\n            <ion-label floating>\n              <ion-icon item-start class="text-primary-login"></ion-icon>\n              Fecha Hasta\n            </ion-label>\n            <ion-datetime cancelText ="Cancelar" doneText="Guardar" max ="{{myDate | date:\'yyyy-MM-dd\'}}" displayFormat="YYYY-MM-DD" name="fechaHasta" id="fechaHasta" formControlName="fechaHasta"\n              [(ngModel)]="dataService.dataExpediente.fechaHasta"></ion-datetime>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <button ion-button icon-start block color="dark" class="buttontn" tappable\n      (click)="loadDataExpedientes(dataService.dataExpediente)">\n      <ion-icon name="md-search"></ion-icon>\n      Buscar\n    </button>\n\n  </form>\n\n  <div text-center *ngIf="dataService.ReportExpediente.length==0">\n    <h4 class="img">Sin registros para mostrar</h4>\n  </div>\n  <ion-list no-border *ngIf="dataService.ReportExpediente.length>0">\n    <ion-list-header>\n      <h2><strong>Resultados</strong> </h2>\n    </ion-list-header>\n    <ion-item-sliding *ngFor="let item of dataService.ReportExpediente">\n      <ion-item>\n        <!--<ion-avatar item-start>\n          <img src="assets/imgs/report.png">\n        </ion-avatar>-->\n        <ion-icon name="md-document" color="primary" item-start></ion-icon>\n        <h4><strong>{{item.NroExpedienteIntegral}}</strong>\n        </h4>\n        <ion-note item-top>\n          <p>{{item.Actividad}}</p>\n        </ion-note>\n        <ion-note item-end>\n          <h4>  {{item.FechaInicio}} </h4>\n        </ion-note>\n\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button color="miTema" (click)="showModal(item)">\n          <ion-icon name="md-eye"></ion-icon>\n          Visualizar\n        </button>\n\n      </ion-item-options>\n    </ion-item-sliding>\n\n\n  </ion-list>\n\n\n\n\n</ion-content>\n\n<ion-footer no-border>\n\n  <!--<div align="center"> <br><br>\n    <ion-fab right bottom>\n      <button ion-fab (click)="colapse=!colapse" *ngIf="!colapse" color="danger">\n        <ion-icon name="md-search"></ion-icon>\n      </button>\n\n      <button ion-fab (click)="colapse=!colapse;" *ngIf="colapse">\n        <ion-icon name="md-search"></ion-icon>\n      </button>\n\n    </ion-fab>\n\n  </div>-->\n\n</ion-footer>\n'/*ion-inline-end:"C:\Projects\APPSTSS\AppMovil\src\pages\ConsultaExpediente\ConsultaExpediente.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_dataService__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_3__services_ServiceGlobals__["a" /* ServiceGlobals */], __WEBPACK_IMPORTED_MODULE_7__services_ServiceAlert__["a" /* ServiceAlert */], __WEBPACK_IMPORTED_MODULE_8__services_Messages__["a" /* Menssages */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_dataService__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_7__services_ServiceAlert__["a" /* ServiceAlert */],
            __WEBPACK_IMPORTED_MODULE_3__services_ServiceGlobals__["a" /* ServiceGlobals */],
            __WEBPACK_IMPORTED_MODULE_8__services_Messages__["a" /* Menssages */]])
    ], ConsultaExpedienteComponent);
    return ConsultaExpedienteComponent;
}());

//
//# sourceMappingURL=ConsultaExpediente.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsultaExpedienteExtComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dataService__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_ServiceGlobals__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_details_modal_details__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_ServiceAlert__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_Messages__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ConsultaExpedienteExtComponent = /** @class */ (function () {
    function ConsultaExpedienteExtComponent(nav, popoverCtrl, navParams, dataService, serviceGlobal, loadingController, actionSheetCtrl, myModal, _serviceAlert, _mensajes) {
        //this.serviceGlobal.replaceSpace()
        this.nav = nav;
        this.popoverCtrl = popoverCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.serviceGlobal = serviceGlobal;
        this.loadingController = loadingController;
        this.actionSheetCtrl = actionSheetCtrl;
        this.myModal = myModal;
        this._serviceAlert = _serviceAlert;
        this._mensajes = _mensajes;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */];
        this.colapse = false;
        this.myDate = new Date();
    }
    ConsultaExpedienteExtComponent.prototype.ngOnInit = function () {
        this.dataService._form = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormGroup"]({
            'numeroExpedienteIntegral': new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"](null, [
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].maxLength(30)
            ]),
            'numeroExpedienteInterno': new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"](null, [
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].maxLength(30)
            ]),
            'nombreEmpresa': new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"](null, [
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].maxLength(100)
            ]),
            'fechaDesde': new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"](null, [
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].maxLength(30)
            ]),
            'fechaHasta': new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"](null, null),
        });
        this.dataService.dataExpedienteExt = {
            numeroExpedienteIntegral: "",
            numeroExpedienteInterno: "",
            nombreEmpresa: "",
            fechaDesde: "",
            fechaHasta: ""
        };
    };
    ConsultaExpedienteExtComponent.prototype.loadDataExpedientes = function (datafront) {
        var _this = this;
        if (datafront.fechaDesde > datafront.fechaHasta) {
            this._serviceAlert.presentConfirm(this._mensajes.VALIDAR_FECHAS);
            return;
        }
        if (datafront.numeroExpedienteIntegral != '')
            datafront.numeroExpedienteIntegral = this.serviceGlobal.replaceSpace(datafront.numeroExpedienteIntegral);
        if (datafront.numeroExpedienteInterno != '')
            datafront.numeroExpedienteInterno = this.serviceGlobal.replaceSpace(datafront.numeroExpedienteInterno);
        if (datafront.nombreEmpresa != '')
            datafront.nombreEmpresa = this.serviceGlobal.replaceSpace(datafront.nombreEmpresa);
        this._serviceAlert.showLoading();
        var urlSend = this.dataService._uriFlujo + 'nroExpedienteIntegral=' + datafront.numeroExpedienteIntegral + '&nroExpedienteInterno=' + datafront.numeroExpedienteInterno + '&nombreRazon=' + datafront.nombreEmpresa + '&fechaDesde=' + datafront.fechaDesde + "&fechaHasta=" + datafront.fechaHasta + "&estado=0&IdFlujo=3";
        this.serviceGlobal.GetApi(urlSend, 1)
            .then(function (data) {
            if (data.Status == 200) {
                _this.dataService.ReportExpediente = data.Data;
            }
            else {
                _this.dataService.message = data.message;
            }
            _this._serviceAlert.dismissLoading();
        }, function (Error) {
            var dataVa = _this.serviceGlobal.parseResponse(Error.error);
            if (dataVa.Status == _this._mensajes.STATUS_NOT_FOUND || dataVa.Status == _this._mensajes.STATUS_TOKEN || dataVa.Status == _this._mensajes.STATUS_NOT_DATA) {
                _this._serviceAlert.presentConfirm(dataVa.Message);
            }
            else {
                _this._serviceAlert.presentConfirm(_this._mensajes.ERROR_GENERICO);
            }
            _this._serviceAlert.dismissLoading();
        });
    };
    ConsultaExpedienteExtComponent.prototype.showModal = function (datafront) {
        var dataMo = {
            datapass: datafront
        };
        var modal = this.myModal.create(__WEBPACK_IMPORTED_MODULE_5__modal_details_modal_details__["a" /* ModalDetailsComponent */], dataMo);
        modal.present();
    };
    ConsultaExpedienteExtComponent.prototype.logout = function () {
        localStorage.clear();
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], ConsultaExpedienteExtComponent.prototype, "nav2", void 0);
    ConsultaExpedienteExtComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-consulta',template:/*ion-inline-start:"C:\Projects\APPSTSS\AppMovil\src\pages\ConsultaExpedienteExt\ConsultaExpedienteExt.html"*/'<!-- -->\n<ion-header>\n  <ion-navbar color="miTema">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <strong>Consulta de Expediente\n      </strong>\n    </ion-title>\n    <ion-buttons end>\n\n      <button ion-button tappable (click)="logout()">\n        <ion-icon name="log-out" style="zoom: 130%"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding class="animated fadeIn  common-bg page-consulta">\n\n\n  <form class="list-form-home" [formGroup]="dataService._form"  *ngIf="!colapse">\n\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6>\n          <ion-item text-wrap>\n            <ion-label floating [ngClass]="lableFont">\n              <ion-icon name="md-grid" item-start class="text-primary-login"></ion-icon>\n              Nro. Exp. Integral\n            </ion-label>\n            <ion-input type="text" class="text-primary-login sinespacio" maxLength="25" name="numeroExpedienteIntegral" id="numeroExpedienteIntegral" formControlName="numeroExpedienteIntegral" [(ngModel)]="dataService.dataExpedienteExt.numeroExpedienteIntegral"></ion-input>\n\n          </ion-item>\n        </ion-col>\n        <ion-col col-6>\n          <ion-item>\n            <ion-label floating>\n              <ion-icon name="md-grid" item-start class="text-primary-login"></ion-icon>\n              Nro. Exp. Interno\n            </ion-label>\n            <ion-input type="text" class="text-primary-login sinespacio" maxLength="25" name="numeroExpedienteInterno" id="numeroExpedienteInterno" formControlName="numeroExpedienteInterno" [(ngModel)]="dataService.dataExpedienteExt.numeroExpedienteInterno"></ion-input>\n\n          </ion-item>\n        </ion-col>\n        <ion-col col-12>\n          <ion-item>\n            <ion-label floating>\n              <ion-icon name="md-grid" item-start class="text-primary-login"></ion-icon>\n              Nombre de  la empresa\n            </ion-label>\n            <ion-input type="text" class="text-primary-login sinespacio" maxLength="100" name="nombreEmpresa" id="nombreEmpresa" formControlName="nombreEmpresa" [(ngModel)]="dataService.dataExpedienteExt.nombreEmpresa"></ion-input>\n\n          </ion-item>\n        </ion-col>\n        <ion-col col-6>\n          <ion-item>\n            <ion-label floating>\n              <ion-icon name="md-calendar" item-start class="text-primary-login"></ion-icon>\n              Fecha Desde\n            </ion-label>\n            <ion-datetime cancelText ="Cancelar" max ="{{myDate | date:\'yyyy-MM-dd\'}}" doneText="Guardar" displayFormat="YYYY-MM-DD" name="fechaDesde" id="fechaDesde" formControlName="fechaDesde" [(ngModel)]="dataService.dataExpedienteExt.fechaDesde"></ion-datetime>\n\n          </ion-item>\n        </ion-col>\n        <ion-col col-6>\n          <ion-item>\n            <ion-label floating>\n              <ion-icon name="md-calendar" item-start class="text-primary-login" ></ion-icon>\n              Fecha Hasta\n            </ion-label>\n            <ion-datetime displayFormat="YYYY-MM-DD" max ="{{myDate | date:\'yyyy-MM-dd\'}}" cancelText ="Cancelar" doneText="Guardar" name="fechaHasta" id="fechaHasta" formControlName="fechaHasta" [(ngModel)]="dataService.dataExpedienteExt.fechaHasta"></ion-datetime>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <button ion-button icon-start block color="dark" class="buttontn" tappable (click)="loadDataExpedientes(dataService.dataExpedienteExt)">\n      <ion-icon name="md-search"></ion-icon>\n      Buscar\n    </button>\n\n  </form>\n\n\n  <div text-center *ngIf="dataService.ReportExpediente.length==0" >\n    <h4 class="img">Sin registros para mostrar</h4>\n  </div>\n  <ion-list no-border *ngIf="dataService.ReportExpediente.length>0">\n      <ion-list-header>\n       <h2><strong>Resultados</strong> </h2> \n      </ion-list-header>\n      <ion-item-sliding *ngFor="let item of dataService.ReportExpediente">\n        <ion-item >\n          <ion-icon name="md-document" color="primary" item-start></ion-icon>\n          <h4><strong>{{item.NroExpedienteIntegral}}</strong> \n          </h4>\n          <ion-note item-top>\n            <p>{{item.Actividad}}</p> \n          </ion-note>\n          <ion-note item-end>\n            <h4>  {{item.FechaInicio}} </h4>\n          </ion-note>\n\n        </ion-item>\n        <ion-item-options side="right">\n          <button ion-button color="miTema" (click)="showModal(item)">\n            <ion-icon name="md-eye"></ion-icon>\n            Visualizar\n          </button>\n        \n        </ion-item-options>\n      </ion-item-sliding>\n     \n\n    </ion-list>\n\n  \n  \n\n</ion-content>\n\n<ion-footer no-border>\n  \n    <!--<div  align="center"> <br><br>\n      <ion-fab right bottom>\n        <button ion-fab (click)="colapse=!colapse" *ngIf="!colapse" color="danger">\n          <ion-icon name="md-search"></ion-icon>\n        </button>\n  \n        <button ion-fab  (click)="colapse=!colapse;" *ngIf="colapse">\n          <ion-icon name="md-search"></ion-icon>\n        </button>\n  \n      </ion-fab>\n  \n    </div>-->\n    \n</ion-footer>\n'/*ion-inline-end:"C:\Projects\APPSTSS\AppMovil\src\pages\ConsultaExpedienteExt\ConsultaExpedienteExt.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_dataService__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_3__services_ServiceGlobals__["a" /* ServiceGlobals */], __WEBPACK_IMPORTED_MODULE_7__services_ServiceAlert__["a" /* ServiceAlert */], __WEBPACK_IMPORTED_MODULE_8__services_Messages__["a" /* Menssages */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_dataService__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_3__services_ServiceGlobals__["a" /* ServiceGlobals */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_7__services_ServiceAlert__["a" /* ServiceAlert */],
            __WEBPACK_IMPORTED_MODULE_8__services_Messages__["a" /* Menssages */]])
    ], ConsultaExpedienteExtComponent);
    return ConsultaExpedienteExtComponent;
}());

//
//# sourceMappingURL=ConsultaExpedienteExt.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrarExpedienteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dataService__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_ServiceGlobals__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_registrar_modal_registrar__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_ServiceAlert__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_Messages__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_AuthenticationService__ = __webpack_require__(358);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var RegistrarExpedienteComponent = /** @class */ (function () {
    function RegistrarExpedienteComponent(nav, popoverCtrl, navParams, dataService, serviceGlobal, loadingController, actionSheetCtrl, myModal, _serviceAlert, _mensajes, auth) {
        this.nav = nav;
        this.popoverCtrl = popoverCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.serviceGlobal = serviceGlobal;
        this.loadingController = loadingController;
        this.actionSheetCtrl = actionSheetCtrl;
        this.myModal = myModal;
        this._serviceAlert = _serviceAlert;
        this._mensajes = _mensajes;
        this.auth = auth;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */];
        this.myDate = new Date();
        this.dataService.dataRegistrarExp = {
            IdRegistroActa: 0,
            IdAccionSeguimientoFlujo: "325",
            NroExpedienteIntegral: "STSS-26122019000004",
            NroExpedienteInterno: "DGIT-0101012612201900157",
            Tipo: 178,
            FechaActa: "2020-01-24T16:33:20.073Z",
            Detalle: "",
            PlantillaHtml: "",
            RutaArchivo: "C:\\Users\\Win10\\Downloads\\itil.pdf",
            TieneInfraccion: 208,
            TieneArregloPago: 0,
            FechaUltimaMod: null,
            IdUsuarioMod: 0,
            Estado: 10,
            numeroExpedienteIntegral: "",
            numeroExpedienteInterno: "",
            nombreEmpresa: "",
            fechaDesde: "",
            fechaHasta: ""
        };
        this.serviceGlobal.validationCharacterNumerick();
        // this.serviceGlobal.replaceSpace()
        //this.showModal(this.dataService.dataRegistrarExp)
    }
    RegistrarExpedienteComponent.prototype.ngOnInit = function () {
        this.dataService._form = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormGroup"]({
            'numeroExpedienteIntegral': new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"](null, [
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].maxLength(30)
            ]),
            'numeroExpedienteInterno': new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"](null, [
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].maxLength(30)
            ]),
            'nombreEmpresa': new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"](null, [
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].maxLength(30)
            ]),
            'fechaDesde': new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"](null, [
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].maxLength(30)
            ]),
            'fechaHasta': new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"](null, null),
        });
    };
    RegistrarExpedienteComponent.prototype.loadDataExpedientes = function (datafront) {
        var _this = this;
        console.log(datafront);
        // alert()
        if (datafront.fechaDesde > datafront.fechaHasta) {
            this._serviceAlert.presentConfirm(this._mensajes.VALIDAR_FECHAS);
            return;
        }
        if (datafront.numeroExpedienteIntegral != '')
            datafront.numeroExpedienteIntegral = this.serviceGlobal.replaceSpace(datafront.numeroExpedienteIntegral);
        if (datafront.numeroExpedienteInterno != '')
            datafront.numeroExpedienteInterno = this.serviceGlobal.replaceSpace(datafront.numeroExpedienteInterno);
        if (datafront.nombreEmpresa != '')
            datafront.nombreEmpresa = this.serviceGlobal.replaceSpace(datafront.nombreEmpresa);
        this._serviceAlert.showLoading();
        var urlSend = this.dataService._uriFlujoEspecial + 'nroExpedienteIntegral=' + datafront.numeroExpedienteIntegral + '&nroExpedienteInterno=' + datafront.numeroExpedienteInterno + '&nombreRazon=' + datafront.nombreEmpresa + '&fechaDesde=' + datafront.fechaDesde + "&fechaHasta=" + datafront.fechaHasta + "&estado=62&IdFlujo=3&idEstadoFlujo=35&idAccionFlujo=3";
        this.serviceGlobal.GetApi(urlSend, 1)
            .then(function (data) {
            if (data.Status == 200) {
                _this.dataService.ReportExpediente = data.Data;
            }
            else {
                _this.dataService.message = data.message;
            }
            _this._serviceAlert.dismissLoading();
        }, function (Error) {
            var dataVa = _this.serviceGlobal.parseResponse(Error.error);
            if (dataVa.Status == _this._mensajes.STATUS_NOT_FOUND || dataVa.Status == _this._mensajes.STATUS_TOKEN || dataVa.Status == _this._mensajes.STATUS_NOT_DATA) {
                _this._serviceAlert.presentConfirm(dataVa.Message);
            }
            else {
                _this._serviceAlert.presentConfirm(_this._mensajes.ERROR_GENERICO);
            }
            _this._serviceAlert.dismissLoading();
        });
    };
    RegistrarExpedienteComponent.prototype.presentActionSheet = function (Detalle) {
        var actionSheet = this.actionSheetCtrl.create({
            title: Detalle,
            buttons: [{
                    text: 'Contratar',
                    role: 'destructive',
                    icon: "md-call",
                    handler: function () {
                        console.log('Destructive clicked');
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    icon: 'md-close',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }]
        });
        actionSheet.present();
    };
    RegistrarExpedienteComponent.prototype.showModal = function (datafront, index) {
        var _this = this;
        var dataMo = {
            datapass: datafront,
        };
        var modal = this.myModal.create(__WEBPACK_IMPORTED_MODULE_5__modal_registrar_modal_registrar__["a" /* ModalRegistrarComponent */], dataMo);
        modal.onDidDismiss(function (data) {
            _this.dataService.ReportExpediente = _this.dataService.ReportExpediente.filter(function (current) {
                if (current['NroExpedienteIntegral'] !== data['numExp']) {
                    return current;
                }
            });
        });
        modal.present();
    };
    RegistrarExpedienteComponent.prototype.logout = function () {
        this.auth.logOut();
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], RegistrarExpedienteComponent.prototype, "nav2", void 0);
    RegistrarExpedienteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-nosotros',template:/*ion-inline-start:"C:\Projects\APPSTSS\AppMovil\src\pages\RegistrarExpediente\RegistrarExpediente.html"*/'<!-- -->\n<ion-header>\n  <ion-navbar color="miTema">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <strong>Registrar Info. de Expedientes\n      </strong>\n    </ion-title>\n    <ion-buttons end>\n\n      <button ion-button tappable (click)="logout()">\n        <ion-icon name="log-out" style="zoom: 130%"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n\n  \n\n  \n<ion-content no-padding class="animated fadeIn  common-bg page-consulta">\n\n\n  <form class="list-form-home" [formGroup]="dataService._form"  *ngIf="!colapse">\n\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6>\n          <ion-item>\n            <ion-label floating class="labelFont">\n              <ion-icon name="md-grid" item-start class="text-primary-login"></ion-icon>\n              Nro. Exp. Integral\n            </ion-label>\n            <ion-input type="text" class="text-primary-login sinespacio" maxLength="25" name="numeroExpedienteIntegral" id="numeroExpedienteIntegral" formControlName="numeroExpedienteIntegral" [(ngModel)]="dataService.dataRegistrarExp.numeroExpedienteIntegral"></ion-input>\n\n          </ion-item>\n        </ion-col>\n        <ion-col col-6>\n          <ion-item>\n            <ion-label floating class="labelFont">\n              <ion-icon name="md-grid" item-start class="text-primary-login"></ion-icon>\n              Nro. Exp. Interno\n            </ion-label>\n            <ion-input type="text" class="text-primary-login sinespacio" maxLength="25" name="numeroExpedienteInterno" id="numeroExpedienteInterno" formControlName="numeroExpedienteInterno" [(ngModel)]="dataService.dataRegistrarExp.numeroExpedienteInterno"></ion-input>\n\n          </ion-item>\n        </ion-col>\n        <ion-col col-12>\n          <ion-item>\n            <ion-label floating class="labelFont">\n              <ion-icon name="md-grid" item-start class="text-primary-login"></ion-icon>\n              Nombre de  la empresa\n            </ion-label>\n            <ion-input type="text" class="text-primary-login sinespacio" maxLength="25" name="nombreEmpresa" id="nombreEmpresa" formControlName="nombreEmpresa" [(ngModel)]="dataService.dataRegistrarExp.nombreEmpresa"></ion-input>\n\n          </ion-item>\n        </ion-col>\n        <ion-col col-6>\n          <ion-item>\n            <ion-label floating class="labelFont">\n              <ion-icon name="md-calendar" cancelText ="Cancelar" doneText="Guardar" item-start class="text-primary-login"></ion-icon>\n              Fecha Desde\n              \n\n            </ion-label>\n            <ion-datetime displayFormat="YYYY-MM-DD" max ="{{myDate | date:\'yyyy-MM-dd\'}}" cancelText ="Cancelar" doneText="Guardar" name="fechaDesde" id="fechaDesde" formControlName="fechaDesde" [(ngModel)]="dataService.dataRegistrarExp.fechaDesde"></ion-datetime>\n\n          </ion-item>\n        </ion-col>\n        <ion-col col-6>\n          <ion-item>\n            <ion-label floating class="labelFont">\n              <ion-icon name="md-calendar" item-start class="text-primary-login" ></ion-icon>\n              Fecha Hasta\n            </ion-label>\n            <ion-datetime displayFormat="YYYY-MM-DD" max ="{{myDate | date:\'yyyy-MM-dd\'}}" cancelText ="Cancelar" doneText="Guardar" name="fechaHasta" id="fechaHasta" formControlName="fechaHasta" [(ngModel)]="dataService.dataRegistrarExp.fechaHasta"></ion-datetime>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <button ion-button icon-start block color="dark" class="buttontn" tappable (click)="loadDataExpedientes(dataService.dataRegistrarExp)">\n      <ion-icon name="md-search"></ion-icon>\n      Buscar\n    </button>\n\n    \n  </form>\n\n\n  <div text-center *ngIf="dataService.ReportExpediente.length==0; else hasElement">\n    <h4 class="img">Sin registros para mostrar</h4>\n  </div>\n  <ng-template #hasElement>\n    <ion-list>\n      <ion-list-header>\n        <h2><strong>Resultados</strong> </h2>\n      </ion-list-header>\n      <ion-item-sliding *ngFor="let item of dataService.ReportExpediente;index as i">\n        <ion-item class="item item-block item-md">\n            <ion-icon name="md-document" color="primary" item-start></ion-icon>\n             <ion-label text-wrap col-9>\n               <h2>{{item.NroExpedienteIntegral}}</h2>\n               <p>{{item.Actividad}}</p>\n             </ion-label>\n             <ion-label text-wrap class="wrap-dateTime" col-3>\n                {{item.FechaInicio}}\n             </ion-label>\n        </ion-item>\n        <ion-item-options side="right">\n          <button ion-button color="miTema" (click)="showModal(item,i)">\n            <ion-icon name="md-eye"></ion-icon>\n            Visualizar\n          </button>\n        </ion-item-options>\n      \n      </ion-item-sliding>\n\n    </ion-list>\n\n  </ng-template>\n\n  \n  \n\n</ion-content>\n\n<ion-footer no-border>\n  \n    <!--<div  align="center"> <br><br>\n      <ion-fab right bottom>\n        <button ion-fab (click)="colapse=!colapse" *ngIf="!colapse" color="danger">\n          <ion-icon name="md-search"></ion-icon>\n        </button>\n  \n        <button ion-fab  (click)="colapse=!colapse;" *ngIf="colapse">\n          <ion-icon name="md-search"></ion-icon>\n        </button>\n  \n      </ion-fab>\n  \n    </div>-->\n    \n</ion-footer>\n'/*ion-inline-end:"C:\Projects\APPSTSS\AppMovil\src\pages\RegistrarExpediente\RegistrarExpediente.html"*/,
            styles: ['RegistrarExpediente.scss'],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_dataService__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_3__services_ServiceGlobals__["a" /* ServiceGlobals */], __WEBPACK_IMPORTED_MODULE_7__services_ServiceAlert__["a" /* ServiceAlert */], __WEBPACK_IMPORTED_MODULE_8__services_Messages__["a" /* Menssages */], __WEBPACK_IMPORTED_MODULE_9__services_AuthenticationService__["a" /* AuthenticationService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_dataService__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_3__services_ServiceGlobals__["a" /* ServiceGlobals */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_7__services_ServiceAlert__["a" /* ServiceAlert */],
            __WEBPACK_IMPORTED_MODULE_8__services_Messages__["a" /* Menssages */],
            __WEBPACK_IMPORTED_MODULE_9__services_AuthenticationService__["a" /* AuthenticationService */]])
    ], RegistrarExpedienteComponent);
    return RegistrarExpedienteComponent;
}());

//
//# sourceMappingURL=RegistrarExpediente.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalRegistrarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_ServiceAlert__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_ServiceGlobals__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_Messages__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_dataService__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modal_forma_pago_modal_forma_pago__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_PhotoService__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Models_ListFiles__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Models_InsertActaModel__ = __webpack_require__(708);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};












var ModalRegistrarComponent = /** @class */ (function () {
    function ModalRegistrarComponent(nav, actionSheetCtrl, viewCtrl, _serviceAlert, dataService, ServiceGlobal, _mensajes, navParams, myModal, photo) {
        this.nav = nav;
        this.actionSheetCtrl = actionSheetCtrl;
        this.viewCtrl = viewCtrl;
        this._serviceAlert = _serviceAlert;
        this.dataService = dataService;
        this.ServiceGlobal = ServiceGlobal;
        this._mensajes = _mensajes;
        this.navParams = navParams;
        this.myModal = myModal;
        this.photo = photo;
        this.hasInfraction = false;
        this.actaFiles = new Array();
        this.attchFiles = new Array();
        this.dataToStorage = new Array();
        this.listPathFile = [];
        this.listUsuario = [];
        this.urlimg = '';
        this.ServiceGlobal.validationNumeros();
        this.dataService.dataRegistrarExp = {
            numeroExpedienteIntegral: "",
            numeroExpedienteInterno: "",
            IdRegistroActa: 0,
            IdAccionSeguimientoFlujo: "",
            NroExpedienteIntegral: "",
            NroExpedienteInterno: "",
            Tipo: 178,
            FechaActa: "",
            Detalle: "",
            PlantillaHtml: "",
            RutaArchivo: "",
            TieneInfraccion: 208,
            TieneArregloPago: "",
            FechaUltimaMod: null,
            IdUsuarioMod: 0,
            Estado: 10,
            nombreEmpresa: "",
            fechaDesde: "",
            fechaHasta: "",
            file: "",
            fileVideo: '',
            fileAudio: '',
            tipoArchivo: 0,
            Porcentaje: 0,
            IdTrabajador: "",
            IdPatronoEmpleador: "",
            ListaAprobador: []
        };
        this.ComForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            'NombreRazon': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, []),
            'NroExpedienteIntegral': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
            ]),
            'FechaActa': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required
            ]),
            'tipoActa': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required
            ]),
            // 'TieneInfraccion': new FormControl(null, [
            //   Validators.required
            // ]),
            // 'TieneArregloPago': new FormControl(null, [
            //   Validators.required
            // ]),
            // 'file': new FormControl(null, [
            //   Validators.required
            // ]),
            'RutaArchivo': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, null),
            'tipoArchivo': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, null),
            'fileVideo': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, null),
            'fileAudio': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, null),
            'Porcentaje': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, null),
        });
        this.listPathFile = [];
        this.extensiones = ".png";
    }
    ModalRegistrarComponent.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ModalRegistrarComponent.prototype.dismiss = function (expediente) {
        var data = { 'numExp': expediente };
        this.viewCtrl.dismiss(data);
    };
    ModalRegistrarComponent.prototype.TakePicture = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var photoData, current;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.photo.takePicture()];
                    case 1:
                        photoData = _a.sent();
                        if (photoData['error'] !== undefined) {
                            console.log('El dispositivo no soporta esta funcionalidad');
                            return [2 /*return*/];
                        }
                        current = new __WEBPACK_IMPORTED_MODULE_10__Models_ListFiles__["a" /* ListFiles */]();
                        current.name = photoData['fileName'];
                        current.path = photoData['path'];
                        current.type = 1;
                        this.actaFiles.push(current);
                        return [2 /*return*/];
                }
            });
        });
    };
    ModalRegistrarComponent.prototype.delete = function (item) {
        var index = this.actaFiles.indexOf(item);
        if (index !== -1) {
            this.actaFiles.splice(index, 1);
        }
    };
    ModalRegistrarComponent.prototype.deleteAttch = function (item) {
        var index = this.attchFiles.indexOf(item);
        if (index !== -1) {
            this.attchFiles.splice(index, 1);
        }
    };
    ModalRegistrarComponent.prototype.chooseFromGallery = function () {
        return __awaiter(this, void 0, void 0, function () {
            var gallery, collection, i, current;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.photo.openGallery()];
                    case 1:
                        gallery = _a.sent();
                        if (gallery == null)
                            return [2 /*return*/];
                        if (gallery['error'] !== undefined) {
                            console.log('El dispositivo no soporta esta funcionalidad');
                            return [2 /*return*/];
                        }
                        collection = gallery;
                        for (i = 0; i <= collection.length - 1; i++) {
                            current = new __WEBPACK_IMPORTED_MODULE_10__Models_ListFiles__["a" /* ListFiles */]();
                            current.name = collection[i].fileName;
                            current.path = collection[i].path;
                            current.type = 1;
                            this.actaFiles.push(current);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ModalRegistrarComponent.prototype.choosePdf = function () {
        return __awaiter(this, void 0, void 0, function () {
            var pdfData, current;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.photo.openDirectory()];
                    case 1:
                        pdfData = _a.sent();
                        console.log(pdfData);
                        if (pdfData == null)
                            return [2 /*return*/];
                        if (pdfData['error'] !== undefined) {
                            console.log('El dispositivo no soporta esta funcionalidad');
                            return [2 /*return*/];
                        }
                        current = new __WEBPACK_IMPORTED_MODULE_10__Models_ListFiles__["a" /* ListFiles */]();
                        current.name = pdfData['fileName'];
                        current.path = pdfData['path'];
                        current.type = 3;
                        this.actaFiles.push(current);
                        return [2 /*return*/];
                }
            });
        });
    };
    ModalRegistrarComponent.prototype.chooseImage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var gallery, collection, i, current;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.photo.openGallery()];
                    case 1:
                        gallery = _a.sent();
                        if (gallery == null)
                            return [2 /*return*/];
                        if (gallery['error'] !== undefined) {
                            console.log('El dispositivo no soporta esta funcionalidad');
                            return [2 /*return*/];
                        }
                        collection = gallery;
                        for (i = 0; i <= collection.length - 1; i++) {
                            current = new __WEBPACK_IMPORTED_MODULE_10__Models_ListFiles__["a" /* ListFiles */]();
                            current.name = collection[i].fileName;
                            current.path = collection[i].path;
                            current.type = 1;
                            this.attchFiles.push(current);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ModalRegistrarComponent.prototype.chooseFile = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            var file, current;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.photo.openFileType(type)];
                    case 1:
                        file = _a.sent();
                        if (file == null)
                            return [2 /*return*/];
                        if (file['error'] !== undefined) {
                            console.log('El dispositivo no soporta esta funcionalidad');
                            return [2 /*return*/];
                        }
                        current = new __WEBPACK_IMPORTED_MODULE_10__Models_ListFiles__["a" /* ListFiles */]();
                        current.name = file['fileName'];
                        current.path = file['path'];
                        current.type = this.photo.getFileContent(type);
                        this.attchFiles.push(current);
                        return [2 /*return*/];
                }
            });
        });
    };
    ModalRegistrarComponent.prototype.presentActionSheet = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var actionSheet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        actionSheet = this.actionSheetCtrl.create({
                            title: 'Adjuntar Archivo',
                            buttons: [
                                {
                                    text: 'Galeria',
                                    icon: 'image',
                                    handler: function () {
                                        _this.chooseFromGallery();
                                    }
                                },
                                {
                                    text: 'Pdf',
                                    icon: 'document',
                                    handler: function () {
                                        _this.choosePdf();
                                    }
                                },
                                {
                                    text: 'Cancel',
                                    role: 'cancel'
                                }
                            ]
                        });
                        return [4 /*yield*/, actionSheet.present()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ModalRegistrarComponent.prototype.presentFileActionSheet = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var actionSheet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        actionSheet = this.actionSheetCtrl.create({
                            title: 'Adjuntar Archivo',
                            buttons: [
                                {
                                    text: 'Galeria',
                                    icon: 'image',
                                    handler: function () {
                                        _this.chooseImage();
                                    }
                                },
                                {
                                    text: 'Video',
                                    icon: 'videocam',
                                    handler: function () {
                                        _this.chooseFile(__WEBPACK_IMPORTED_MODULE_9__services_PhotoService__["a" /* FileType */].Video);
                                    }
                                },
                                {
                                    text: 'Audio',
                                    icon: 'musical-notes',
                                    handler: function () {
                                        _this.chooseFile(__WEBPACK_IMPORTED_MODULE_9__services_PhotoService__["a" /* FileType */].Audio);
                                    }
                                },
                                {
                                    text: 'Pdf',
                                    icon: 'document',
                                    handler: function () {
                                        _this.chooseFile(__WEBPACK_IMPORTED_MODULE_9__services_PhotoService__["a" /* FileType */].Pdf);
                                    }
                                },
                                {
                                    text: 'Cancel',
                                    role: 'cancel'
                                },
                            ]
                        });
                        return [4 /*yield*/, actionSheet.present()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ModalRegistrarComponent.prototype.ionViewDidLoad = function () {
        this.dataService.dataRegistrarExp = {
            numeroExpedienteIntegral: "",
            numeroExpedienteInterno: "",
            IdRegistroActa: 0,
            IdAccionSeguimientoFlujo: "325",
            NroExpedienteIntegral: "",
            NroExpedienteInterno: "",
            Tipo: 178,
            FechaActa: "",
            Detalle: "",
            PlantillaHtml: "",
            RutaArchivo: "",
            TieneInfraccion: 208,
            TieneArregloPago: "",
            FechaUltimaMod: null,
            IdUsuarioMod: 0,
            Estado: 10,
            nombreEmpresa: "",
            fechaDesde: "",
            fechaHasta: "",
            file: "",
            NombreRazon: "",
            tipoActa: "Acta Circunstancial",
            tipoArchivo: 0,
            Porcentaje: 0,
            IdTrabajador: "",
            IdPatronoEmpleador: "",
            ListaAprobador: []
        };
        var body = JSON.parse(JSON.stringify(this.navParams.get("datapass")));
        this.dataService.dataRegistrarExp = body;
        this.dataService.dataRegistrarExp["FechaActa"] = new Date().toLocaleString();
        this.dataService.dataRegistrarExp["Porcentaje"] = body.Porcentaje;
        this.listUsuario = body.ListaAprobador;
        console.log("desde modal-registro: " + JSON.stringify(this.dataService.dataRegistrarExp));
        //this.loadTipoActa()
        this.dataService.solPago = {
            IdAccionSeguimientoFlujo: "374",
            IdFlujo: "3",
            NroExpedienteIntegral: "STSS-17012020000036",
            NroExpedienteInterno: "DGIT-01011701202000004",
            IdTrabajador: 14,
            IdPatronoEmpleador: 1,
            IdTipo: 178,
            Estado: 10
        };
    };
    ModalRegistrarComponent.prototype.ngOnInit = function () {
        /*this.body=this;
        
    
        $('#file').change(function () {
         
          $('#file')[0].files;
           alert()
          
        })*/
        var self = this;
        __WEBPACK_IMPORTED_MODULE_7_jquery__(function () {
            __WEBPACK_IMPORTED_MODULE_7_jquery__('#RutaArchivo').change('click', function (e) {
                self.onFile(e);
            });
            __WEBPACK_IMPORTED_MODULE_7_jquery__('#file').change('click', function (e) {
                self.onArchivoSeleccionado(e);
            });
        });
    };
    ModalRegistrarComponent.prototype.valFile = function (file, tipo) {
        var valid = true;
        if (tipo == 1 && file != 'image/jpeg' && file != 'image/png' && file != 'application/pdf' && file != 'image/jpg') {
            valid = false;
        }
        else if (tipo == 2 && file != 'audio/mpeg' && file != 'audio/mp3' && file != '') {
            valid = false;
        }
        else if (tipo == 3 && file != 'video/mp4') {
            valid = false;
        }
        return valid;
    };
    ModalRegistrarComponent.prototype.onArchivoSeleccionado = function ($event) {
        var _this = this;
        var tipoFile = this.dataService.dataRegistrarExp['tipoArchivo'];
        if ($event.target.files.length === 1) {
            // alert($event.target.files[0].type)
            // console.log($event.target.files[0])
            if (!this.valFile($event.target.files[0].type, tipoFile)) {
                __WEBPACK_IMPORTED_MODULE_7_jquery__('#file').val('');
                this._serviceAlert.presentConfirm('El tipo de archivo no es valido');
                return;
            }
            //if(tipoFile==1 && )
            var fileSize = $event.target.files[0].size;
            var siezekiloByte = parseInt(fileSize) / 1024;
            if (siezekiloByte > 50000) {
                this._serviceAlert.presentConfirm('El archivo sobrepasa los 50MB permitidos');
                return;
            }
            this.urlimg = "";
            this.file = $event.target.files[0];
            var reader = new FileReader();
            this.urlimg = $event.target.files[0].name;
            reader.readAsDataURL($event.target.files[0]);
            setTimeout(function () {
                _this._serviceAlert.showLoading();
                _this.SaveFiles(_this.file, _this.dataService.dataRegistrarExp['tipoArchivo'], _this.urlimg, 2);
            }, 2000);
        }
    };
    ModalRegistrarComponent.prototype.onFile = function ($event2) {
        var _this = this;
        // alert()
        if ($event2.target.files.length === 1) {
            if (!this.valFile($event2.target.files[0].type, 1)) {
                __WEBPACK_IMPORTED_MODULE_7_jquery__('#RutaArchivo').val('');
                this._serviceAlert.presentConfirm('El tipo de archivo no es valido');
                return;
            }
            var fileSize = $event2.target.files[0].size;
            var siezekiloByte = parseInt(fileSize) / 1024;
            if (siezekiloByte > 50000) {
                this._serviceAlert.presentConfirm('El archivo sobrepasa los 50MB permitidos');
                return;
            }
            this.rutaFile = "";
            this.rutaFile = $event2.target.files[0];
            var reader = new FileReader();
            this.rutaSelectFile = $event2.target.files[0].name;
            console.log(this.rutaSelectFile);
            reader.readAsDataURL($event2.target.files[0]);
            setTimeout(function () {
                _this._serviceAlert.showLoading();
                _this.SaveFiles(_this.rutaFile, _this.dataService.dataRegistrarExp['RutaArchivo'], _this.rutaSelectFile, 1);
            }, 2000);
        }
    };
    ModalRegistrarComponent.prototype.onAplicaPago = function (datafront) {
        //this.mostrarModalFormaPago(datafront)
        // return
        if (datafront.TieneArregloPago == 1 && datafront.TieneInfraccion == 0) {
            this._serviceAlert.presentConfirm("No se permite ingresar un arreglo de pago si no existe infracción");
            datafront.TieneArregloPago = 0;
            return;
        }
        if (datafront.TieneArregloPago == 1 && datafront.TieneInfraccion == 1) {
            // this._serviceAlert.showLoading();
            datafront.IdTrabajador = this.dataService.dataRegistrarExp["IdTrabajador"];
            datafront.IdPatronoEmpleador = this.dataService.dataRegistrarExp["IdPatronoEmpleador"];
            this.mostrarModalFormaPago(datafront);
            // var body = JSON.stringify({
            //   IdAccionSeguimientoFlujo: datafront.ListaAcciones[0].IdAccionSeguimientoFlujo,
            //   IdFlujo: "3",
            //   NroExpedienteIntegral: datafront.NroExpedienteIntegral,
            //   NroExpedienteInterno: datafront.NroExpedienteInterno,
            //   IdTrabajador: this.dataService.dataRegistrarExp["IdTrabajador"],
            //   IdPatronoEmpleador: this.dataService.dataRegistrarExp["IdPatronoEmpleador"],
            //   IdTipo: 178,
            //   Estado: datafront.ListaAcciones[0].Estado
            // })
            // //console.log(this.dataService.uriSolPago)
            // this.ServiceGlobal.SendData(body, this.dataService.uriSolPago, 1, 5)
            //   .then(data => {
            //     if (data.Status == 200) {
            //       // this.dataService.ReportExpediente = data.Data;
            //       datafront.IdSolicitudArregloPago = data.Data;
            //       // this._serviceAlert.presentConfirm(data.Message)
            //       this.mostrarModalFormaPago(datafront)
            //     } else {
            //       this.dataService.message = data.message;
            //     }
            //     this._serviceAlert.dismissLoading()
            //   },
            //     Error => {
            //       let dataVa = this.ServiceGlobal.parseResponse(Error.error)
            //       if (dataVa.Status == 500 || dataVa.Status == this._mensajes.STATUS_NOT_FOUND || dataVa.Status == this._mensajes.STATUS_TOKEN || dataVa.Status == this._mensajes.STATUS_NOT_DATA) {
            //         this._serviceAlert.presentConfirm(dataVa.Message);
            //       } else {
            //         this._serviceAlert.presentConfirm(this._mensajes.ERROR_GENERICO);
            //       }
            //       this._serviceAlert.dismissLoading()
            //     }
            //   );
        }
    };
    ModalRegistrarComponent.prototype.setToLocalStorage = function (data) {
        var hasData = JSON.parse(localStorage.getItem('background'));
        if (hasData == null)
            hasData = Array();
        hasData.push(data);
        localStorage.setItem('background', JSON.stringify(hasData));
    };
    ModalRegistrarComponent.prototype.Save = function (comp) {
        return __awaiter(this, void 0, void 0, function () {
            var insert, result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.hasInfraction && this.payment == undefined) {
                            this._serviceAlert.presentConfirm('Debe agregar arreglo de pago');
                            return [2 /*return*/];
                        }
                        insert = new __WEBPACK_IMPORTED_MODULE_11__Models_InsertActaModel__["a" /* InsertActaModel */]();
                        insert.IdAccionSeguimiento = comp.ListaAcciones[0].IdAccionSeguimientoFlujo;
                        insert.NroExpedienteIntegral = comp.NroExpedienteIntegral;
                        insert.NroExpedienteInterno = comp.NroExpedienteInterno;
                        // insert.Tipo = 178;
                        insert.FechaActa = comp.FechaActa;
                        insert.TieneInfraccion = this.hasInfraction ? 1 : 0;
                        insert.TieneArregloPago = this.hasInfraction ? 1 : 0;
                        //insert.Estado = 10;
                        insert.rutasActas = this.actaFiles;
                        insert.rutasAttch = this.attchFiles;
                        insert.IdAccionSeguimiento = comp.ListaAcciones[0].IdAccionSeguimientoFlujo;
                        insert.ArregloPago = this.payment;
                        this._serviceAlert.showLoading();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        console.log('request:', insert);
                        return [4 /*yield*/, this.ServiceGlobal.UpdateActa(insert)];
                    case 2:
                        result = _a.sent();
                        console.log(result);
                        this._serviceAlert.presentConfirm('datos actualizados');
                        this._serviceAlert.dismissLoading();
                        this.dismiss(insert.NroExpedienteIntegral);
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.log('catch error', e_1);
                        if (e_1.status == 0) {
                            this._serviceAlert.presentConfirm('No se puedo establecer conexion a internet, se almacenara la información para su procesamiento ');
                            this.setToLocalStorage(insert);
                            this._serviceAlert.dismissLoading();
                            this.dismiss(insert.NroExpedienteIntegral);
                        }
                        else {
                            this._serviceAlert.presentConfirm('Error al actualizar los datos, verificque la informacion ingresada');
                            this._serviceAlert.dismissLoading();
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ModalRegistrarComponent.prototype.SaveFiles = function (file, tipo, nombre, addPath) {
        var _this = this;
        console.log(nombre);
        var formData = new FormData();
        formData.append('archivo', file);
        this.ServiceGlobal.SendFile(formData, "cargararchivo")
            .then(function (data) {
            var dataVa = _this.ServiceGlobal.parseResponse(data);
            if (dataVa.Status == 200) {
                if (addPath == 2) {
                    _this.listPathFile.push({
                        tipo: tipo,
                        Url: dataVa.Data[0].Path,
                        nombre: nombre
                    });
                    __WEBPACK_IMPORTED_MODULE_7_jquery__('#file').val('');
                }
                else {
                    _this.rutaFinal = dataVa.Data[0].Path;
                    __WEBPACK_IMPORTED_MODULE_7_jquery__('#RutaArchivo').val('');
                }
                console.log(_this.listPathFile);
            }
            else {
                // sendFileRes = false;
                _this._serviceAlert.presentConfirm(_this._mensajes.ERROR_GENERICO);
            }
            _this._serviceAlert.dismissLoading();
        }, function (Error) {
            var dataVa = _this.ServiceGlobal.parseResponse(Error.error);
            if (dataVa.Status == 500 || dataVa.Status == _this._mensajes.STATUS_NOT_FOUND || dataVa.Status == _this._mensajes.STATUS_TOKEN || dataVa.Status == _this._mensajes.STATUS_NOT_DATA) {
                _this._serviceAlert.presentConfirm(dataVa.Message);
            }
            else {
                _this._serviceAlert.presentConfirm(_this._mensajes.ERROR_GENERICO);
            }
            //sendFileRes = false;
            _this._serviceAlert.dismissLoading();
        });
        //return sendFileRes;
    };
    ModalRegistrarComponent.prototype.eliminar = function (index) {
        for (var i = 0; i < this.listPathFile.length; i++) {
            if (i == index) {
                this.listPathFile.splice(i, 1);
                break;
            }
        }
    };
    ModalRegistrarComponent.prototype.truncate = function (text) {
        if (text.length > 15)
            text = text.substring(0, 15) + '...';
        return text;
    };
    ModalRegistrarComponent.prototype.mostrarModalFormaPago = function (datafront) {
        var dataMo = {
            datapass: datafront
        };
        var modal = this.myModal.create(__WEBPACK_IMPORTED_MODULE_8__modal_forma_pago_modal_forma_pago__["a" /* ModalFormaPagoComponent */], dataMo);
        modal.present();
    };
    ModalRegistrarComponent.prototype.addPayment = function (e) {
        var _this = this;
        // console.log(this.dataService.dataRegistrarExp);
        //this.mostrarModalFormaPago(this.dataService.dataRegistrarExp);
        var payment = this.myModal.create(__WEBPACK_IMPORTED_MODULE_8__modal_forma_pago_modal_forma_pago__["a" /* ModalFormaPagoComponent */], { datapass: this.dataService.dataRegistrarExp });
        payment.onDidDismiss(function (data) {
            if (data['isSave']) {
                _this.hasPayment = true;
                _this.payment = data['data'];
            }
        });
        payment.present();
    };
    ModalRegistrarComponent.prototype.deletePayment = function () {
        this.hasPayment = undefined;
    };
    ModalRegistrarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'modal-details',template:/*ion-inline-start:"C:\Projects\APPSTSS\AppMovil\src\pages\modal-registrar\modal-registrar.html"*/'<!--\n  Generated template for the ModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<style>\n  input[type="file"] {\n    display: none;\n}\n.custom-file-upload {\n    border: 1px solid #ccc;\n    display: inline-block;\n    padding: 6px 12px;\n    cursor: pointer;\n}\n</style>\n<ion-header>\n\n  <ion-navbar color="miTema">\n    <ion-title>\n      <strong>Registrar Info. de Expediente\n      </strong>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="closeModal()">Cerrar</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content no-padding>\n\n\n\n  <ion-content #popoverContent padding class="popover-page">\n\n    <form class="list-form-home" [formGroup]="ComForm">\n\n      <ion-grid>\n        <ion-row>\n          <ion-col col-12>\n            <ion-item>\n              <ion-label floating>\n                <ion-icon name="md-grid" item-start class="text-primary-login"></ion-icon>\n                <span class="text-danger">*</span>\n                Razón Social\n              </ion-label>\n              <ion-input type="text" id="NombreRazon" name="NombreRazon" class="text-primary-login" maxLength="25"\n                formControlName="NombreRazon" [(ngModel)]="dataService.dataRegistrarExp.NombreRazon" [readonly]="true">\n              </ion-input>\n\n            </ion-item>\n          </ion-col>\n          <ion-col col-12>\n            <ion-item>\n              <ion-label floating>\n                <ion-icon name="md-grid" item-start class="text-primary-login"></ion-icon>\n                <span class="text-danger">*</span>\n                Número de expediente integral\n              </ion-label>\n              <ion-input type="text" class="text-primary-login" maxLength="25" id="NroExpedienteIntegral"\n                name="NroExpedienteIntegral" formControlName="NroExpedienteIntegral"\n                [(ngModel)]="dataService.dataRegistrarExp.NroExpedienteIntegral" [readonly]="true"></ion-input>\n\n            </ion-item>\n          </ion-col>\n\n          <!--- -->\n          <ion-col col-12>\n            <ion-item>\n              <ion-label floating>\n                <ion-icon name="md-calendar" item-start class="text-primary-login"></ion-icon>\n                <span class="text-danger">*</span>\n                Fecha Registro\n              </ion-label>\n              <ion-input displayFormat="YYYY-MM-DD" id="FechaActa" name="FechaActa" formControlName="FechaActa"\n                [(ngModel)]="dataService.dataRegistrarExp.FechaActa" [readonly]="true"></ion-input>\n\n            </ion-item>\n          </ion-col>\n          <!--<ion-item>\n            <ion-label floating>              \n              Porcentaje de Avance {{dataService.dataRegistrarExp.Porcentaje}}%\n            </ion-label>\n            \n            <ion-range min="0" max="100" pin="true"  snaps="trues"  name="Porcentaje" id="Porcentaje"  [(ngModel)]="dataService.dataRegistrarExp.Porcentaje" formControlName="Porcentaje" color="secondary" >\n              <ion-icon range-left small name="ios-remove-circle-outline"></ion-icon>\n              <ion-icon range-right name="md-checkbox"></ion-icon>\n            </ion-range>\n          </ion-item>-->\n          <ion-col col-12>\n            <ion-item>\n              <ion-label floating>\n                <ion-icon name="md-grid" item-start class="text-primary-login"></ion-icon>\n                <span class="text-danger">*</span>\n                Tipo de acta\n              </ion-label>\n              <ion-input type="text" class="text-primary-login" maxLength="25" id="tipoActa" name="tipoActa"\n                value="Acta circunstanciada" formControlName="tipoActa"\n                [(ngModel)]="dataService.dataRegistrarExp.tipoActa" [readonly]="true"></ion-input>\n\n            </ion-item>\n          </ion-col>\n\n          <!-- <ion-col col-12 *ngIf="listUsuario.length>0">\n            <ion-item>\n\n              <label for="">Inspector</label>\n              <ion-grid>\n                <ion-row>\n                  <ion-col col-12 *ngFor="let x of listUsuario">\n                    <div>\n                      {{x.NombreEmpleado}}\n\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n\n\n            </ion-item>\n          </ion-col> -->\n          <ion-col col-12>\n            <ion-item>\n               <ion-label><span class="text-danger">*</span>Tiene Infracción </ion-label>\n               <ion-toggle (ionChange)="hasInfraction = !hasInfraction"></ion-toggle>\n              \n              <!-- <ion-label><span class="text-danger">*</span> Tiene Infracción</ion-label>\n\n              <ion-select okText="Guardar" cancelText="Cancelar" placeholder="Seleccione" id="TieneInfraccion"\n                name="TieneInfraccion" formControlName="TieneInfraccion"\n                [(ngModel)]="dataService.dataRegistrarExp.TieneInfraccion">\n                <ion-option value=1>Si</ion-option>\n                <ion-option value=0>No</ion-option>\n              </ion-select> -->\n            </ion-item>\n          </ion-col>\n\n          <ion-col col-12 *ngIf="hasInfraction">\n              <ion-item *ngIf="hasPayment == undefined || hasPayment == null;else showPayment">\n                <ion-label col-9><span class="text-danger">*</span>Agregar arreglo de pago</ion-label>\n                <ion-label col-2>\n                  <button ion-button icon-start icon-only [clear]="true" (click)="addPayment($event)">\n                    <ion-icon name="add-circle"></ion-icon>\n                  </button>\n                </ion-label>\n              </ion-item>\n          </ion-col>\n\n          <ng-template #showPayment>\n            <ion-item>\n              <ion-label text-wrap col-9>\n                <h3>{{payment.Nombre}}</h3>\n                <p>Monto: {{payment.TotalPagar | currency:\'L. \'}} cuotas: {{payment.CantidadPago}}</p>\n            \n              </ion-label>\n              <ion-label col-2>\n                 <button ion-button icon-only [clear]="true" color="danger" (click)="deletePayment()">\n                   <ion-icon name="trash"></ion-icon>\n                 </button>\n              </ion-label>\n            </ion-item>\n                \n          </ng-template>\n         \n\n          <ion-col col-12>\n            <ion-item>\n              <ion-label text-wrap col-7>\n                <span class="text-danger">*</span>\n                Adjuntar Acta Circunstanciada\n              </ion-label>\n              \n              <ion-label col-2>\n                <button ion-button icon-only [clear]="true" (click)="TakePicture($event)">\n                 <ion-icon name="camera"></ion-icon>\n                </button>\n              </ion-label> \n\n           \n              <ion-label col-2>\n                 <button ion-button icon-only [clear]="true" (click)="presentActionSheet()">\n                   <ion-icon name="attach"></ion-icon>\n                 </button>\n                 \n              </ion-label>\n\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col col-12>\n\n            <ion-list>\n              <ion-item-sliding *ngFor="let item of actaFiles?.reverse() ">\n                <ion-item>\n                  <ion-label text-wrap col-10>\n                    {{item.name}}\n                  </ion-label>\n                  <ion-label col-2>\n                    <button ion-button icon-only [clear]="true" color="danger" (click)="delete(item)">\n                      <ion-icon name="trash"></ion-icon>\n                    </button>\n                  </ion-label>\n                </ion-item>\n                <ion-item-options side="right">\n\n                  <button ion-button color="danger" (click)="delete(item)">\n                    <ion-icon name="trash"></ion-icon> Eliminar\n                  </button>\n                </ion-item-options>\n\n\n              </ion-item-sliding>\n            </ion-list>\n\n          </ion-col>\n\n\n\n\n          <ion-col col-12>\n            <ion-item>\n              <ion-label text-wrap col-8>\n                <span class="text-danger">*</span>\n                Adjuntar Archivo\n              </ion-label>\n               <ion-label col-2>\n                 <button ion-button icon-only [clear]="true" (click)="presentFileActionSheet()">\n                   <ion-icon name="attach"></ion-icon>\n                 </button>\n\n               </ion-label>\n            </ion-item>\n          </ion-col>\n\n\n          <ion-col col-12>\n\n            <ion-list>\n              <ion-item-sliding *ngFor="let attch of attchFiles?.reverse() ">\n                <ion-item>\n                  <ion-label text-wrap col-10>\n                    {{attch.name}}\n                  </ion-label>\n                  <ion-label col-2>\n                    <button ion-button icon-only [clear]="true" color="danger" (click)="deleteAttch(attch)">\n                      <ion-icon name="trash"></ion-icon>\n                    </button>\n                  </ion-label>\n                </ion-item>\n                <ion-item-options side="right">\n\n                  <button ion-button color="danger" (click)="deleteAttch(attch)">\n                    <ion-icon name="trash"></ion-icon> Eliminar\n                  </button>\n                </ion-item-options>\n\n\n              </ion-item-sliding>\n            </ion-list>\n\n          </ion-col>\n          \n\n\n\n\n          <ion-col col-6>\n            <ion-item>\n              <button ion-button icon-start block color="info" class="buttontn" tappable\n                (click)="Save(dataService.dataRegistrarExp)" [disabled]="!ComForm.valid || attchFiles.length==0 ||\n                actaFiles.length==0">\n                <ion-icon name="md-checkmark-circle-outline"></ion-icon>\n                Guardar\n              </button>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6>\n            <ion-item>\n              <button ion-button icon-start block color="danger" class="buttontn" tappable (click)="closeModal()">\n                <ion-icon name="md-close"></ion-icon>\n                Cancelar\n              </button>\n            </ion-item>\n          </ion-col>\n\n        </ion-row>\n      </ion-grid>\n      <br><br>\n\n    </form>\n\n\n\n\n\n  </ion-content>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Projects\APPSTSS\AppMovil\src\pages\modal-registrar\modal-registrar.html"*/,
            styles: ['./modal-registrar.scss'],
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_ServiceGlobals__["a" /* ServiceGlobals */], __WEBPACK_IMPORTED_MODULE_3__services_ServiceAlert__["a" /* ServiceAlert */], __WEBPACK_IMPORTED_MODULE_6__services_dataService__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_5__services_Messages__["a" /* Menssages */], __WEBPACK_IMPORTED_MODULE_9__services_PhotoService__["b" /* PhotoService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__services_ServiceAlert__["a" /* ServiceAlert */],
            __WEBPACK_IMPORTED_MODULE_6__services_dataService__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_4__services_ServiceGlobals__["a" /* ServiceGlobals */],
            __WEBPACK_IMPORTED_MODULE_5__services_Messages__["a" /* Menssages */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_9__services_PhotoService__["b" /* PhotoService */]])
    ], ModalRegistrarComponent);
    return ModalRegistrarComponent;
}());

//# sourceMappingURL=modal-registrar.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalFormaPagoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dataService__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_ServiceAlert__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_ServiceGlobals__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_Messages__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Models_ArregloPagoModel__ = __webpack_require__(705);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};









var ModalFormaPagoComponent = /** @class */ (function () {
    function ModalFormaPagoComponent(viewCtrl, dataService, navParams, _serviceAlert, ServiceGlobal, _mensajes, currencyPipe) {
        this.viewCtrl = viewCtrl;
        this.dataService = dataService;
        this.navParams = navParams;
        this._serviceAlert = _serviceAlert;
        this.ServiceGlobal = ServiceGlobal;
        this._mensajes = _mensajes;
        this.currencyPipe = currencyPipe;
        this.hasFee = false;
        this.today = new Date().toISOString();
        this.arregloPagos = [];
        this.pagos = {};
        this.box_price_formatted = '';
        this.box_price = 0;
        //init
        var data = this.navParams.get("datapass");
        this.model = new __WEBPACK_IMPORTED_MODULE_8__Models_ArregloPagoModel__["a" /* ArregloPagoModel */]();
        this.model.NroExpedienteIntegral = data['NroExpedienteIntegral'];
        this.model.IdPatronoEmpleador = data['IdPatronoEmpleador'];
        this.model.IdTrabajador = data['IdTrabajador'];
        this.dataService.dataRegistrarPago = {
            NroExpedienteIntegral: "",
            NroExpedienteInterno: "",
            nombre: "",
            nombreEncargadoPago: "",
            condicion: "",
            nombrePatrono: "",
            conceptoPago: "",
            valorPago: 0,
            NumeroPago: 0,
            IdSolicitudArregloPago: 0,
            ConceptoPago: "",
            CantidadPago: 0
        };
        this.ComForm = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormGroup"]({
            'NombreRazon': new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"](null, [
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required,
            ]),
            'NroExpedienteIntegral': new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"](null, [
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required,
            ]),
            'DescripcionActa': new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"](null, [
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required
            ]),
            'conceptoPago': new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"](null, [
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required
            ]),
            'CantidadPago': new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"](null, [
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required
            ]),
            'NumeroPago': new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"](null, [
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required
            ]),
            'ValorPagar': new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"](null, null),
            'FechaPago': new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"](null, [
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required
            ])
        });
        this.ServiceGlobal.validationNumeros();
        this.ServiceGlobal.FormatCurrency();
        this.loadFormaPago();
        this.messageErrorPayments = new Array();
        this.messageErrorFee = new Array();
        this.messageErrors = new Array();
    }
    ModalFormaPagoComponent.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad ModalPage');
        //this.navParams.get('datapass')
        //alert()
        this.dataService.dataRegistrarPago = {
            NroExpedienteIntegral: "",
            NroExpedienteInterno: "",
            nombre: "",
            nombreEncargadoPago: "",
            condicion: "",
            nombrePatrono: "",
            conceptoPago: "",
            valorPago: 0,
            NumeroPago: 0,
            IdSolicitudArregloPago: 0,
            ConceptoPago: "",
            CantidadPago: 0
        };
        var body = JSON.parse(JSON.stringify(this.navParams.get("datapass")));
        this.dataService.dataRegistrarPago = body;
        this.dataService.dataRegistrarPago['CantidadPago'] = 0;
        this.dataService.dataRegistrarPago['NumeroPago'] = 0;
        //console.log(this.dataService.dataRegistrarPago)
        //alert(this.target);
    };
    ModalFormaPagoComponent.prototype.guardarPagoTesoreria = function (dataFront) {
        var _this = this;
        this._serviceAlert.showLoading();
        //return
        dataFront.nombre = dataFront.nombreEncargadoPago;
        console.log(dataFront.nombre);
        var sumaTotal = 0;
        try {
            for (var _a = __values(this.arregloPagos), _b = _a.next(); !_b.done; _b = _a.next()) {
                var x = _b.value;
                if (x.FechaPago == '' || x.FechaPago == null || x.FechaPago == undefined) {
                    this._serviceAlert.presentConfirm("La fecha de pago es obligatoria");
                    sumaTotal = 0;
                    this._serviceAlert.dismissLoading();
                    return;
                }
                sumaTotal += parseFloat(x.ValorPagar);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (sumaTotal > parseFloat(dataFront.CantidadPago)) {
            this._serviceAlert.presentConfirm("El valor de los pagos sobrepasa el valor del pago total");
            console.log("El valor de los pagos sobrepasa el valor del pago total");
            this._serviceAlert.dismissLoading();
            return;
        }
        if (sumaTotal < parseFloat(dataFront.CantidadPago)) {
            this._serviceAlert.presentConfirm("El valor de los pagos es menor el valor del pago total");
            console.log("El valor de los pagos es menor el valor del pago total");
            this._serviceAlert.dismissLoading();
            return;
        }
        console.log(this.arregloPagos.length);
        console.log(dataFront.NumeroPago);
        if (this.arregloPagos.length > parseInt(dataFront.NumeroPago) || this.arregloPagos.length < parseInt(dataFront.NumeroPago)) {
            this._serviceAlert.presentConfirm('La programacion de pagos no coincide con la cantidad de pagos');
            console.log('La programacion de pagos no coincide con la cantidad de pagos');
            this._serviceAlert.dismissLoading();
            return;
        }
        var body = JSON.stringify({
            IdSolicitudArregloPago: dataFront.IdSolicitudArregloPago,
            IdAccionSeguimientoFlujo: dataFront.ListaAcciones[0].IdAccionSeguimientoFlujo,
            IdFlujo: 3,
            NroExpedienteIntegral: dataFront.NroExpedienteIntegral,
            NroExpedienteInterno: dataFront.NroExpedienteInterno,
            IdTrabajador: this.dataService.dataRegistrarPago['IdTrabajador'],
            IdPatronoEmpleador: this.dataService.dataRegistrarPago['IdPatronoEmpleador'],
            IdTipo: 178,
            FechaRegistro: "/Date(1579284311433)/",
            FechaUltimaMod: "/Date(1579284311433)/",
            IdUsuarioMod: 46,
            Estado: 10,
            IdCargo: "2",
            ConceptoPago: dataFront.ConceptoPago,
            DescripcionActa: dataFront.DescripcionActa,
            TotalPagar: dataFront.TotalPagar,
            CantidadPago: dataFront.CantidadPago,
            ListaDetallePago: this.arregloPagos
        });
        console.log('Listo para consumir el servicio');
        //return
        this.ServiceGlobal.SendData(body, this.dataService.uriPagoTesoreria, 1, 5)
            .then(function (data) {
            if (data.Status == 200) {
                // this.dataService.ReportExpediente = data.Data;
                _this._serviceAlert.presentConfirm(data.Message);
                _this.closeModal();
            }
            else {
                _this.dataService.message = data.message;
            }
            _this._serviceAlert.dismissLoading();
        }, function (Error) {
            var dataVa = _this.ServiceGlobal.parseResponse(Error.error);
            if (dataVa.Status == 500 || dataVa.Status == _this._mensajes.STATUS_NOT_FOUND || dataVa.Status == _this._mensajes.STATUS_TOKEN || dataVa.Status == _this._mensajes.STATUS_NOT_DATA || _this._mensajes.STATUS_VALIDATE) {
                _this._serviceAlert.presentConfirm(dataVa.Message);
            }
            else {
                _this._serviceAlert.presentConfirm(_this._mensajes.ERROR_GENERICO);
            }
            _this._serviceAlert.dismissLoading();
        });
        var e_1, _c;
    };
    ModalFormaPagoComponent.prototype.loadFormaPago = function () {
        var _this = this;
        this.ServiceGlobal.GetApiCatalogo(this.dataService.uriFormaPago, 1)
            .then(function (data) {
            _this.dataService.dataFormaPago = [];
            if (data.Status == 200) {
                _this.dataService.dataFormaPago = data.Data;
            }
            else {
                _this.dataService.message = data.message;
            }
            _this._serviceAlert.dismissLoading();
        }, function (Error) {
            var dataVa = _this.ServiceGlobal.parseResponse(Error.error);
            if (dataVa.Status == _this._mensajes.STATUS_NOT_FOUND || dataVa.Status == _this._mensajes.STATUS_TOKEN || dataVa.Status == _this._mensajes.STATUS_NOT_DATA) {
                _this._serviceAlert.presentConfirm(dataVa.Message);
            }
            else {
                _this._serviceAlert.presentConfirm(_this._mensajes.ERROR_GENERICO);
            }
            _this._serviceAlert.dismissLoading();
        });
    };
    ModalFormaPagoComponent.prototype.addPago = function (dataFront) {
        this.arregloPagos = [];
        if (dataFront.CantidadPago == "") {
            this._serviceAlert.presentConfirm('Ingrese el total a pagar');
            return;
        }
        if (dataFront.NumeroPago == "" || dataFront.NumeroPago == 0) {
            this._serviceAlert.presentConfirm('Ingrese la cantidad de pagos');
            return;
        }
        for (var x = 0; x < parseInt(dataFront.NumeroPago); x++) {
            this.arregloPagos.push({
                NumeroPago: x + 1,
                FechaPago: '',
                ValorPagar: 0,
                FechaUltimaMod: "",
                IdUsuarioMod: 0,
                Estado: 10
            });
        }
    };
    ModalFormaPagoComponent.prototype.eliminar = function (index) {
        for (var i = 0; i < this.arregloPagos.length; i++) {
            if (i == index) {
                console.log(this.arregloPagos[i]);
                this.dataService.dataRegistrarPago['NumeroPago'] -= 1;
                this.arregloPagos.splice(i, 1);
                break;
            }
        }
    };
    ModalFormaPagoComponent.prototype.onChangePrice = function (evt) {
        if (evt != '' && evt != null) {
            this.box_price = evt.replace(/[^0-9.]/g, "");
            this.box_price_formatted = this.getCurrency(this.box_price);
            this.dataService.dataRegistrarPago['CantidadPago'] = this.box_price_formatted;
        }
    };
    ModalFormaPagoComponent.prototype.onChangePriceTable = function (items) {
        /*for(let x of items){
          let box_price=0;
          let box_price_formatted=''
          if(x.ValorPagar!='' && x.ValorPagar!=null && x.ValorPagar!=0){
            box_price= x.ValorPagar.replace(/[^0-9.]/g, "");
            box_price_formatted = this.getCurrency(box_price);
            x.ValorPagar=box_price_formatted
          }P/
          
        }*/
        if (items.ValorPagar != '' && items.ValorPagar != null && items.ValorPagar != 0) {
            console.log(items.ValorPagar);
            var box_price = items.ValorPagar.replace(/[^0-9.]/g, "");
            var box_price_formatted = this.getCurrency(box_price);
            items.ValorPagar = box_price_formatted;
            console.log(box_price_formatted);
            //$('#'+id).val(box_price_formatted);
        }
    };
    ModalFormaPagoComponent.prototype.getCurrency = function (amount) {
        return this.currencyPipe.transform(amount, 'L');
    };
    ModalFormaPagoComponent.prototype.closeModal = function () {
        var data = { 'isSave': false };
        this.viewCtrl.dismiss(data);
    };
    ModalFormaPagoComponent.prototype.savePayment = function () {
        if (!this.Validate()) {
            return;
        }
        this.model.ArregloPago = this.listaPagos;
        var data = { 'isSave': true, 'data': this.model };
        console.log('save data in dismiss');
        this.viewCtrl.dismiss(data);
    };
    ModalFormaPagoComponent.prototype.onKeyPress = function (e, value) {
        if (e.code == "Space")
            e.preventDefault();
        if (e.key == "." && (value == undefined || value == ""))
            e.preventDefault();
        if (e.key == "." && String(value).includes('.'))
            e.preventDefault();
        if (e.key == "0" && (value == undefined || value == ""))
            e.preventDefault();
        if (String(value).length > 8) {
            e.preventDefault();
        }
        if (this.hasDecimal(value)) {
            var precision = value.toString().split('.')[1].length;
            if (precision >= 2)
                e.preventDefault();
        }
    };
    ModalFormaPagoComponent.prototype.onFeeKeyPress = function (e, value) {
        if (e.code == "Space")
            e.preventDefault();
        if (e.key == ".")
            e.preventDefault();
        if (e.key == "0" && (value == undefined || value == ""))
            e.preventDefault();
        if (this.hasDecimal(value)) {
            e.preventDefault();
        }
        if (String(value).length > 1) {
            e.preventDefault();
        }
        this.hasFee = true;
    };
    ModalFormaPagoComponent.prototype.hasDecimal = function (n) {
        return (n - Math.floor(n)) !== 0;
    };
    ModalFormaPagoComponent.prototype.addFee = function () {
        return __awaiter(this, void 0, void 0, function () {
            var nextPay, cuota, i, pago;
            return __generator(this, function (_a) {
                console.log(this.model);
                if (this.model.CantidadPago == undefined
                    || this.model.CantidadPago == null
                    || this.model.TotalPagar == undefined || this.model.TotalPagar == null) {
                    return [2 /*return*/];
                }
                nextPay = new Date();
                this.listaPagos = new Array();
                cuota = Number.parseFloat((this.model.TotalPagar / this.model.CantidadPago).toFixed(2));
                for (i = 0; i < this.model.CantidadPago; i++) {
                    pago = new __WEBPACK_IMPORTED_MODULE_8__Models_ArregloPagoModel__["b" /* Pagos */]();
                    nextPay.setMonth(nextPay.getMonth() + 1); //add one month in each loop
                    pago.FechaPago = new Date(nextPay);
                    pago.FechaPagoText = pago.FechaPago.toISOString();
                    pago.MinDate = this.itemDateMinDate(i);
                    pago.ValorPagar = cuota;
                    pago.CuotaNum = i + 1;
                    this.listaPagos.push(pago);
                }
                return [2 /*return*/];
            });
        });
    };
    ModalFormaPagoComponent.prototype.itemDateMinDate = function (index) {
        var today = new Date();
        if (index == 0)
            return today.toISOString();
        var itemBefore = this.listaPagos[index - 1].FechaPago;
        return itemBefore.toISOString();
    };
    ModalFormaPagoComponent.prototype.itemDateIsValid = function () {
        this.messageErrorPayments = new Array();
        for (var i = 0; i <= this.listaPagos.length - 1; i++) {
            var currentDate = this.listaPagos[i].FechaPago;
            if (i == 0) {
                var dAf = this.listaPagos[i + 1].FechaPago;
                if (currentDate > dAf)
                    this.messageErrorPayments.push("Fecha de Pago " + (i + 1) + " debe ser menor a Pago " + (i + 2));
                continue;
            }
            if (i == this.listaPagos.length - 1) {
                var dBf = this.listaPagos[i - 1].FechaPago;
                if (dBf >= currentDate)
                    this.messageErrorPayments.push("Fecha de Pago " + (i + 1) + " debe ser mayor a Pago " + i);
                continue;
            }
            var beforeCurrent = this.listaPagos[i - 1].FechaPago;
            var afterCurrent = this.listaPagos[i + 1].FechaPago;
            if (beforeCurrent >= currentDate)
                this.messageErrorPayments.push("Fecha de Pago " + (i + 1) + " debe ser mayor a cuota " + i);
            if (currentDate > afterCurrent)
                this.messageErrorPayments.push("Fecha de Pago " + (i + 1) + " debe ser menor a cuota " + (i + 2));
        }
    };
    ModalFormaPagoComponent.prototype.onItemValueKeyPress = function (e, value, index) {
        if (e.key == "." && (value == undefined || value == "")) {
            e.preventDefault();
            return;
        }
        if (e.key == "." && String(value).includes('.')) {
            e.preventDefault();
            return;
        }
        if (e.key == "0" && (value == undefined || value == "")) {
            e.preventDefault();
            return;
        }
        if (String(value).length > 8) {
            e.preventDefault();
            return;
        }
        if (this.hasDecimal(value)) {
            var precision = value.toString().split('.')[1].length;
            if (precision >= 2)
                e.preventDefault();
            return;
        }
    };
    ModalFormaPagoComponent.prototype.onItemBlur = function (e) {
        this.messageErrorFee = new Array();
        var sumTotal = this.listaPagos.reduce(function (prev, cur) {
            return prev + (cur.ValorPagar * 1);
        }, 0);
        console.log(sumTotal);
        if (Number.parseFloat(sumTotal.toFixed(2)) > this.model.TotalPagar) {
            this.messageErrorFee.push('Suma de Pagos es mayor a Pago Total');
        }
        if (this.model.TotalPagar > Number.parseFloat(sumTotal.toFixed(2))) {
            this.messageErrorFee.push('Suma de Pagos es menor a Pago Total');
        }
        if (this.hasEmptyVules()) {
            this.messageErrorFee.push('Pago no puede ser vacio o cero');
        }
        console.log(this.messageErrorFee);
    };
    ModalFormaPagoComponent.prototype.hasEmptyVules = function () {
        for (var i = 0; i <= this.listaPagos.length - 1; i++) {
            if (this.listaPagos[i].ValorPagar == null || this.listaPagos[i].ValorPagar == "")
                return true;
        }
        return false;
    };
    ModalFormaPagoComponent.prototype.onItemDateChange = function (e, index) {
        var dateString = e.month + "/" + e.day + "/" + e.year;
        var date = new Date(dateString);
        this.listaPagos[index].FechaPago = date;
        this.listaPagos[index].FechaPagoText = date.toISOString();
        var len = this.listaPagos.length - 1;
        if (index != len) {
            this.listaPagos[index + 1].MinDate = date.toISOString();
        }
        else {
            this.listaPagos[index].MinDate = this.itemDateMinDate(index);
        }
        this.itemDateIsValid();
    };
    ModalFormaPagoComponent.prototype.Validate = function () {
        this.messageErrors = new Array();
        if (this.model.ConceptoPago == undefined || this.model.ConceptoPago == null)
            this.messageErrors.push('Concepto Pago es requerido');
        if (this.model.Nombre == undefined || this.model.Nombre == null)
            this.messageErrors.push('Nombre Pago es requerido');
        if (this.model.DescripcionActa == undefined || this.model.DescripcionActa == null)
            this.messageErrors.push('Descripcion Pago es requerido');
        if (this.model.TotalPagar == undefined || this.model.TotalPagar == null)
            this.messageErrors.push('Total Pago no valido');
        if (this.model.CantidadPago == undefined || this.model.CantidadPago == null)
            this.messageErrors.push('Numero de pagos no valido');
        return this.messageErrors.length > 0 ? false : true;
    };
    ModalFormaPagoComponent.prototype.onBlurValidation = function (value) {
        if (this.messageErrors !== undefined && this.messageErrors.length > 0) {
            if (this.model.Nombre != undefined && this.model.Nombre.length > 0)
                this.messageErrors = this.messageErrors.filter(function (e) { return e != 'Nombre Pago es requerido'; });
            if (this.model.DescripcionActa != undefined && this.model.DescripcionActa.length > 0)
                this.messageErrors = this.messageErrors.filter(function (e) { return e != 'Descripcion Pago es requerido'; });
            if (this.model.ConceptoPago != undefined && this.model.ConceptoPago.length > 0)
                this.messageErrors = this.messageErrors.filter(function (e) { return e != 'Concepto Pago es requerido'; });
            if (this.model.TotalPagar != undefined && this.model.TotalPagar > 0)
                this.messageErrors = this.messageErrors.filter(function (e) { return e != 'Total Pago no valido'; });
            if (this.model.CantidadPago != undefined && this.model.CantidadPago > 0)
                this.messageErrors = this.messageErrors.filter(function (e) { return e != 'Numero de pagos no valido'; });
        }
    };
    ModalFormaPagoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'modal-forma-pago',template:/*ion-inline-start:"C:\Projects\APPSTSS\AppMovil\src\pages\modal-forma-pago\modal-forma-pago.html"*/'<ion-header>\n\n  <ion-navbar color="miTema">\n    <ion-title>\n      <strong>Arreglo de pago\n      </strong>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="closeModal()">Cerrar</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n   <ion-grid>\n    <ion-row>\n      <ion-col col-12>\n        <ion-item>\n          <ion-label floating>\n            <ion-icon name="md-grid" item-start class="text-primary-login"></ion-icon>\n            <span class="text-danger">*</span> Número de Expediente Integral\n          </ion-label>\n          <ion-input type="text" \n                     class="text-primary-login" \n                     maxLength="25" id="NroExpedienteIntegral"\n                     [(ngModel)]="model.NroExpedienteIntegral"\n                     name="NroExpedienteIntegral"    \n                     [readonly]="true" ></ion-input>\n        </ion-item>\n      </ion-col>\n\n      <ion-col col-12>\n        <ion-item>\n          <ion-label floating>\n            <ion-icon name="ios-person-outline" item-start class="text-primary-login"></ion-icon>\n            <span class="text-danger">*</span> Nombre\n          </ion-label>\n          <ion-input type="text" id="NombreRazon" \n                     name="NombreRazon" \n                     [(ngModel)]="model.Nombre"\n                     class="text-primary-login" \n                     maxLength="25"\n                     (ionBlur)="onBlurValidation($event)"\n                     [readonly]="false"></ion-input>\n        </ion-item>\n      </ion-col>\n\n      <ion-col col-12>\n        <ion-item>\n          <ion-label floating>\n            <ion-icon name="ios-book-outline" item-start class="text-primary-login"></ion-icon>\n            <span class="text-danger">*</span> Concepto Pago\n          </ion-label>\n          <ion-input id="conceptoPago" \n                     [(ngModel)]="model.ConceptoPago"\n                     (ionBlur)="onBlurValidation($event)"\n                     name="ConceptoPago" ></ion-input>\n        </ion-item>\n      </ion-col>\n\n      <ion-col col-12>\n        <ion-item>\n          <ion-label floating>\n            <ion-icon name="ios-calendar-outline" item-start class="text-primary-login"></ion-icon>\n            <span class="text-danger">*</span> Descripción Acta\n          </ion-label>\n          <ion-input id="DescripcionActa" \n                    [(ngModel)]="model.DescripcionActa"\n                    (ionBlur)="onBlurValidation($event)"\n                    name="DescripcionActa"></ion-input>\n        </ion-item>\n      </ion-col>\n\n      <ion-col col-12>\n        <ion-item>\n          <ion-label floating>\n            <ion-icon name="ios-cash-outline" item-start class="text-primary-login"></ion-icon>\n            <span class="text-danger">*</span> Total a Pagar Lempiras\n          </ion-label>\n          <ion-input id="CantidadPago" \n                    [(ngModel)]="model.TotalPagar"\n                    type="tel"\n                    name="CantidadPago" class="numeros CurrencyInput"\n                    (ionBlur)="onBlurValidation($event)"\n                    (keypress)="onKeyPress($event, $event.target.value)" >\n          </ion-input>\n        </ion-item>\n      </ion-col>\n\n      <ion-col col-12>\n         <ion-row>\n             <ion-item col-7>\n               <ion-label floating class="labelFont">\n                 <ion-icon name="ios-calendar-outline" item-start class="text-primary-login"></ion-icon>\n                 <span class="text-danger">*</span> Nro. Pagos a Realizar\n               </ion-label>\n               <ion-input type="tel" \n                          id="NumeroPago" class="numeros"\n                          [(ngModel)]="model.CantidadPago"\n                          (keypress)="onFeeKeyPress($event, $event.target.value)" \n                          (ionBlur)="onBlurValidation($event)"\n                          name="NumeroPago">\n               </ion-input>\n             </ion-item>\n\n             <ion-item col-5>\n\n               <button ion-button icon-start block color="info" class="btnaddFee" [disabled]="!hasFee" tappable\n                 (click)="addFee()">\n                 <ion-icon name="md-checkmark-circle-outline"></ion-icon>\n                 Agregar\n               </button>\n             </ion-item>\n         </ion-row>\n       </ion-col>\n        \n      <ion-col col-12 *ngIf="listaPagos !== undefined || listaPagos != null">\n        <ion-grid>\n          <ion-row>\n            <ion-col col-2>\n              <ion-item>\n                <ion-label>\n                  <p>N°</p>\n                </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-5>\n              <ion-item text-center>\n                <ion-label>\n                  <p>Fecha</p>\n                </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-5>\n              <ion-item text-center>\n                <ion-label>\n                  <p> Valor en L.</p>\n                </ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row *ngFor="let item of listaPagos; index as i">\n              <ion-col col-2>\n                <ion-item>\n                  <ion-label><span style="font-size: 11px;"> {{i + 1}}</span> </ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-5>\n                 <ion-item class="item-coutas">\n                   <ion-datetime displayFormat="DD/MM/YYYY" \n                                pickerFormat="DD/MM/YYYY"\n                                [(ngModel)]="item.FechaPagoText"\n                                name="FechaPago"\n                                min={{listaPagos[i].MinDate}}\n                                max="2050-12-31"\n                                (ionChange)="onItemDateChange($event,i)"\n                                [ngModelOptions]="{standalone: true}"\n                                class="text-primary-login"></ion-datetime>\n                  </ion-item>\n              </ion-col>\n              <ion-col col-5>\n                <ion-item>\n                          <ion-input type="tel" \n                            name="ValorPagar" \n                            class="text-primary-login numeros"\n                            (keypress)="onKeyPress($event, $event.target.value,i)"\n                            (ionBlur)="onItemBlur()"\n                            [(ngModel)]="item.ValorPagar"></ion-input>\n                </ion-item>\n                 \n              </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-col>\n     <ion-col *ngIf="messageErrorPayments.length > 0">\n        <ion-row *ngFor="let item of messageErrorPayments">\n            <span class="text-danger">*{{item}}</span>\n        </ion-row>\n    \n     </ion-col>\n     <ion-col *ngIf="messageErrorFee.length > 0">\n       <ion-row *ngFor="let item of messageErrorFee">\n          <span class="text-danger">*{{item}}</span>\n       </ion-row>\n\n     </ion-col>\n\n      <ion-col *ngIf="messageErrors.length > 0">\n        <ion-row *ngFor="let item of messageErrors">\n          <span class="text-danger">*{{item}}</span>\n        </ion-row>\n      \n      </ion-col>\n    </ion-row>\n\n   </ion-grid>\n\n  <ion-col col-12>\n    <ion-row>\n        <ion-item col-6>\n          <button ion-button icon-start block color="info" class="buttontn" tappable (click)="savePayment()">\n            <ion-icon name="md-checkmark-circle-outline"></ion-icon>\n            Guardar\n          </button>\n        </ion-item>\n        <ion-item col-6>\n          <button ion-button icon-start block color="danger" class="buttontn" tappable (click)="closeModal()">\n            <ion-icon name="md-close"></ion-icon>\n            Cancelar\n          </button>\n        </ion-item>\n\n    </ion-row>\n\n  </ion-col>\n  \n  \n</ion-content>\n\n'/*ion-inline-end:"C:\Projects\APPSTSS\AppMovil\src\pages\modal-forma-pago\modal-forma-pago.html"*/,
            //styleUrls:['modal-pago.scss'], 
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_dataService__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_3__services_ServiceAlert__["a" /* ServiceAlert */], __WEBPACK_IMPORTED_MODULE_4__services_ServiceGlobals__["a" /* ServiceGlobals */], __WEBPACK_IMPORTED_MODULE_5__services_Messages__["a" /* Menssages */], __WEBPACK_IMPORTED_MODULE_7__angular_common__["CurrencyPipe"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__services_dataService__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_ServiceAlert__["a" /* ServiceAlert */],
            __WEBPACK_IMPORTED_MODULE_4__services_ServiceGlobals__["a" /* ServiceGlobals */],
            __WEBPACK_IMPORTED_MODULE_5__services_Messages__["a" /* Menssages */],
            __WEBPACK_IMPORTED_MODULE_7__angular_common__["CurrencyPipe"]])
    ], ModalFormaPagoComponent);
    return ModalFormaPagoComponent;
}());

//# sourceMappingURL=modal-forma-pago.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(378);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_svg_round_progressbar__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_svg_round_progressbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular_svg_round_progressbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number_ngx__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_RecuperarCredenciales_RecuperarCredenciales__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_ConsultaExpediente_ConsultaExpediente__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_RegistrarExpediente_RegistrarExpediente__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ConfigSystems_constants__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_modal_details_modal_details__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_ConsultaExpedienteExt_ConsultaExpedienteExt__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_modal_registrar_modal_registrar__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_modal_rest_pass_modal_rest_pass__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_storage__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_modal_forma_pago_modal_forma_pago__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_camera__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_ionic_webview_ngx__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_image_picker__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_file_path__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_chooser__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_background_mode__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_network__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_BackgroundTask__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_network_interface__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_file__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_local_notifications__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_angular2_text_mask__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_33_angular2_text_mask__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















//import { from } from 'rxjs/observable/from';












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_RecuperarCredenciales_RecuperarCredenciales__["a" /* RecuperarCredencialesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_ConsultaExpediente_ConsultaExpediente__["a" /* ConsultaExpedienteComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_ConsultaExpedienteExt_ConsultaExpedienteExt__["a" /* ConsultaExpedienteExtComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_RegistrarExpediente_RegistrarExpediente__["a" /* RegistrarExpedienteComponent */],
                __WEBPACK_IMPORTED_MODULE_13__pages_modal_details_modal_details__["a" /* ModalDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pages_modal_registrar_modal_registrar__["a" /* ModalRegistrarComponent */],
                __WEBPACK_IMPORTED_MODULE_16__pages_modal_rest_pass_modal_rest_pass__["a" /* ModalRestPassComponent */],
                __WEBPACK_IMPORTED_MODULE_18__pages_modal_forma_pago_modal_forma_pago__["a" /* ModalFormaPagoComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_33_angular2_text_mask__["TextMaskModule"],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_21__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_21__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {
                    scrollPadding: false,
                    scrollAssist: true,
                    autoFocusAssist: false
                }, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_3_angular_svg_round_progressbar__["RoundProgressModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_13__pages_modal_details_modal_details__["a" /* ModalDetailsComponent */]),
                __WEBPACK_IMPORTED_MODULE_17__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_RecuperarCredenciales_RecuperarCredenciales__["a" /* RecuperarCredencialesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_ConsultaExpediente_ConsultaExpediente__["a" /* ConsultaExpedienteComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_ConsultaExpedienteExt_ConsultaExpedienteExt__["a" /* ConsultaExpedienteExtComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_RegistrarExpediente_RegistrarExpediente__["a" /* RegistrarExpedienteComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pages_modal_registrar_modal_registrar__["a" /* ModalRegistrarComponent */],
                __WEBPACK_IMPORTED_MODULE_16__pages_modal_rest_pass_modal_rest_pass__["a" /* ModalRestPassComponent */],
                __WEBPACK_IMPORTED_MODULE_18__pages_modal_forma_pago_modal_forma_pago__["a" /* ModalFormaPagoComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__ConfigSystems_constants__["a" /* Configuration */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number_ngx__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_ionic_webview_ngx__["a" /* WebView */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_image_picker__["a" /* ImagePicker */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_file_path__["a" /* FilePath */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_chooser__["a" /* Chooser */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_background_mode__["a" /* BackgroundMode */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_network_interface__["a" /* NetworkInterface */],
                __WEBPACK_IMPORTED_MODULE_29__services_BackgroundTask__["a" /* BackgroundTask */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_local_notifications__["a" /* LocalNotifications */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Menssages; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Menssages = /** @class */ (function () {
    function Menssages() {
        this.VALIDAR_FECHAS = "Fecha desde, debe ser menor que la fecha hasta";
        this.ERROR_GENERICO = "Ocurrió un error";
        this.VERIFICAR_PIN = "Ingrese el pin de verificacón";
        this.VERIFICAR_CONTRASENA = "Debe realizar el cambio de contraseña";
        this.STATUS_TOKEN = 403;
        this.STATUS_NOT_FOUND = 404;
        this.STATUS_NOT_DATA = 409;
        this.STATUS_VALIDATE = 400;
    }
    Menssages = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], Menssages);
    return Menssages;
}());

//# sourceMappingURL=Messages.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_ConsultaExpediente_ConsultaExpediente__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_ConsultaExpedienteExt_ConsultaExpedienteExt__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_RegistrarExpediente_RegistrarExpediente__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_ServiceGlobals__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_local_notifications__ = __webpack_require__(371);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};











//declare var navigator: any;
var MyApp = /** @class */ (function () {
    function MyApp(platform, menu, statusBar, splashScreen, events, service, localNotifications) {
        var _this = this;
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.events = events;
        this.service = service;
        this.localNotifications = localNotifications;
        //  delay:any = ms => new Promise(res => setTimeout(res, ms));
        this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */];
        this.isRunning = false;
        this.initializeApp();
        // set our app's pages
        //Escucha el evento que se genera desde el login y carga el menu segun sea el pefil
        this.events.subscribe('user:0', function () {
            _this.pages = [{
                    title: 'Inicio',
                    component: __WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */],
                    icon: 'home'
                },
                {
                    title: 'Consulta Expediente',
                    component: __WEBPACK_IMPORTED_MODULE_5__pages_ConsultaExpedienteExt_ConsultaExpedienteExt__["a" /* ConsultaExpedienteExtComponent */],
                    icon: 'ios-search-outline'
                },
                {
                    title: 'Registrar Info. Expedientes',
                    component: __WEBPACK_IMPORTED_MODULE_6__pages_RegistrarExpediente_RegistrarExpediente__["a" /* RegistrarExpedienteComponent */],
                    icon: 'ios-add-circle-outline'
                },
            ];
        });
        this.events.subscribe('user:1', function () {
            _this.pages = [{
                    title: 'Inicio',
                    component: __WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */],
                    icon: 'home'
                },
                {
                    title: 'Consulta  Expedientes Ext.',
                    component: __WEBPACK_IMPORTED_MODULE_4__pages_ConsultaExpediente_ConsultaExpediente__["a" /* ConsultaExpedienteComponent */],
                    icon: 'ios-search-outline'
                }
            ];
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            // watch network for a connection
            _this.platform.pause.subscribe(function () { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    console.log('bk proccess');
                    this.timer = setInterval(function () { return __awaiter(_this, void 0, void 0, function () {
                        var hasAccess, data, errorData, count, tmp, data_1, data_1_1, item, e_1, e_2_1, e_2, _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0: return [4 /*yield*/, this.service.PingServer()];
                                case 1:
                                    hasAccess = _b.sent();
                                    if (!(!this.isRunning && hasAccess)) return [3 /*break*/, 12];
                                    // //if(this.isRunning) return; //salir si ya se esta ejecutando 
                                    console.log('internet y no se esta ejecutando ');
                                    this.isRunning = true;
                                    data = JSON.parse(localStorage.getItem('background'));
                                    errorData = new Array();
                                    console.log(data);
                                    if (data == null) {
                                        return [2 /*return*/];
                                    } // salimos si no hay nada que procesar
                                    count = 0;
                                    _b.label = 2;
                                case 2:
                                    _b.trys.push([2, 9, 10, 11]);
                                    data_1 = __values(data), data_1_1 = data_1.next();
                                    _b.label = 3;
                                case 3:
                                    if (!!data_1_1.done) return [3 /*break*/, 8];
                                    item = data_1_1.value;
                                    tmp = item;
                                    _b.label = 4;
                                case 4:
                                    _b.trys.push([4, 6, , 7]);
                                    return [4 /*yield*/, this.service.UpdateActa(item)];
                                case 5:
                                    _b.sent();
                                    count++;
                                    return [3 /*break*/, 7];
                                case 6:
                                    e_1 = _b.sent();
                                    console.error(e_1);
                                    errorData.push(tmp);
                                    return [3 /*break*/, 7];
                                case 7:
                                    data_1_1 = data_1.next();
                                    return [3 /*break*/, 3];
                                case 8: return [3 /*break*/, 11];
                                case 9:
                                    e_2_1 = _b.sent();
                                    e_2 = { error: e_2_1 };
                                    return [3 /*break*/, 11];
                                case 10:
                                    try {
                                        if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
                                    }
                                    finally { if (e_2) throw e_2.error; }
                                    return [7 /*endfinally*/];
                                case 11:
                                    if (count > 0) {
                                        //set notification
                                        this.localNotifications.schedule({
                                            id: 1,
                                            text: "Expedientes actualizados " + count,
                                            sound: this.platform.is('android') ? 'file://sound.mp3' : 'file://beep.caf',
                                        });
                                    }
                                    // check if array has elements
                                    errorData.length > 0 ? localStorage.setItem('background', JSON.stringify(errorData)) : localStorage.removeItem('background');
                                    console.log('setting is running to false');
                                    this.isRunning = false;
                                    _b.label = 12;
                                case 12: return [2 /*return*/];
                            }
                        });
                    }); }, 3000);
                    return [2 /*return*/];
                });
            }); }, function (err) { console.error('error', err); });
        }); //end pause app
        this.platform.resume.subscribe(function () {
            clearInterval(_this.timer);
        }, function (err) { console.error(err); });
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Projects\APPSTSS\AppMovil\src\app\app.html"*/'<ion-menu [content]="content" type="overlay">\n\n  <ion-header>\n    <ion-toolbar style="padding: 0px!important;">\n      <!---<ion-grid>\n        <ion-row>\n          <ion-col col-12>\n              <div align="center">\n                <img src="assets/imgs/secretaria-logo.png" style="height: 100%;width: 100%;background-size: cover;\n                background-position: center center;\n                background-repeat: no-repeat;">\n             \n              </div>\n          </ion-col>\n          <ion-col padding-top col-8>\n            \n          </ion-col>\n        </ion-row>\n\n\n      </ion-grid>-->\n      <img object-fit: cover src="assets/imgs/stss-logo2.png" style="height: 100%;width: 100%;background-size: cover;\n      background-position: center center;\n      background-repeat: no-repeat;">\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n \n    <ion-list class="user-list">\n      <button ion-item menuClose class="text-1x" *ngFor="let menuItem of pages" (click)="openPage(menuItem)">\n        <ion-icon item-left [name]="menuItem.icon" color="miTema"></ion-icon>\n        <span ion-text color="letraNegra">{{menuItem.title}}</span>\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Projects\APPSTSS\AppMovil\src\app\app.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_9__services_ServiceGlobals__["a" /* ServiceGlobals */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_9__services_ServiceGlobals__["a" /* ServiceGlobals */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_local_notifications__["a" /* LocalNotifications */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceAlert; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var ServiceAlert = /** @class */ (function () {
    function ServiceAlert(alertCtrl, loadingCtrl) {
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    ServiceAlert.prototype.presentConfirm = function (message) {
        var alert = this.alertCtrl.create({
            message: message,
            buttons: [{
                    text: 'Aceptar',
                    role: 'Cancelar',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }]
        });
        alert.present();
    };
    ServiceAlert.prototype.showLoading = function () {
        if (!this.loading) {
            this.loading = this.loadingCtrl.create({
                content: 'Espere un momento...'
            });
            this.loading.present();
        }
    };
    ServiceAlert.prototype.dismissLoading = function () {
        if (this.loading) {
            this.loading.dismiss();
            this.loading = null;
        }
    };
    ServiceAlert.prototype.showConfirm = function (titleAlert, messageAlert) {
        return __awaiter(this, void 0, void 0, function () {
            var confirm;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        confirm = this.alertCtrl.create({
                            title: titleAlert,
                            message: messageAlert,
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    handler: function () {
                                        return false;
                                    }
                                },
                                {
                                    text: 'Aceptar',
                                    handler: function () {
                                        return true;
                                    }
                                }
                            ]
                        });
                        return [4 /*yield*/, confirm.present()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ServiceAlert = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], ServiceAlert);
    return ServiceAlert;
}());

//# sourceMappingURL=ServiceAlert.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_Messages__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_dataService__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_ServiceGlobals__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__RecuperarCredenciales_RecuperarCredenciales__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_ServiceAlert__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_AuthenticationService__ = __webpack_require__(358);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










/*import {
  ModalRegistrarComponent
} from '../modal-registrar/modal-registrar'*/

var LoginPage = /** @class */ (function () {
    function LoginPage(nav, 
        // public forgotCtrl: AlertController,
        menu, toastCtrl, dataService, serviceGlobal, formBuilder, loadingController, _serviceAlert, storage, _messsage, events, myModal, auth) {
        this.nav = nav;
        this.menu = menu;
        this.toastCtrl = toastCtrl;
        this.dataService = dataService;
        this.serviceGlobal = serviceGlobal;
        this.formBuilder = formBuilder;
        this.loadingController = loadingController;
        this._serviceAlert = _serviceAlert;
        this.storage = storage;
        this._messsage = _messsage;
        this.events = events;
        this.myModal = myModal;
        this.auth = auth;
        this.type = 'password';
        this.showPass = false;
        this.step = 'Hola';
        this.menu.swipeEnable(false);
        /*this.dataService.dataRegistrarExp = {
          IdRegistroActa: 0,
          IdAccionSeguimientoFlujo: "325",
          NroExpedienteIntegral: "STSS-26122019000004",
          NroExpedienteInterno: "DGIT-0101012612201900157",
          Tipo: 178,
          FechaActa: "2020-01-24T16:33:20.073Z",
          Detalle: "",
          PlantillaHtml: "",
          RutaArchivo: "C:\\Users\\Win10\\Downloads\\itil.pdf",
          TieneInfraccion: 208,
          TieneArregloPago: 0,
          FechaUltimaMod: null,
          IdUsuarioMod: 0,
          Estado: 10,
          numeroExpedienteIntegral: "",
          numeroExpedienteInterno: "",
          nombreEmpresa: "",
          fechaDesde: "",
          fechaHasta: ""
        }*/
    }
    LoginPage.prototype.ionViewCanEnter = function () {
        if (this.auth.IsAuthenticated()) {
            var typo = parseInt(localStorage.getItem('typouser'));
            typo == 0 ? this.events.publish('user:0') : this.events.publish('user:1');
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
        }
    };
    /*showModal(datafront) {
      var dataMo = {
        datapass: datafront
      };
  
      var modal = this.myModal.create(ModalRegistrarComponent, dataMo);
      modal.present();
  
    }*/
    LoginPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('user').then(function (value) {
            if (value != null && value != '' && typeof (value) != undefined) {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */], {
                    token: "",
                    Usuario: "",
                    Contrasena: ""
                });
            }
        });
        this.dataService._dataLogin = {
            Usuario: "",
            Contrasena: "",
            guardarContrasena: false
        };
        this.dataService._formLogin = this.formBuilder.group({
            Usuario: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(1),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(30)
            ]),
            Contrasena: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(30)
            ]),
            guardarContrasena: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, null)
        });
        this.serviceGlobal.validationCharacterNumerick();
    };
    // ir a pagina de registro
    LoginPage.prototype.recuperarCredenciales = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__RecuperarCredenciales_RecuperarCredenciales__["a" /* RecuperarCredencialesPage */]);
    };
    LoginPage.prototype.login = function (front) {
        return __awaiter(this, void 0, void 0, function () {
            var body, result, messageError, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._serviceAlert.showLoading();
                        body = JSON.stringify({
                            Usuario: front.Usuario,
                            Contrasena: front.Contrasena
                        });
                        console.log(body);
                        return [4 /*yield*/, this.auth.logIn(body)];
                    case 1:
                        result = _a.sent();
                        console.log(result);
                        if (result.error != undefined) {
                            messageError = result.error;
                            if (messageError.Status == this._messsage.STATUS_NOT_FOUND || messageError.Status == this._messsage.STATUS_TOKEN || messageError.Status == this._messsage.STATUS_NOT_DATA || messageError.Status == this._messsage.STATUS_VALIDATE) {
                                this._serviceAlert.presentConfirm(messageError.Message);
                            }
                            else {
                                //this._serviceAlert.presentConfirm(this._messsage.ERROR_GENERICO);
                                this._serviceAlert.presentConfirm(JSON.stringify(messageError));
                            }
                        }
                        if (result.data != null) {
                            data = result.data;
                            if (data.typo == undefined || data.typo == null || data.typo == 0)
                                this.events.publish('user:0');
                            else
                                this.events.publish('user:1');
                            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */], {
                                Usuario: front.Usuario,
                                Contrasena: front.Contrasena,
                                cambioPass: data.changedPass
                            });
                        }
                        this._serviceAlert.dismissLoading();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.showPassword = function () {
        this.showPass = !this.showPass;
        if (this.showPass) {
            this.type = 'text';
        }
        else {
            this.type = 'password';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], LoginPage.prototype, "step", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Projects\APPSTSS\AppMovil\src\pages\login\login.html"*/'<!-- -->\n<ion-content padding class="animated fadeIn login auth-page">\n  <div class="login-content">\n\n    <!-- Logo -->\n    <div padding-horizontal text-center class="animated fadeInDown"> <br> <br>\n      <div class="logo"></div>\n      <!--<h4 class="titulo">Secretaria de trabajo y seguridad\n      </h4>-->\n\n    </div>\n\n    <!-- Login form -->\n    <form class="list-form" [formGroup]="dataService._formLogin">\n     <!-- <ion-item>\n        <button (click)="showModal(dataService.dataRegistrarExp)">Iniciar</button>\n      </ion-item>-->\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="person" item-start class="text-primary-login"></ion-icon>\n          <span class="text-danger">*</span> \n          Usuario\n          \n        </ion-label>\n        <ion-input type="text" class="text-primary-login letrasandnum" maxLength="25" formControlName="Usuario"\n          [(ngModel)]="dataService._dataLogin.Usuario"></ion-input>\n          <div align="center"\n          *ngIf="dataService._formLogin.get(\'Usuario\')?.touched && (dataService._formLogin.get(\'Usuario\').errors || dataService._formLogin.get(\'Usuario\').dirty)">\n          <p class="text-danger animated fadeIn" *ngIf="dataService._formLogin.get(\'Usuario\').hasError(\'required\')">\n            ¡Campo Usuario de acceso requerido!\n          </p>\n        </div>\n      </ion-item>\n     \n\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="lock" item-start class="text-primary-login"></ion-icon>\n          <span class="text-danger">*</span> \n          Contraseña\n        </ion-label>\n        \n        <ion-input type="password" type="{{type}}" formControlName="Contrasena" \n          [(ngModel)]="dataService._dataLogin.Contrasena" [attr.maxlength]="30"></ion-input>\n         \n          <div align="center"\n          *ngIf="dataService._formLogin.get(\'Contrasena\')?.touched && (dataService._formLogin.get(\'Contrasena\').errors || dataService._formLogin.get(\'Contrasena\').dirty)">\n          <p class="text-danger animated fadeIn" *ngIf="dataService._formLogin.get(\'Contrasena\').hasError(\'required\')">\n            ¡Campo Contraseña de acceso requerido!\n          </p>\n        </div>\n        \n        \n     \n      </ion-item>\n      <ion-item no-lines> \n        <ion-label>Mostrar Contraseña</ion-label>\n        <ion-checkbox style="margin-right: 10px;" color="dark" checked="false" (ionChange)="showPassword()"></ion-checkbox>\n      \n      </ion-item>\n    \n    </form>\n \n\n    <p align="center" class="text-danger ">{{dataService.message}}</p>\n    <br><br>\n    <button ion-button icon-start block color="dark" class="buttontn" [disabled]="dataService._formLogin.invalid"\n      tappable (click)="login(dataService._dataLogin)">\n      <ion-icon name="log-in"></ion-icon>\n      Iniciar Sesión \n    </button>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col col-12>\n          <p text-center ion-text class="text-primary-login" tappable (click)="recuperarCredenciales()"><strong>¿Olvidaste tu\n              clave?</strong></p>\n        </ion-col>\n        <!--<ion-col col-6>\n          <p text-left ion-text class="text-primary-login" tappable (click)="register()"><strong>¿Nuevo\n              Usuario?</strong></p>\n\n        </ion-col>-->\n\n      </ion-row>\n    </ion-grid>\n\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Projects\APPSTSS\AppMovil\src\pages\login\login.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_dataService__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_5__services_ServiceGlobals__["a" /* ServiceGlobals */], __WEBPACK_IMPORTED_MODULE_8__services_ServiceAlert__["a" /* ServiceAlert */], __WEBPACK_IMPORTED_MODULE_3__services_Messages__["a" /* Menssages */], __WEBPACK_IMPORTED_MODULE_10__services_AuthenticationService__["a" /* AuthenticationService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__services_dataService__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_5__services_ServiceGlobals__["a" /* ServiceGlobals */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_8__services_ServiceAlert__["a" /* ServiceAlert */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__services_Messages__["a" /* Menssages */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_10__services_AuthenticationService__["a" /* AuthenticationService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginResult; });
var LoginResult = /** @class */ (function () {
    function LoginResult() {
    }
    return LoginResult;
}());

//# sourceMappingURL=LoginResult.js.map

/***/ }),

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArregloPagoModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Pagos; });
/* unused harmony export PagoTesoreria */
var ArregloPagoModel = /** @class */ (function () {
    function ArregloPagoModel() {
    }
    return ArregloPagoModel;
}());

var Pagos = /** @class */ (function () {
    function Pagos() {
    }
    return Pagos;
}());

var PagoTesoreria = /** @class */ (function () {
    function PagoTesoreria() {
    }
    return PagoTesoreria;
}());

//# sourceMappingURL=ArregloPagoModel.js.map

/***/ }),

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PhotoService; });
/* unused harmony export FilesResponsePhoto */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_path__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_chooser__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var PhotoService = /** @class */ (function () {
    function PhotoService(camera, imagePicker, filePath, chooser, platform) {
        this.camera = camera;
        this.imagePicker = imagePicker;
        this.filePath = filePath;
        this.chooser = chooser;
        this.platform = platform;
    }
    PhotoService.prototype.takePicture = function () {
        return __awaiter(this, void 0, void 0, function () {
            var options, tempImagePath, tempFilename, result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        options = {
                            quality: 70,
                            destinationType: this.camera.DestinationType.FILE_URI,
                            sourceType: this.camera.PictureSourceType.CAMERA,
                            encodingType: this.camera.EncodingType.JPEG,
                            targetWidth: 80,
                            targetHeight: 80,
                        };
                        return [4 /*yield*/, this.camera.getPicture(options)];
                    case 1:
                        tempImagePath = _a.sent();
                        tempFilename = tempImagePath.substr(tempImagePath.lastIndexOf('/') + 1);
                        result = { path: tempImagePath, fileName: tempFilename };
                        return [2 /*return*/, result];
                    case 2:
                        e_1 = _a.sent();
                        return [2 /*return*/, { error: e_1 }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PhotoService.prototype.removePhoto = function (path) {
    };
    PhotoService.prototype.moveToGallery = function (path) {
    };
    PhotoService.prototype.openGallery = function () {
        return __awaiter(this, void 0, void 0, function () {
            var options, result, response, i, dto, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        options = {
                            maximumImagesCount: 2,
                            quality: 70,
                            outputType: 0,
                            height: 80,
                            width: 80
                        };
                        return [4 /*yield*/, this.imagePicker.getPictures(options)];
                    case 1:
                        result = _a.sent();
                        if (result.length == 0)
                            return [2 /*return*/, null];
                        response = new Array();
                        for (i = 0; i <= result.length - 1; i++) {
                            dto = new FilesResponsePhoto();
                            dto.path = result[i];
                            dto.fileName = result[i].substr(result[i].lastIndexOf('/') + 1);
                            response.push(dto);
                        }
                        return [2 /*return*/, response];
                    case 2:
                        err_1 = _a.sent();
                        return [2 /*return*/, { error: err_1 }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PhotoService.prototype.openDirectory = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, fileName, checkExt, pathPdf, response, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, this.chooser.getFile('application/pdf')];
                    case 1:
                        result = _a.sent();
                        if (result == undefined)
                            return [2 /*return*/, null];
                        fileName = result.name;
                        checkExt = fileName.split('.')[1];
                        if (checkExt.toLowerCase() !== 'pdf')
                            return [2 /*return*/, null];
                        pathPdf = void 0;
                        if (!this.platform.is('android')) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.filePath.resolveNativePath(result.uri)];
                    case 2:
                        pathPdf = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        pathPdf = result.uri;
                        _a.label = 4;
                    case 4:
                        response = { path: pathPdf, fileName: fileName };
                        console.log('file dir', response);
                        return [2 /*return*/, response];
                    case 5:
                        e_2 = _a.sent();
                        return [2 /*return*/, { error: e_2 }];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    PhotoService.prototype.openFileType = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            var content, result, fileName, pathPdf, response, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        content = this.getContentType(type);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        return [4 /*yield*/, this.chooser.getFile(content)];
                    case 2:
                        result = _a.sent();
                        if (result == undefined)
                            return [2 /*return*/, null];
                        fileName = result.name;
                        pathPdf = void 0;
                        if (!this.platform.is('android')) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.filePath.resolveNativePath(result.uri)];
                    case 3:
                        pathPdf = _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        pathPdf = result.uri;
                        _a.label = 5;
                    case 5:
                        response = { path: pathPdf, fileName: fileName };
                        console.log(response);
                        return [2 /*return*/, response];
                    case 6:
                        e_3 = _a.sent();
                        return [2 /*return*/, { error: e_3 }];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    PhotoService.prototype.getContentType = function (type) {
        var content = 'image/jpg';
        switch (type) {
            case FileType.Audio:
                content = '.mp3,audio/*';
                break;
            case FileType.Video:
                content = 'video/*';
                break;
            case FileType.Image:
                content = 'image/jpg';
                break;
            case FileType.Pdf:
                content = 'application/pdf';
                break;
            default:
                content = "image/jpg";
                break;
        }
        return content;
    };
    PhotoService.prototype.getFileContent = function (type) {
        var content = 1;
        switch (type) {
            case FileType.Audio:
                content = 4;
                break;
            case FileType.Video:
                content = 2;
                break;
            case FileType.Image:
                content = 1;
                break;
            case FileType.Pdf:
                content = 3;
                break;
            default:
                content = 1;
                break;
        }
        return content;
    };
    PhotoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_chooser__["a" /* Chooser */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["n" /* Platform */]])
    ], PhotoService);
    return PhotoService;
}());

var FilesResponsePhoto = /** @class */ (function () {
    function FilesResponsePhoto() {
    }
    return FilesResponsePhoto;
}());

var FileType;
(function (FileType) {
    FileType[FileType["Video"] = 0] = "Video";
    FileType[FileType["Audio"] = 1] = "Audio";
    FileType[FileType["Image"] = 2] = "Image";
    FileType[FileType["Pdf"] = 3] = "Pdf";
})(FileType || (FileType = {}));
//# sourceMappingURL=PhotoService.js.map

/***/ }),

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListFiles; });
var ListFiles = /** @class */ (function () {
    function ListFiles() {
    }
    return ListFiles;
}());

/**
 * Type
 * 1- Image [png,jpg]
 * 2- video
 * 3- File [pdf]
 * 4- audio
 */ 
//# sourceMappingURL=ListFiles.js.map

/***/ }),

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InsertActaModel; });
var InsertActaModel = /** @class */ (function () {
    function InsertActaModel() {
    }
    return InsertActaModel;
}());

//# sourceMappingURL=InsertActaModel.js.map

/***/ }),

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackgroundTask; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BackgroundTask = /** @class */ (function () {
    function BackgroundTask() {
    }
    BackgroundTask = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], BackgroundTask);
    return BackgroundTask;
}());

//# sourceMappingURL=BackgroundTask.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dataService__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_rest_pass_modal_rest_pass__ = __webpack_require__(359);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import { BackgroundMode } from "@ionic-native/background-mode";
//import { Network } from "@ionic-native/network";
var HomePage = /** @class */ (function () {
    function HomePage(nav, popoverCtrl, navParams, loadingController, myModal, dataService, platform) {
        this.nav = nav;
        this.popoverCtrl = popoverCtrl;
        this.navParams = navParams;
        this.loadingController = loadingController;
        this.myModal = myModal;
        this.dataService = dataService;
        this.platform = platform;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */];
    }
    HomePage.prototype.ngOnInit = function () {
        this.dataService._dataHome = {
            Contrasena: '',
            Usuario: '',
            cambioPass: ''
        };
        this.dataService._dataHome.Usuario = this.navParams.get("Usuario");
        this.dataService._dataHome.cambioPass = this.navParams.get("cambioPass");
        //this.showModal(this.dataService._dataHome)
        if (this.dataService._dataHome.cambioPass == 0)
            this.showModal(this.dataService._dataHome);
    };
    HomePage.prototype.showModal = function (datafront) {
        var dataMo = {
            datapass: datafront
        };
        var modal = this.myModal.create(__WEBPACK_IMPORTED_MODULE_4__modal_rest_pass_modal_rest_pass__["a" /* ModalRestPassComponent */], dataMo);
        modal.present();
    };
    HomePage.prototype.logout = function () {
        localStorage.clear();
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], HomePage.prototype, "nav2", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Projects\APPSTSS\AppMovil\src\pages\home\home.html"*/'<!-- -->\n<ion-header>\n  <ion-navbar color="miTema">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <strong style="font-size: 16px;">Secretaría  de Trabajo y Seguridad Social\n      </strong>\n    </ion-title>\n    <ion-buttons end>\n\n      <button ion-button tappable (click)="logout()"> \n        <ion-icon name="log-out" style="zoom: 130%"></ion-icon>\n      </button>\n    </ion-buttons> \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="animated fadeIn  common-bg auth-page-home">\n  <div align="center">\n      <img src="assets/imgs/stss-logo2.png" alt="">\n\n      <button ion-button color="primary" outline menuToggle>Iniciar</button>\n  </div>\n  \n\n</ion-content>\n'/*ion-inline-end:"C:\Projects\APPSTSS\AppMovil\src\pages\home\home.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_dataService__["a" /* DataService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__services_dataService__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], HomePage);
    return HomePage;
}());

//
//# sourceMappingURL=home.js.map

/***/ })

},[373]);
//# sourceMappingURL=main.js.map