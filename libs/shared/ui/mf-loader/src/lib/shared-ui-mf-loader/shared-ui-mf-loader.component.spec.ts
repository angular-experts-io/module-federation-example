import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedUiMfLoaderComponent } from './shared-ui-mf-loader.component';

describe('SharedUiMfLoaderComponent', () => {
  let component: SharedUiMfLoaderComponent;
  let fixture: ComponentFixture<SharedUiMfLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedUiMfLoaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedUiMfLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
