import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
// import { Post } from './post';
    
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular';
    
  posts = new Array();

   
  /*------------------------------------------
  --------------------------------------------
  call constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(private service:PostService) {}
    
  /*------------------------------------------
  --------------------------------------------
  call ngOnInit() function
  --------------------------------------------
  --------------------------------------------*/
  ngOnInit() {
      this.service.getPosts().subscribe(response => {
          this.posts = response
        }
      )
  }
 
  /*------------------------------------------
  --------------------------------------------
  call checkAllCheckBox() function
  --------------------------------------------
  --------------------------------------------*/
  checkAllCheckBox(ev: any) {
    this.posts.forEach(x => x.checked = ev.target.checked)
  }

 
  
  /*------------------------------------------
  --------------------------------------------
  call isAllCheckBoxChecked() function
  --------------------------------------------
  --------------------------------------------*/
  isAllCheckBoxChecked() {
    return this.posts.every(p => p.checked);
  }

  saveData() {
    this.service.saveRecords(this.posts).subscribe(response => {
      this.posts = response
    }
  )
  }
}
