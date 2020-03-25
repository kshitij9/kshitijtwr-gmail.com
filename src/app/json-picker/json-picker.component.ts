import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { jsonPickerervice } from './services/json-picker.service';

@Component({
  selector: 'app-json-picker',
  templateUrl: './json-picker.component.html',
  styleUrls: ['./json-picker.component.scss']
})
export class JsonPickerComponent implements OnInit {

  constructor(@Inject(Router) private router: Router,
    @Inject(jsonPickerervice) private jsonPickerService: jsonPickerervice) { }

  jsonFileRoutes;

  ngOnInit(): void {
    //Get all json file names
    this.jsonFileRoutes = this.jsonPickerService.getAllJsonFileNames();
  }

  fileSelected(file) {
    this.router.navigate(['messages'], { state: { file } });
  }

}
