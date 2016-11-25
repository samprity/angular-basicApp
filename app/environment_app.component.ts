
//imports the Component and View package from angular2/core
import {Component, View} from "angular2/core";

//Angular 2 decorator that allows you to associate metadata with the component class
@Component({
//my-app can be used as HTML tag to injecting and can be used as a component
   selector: 'my-app'
})

//@view contains a template that tells Angular how to render a view
@View({
  template: '<h2>My First Angular 2 App</h2>'
})

//export specifies that, this component will be available outside the file
export class AppComponent {

}