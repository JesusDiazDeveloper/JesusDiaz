import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeTechnologiesComponent } from './some-technologies.component';

describe('SomeTechnologiesComponent', () => {
  let component: SomeTechnologiesComponent;
  let fixture: ComponentFixture<SomeTechnologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SomeTechnologiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SomeTechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
