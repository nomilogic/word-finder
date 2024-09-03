import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppComponent } from './app.component';
import { PuzzleSolverComponent } from './puzzle-solver/puzzle-solver.component';
import { AppRoutingModule } from './app-routing.module';

/* import { wordsL1 } from './word-lists/words-l1';
import { wordsL2 } from './word-lists/words-l2';
import { wordsL3 } from './word-lists/words-l3';
import { wordsL4 } from './word-lists/words-l4';
import { wordsL5 } from './word-lists/words-l5';
import { wordsL6 } from './word-lists/words-l6';
import { wordsL7 } from './word-lists/words-l7';
import { wordsL8 } from './word-lists/words-l8';
import { wordsL9 } from './word-lists/words-l9';
import { wordsL10 } from './word-lists/words-l10';
import { wordsL11 } from './word-lists/words-l11';
import { wordsL12 } from './word-lists/words-l12';
import { wordsL13 } from './word-lists/words-l13';
import { wordsL14 } from './word-lists/words-l14';
import { wordsL15 } from './word-lists/words-l15';
import { wordsL16 } from './word-lists/words-l16';
import { wordsL17 } from './word-lists/words-l17';
import { wordsL18 } from './word-lists/words-l18';
import { wordsL19 } from './word-lists/words-l19';
import { wordsL20 } from './word-lists/words-l20';
import { wordsL21 } from './word-lists/words-l21';
import { wordsL22 } from './word-lists/words-l22';
import { wordsL23 } from './word-lists/words-l23';
import { wordsL24 } from './word-lists/words-l24';
import { wordsL25 } from './word-lists/words-l25';
import { wordsL27 } from './word-lists/words-l27';
import { wordsL28 } from './word-lists/words-l28';
import { wordsL29 } from './word-lists/words-l29';
import { wordsL31 } from './word-lists/words-l31';
 */
@NgModule({
  declarations: [AppComponent, PuzzleSolverComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, // Add FormsModule to imports

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
