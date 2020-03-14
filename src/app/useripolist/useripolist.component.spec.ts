import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseripolistComponent } from './useripolist.component';

describe('UseripolistComponent', () => {
  let component: UseripolistComponent;
  let fixture: ComponentFixture<UseripolistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseripolistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseripolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
