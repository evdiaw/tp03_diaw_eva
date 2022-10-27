import { Component, Input, OnInit } from '@angular/core';
import { CatalogueService } from '../catalogue.service';
import { Catalogue } from '../core/Catalogue';

@Component({
  selector: 'app-comp-catalogue',
  templateUrl: './comp-catalogue.component.html',
  styleUrls: ['./comp-catalogue.component.css']
})
export class CompCatalogueComponent implements OnInit {

  constructor(private catalogueService: CatalogueService) { }

  @Input() filtre: string = '';
  tabProduits: Array<Catalogue> = [];

  ngOnInit(): void {
    this.catalogueService.getCatalogue().subscribe({
      next: (data) => {
        this.tabProduits = data;
      }
    });

  }

  ngOnDestroy(): void {
    //this.catalogueService.getCatalogue().unsubscribe();
  }

  onChange(event: any) {
    switch(event.target.value) {
      case 'prix':
        this.tabProduits.sort((a, b) => a.price - b.price);
        break;
      case 'nom':
        this.tabProduits.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        break;
    }
  } 

}
