import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css']
})
export class HttpClientComponent implements OnInit {

  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {
    this.dataService.getData().subscribe((res) => {
      console.log(res);
    });

  }


}
