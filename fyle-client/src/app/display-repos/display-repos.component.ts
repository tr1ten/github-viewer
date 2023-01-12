import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserRepo } from '../user-detail/user';

@Component({
  selector: 'app-display-repos',
  templateUrl: './display-repos.component.html',
  styleUrls: ['./display-repos.component.css']
})
export class DisplayReposComponent {
    @Input() userRepos: UserRepo[] = [];
    @Input() loading: boolean = false;
    @Output() repoPageChange = new EventEmitter<number>();
    @Input() repoPage: number = 1;
    @Input() repoPages: number = 1;
    @Input() PAGE_SIZE = 6;
    pages:number[] = [];
    defaultRepos: number[] = [];
    ngOnInit() { 
        for (let p = 1; p <=this.repoPages; p++) {
            this.pages.push(p);
        }
        for (let p = 1; p <=this.PAGE_SIZE; p++) {
          this.defaultRepos.push(p);
      }
    }

}
