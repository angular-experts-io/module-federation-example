import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RemoteBFeatureBComponent } from './remote-b-feature-b.component';

describe('RemoteBFeatureBComponent', () => {
  let component: RemoteBFeatureBComponent;
  let fixture: ComponentFixture<RemoteBFeatureBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoteBFeatureBComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RemoteBFeatureBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
