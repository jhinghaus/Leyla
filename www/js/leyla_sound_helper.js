class DialogueLine {

  constructor(path){
    this.path = path
    this.hasPlayed = false;
  }

  play(){
    if (!this.hasPlayed){
      let audio = new Audio(this.path);
      audio.loop = false;
      audio.play();
      this.hasPlayed = true;
    }
  }
};

var audioFiles = [
  "L1",
  "L2",
  "L3",
  "L4",
  "L5",
  "L6",
  "L7",
  "L8",
  "L9",
  "L10",
  "L11",
  "L12",
  "L13",
  "L14",
  "L15",
  "L16",
  "L17",
  "L18",
  "L19",
  "L20",
  "L21",
  "L22",
  "M1",
  "M2",
  "M3",
  "M4",
  "M5",
  "O1",
  "O2",
  "O3",
  "FG1",
  "FG2",
  "FG3",
  "FG4",
];

var dialogueLines = {};

for (let line of audioFiles) {
  dialogueLines[line] = new DialogueLine("sound/"+line+".ogg")
};

function speak(line){
  if (audioFiles.includes(line)){
    dialogueLines[line].play();
  }
};