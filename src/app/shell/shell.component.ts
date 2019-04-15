import { Title } from '@angular/platform-browser';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { MediaObserver } from '@angular/flex-layout';

import { AuthenticationService, I18nService } from '@app/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { PermissionService } from '../staff/permission/permission.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  @HostBinding('class') theme: any;
  showStaff = false;
  showCustomer = false;

  constructor(
    public overlayContainer: OverlayContainer,
    private router: Router,
    private titleService: Title,
    private media: MediaObserver,
    private authenticationService: AuthenticationService,
    private permissionService: PermissionService,
    private i18nService: I18nService
  ) {}

  ngOnInit() {
    this.permissionService.find().subscribe(p => {
      this.permissionService.setPermission(p);
      this.showStaff = this.permissionService.permission.canFindAllUser();
      this.showCustomer = this.permissionService.permission.canFindAllCustomer();
    });
  }

  changeTheme() {
    this.theme = this.theme == 'dark-theme' ? 'default-theme' : 'dark-theme';
    this.overlayContainer.getContainerElement().classList.add(this.theme);
  }

  setLanguage(language: string) {
    this.i18nService.language = language;
  }

  logout() {
    this.authenticationService.logout().subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
  }

  get username(): string | null {
    const credentials = this.authenticationService.credentials;
    return credentials ? credentials.username : null;
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }

  get isMobile(): boolean {
    return this.media.isActive('lt-md');
  }

  get title(): string {
    return this.titleService.getTitle();
  }
}
