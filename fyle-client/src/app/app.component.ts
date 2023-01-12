import { Component, Inject, NgZone } from '@angular/core';
import { faGithub,faSearchengin,faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { environment } from 'src/enviroment/enviroment';
import { User } from './user-detail/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'fyle-client';
  username:string="tr1ten";
  faGithub = faGithub;
  faSearchengin = faSearchengin;
  faLinkedin = faLinkedin;
  loading=false;
  user:User|null=null;
  error:string="";
  changeUsername(username:string) {
    this.username = username;
  }
  constructor() {
    this.search();
  }
  async searchUser() : Promise<User> {
    // fetch from api
    const res = await fetch(`${environment.API_URL}/user?username=${this.username}`).then(async (response) => {
      if(response.status == 404) {
        this.error = (await response.json()).message;
        return null;
      }
      return response.json();
    });
    return res;
  }
  async search() {
    this.loading = true;
    this.user = null;
    const res = await this.searchUser();
    if(res) {
      this.user = res;
      this.clearError();
    }
    else{

      if(this.error == "") this.error = "User not found";
    }
    this.loading = false;

  }
  clearError() {
    this.error = "";
  }
  
}

