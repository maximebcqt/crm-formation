import { Component, OnInit } from '@angular/core';
import { VersionService } from '../../service/version.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public numeroVersion!: number;
  constructor(public versionService: VersionService) {
    this.versionService.numVersion$.subscribe(
      (data) => (this.numeroVersion = data)
    );
  }
  ngOnInit(): void {}
}
