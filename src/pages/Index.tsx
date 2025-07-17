import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const sampleDocuments = [
    {
      id: 1,
      title: 'Рукопись экспедиции 1847 года',
      description: 'Дневник исследователя Северного морского пути с детальными записями о погодных условиях и географических особенностях',
      location: 'Архангельск',
      coordinates: { lat: 64.5391, lng: 40.5219 },
      date: '1847-06-15',
      tags: ['экспедиция', 'география', 'север'],
      image: '/img/f3e701fa-7468-4c54-932a-806f92ef1a61.jpg'
    },
    {
      id: 2,
      title: 'Картографические заметки',
      description: 'Древние карты с указанием торговых путей через Волгу и отметками о важных поселениях',
      location: 'Нижний Новгород',
      coordinates: { lat: 56.2965, lng: 43.9361 },
      date: '1654-08-22',
      tags: ['карты', 'торговля', 'волга'],
      image: '/img/31fc7ab9-b75a-4771-a7bf-baf3390d06d7.jpg'
    },
    {
      id: 3,
      title: 'Путевые заметки купца',
      description: 'Записи о путешествии по Сибирскому тракту с описанием городов, цен на товары и особенностей местного быта',
      location: 'Екатеринбург',
      coordinates: { lat: 56.8431, lng: 60.6454 },
      date: '1789-03-10',
      tags: ['путешествие', 'торговля', 'сибирь'],
      image: '/img/3240fc6d-e8df-4d8e-9d59-ee5891ce7ead.jpg'
    }
  ];

  const filteredDocuments = sampleDocuments.filter(doc => 
    doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const stars = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 3
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-stellar-dark via-stellar-midnight to-stellar-dark relative overflow-hidden font-open-sans">
      {/* Звездное небо */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute w-1 h-1 bg-stellar-white rounded-full animate-twinkle"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              animationDelay: `${star.delay}s`
            }}
          />
        ))}
      </div>

      {/* Градиент рассвета */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-stellar-glow opacity-30" />

      {/* Основной контент */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Заголовок */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold text-stellar-white mb-4 font-montserrat">
            Stellar Archive
          </h1>
          <p className="text-xl text-stellar-aurora mb-2">
            Архив исторических документов
          </p>
          <p className="text-stellar-white/70 text-lg">
            Исследуйте историю через координаты времени и места
          </p>
        </div>

        {/* Поисковая панель */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative group">
            <Input
              type="text"
              placeholder="Поиск по документам, локациям, тегам..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-6 text-lg bg-stellar-midnight/50 border-stellar-dawn/30 text-stellar-white placeholder:text-stellar-white/50 focus:border-stellar-dawn focus:ring-stellar-dawn/20 backdrop-blur-sm"
            />
            <Icon 
              name="Search" 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-stellar-dawn w-5 h-5" 
            />
          </div>
        </div>

        {/* Быстрые фильтры */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['экспедиция', 'карты', 'торговля', 'путешествие', 'география'].map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="px-4 py-2 bg-stellar-midnight/40 text-stellar-white hover:bg-stellar-dawn/20 border-stellar-dawn/30 cursor-pointer transition-all duration-300"
              onClick={() => setSearchQuery(tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Результаты поиска */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredDocuments.map((doc) => (
            <Card 
              key={doc.id} 
              className="bg-stellar-midnight/30 border-stellar-dawn/30 hover:border-stellar-dawn/50 transition-all duration-300 group backdrop-blur-sm animate-fade-in"
            >
              <CardHeader className="p-0">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={doc.image} 
                    alt={doc.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-stellar-midnight/80 backdrop-blur-sm rounded-full p-2">
                    <Icon name="MapPin" className="w-4 h-4 text-stellar-dawn" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-stellar-white mb-2 font-montserrat">
                  {doc.title}
                </CardTitle>
                <CardDescription className="text-stellar-white/70 mb-4 line-clamp-3">
                  {doc.description}
                </CardDescription>
                
                <div className="flex items-center gap-2 mb-3 text-stellar-aurora">
                  <Icon name="MapPin" className="w-4 h-4" />
                  <span className="text-sm">{doc.location}</span>
                </div>

                <div className="flex items-center gap-2 mb-4 text-stellar-aurora">
                  <Icon name="Calendar" className="w-4 h-4" />
                  <span className="text-sm">{doc.date}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {doc.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="outline" 
                      className="text-xs border-stellar-dawn/50 text-stellar-dawn"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    className="bg-stellar-dawn hover:bg-stellar-dawn/80 text-stellar-white flex-1"
                  >
                    Подробнее
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-stellar-dawn/50 text-stellar-dawn hover:bg-stellar-dawn/10"
                  >
                    <Icon name="Map" className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Интерактивная карта */}
        <Card className="bg-stellar-midnight/30 border-stellar-dawn/30 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-stellar-white font-montserrat flex items-center gap-2">
              <Icon name="Globe" className="w-5 h-5 text-stellar-dawn" />
              Интерактивная карта
            </CardTitle>
            <CardDescription className="text-stellar-white/70">
              Географическое расположение документов
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-96 bg-stellar-midnight/20 rounded-lg relative overflow-hidden">
              {/* Стилизованная карта России */}
              <div className="absolute inset-0 bg-gradient-to-br from-stellar-midnight/40 to-stellar-dark/60">
                {/* Точки документов на карте */}
                {sampleDocuments.map((doc, index) => (
                  <div
                    key={doc.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                    style={{
                      left: `${20 + index * 25}%`,
                      top: `${30 + index * 20}%`
                    }}
                    onClick={() => setSelectedLocation(selectedLocation === doc.location ? null : doc.location)}
                  >
                    <div className="relative">
                      <div className="w-3 h-3 bg-stellar-dawn rounded-full animate-pulse" />
                      <div className="absolute inset-0 w-3 h-3 bg-stellar-dawn rounded-full animate-ping opacity-75" />
                    </div>
                    
                    {/* Всплывающая подсказка */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <div className="bg-stellar-midnight/90 backdrop-blur-sm text-stellar-white px-3 py-2 rounded-lg text-sm whitespace-nowrap border border-stellar-dawn/30">
                        <div className="font-semibold">{doc.location}</div>
                        <div className="text-stellar-aurora text-xs">{doc.date}</div>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Координатная сетка */}
                <div className="absolute inset-0 opacity-20">
                  {Array.from({ length: 8 }, (_, i) => (
                    <div
                      key={`v-${i}`}
                      className="absolute top-0 bottom-0 w-px bg-stellar-dawn/20"
                      style={{ left: `${i * 12.5}%` }}
                    />
                  ))}
                  {Array.from({ length: 6 }, (_, i) => (
                    <div
                      key={`h-${i}`}
                      className="absolute left-0 right-0 h-px bg-stellar-dawn/20"
                      style={{ top: `${i * 16.67}%` }}
                    />
                  ))}
                </div>
                
                {/* Индикатор выбранной локации */}
                {selectedLocation && (
                  <div className="absolute bottom-4 left-4 bg-stellar-midnight/80 backdrop-blur-sm rounded-lg p-3 border border-stellar-dawn/30">
                    <div className="text-stellar-white font-semibold text-sm">
                      {selectedLocation}
                    </div>
                    <div className="text-stellar-aurora text-xs">
                      {sampleDocuments.find(doc => doc.location === selectedLocation)?.coordinates.lat.toFixed(4)}°N,{' '}
                      {sampleDocuments.find(doc => doc.location === selectedLocation)?.coordinates.lng.toFixed(4)}°E
                    </div>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;