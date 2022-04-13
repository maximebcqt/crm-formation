import { Component, OnInit } from '@angular/core';
import { VersionService } from '../../service/version.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor(public versionService: VersionService) {}

  ngOnInit(): void {}
  public incrementer(): void {
    this.versionService.incrementer();
  }
}
