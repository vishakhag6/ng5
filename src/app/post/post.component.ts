import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  id:number = 0;
  post = {};

  constructor(private route : ActivatedRoute) {

    this.route.params.subscribe(res => this.id = res.id);
    fetch("https://jsonplaceholder.typicode.com/posts/"+this.id)
    .then((res) => res.json())
    .then((data) => this.post = data)
    .catch((err) => console.log(err))
  }

  ngOnInit() {
  }

}
