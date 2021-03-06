System.register(['angular2/core', "./details.component", "angular2/router"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, details_component_1, router_1;
    var RootComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (details_component_1_1) {
                details_component_1 = details_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            RootComponent = (function () {
                function RootComponent() {
                    this.list = [];
                    for (var lix = 0; lix < 3000; lix++) {
                        this.list.push('item ' + lix);
                    }
                }
                RootComponent = __decorate([
                    core_1.Component({
                        selector: 'pm-root',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        templateUrl: 'app/root.component.html'
                    }),
                    router_1.RouteConfig([
                        { path: '/dn/', name: 'Details', component: details_component_1.DetailsComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], RootComponent);
                return RootComponent;
            }());
            exports_1("RootComponent", RootComponent);
        }
    }
});
//# sourceMappingURL=root.component.js.map