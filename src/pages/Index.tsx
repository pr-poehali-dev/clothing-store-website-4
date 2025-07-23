import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  sizes: string[];
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Элегантное черное платье",
    price: 12000,
    image: "/img/5977f587-7783-4e46-8274-3f53597c5192.jpg",
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "Платья"
  },
  {
    id: 2,
    name: "Белый пиджак",
    price: 15000,
    image: "/img/f96d0774-4f88-4a65-9ca0-094c7092ee19.jpg",
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "Жакеты"
  },
  {
    id: 3,
    name: "Золотистая блуза",
    price: 9000,
    image: "/img/6c6a30f4-7458-4446-ba9c-f76cff523a1d.jpg",
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "Блузы"
  }
];

const reviews = [
  {
    id: 1,
    name: "Анна Петрова",
    rating: 5,
    text: "Потрясающее качество! Платье село идеально, материал приятный к телу."
  },
  {
    id: 2,
    name: "Мария Иванова",
    rating: 5,
    text: "Обслуживание на высшем уровне. Помогли подобрать размер, доставили быстро."
  },
  {
    id: 3,
    name: "Елена Смирнова",
    rating: 5,
    text: "Элегантная одежда для особых случаев. Рекомендую всем подругам!"
  }
];

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('');

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold text-black">ELEGANT BOUTIQUE</h1>
              <nav className="hidden md:flex space-x-6">
                <a href="#home" className="text-gray-700 hover:text-black transition-colors">Главная</a>
                <a href="#catalog" className="text-gray-700 hover:text-black transition-colors">Каталог</a>
                <a href="#reviews" className="text-gray-700 hover:text-black transition-colors">Отзывы</a>
                <a href="#contact" className="text-gray-700 hover:text-black transition-colors">Контакты</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Icon name="Search" size={20} />
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="ShoppingBag" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-light text-black mb-6">
            Элегантность в каждой детали
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Откройте для себя коллекцию изысканной одежды, созданной для особых моментов
          </p>
          <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg">
            Перейти к каталогу
          </Button>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-light text-black mb-4">Каталог одежды</h3>
            <p className="text-gray-600 text-lg">Тщательно отобранные модели для истинных ценителей стиля</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="group cursor-pointer border-0 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="aspect-[3/4] overflow-hidden bg-gray-50">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3 text-xs">{product.category}</Badge>
                  <h4 className="text-xl font-medium text-black mb-2">{product.name}</h4>
                  <p className="text-2xl font-light text-black mb-4">{product.price.toLocaleString()} ₽</p>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="w-full border-black text-black hover:bg-black hover:text-white transition-colors"
                        onClick={() => setSelectedProduct(product)}
                      >
                        Размерная сетка
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle>{product.name}</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-6">
                        <div>
                          <h5 className="font-medium mb-3">Доступные размеры:</h5>
                          <div className="grid grid-cols-5 gap-2">
                            {product.sizes.map((size) => (
                              <Button
                                key={size}
                                variant={selectedSize === size ? "default" : "outline"}
                                size="sm"
                                onClick={() => setSelectedSize(size)}
                                className="h-10"
                              >
                                {size}
                              </Button>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h5 className="font-medium mb-3">Размерная таблица:</h5>
                          <div className="text-sm space-y-2">
                            <div className="flex justify-between"><span>XS:</span><span>42-44 (обхват груди 80-84 см)</span></div>
                            <div className="flex justify-between"><span>S:</span><span>44-46 (обхват груди 84-88 см)</span></div>
                            <div className="flex justify-between"><span>M:</span><span>46-48 (обхват груди 88-92 см)</span></div>
                            <div className="flex justify-between"><span>L:</span><span>48-50 (обхват груди 92-96 см)</span></div>
                            <div className="flex justify-between"><span>XL:</span><span>50-52 (обхват груди 96-100 см)</span></div>
                          </div>
                        </div>

                        <Button className="w-full bg-black text-white hover:bg-gray-800">
                          Добавить в корзину
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-light text-black mb-4">Отзывы клиентов</h3>
            <p className="text-gray-600 text-lg">Что говорят о нас наши покупатели</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <Card key={review.id} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                  <p className="font-medium text-black">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-4xl font-light text-black mb-6">Свяжитесь с нами</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Icon name="MapPin" size={24} className="text-gray-600" />
                  <div>
                    <p className="font-medium text-black">Адрес бутика</p>
                    <p className="text-gray-600">ул. Тверская, 15, Москва, 125009</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Phone" size={24} className="text-gray-600" />
                  <div>
                    <p className="font-medium text-black">Телефон</p>
                    <p className="text-gray-600">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Clock" size={24} className="text-gray-600" />
                  <div>
                    <p className="font-medium text-black">Часы работы</p>
                    <p className="text-gray-600">Пн-Вс: 10:00 - 21:00</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h4 className="text-2xl font-medium text-black mb-6">Оставьте заявку</h4>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Ваше имя"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black"
                />
                <input 
                  type="email" 
                  placeholder="Email"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black"
                />
                <textarea 
                  placeholder="Сообщение"
                  rows={4}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black resize-none"
                />
                <Button className="w-full bg-black text-white hover:bg-gray-800">
                  Отправить сообщение
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h5 className="text-2xl font-bold mb-4">ELEGANT BOUTIQUE</h5>
              <p className="text-gray-300">Элегантная одежда для особых моментов</p>
            </div>
            <div>
              <h6 className="font-medium mb-4">Навигация</h6>
              <div className="space-y-2 text-gray-300">
                <a href="#home" className="block hover:text-white transition-colors">Главная</a>
                <a href="#catalog" className="block hover:text-white transition-colors">Каталог</a>
                <a href="#reviews" className="block hover:text-white transition-colors">Отзывы</a>
                <a href="#contact" className="block hover:text-white transition-colors">Контакты</a>
              </div>
            </div>
            <div>
              <h6 className="font-medium mb-4">Социальные сети</h6>
              <div className="flex space-x-4">
                <Icon name="Instagram" size={24} className="text-gray-300 hover:text-white cursor-pointer transition-colors" />
                <Icon name="Facebook" size={24} className="text-gray-300 hover:text-white cursor-pointer transition-colors" />
                <Icon name="Twitter" size={24} className="text-gray-300 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Elegant Boutique. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;