import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotmsgComponent } from './botmsg.component';

describe('BotmsgComponent', () => {
  let component: BotmsgComponent;
  let fixture: ComponentFixture<BotmsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotmsgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotmsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
