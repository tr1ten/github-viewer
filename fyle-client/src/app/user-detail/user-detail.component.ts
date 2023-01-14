import { Component, Input, OnInit } from '@angular/core';
import { User, UserRepo } from './user';
import { faLocationDot,faLink,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { environment } from 'src/enviroment/enviroment';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.sass']
})

export class UserDetailComponent implements OnInit {
    @Input() user!: User | null;
    faLocationDot = faLocationDot;
    faTwitter = faTwitter;
    faLink = faLink;
    faMail = faEnvelope;
    loading = false;
    userRepos: UserRepo[] = [];
    PAGE_SIZE = 10;
    page = 1;
    reposPages = 1;
    ngOnInit() { 
      // fetch user repos
      this.loading = true;
      this.getRepos().then(() => {
        this.loading = false;
        console.log("here repos ", this.userRepos);
      });
      if(this.user) this.reposPages = Math.min(Math.ceil(this.user.public_repos/this.PAGE_SIZE),8);
      
    }
    async getRepos() {
      const res = await fetch(`${environment.API_URL}/user/repos?username=${this.user?.login}&size=${this.PAGE_SIZE}&page=${this.page}`).then(async (response) => {
        if(response.status == 404) {
          this.userRepos = [];
          return;
        }
        this.userRepos = await response.json();
      });
    }
    async changePage(n:number){
      this.page = n;
      this.loading = true;
      this.getRepos().then(()=>this.loading=false);
    }
}
