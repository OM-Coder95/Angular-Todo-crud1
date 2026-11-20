import { Component, OnInit } from '@angular/core';
import { Imobile } from 'src/app/shared/models/mobile';

@Component({
  selector: 'app-mobile-crud1',
  templateUrl: './mobile-crud1.component.html',
  styleUrls: ['./mobile-crud1.component.scss']
})
export class MobileCrud1Component implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }

  mobileArr: Array<Imobile> = [
    {
      id: '101',
      productName: 'OnePlus 9 Pro',
      rating: 9,
      features: [
        'Snapdragon 888',
        'Fluid AMOLED 120Hz display',
        'Hasselblad quad-camera',
        'Warp Charge 65T',
        'OxygenOS'
      ],
      price: 899,
      originalPrice: 1033.85,
      availableStock: 7,
      productImg: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400'
    },
    {
      id: '102',
      productName: 'Xiaomi Mi 11',
      rating: 6,
      features: [
        'Snapdragon 888',
        'Quad-curved AMOLED display',
        '108MP camera',
        'Harman Kardon stereo speakers',
        '55W wired charging'
      ],
      price: 699,
      originalPrice: 803.85,
      availableStock: 5,
      productImg: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400'
    },
    {
      id: '103',
      productName: 'Sony Xperia 1 III',
      rating: 2.5,
      features: [
        'Snapdragon 888',
        '6.5-inch 4K OLED display',
        'Triple 12MP camera',
        '120Hz refresh rate',
        '4500mAh battery'
      ],
      price: 1199,
      originalPrice: 1378.85,
      availableStock: 0,
      productImg: ''
    },
    {
      id: '104',
      productName: 'Samsung Galaxy S21 Ultra',
      rating: 4.6,
      features: [
        'Exynos 2100 processor',
        '6.8-inch Dynamic AMOLED 2X',
        '108MP quad-camera',
        '5000mAh battery',
        'S Pen support'
      ],
      price: 999,
      originalPrice: 1148.85,
      availableStock: 3,
      productImg: 'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=400'
    },
    {
      id: '105',
      productName: 'Apple iPhone 13 Pro',
      rating: 4.9,
      features: [
        'A15 Bionic chip',
        '6.1-inch Super Retina XDR',
        '12MP Pro camera system',
        'ProMotion 120Hz display',
        'Face ID'
      ],
      price: 1099,
      originalPrice: 1263.85,
      availableStock: 9,
      productImg: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400'
    }
  ];

  defaultImg: string = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALkAAACUCAMAAAD4QXiGAAAAMFBMVEXz9Pa5vsq1usfP0tr3+Pnc3+TFydPX2+Hb3eS8wczm6Ozi5Ons7vHCxtHS1d3Lz9cC9u/uAAACX0lEQVR4nO2a23aDIBBFFSFcBP3/v61i0iDSGoKLIe3Zb0mM7jUOMOh0HQAAAAAAAAAAAAAAAAAAAAAAAAAAAH8PXgyRuBFKlGEshbdyPSuld6q++Mz6K2Bz7bDLa8QX9aFuslu9XbYwWfw5bE11LvxF3a0Qby6rmk8+RYsnxWkN+1xRvOODD1bxaVR18+4icwHz14nMl2XcdvlrOb25mdc5Ln89JDeX/X1mnk3eWajNn8sp03lLObH5GC7lt6yz0JpzF1YwzOQMU1pzuyu92PQ55uO+aPwpXYRIfElqvl38zHyp0LQ43g1a8yjmSY2ttDyqE88t+zxPVgRbTXxUJ55b9tu61FokHz/GuU4cc6ODkM+JqUV8H6Ajdeo1VD2D7o47M66COxINU2rzR93Ckvt4EdyShTFUJzfnVjqt9Twm6lwVPSNgYdTJzVdsutaS+4hHud6EeRoRe+9zvVlznhIP1Vs152NSfPnjY5i2ap6OuOee6+2YGxnM5+owOA/DtBVzbtzz8eYPOb7P9UbM+fqUlA0df0F8YWzGnG+Pd9nkP52K+81TG+aPwoutIuo36e0w2Yq5cd9SQ1yrtGy+Ds6n1KzPX2i0Ym5PTRs1N+fZ0aZ5kOOfZf6OeAvmu8H5Ueb5g7MRc/7mK90GzAXMYQ7zP2hOX59bqd5BGnLzEmCew8d2iWz9LUNxwyJBZ87kJ4hJFuJ3JFmvUIsx97ntig60zDaHUqaruv76W+UWV3u7qNPSVQ75oj7owlzx+VK9RXTFqKGUaSTwXqDqwQYAAAAAAAAAAAAAAAAAAAD/ni92JyNvY4ZY9gAAAABJRU5ErkJggg=="

  trackById(index: number, m: Imobile) {
    return m.id;
  }
}
