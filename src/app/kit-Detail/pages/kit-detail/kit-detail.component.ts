import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrimengModule } from '../../../shared/primeng/primeng.module';

@Component({
  selector: 'app-kit-detail',
  imports: [ PrimengModule],
  templateUrl: './kit-detail.component.html',
  styleUrl: './kit-detail.component.css'
})
export class KitDetailComponent {

  scanResult: string | null = null;
   
  constructor(private route: ActivatedRoute,
              private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe( params => {
      this.scanResult = params.get('result');
    })
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
}
