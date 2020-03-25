import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-json-picker',
  templateUrl: './json-picker.component.html',
  styleUrls: ['./json-picker.component.scss']
})
export class JsonPickerComponent implements OnInit {

  constructor(@Inject(Router) private router: Router) { }
  jsonFileRoutes = [
    {
      id: 1,
      name: 'messages1'
    }, 
    {
      id: 2,
      name: 'messages2'
    }, 
    {
      id: 3,
      name: 'messages3'
    },
    {
      id: 4,
      name: 'messages3'
    },
    {
      id: 5,
      name: 'messages3'
    },
    {
      id: 6,
      name: 'messages3'
    }
  ]
  ngOnInit(): void {
  }

  fileSelected(file) {
    this.router.navigate(['messages'], {state: {file} });
  }

}
