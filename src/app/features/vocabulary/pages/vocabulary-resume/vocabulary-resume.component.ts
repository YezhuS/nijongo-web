import {CommonModule} from '@angular/common';
import {Component, inject} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';
import {TabI} from '../../../../lib/model/tab.model';
import {DropdownModule} from 'primeng/dropdown';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {OptionsI} from '../../../../core/model/core.model';
import {OptionsVocabularyType} from '../../constants/options.constant';
import {ListboxModule} from 'primeng/listbox';
import {Router} from '@angular/router';
import {PATH} from '../../../../core/const/routes.constant';
import {
  WordI,
  WordTranslationValue,
  WordTypeEnum,
} from '../../model/word.model';
import {DetailWordComponent} from '../../components/detail-word/detail-word.component';
import {ButtonGenericComponent} from '../../../../lib/button/button-generic/button-generic.component';
import {TabComponent} from '../../../../lib/tab/tab.component';
import {DialogModule} from '@angular/cdk/dialog';
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatDialog,
  MatDialogModule,
} from '@angular/material/dialog';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {Observable, map, of, startWith} from 'rxjs';

@Component({
  selector: 'app-vocabulary-resume',
  standalone: true,
  templateUrl: './vocabulary-resume.component.html',
  styleUrl: './vocabulary-resume.component.scss',
  imports: [
    CommonModule,
    TabViewModule,
    ButtonModule,
    DropdownModule,
    FormsModule,
    ButtonModule,
    ListboxModule,
    DialogModule,
    DetailWordComponent,
    ButtonGenericComponent,
    TabComponent,
    MatDialogModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
  ],
})
export class VocabularyResumeComponent {
  protected router = inject(Router);
  protected dialog = inject(MatDialog);
  protected tabs: TabI<WordTranslationValue[]>[] = [];
  protected previousPath: string = PATH.VOCABULARY;

  // ListBox
  protected selectedListBox!: WordTranslationValue;

  // Dialog
  protected itemSelected!: WordTranslationValue;

  // Tab
  protected tabSelected: TabI<WordTranslationValue[]> = {
    title: '',
    content: [],
  };

  // Autocomplete
  protected filteredOptions: Observable<OptionsI[]> = of([]);
  protected control = new FormControl<OptionsI | null>(null);
  protected vocabularyOptions: OptionsI[] = [];

  constructor() {
    /** Cada tipo vendrá con romanji, kanji, kata/hi y traducción
     * Cada vez que se seleccione un tipo se cambiará el contenido
     * de cada tab dependiendo del tipo seleccionado
     *
     * Habría que realizar una función que modifique el contenido
     * de cada tab tras seleccionar el tipo
     *
     * También habría que indroducir json de las tablas de
     * vocabulario que tenemos (algunas como ejemplo por ahora)
     *
     * Diseñar la vista de como se vería en vista web
     * Diseñar el detalle de cada elemento en formato movil
     *
     */
    this.tabs = [
      {
        title: 'Romaji',
        content: [],
      },
      {
        title: 'Kana',
        content: [],
      },
      {
        title: 'Kanji',
        content: [],
      },
    ];
    this.vocabularyOptions = OptionsVocabularyType;
    this.control.setValue(this.vocabularyOptions[0]);
    this.selectOnChange(this.control.value?.value);
  }

  ngOnInit(): void {
    this.tabSelected = this.tabs[0];

    // // Filter autocomplete
    this.filteredOptions = this.control.valueChanges.pipe(
      startWith(''),
      map((value) => {
        const name = typeof value === 'string' ? value : value?.label;
        return value
          ? this._filter(name as string)
          : this.vocabularyOptions.slice();
      })
    );
  }

  protected displayFn(value: OptionsI): string {
    return value && value.label ? value.label : '';
  }

  private _filter(value: string): any {
    const filterValue = value.toLowerCase();

    return this.vocabularyOptions.filter((option) =>
      option.label.toLowerCase().includes(filterValue)
    );
  }

  protected selectOnChange(value: WordI[]): void {
    this.tabs[WordTypeEnum.Romaji].content = value.map((x) => {
      return {value: x.romaji, translation: x.translation, word: x};
    });
    this.tabs[WordTypeEnum.Kanji].content = value.map((x) => {
      return {value: x.kanji, translation: x.translation, word: x};
    });
    this.tabs[WordTypeEnum.Kana].content = value.map((x) => {
      return {value: x.kana, translation: x.translation, word: x};
    });
  }

  protected openDetail(value: WordTranslationValue): void {
    this.itemSelected = {
      ...value,
      type: this.tabs.findIndex((x) => x.title === this.tabSelected.title),
    };
    this.openModal();
  }

  private openModal() {
    this.dialog.open(DetailWordComponent, {
      data: this.itemSelected,
    });
  }
}
