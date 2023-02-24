import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit{
 currentRoute:string='/';
 constructor(private router:Router){}
 ngOnInit(): void {
     this.currentRoute=this.router.url;
 }
}
