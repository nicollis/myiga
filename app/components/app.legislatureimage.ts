import {Component, View, Inject, Input} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/angular2';
import {MyIGADataService} from '../services/MyIGADataService';
import {Legislator} from '../models/Legislator';

import  'rxjs/add/operator/map';


@Component({
    selector: 'legimg'
})

@View({

    template:
    `



    <img src="http://iga.in.gov/legislative/2016/portraits/{{ link }}" style="border-radius:55%" width=100 height=80>

    `
})



export class LegislatureImage {

  public image: any;
  public labels: any[];
  public data: any[];

  @Input() public link: any;

  constructor(public dataService: MyIGADataService) {

  }

  ngOnInit() {
    console.log(JSON.stringify(this.link) + 'is the link received');
    this.link = this.link.replace("/2016/legislators/","legislator_");
    this.link = this.link.replace("?format=png","");

  }

}
