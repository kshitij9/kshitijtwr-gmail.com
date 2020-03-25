import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonPickerComponent } from './json-picker.component';

describe('JsonPickerComponent', () => {
  let component: JsonPickerComponent;
  let fixture: ComponentFixture<JsonPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
