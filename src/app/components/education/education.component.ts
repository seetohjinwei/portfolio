import { Component, OnInit } from '@angular/core';
import { educations } from 'src/app/data/Educations';
import Education from 'src/app/interfaces/IEducation';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  constructor() {}

  educations: Education[] = educations;

  ngOnInit(): void {}

  formatPeriod(edu: Education): string {
    const formatDate = (month: string | undefined, year: string): string => {
      return `${month || ''} ${year}`;
    };

    const start: string = formatDate(edu.startMonth, edu.startYear);
    const end: string = formatDate(edu.endMonth, edu.endYear);
    return `${start} - ${end}`;
  }
}
