import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-icon-svg',
  templateUrl: './icon-svg.component.html',
  styleUrls: ['./icon-svg.component.css']
})
export class IconSvgComponent {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
  	// Register crown icon for winner
  	iconRegistry.addSvgIcon(
  		'crown',
  		sanitizer.bypassSecurityTrustResourceUrl('./../assets/img/crown-solid.svg')
  	);
  }
}
