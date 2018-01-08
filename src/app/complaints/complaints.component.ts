import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent implements OnInit {
  cccc: any;
  jjjj: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(skl => {
      this.cccc = skl;
      console.log(this.cccc);
    });
    this.route.queryParams.subscribe(ggk => {
      this.jjjj = ggk;
      console.log(this.jjjj);
    });
  }

}
