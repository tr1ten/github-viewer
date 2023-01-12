import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayReposComponent } from './display-repos.component';

describe('DisplayReposComponent', () => {
  let component: DisplayReposComponent;
  let fixture: ComponentFixture<DisplayReposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayReposComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
