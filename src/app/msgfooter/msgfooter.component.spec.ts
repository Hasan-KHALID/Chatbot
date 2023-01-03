import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgfooterComponent } from './msgfooter.component';

describe('MsgfooterComponent', () => {
  let component: MsgfooterComponent;
  let fixture: ComponentFixture<MsgfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsgfooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsgfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
