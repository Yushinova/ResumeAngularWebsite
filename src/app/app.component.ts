import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name: string = "Yushinova Tatyana"
 about: string = "I'm 40, but I'm still learning and developing! Graduated from the STEP Academy. I have experience in team project development."
 technologies: string[] = ["ADO.NET", "SQL", "Network Programming", "ASP.NET", "Angular", "React"]
 languages: string[] = ["C++", "C#", "HTML", "CSS", "JavaScript", "TypeScript"]
 rangeTechnologies: number[] = this.setRange(this.technologies)
 rangeLanguages: number[]=this.setRange(this.languages)
 isExperience: boolean = true
 setRange(mas: string[]): number[]{
  let temp:number[]= new Array;
  for(let i = 0; i < mas.length/3; i++){
     temp.push(i);
  }
  return temp;
}

}
