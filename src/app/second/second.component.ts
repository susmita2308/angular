import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FetchService} from '../fetch.service';
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
data:any=[]
  constructor(private fetchService:FetchService, private route:ActivatedRoute) { }

  ngOnInit(): void {

const id =     this.route.snapshot.paramMap.get('id');
    this.fetchService.getCollection(id)
    .subscribe(data=>{
      this.data=data;
      console.log(this.data);
    })
  
  }
  
  }

