import { Component } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { HowtoDialogComponent } from './howto-dialog/howto-dialog.component';

import { environment } from './../../../environments/environment';

/**
 * The component for the help/introduction dialog of the demo application
 *
 * @export
 * @class IntroductionComponent
 */
@Component({
  selector: 'app-introduction',
  templateUrl: 'introduction.component.html',
  styleUrls: ['introduction.component.scss'],
})
export class IntroductionComponent {
  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<IntroductionComponent>
  ) {}

  /**
   * Closing the help dialog
   *
   * @memberof IntroductionComponent
   */
  onCloseClick(): void {
    this.dialogRef.close();
  }

  /**
   *
   * Gets the currently defined swagger endpoint used for the optimization
   *
   * @return {*}  {string}
   * @memberof IntroductionComponent
   */
  public getCurrentDefinedHost(): string {
    return environment.host + ':' + environment.port;
  }

  /**
   * Opens the dialog for the HowTo video
   *
   * @memberof IntroductionComponent
   */
  openHowtoDialog(): void {
    let takeUpPercentage = 85; // take up to 80% of the screen size

    const dialogConfig = new MatDialogConfig();

    let innerWidth = window.innerWidth;

    let relativeWidth = (innerWidth * takeUpPercentage) / 100;
    if (innerWidth > 1500) {
      relativeWidth = (1500 * takeUpPercentage) / 100;
    } else {
      relativeWidth = (innerWidth * takeUpPercentage) / 100;
    }

    const relativeHeight = (relativeWidth * 9) / 16 + 160; // 16:9 to which we add 160 px for the dialog action buttons ("close")
    dialogConfig.width = relativeWidth + 'px';

    dialogConfig.maxHeight = '90%';

    dialogConfig.data = {
      ytVideoId: environment.howtoYTIdent,
    };

    const dialogRef = this.dialog.open(HowtoDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((result) => {
      //
    });
  }
}
