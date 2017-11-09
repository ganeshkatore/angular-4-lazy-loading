import { LoggingService } from "./logging-service";
import { NgModule, Injector, CompilerFactory, ComponentFactoryResolver, AfterViewInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { LazyMoviesComponent } from "./lazy-movies/lazy-movies.component";
import { Router, RouterModule, Routes } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { LazyModule } from "./lazy.module";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { DynamicTypeBuilder } from "./type.builder";

// export function printMessage(input: string) {
//     return input.split('').reverse().join('');
//   //  return input;
//   }
 
//Another Version
// export class someModule{
//   constructor(private logging:LoggingService){

//   }
//   printMessage(input: string) {
//     return input.split('').reverse().join('');
//   //  return input;
//   }
// }
// export const routes: Routes = [
//   { path: 'load-movie', component: LazyMoviesComponent }
// ];
@NgModule({
  declarations: [
    LazyMoviesComponent
  ],
  imports: [
    CommonModule,
    //AppRoutingModule,
   // RouterModule.forChild(routes)
   RouterModule.forRoot([
    { path: 'movies', component: LazyMoviesComponent },
   ])
   
  ],
  providers: [LoggingService],
  bootstrap: []
})

export class someModule implements AfterViewInit {
  ngAfterViewInit(): void {
    this.loadComponent();
  }
  protected _compiler : any;
  protected _compilerFactory : any;   
  // constructor(private injector:Injector){
  //   const compilerFactory : CompilerFactory = platformBrowserDynamic().injector.get(CompilerFactory);
  //   this._compilerFactory = compilerFactory;
  //   this._compiler = compilerFactory.createCompiler([]);
  // }
  private loggingService:LoggingService;
  constructor(private componentFactoryResolver: ComponentFactoryResolver,private injector: Injector, private dynamic:DynamicTypeBuilder){
    setTimeout(() => this.loggingService = injector.get(LoggingService),3000);
  }

  loadComponent() {
   
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(LazyMoviesComponent);
    console.log(componentFactory);
   // let viewContainerRef = this.adHost.viewContainerRef;
    //viewContainerRef.clear();

   // let componentRef = viewContainerRef.createComponent(componentFactory);
   // (<AdComponent>componentRef.instance).data = adItem.data;
  }
 // logging=this.dynamic.createComponentFactory(LoggingService);
 // logging:LoggingService=this.injector.get(LoggingService);
    printMessage(input: string) {
      console.log(this.loggingService);
     // this.loadComponent();
    
      // let module = this.createComponentModule(LazyMoviesComponent);
      // console.log(module);
      // console.log(this._compiler);
      // this._compiler
      // .compileModuleAndAllComponentsAsync(module)
      // .then((moduleWithFactories : any) =>
      // {
      //     console.log('Module with Factories:- ',moduleWithFactories);
      //     const moduleRef = moduleWithFactories.ngModuleFactory.create(this.injector);
      //     let _ = window["_"];
      //     console.log('Module Ref',moduleRef);

      //     let factory = _.find(moduleWithFactories.componentFactories, { selector: 'custom-editor' });
      //     console.log('Factory:-',factory);
      //    // resolve({ factory, injector: moduleRef.injector });
      // });
    //  console.log(this.injector.get(LoggingService));
     // this.logging.logToConsole('CORE SPA Injected service:-, Incoming Value'+input);
    return input.split('').reverse().join('');
  //  return input;
  }
  navigateToLazyMovie(){
    //return this.router.navigate(['/lazy/load-movie']);
   // return this.router.navigate(['movies']);
  //  this.logging.logToConsole('Value getting injected from CORE SPA!')
  }

  protected createComponentModule (componentType: any) {
    @NgModule({
    imports: [
        componentType
    ],
    exports: [
        componentType
    ],
    declarations: [
        
    ],
    })
    class RuntimeComponentModule
    {
    }
    // a module for just this Type
    return RuntimeComponentModule;
}
}