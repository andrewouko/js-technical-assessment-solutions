import { Component, EventEmitter, Output } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: "autocomplete-input",
  template: `
    <div class="wrapper">
      <div class="control" [class.is-loading]="isLoading">
        <input type="text" class="input" (input)="onInput($event)" />
      </div>
      <div *ngIf="results.length > 0" class="list is-hoverable">
        <a *ngFor="let res of results" class="list-item" (click)="selectItem(res)">{{ res }}</a>
      </div>
    </div>
  `,
})
export class AutocompleteComponent {
  @Output() public onSelect = new EventEmitter<string>();

  public results: string[] = [];
  private inputSubject = new Subject<string>();
  public isLoading: boolean = false;

  constructor(private http: HttpClient) { }

  onInput(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    this.inputSubject.next(val);
  }

  selectItem(item: string) {
    this.onSelect.emit(item);  // Emit the selected item
  }

  ngOnInit() {
    this.inputSubject.pipe(
      debounceTime(500),
      switchMap((val) => {
        if (val.length) {
          this.isLoading = true;
          return this.http.get<string[]>('https://example.com/api/items', {
            params: { q: val }
          });
        } else {
          return []
        }
      })
    ).subscribe(
      (data) => {
        this.results = data;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching results', error);
        this.isLoading = false;
      }
    )
  }
}
