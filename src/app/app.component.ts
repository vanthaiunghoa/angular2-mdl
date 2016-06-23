import { Component, ViewEncapsulation } from '@angular/core';
import { ROUTER_DIRECTIVES} from '@angular/router';

import { ButtonDemo } from './button/button.component';
import { BadgeDemo } from './badge/badge.component';
import { CardDemo } from './card/card.component';
import { IconDemo } from './icon/icon.component';
import { ShadowDemo } from './shadow/shadow.component';
import { LoadingDemo } from './loading/loading.component';
import { ListDemo } from './list/list.component';
import { ToggleDemo } from './toggle/toggle.component';
import { MDL_DIRECTIVES } from '../components';

@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.html'
})
export class Home {
}

export const AppRoutes = [
  { component: Home, path:'', index: true },
  { path: 'badge', component: BadgeDemo },
  { path: 'button', component: ButtonDemo },
  { path: 'card', component: CardDemo },
  { path: 'icon', component: IconDemo },
  { path: 'loading', component: LoadingDemo },
  { path: 'list', component: ListDemo },
  { path: 'shadow', component: ShadowDemo },
  { path: 'toggle', component: ToggleDemo }
];

@Component({
  moduleId: module.id,
  selector: 'root-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    MDL_DIRECTIVES
  ],
  encapsulation: ViewEncapsulation.None
})
export class Angular2MdlAppComponent {

  title = 'Angular 2 - Material Design Lite';

}

