import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchImageTextComponent } from './match-image-text.component';

describe('MatchImageTextComponent', () => {
  let component: MatchImageTextComponent;
  let fixture: ComponentFixture<MatchImageTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchImageTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchImageTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
