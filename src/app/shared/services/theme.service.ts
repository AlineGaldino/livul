import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  public isDarkMode: boolean = false;

  constructor() {
    const theme = localStorage.getItem('theme');
    if (theme) {
      this.isDarkMode = theme === ThemeService.Theme.DARK;
    }
    this.setTheme(this.isDarkMode);
  }

  public setTheme(isDarkMode: boolean = false): void {
    const theme = isDarkMode ?
      ThemeService.Theme.DARK :
      ThemeService.Theme.LIGHT;
    localStorage.setItem('theme', theme);
    const body = document.querySelector('body');
    if (body) {
      body.dataset['theme'] = theme.toLocaleLowerCase();
    }
    this.isDarkMode = isDarkMode;
  }
}

export namespace ThemeService {
  export enum Theme {
    LIGHT = 'LIGHT',
    DARK = 'DARK',
  }
}
