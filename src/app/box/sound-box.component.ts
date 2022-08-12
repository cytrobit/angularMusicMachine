import { Component, ElementRef, HostListener , Input, OnInit } from '@angular/core';

export enum Sound {
    drums = 0,
    guitar = 1,
    bass = 2,
    keys = 3,
    brass = 4,
    vocals = 5,
    beatbox1 = 6,
    beatbox2 = 7,
    choir = 8
  }

  interface Dictionary<T> {
    [Key: string]: T;
  }

@Component({
    selector: 'app-sound-box',
    templateUrl: './sound-box.component.html',
    styleUrls: ['./sound-box.component.scss']
  })
  export class SoundBoxComponent implements OnInit {
  
    @Input() sound: Sound | null = null;

    private audio = new Audio();

    public isPlaying = false;

    Labels: Dictionary<string> = {
        "bass": "Bass",
        "beatbox1": "Beatbox 1",
        "beatbox2": "Beatbox 2",
        "brass": "Brass",
        "choir": "Choir",
        "drums": "Drums",
        "guitar": "Guitar",
        "keys": "Keys",
        "vocals": "Lady Vocal"
    }
    
    HotKeys: Dictionary<string> = {
      "drums": "z",
      "guitar": "x",
      "bass": "c",
      "keys": "v",
      "brass": "b",
      "vocals": "n",
      "beatbox1": "m",
      "beatbox2": "k",
      "choir": "l"
  }

    constructor(private elementRef:ElementRef) {
    }

    public toggle(){
      this.isPlaying ? this.pause() : this.play();
    }

    public play(){
      this.audio.play();
      this.isPlaying = true;
    }

    public pause(){
      this.audio.pause();
      this.audio .currentTime = 0;
      this.isPlaying = false;
    }

    public getAudioFileSource(): string {
      return 'assets/music/' + Sound[this.sound!].toString() + '.mp3'
    }

    public getLabel(): string {
        return this.Labels[Sound[this.sound!].toString()]
    }

    public getId(): string {
      return 'box_' + Sound[this.sound!]
    }

    public getImage(): string{
      return 'assets/icons/' + Sound[this.sound!].toString() + '.svg'
    }

    @HostListener('window:keydown', ['$event'])
    onKeyDown(ev:KeyboardEvent) {
      if(ev.key == this.HotKeys[Sound[this.sound!].toString()]){
        this.play();
      }
    }

    @HostListener('window:keyup', ['$event'])
    onKeyUp(ev:KeyboardEvent) {
      if(ev.key == this.HotKeys[Sound[this.sound!].toString()]){
        this.pause();
      }
    }
  
    ngOnInit() {
        this.checkRequiredFields(this.sound);

        this.audio.src = this.getAudioFileSource();
        this.audio.loop = true;
        this.audio.load();

        this.elementRef.nativeElement.addEventListener('touchstart', () => {
          this.play();
        })

        this.elementRef.nativeElement.addEventListener('touchend', () => {
          this.pause();
        })
     }
 
     ngOnChanges(changes : any) {
        this.checkRequiredFields(this.sound);
     }
  
    checkRequiredFields(sound: Sound | null) {
        if(sound === null) {
           throw new Error("Attribute 'sound' is required");
        }
     }
  }