import { HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { EntryComponent } from "./entry.component";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [EntryComponent],
    }).compileComponents();
  });

  it(`should create component`, () => {
    const fixture = TestBed.createComponent(EntryComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
