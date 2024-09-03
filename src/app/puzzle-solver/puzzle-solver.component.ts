import { Component } from '@angular/core';

@Component({
  selector: 'app-puzzle-solver',
  templateUrl: './puzzle-solver.component.html',
  styleUrls: ['./puzzle-solver.component.css']
})
export class PuzzleSolverComponent {
  wordLength: number | undefined;
  includingLetters: string = '';
  excludingLetters: string = '';
  revealedLetters: string = '';
  includedButNotUsedOnPosition: string = '';

  possibleWords: string[] = [];
  currentLength = 1;
  maxWordLength = 31; // Adjust this value as needed

  async findWords() {
    this.possibleWords = [];

    const includingLetters = this.includingLetters.toUpperCase().replace(/\s+/g, '').split(',');
    const excludingLetters = this.excludingLetters.toUpperCase().replace(/\s+/g, '').split(',');
    const revealedLetters = this.parseRevealedLetters(this.revealedLetters);
    const includedButNotUsedOnPosition = this.parseIncludedButNotUsedOnPosition(this.includedButNotUsedOnPosition);

    console.log('Including Letters:', includingLetters);
    console.log('Excluding Letters:', excludingLetters);
    console.log('Revealed Letters:', revealedLetters);
    console.log('Included But Not Used On Position:', includedButNotUsedOnPosition);

    if (!this.wordLength) {
      for (let i = 1; i <= this.maxWordLength; i++) {
        this.currentLength = i;
        await this.loadAndFilterWords(i, includingLetters, excludingLetters, revealedLetters, includedButNotUsedOnPosition);
      }
    } else {
      this.currentLength = this.wordLength;
      await this.loadAndFilterWords(this.wordLength, includingLetters, excludingLetters, revealedLetters, includedButNotUsedOnPosition);
    }
  }

  async loadAndFilterWords(length: number, includingLetters: string[], excludingLetters: string[], revealedLetters: { [key: string]: string }, includedButNotUsedOnPosition: { [key: string]: string }) {
    try {
      const { [`wordsL${length}`]: words } = await import(`../word-lists/words-l${length}`);
      const filteredWords = words.filter(word =>
        this.matchesIncludingLetters(word, includingLetters) &&
        this.doesNotContainExcludingLetters(word, excludingLetters) &&
        this.matchesRevealedLetters(word, revealedLetters) &&
        this.doesNotContainIncludedButNotUsedOnPosition(word, includedButNotUsedOnPosition)
      );

      this.possibleWords = [...this.possibleWords, ...filteredWords];
    } catch (error) {
      console.warn(`Word list for length ${length} not found`, error);
    }
  }

  matchesIncludingLetters(word: string, includingLetters: string[]): boolean {
    const result = includingLetters.every(letter => !letter || word.includes(letter));
    console.log(`matchesIncludingLetters - Word: ${word}, Result: ${result}`);
    return result;
  }

  doesNotContainExcludingLetters(word: string, excludingLetters: string[]): boolean {
    const result = excludingLetters.every(letter => !letter || !word.includes(letter));
    console.log(`doesNotContainExcludingLetters - Word: ${word}, Result: ${result}`);
    return result;
  }

  matchesRevealedLetters(word: string, revealedLetters: { [key: string]: string }): boolean {
    const result = Object.keys(revealedLetters).every(index => word[parseInt(index, 10) - 1] === revealedLetters[index]);
    console.log(`matchesRevealedLetters - Word: ${word}, Result: ${result}`);
    return result;
  }

  doesNotContainIncludedButNotUsedOnPosition(word: string, includedButNotUsedOnPosition: { [key: string]: string }): boolean {
    const result = Object.keys(includedButNotUsedOnPosition).every(index => word[parseInt(index, 10) - 1] !== includedButNotUsedOnPosition[index]);
    console.log(`doesNotContainIncludedButNotUsedOnPosition - Word: ${word}, Result: ${result}`);
    return result;
  }

  parseRevealedLetters(input: string): { [key: string]: string } {
    const result: { [key: string]: string } = {};
    if (input) {
      input.split(',').forEach(pair => {
        const parts = pair.split(':');
        if (parts.length === 2) {
          result[parts[0].trim()] = parts[1].trim();
        }
      });
    }
    return result;
  }

  parseIncludedButNotUsedOnPosition(input: string): { [key: string]: string } {
    const result: { [key: string]: string } = {};
    if (input) {
      input.split(',').forEach(pair => {
        const parts = pair.split(':');
        if (parts.length === 2) {
          result[parts[0].trim()] = parts[1].trim();
        }
      });
    }
    return result;
  }
}
