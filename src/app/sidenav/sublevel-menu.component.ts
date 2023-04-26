import { style, trigger,state, transition, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { INavbarData } from './helper';

@Component({
  selector: 'app-sublevel-menu',
  template: `
    <ul *ngIf="collapsed && data.items && data.items.length > 0"
      [@submenu]="expanded
      ? {value: 'visible',
      params: {transitionParams: '400ms cubic-bezier(0.86,0,0.07,1)',height: '*'}}
      : {value: 'hidden',
      params: {transitionParams: '400ms cubic-bezier(0.86,0,0.07,1)',height: '0'}}"
      class="sublevel-nav"
    >
      <li *ngFor="let item of data.items" class="sublevel-nav-items">
        <a
          class="sublevel-nav-link"
          (click)="handleClick(item)"
           *ngIf="item.items && item.items.length > 0"
        >
          <i class="sublevel-link-icon fa fa-circle"></i>
          <span class="sublevel-link-text" *ngIf="collapsed">{{
            item.label
          }}</span>
          <i
            *ngIf="item.items && collapsed"
            class="menu-collapse-icon"
            [ngClass]="
              !item.expanded ? 'fal fa-angle-right' : 'fal fa-angle-down'"
          ></i>
        </a>
        <a
          class="sublevel-nav-link"
          *ngIf="!item.items || (item.items && item.items.length === 0)"
          [routerLink]="[item.routerLink]"
          routerLinkActive="active-sublevel"
          [routerLinkActiveOptions]="{ exact: true }"
          ]
        >
          <i class="sublevel-link-icon fa fa-circle"></i>
          <span class="sublevel-link-text" *ngIf="collapsed">{{
            item.label
          }}</span>
        </a>
        <div *ngIf="item.items && item.items.length > 0">
          <app-sublevel-menu
            [collapsed]="collapsed"
            [multiple]="multiple"
            [expanded]="item.expanded"
          ></app-sublevel-menu>
        </div>
      </li>
    </ul>
  `,
  styleUrls: ['./sidenav.component.scss'],
  animations:[
    trigger('submenu',[
      state('hidden',style({
         height:'0',
         overflow:'hidden'
      })),
      state('visible',style({
        height:'*'
      })),
      transition('void => *',animate(0))
    ])
  ]

})
export class SublevelMenuComponent implements OnInit {
  @Input() data: INavbarData = {
    routerLink: '',
    icon: '',
    label: ' ',
    items: [],
  };
  @Input() collapsed = false;
  @Input() animating: boolean | undefined;
  @Input() expanded: boolean | undefined;
  @Input() multiple: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  handleClick(item: any): void {
    if (!this.multiple) {
      if (this.data.items && item.data.items.length > 0) {
        for (let modelItem of this.data.items) {
          if (item !== modelItem && modelItem.expanded) {
            modelItem.expanded = false;
          }
        }
      }
    }
    item.expanded = !item.expanded;
  }
}
