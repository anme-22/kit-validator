import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private renderer: Renderer2;
  private isDarkMode = false;

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.loadTheme(); // Cargar el tema guardado al inicio
  }

  setDarkMode(isDarkMode: boolean) {
    this.isDarkMode = isDarkMode;
    this.applyTheme();
    this.saveTheme(); // Guardar el tema en localStorage
  }

  isDark() {
    return this.isDarkMode;
  }

  private applyTheme() {
    if (this.isDarkMode) {
      this.renderer.addClass(document.body, 'dark-theme');
    } else {
      this.renderer.removeClass(document.body, 'dark-theme');
    }
  }

  private saveTheme() {
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }

  private loadTheme() {
    const storedTheme = localStorage.getItem('theme');
    this.isDarkMode = storedTheme === 'dark';
    this.applyTheme();
  }
}
