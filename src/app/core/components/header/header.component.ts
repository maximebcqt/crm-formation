import { Component, OnInit } from '@angular/core';
import { VersionService } from '../../service/version.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public numeroVersion!: number;
  constructor(public versionService: VersionService) {
    this.versionService.numVersion$.subscribe(
      (data) => (this.numeroVersion = data)
    );
  }

  ngOnInit(): void {}
}
