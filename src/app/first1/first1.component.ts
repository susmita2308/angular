import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first1',
  templateUrl: './first1.component.html',
  styleUrls: ['./first1.component.css']
})
export class First1Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
go(id){
  this.router.navigate(['/next',id])
;
}

}
