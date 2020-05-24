import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchImageComponent } from './match-image.component';

describe('MatchImageComponent', () => {
  let component: MatchImageComponent;
  let fixture: ComponentFixture<MatchImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
