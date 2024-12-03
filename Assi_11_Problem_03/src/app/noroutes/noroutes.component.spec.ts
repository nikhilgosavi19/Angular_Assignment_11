import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoroutesComponent } from './noroutes.component';

describe('NoroutesComponent', () => {
  let component: NoroutesComponent;
  let fixture: ComponentFixture<NoroutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoroutesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoroutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
