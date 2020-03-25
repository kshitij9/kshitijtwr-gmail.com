import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplayMessageComponent } from './replay-message.component';

describe('ReplayMessageComponent', () => {
  let component: ReplayMessageComponent;
  let fixture: ComponentFixture<ReplayMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplayMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplayMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
