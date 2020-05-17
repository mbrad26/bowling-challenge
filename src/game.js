'use strict';

class ScoreCard {
  constructor() {
    this.frames = [];
    this.scores = [];
  }

  addToFrames(frame) {
    this.frames.push(frame);
  }

  setScore() {
    let frameScore = this.frames.slice(-1)[0].total();

    this.scores.push(frameScore);
  }

  getScores() {
    return this.scores;
  }

  updateFrameScore() {
    let size = this.scores.length;

    for (let i = 0; i < size; i++) {
      if (this.scores[i] === 10) {
        this.scores[i] += this.scores[i + 1];
      }
    }
  }
}
