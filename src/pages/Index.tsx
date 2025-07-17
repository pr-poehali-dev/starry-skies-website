import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPerson, setSelectedPerson] = useState<number | null>(null);

  const familyData = [
    {
      id: 1,
      firstName: 'Александр',
      lastName: 'Иванов',
      middleName: 'Сергеевич',
      birthDate: '1935-03-15',
      deathDate: '2020-12-08',
      section: 'А',
      row: 12,
      grave: 5,
      biography: 'Ветеран Великой Отечественной войны, инженер-строитель. Участвовал в строительстве многих объектов в городе. Заслуженный работник народного хозяйства.',
      photo: '/img/728308f2-b7d7-44aa-b1b9-f1c4e0790e4d.jpg',
      relatives: [2, 3, 4],
      generation: 1,
      position: { x: 50, y: 20 }
    },
    {
      id: 2,
      firstName: 'Мария',
      lastName: 'Иванова',
      middleName: 'Петровна',
      birthDate: '1940-07-22',
      deathDate: '2018-04-15',
      section: 'А',
      row: 12,
      grave: 6,
      biography: 'Учительница начальных классов, отличник народного просвещения. Воспитала не одно поколение детей. Любящая мать и бабушка.',
      photo: '/img/ca746e9a-51b9-452a-ba7d-8baa45044784.jpg',
      relatives: [1, 3, 4],
      generation: 1,
      position: { x: 70, y: 20 }
    },
    {
      id: 3,
      firstName: 'Сергей',
      lastName: 'Иванов',
      middleName: 'Александрович',
      birthDate: '1965-05-10',
      deathDate: '2019-11-22',
      section: 'Б',
      row: 8,
      grave: 12,
      biography: 'Программист, работал в IT-сфере. Создал несколько успешных проектов. Любил путешествия и фотографию.',
      photo: '/img/728308f2-b7d7-44aa-b1b9-f1c4e0790e4d.jpg',
      relatives: [1, 2, 4],
      generation: 2,
      position: { x: 40, y: 60 }
    },
    {
      id: 4,
      firstName: 'Елена',
      lastName: 'Петрова',
      middleName: 'Александровна',
      birthDate: '1968-09-03',
      deathDate: '2021-06-14',
      section: 'В',
      row: 15,
      grave: 7,
      biography: 'Врач-педиатр, заведующая детским отделением. Посвятила жизнь заботе о детях. Мать троих детей.',
      photo: '/img/ca746e9a-51b9-452a-ba7d-8baa45044784.jpg',
      relatives: [1, 2, 3],
      generation: 2,
      position: { x: 80, y: 60 }
    }
  ];

  const filteredPeople = familyData.filter(person => 
    `${person.firstName} ${person.lastName} ${person.middleName}`.toLowerCase().includes(searchQuery.toLowerCase()) ||
    person.biography.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const navigationItems = [
    { name: 'Информация', icon: 'Info', path: '/info' },
    { name: 'Карта', icon: 'Map', path: '/map' },
    { name: 'Расширенный поиск', icon: 'Search', path: '/search' },
    { name: 'Вход', icon: 'LogIn', path: '/login' },
    { name: 'Родственники', icon: 'Users', path: '/relatives' },
    { name: 'Ритуальные услуги', icon: 'Heart', path: '/services' }
  ];

  // Генерация звезд для фона
  const stars = Array.from({ length: 200 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 5,
    size: Math.random() * 2 + 1,
    brightness: Math.random() * 0.8 + 0.2
  }));

  // Генерация связей между родственниками
  const generateConnections = () => {
    const connections = [];
    familyData.forEach(person => {
      person.relatives.forEach(relativeId => {
        const relative = familyData.find(p => p.id === relativeId);
        if (relative && person.id < relativeId) {
          connections.push({
            from: person.position,
            to: relative.position,
            id: `${person.id}-${relativeId}`
          });
        }
      });
    });
    return connections;
  };

  const connections = generateConnections();

  return (
    <div className="min-h-screen bg-stellar-void relative overflow-hidden">
      {/* Звездное небо - каждая звезда это душа */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-stellar-soul animate-twinkle"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
              opacity: star.brightness
            }}
          />
        ))}
      </div>

      {/* Туманность на заднем плане */}
      <div className="absolute inset-0 bg-gradient-to-br from-stellar-soul/5 via-transparent to-stellar-light/5" />
      {/* Заголовок и навигация */}
      <header className="relative z-10 bg-stellar-deep/80 backdrop-blur-sm text-stellar-white shadow-lg border-b border-stellar-connection/30">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Icon name="Church" className="w-8 h-8 text-memorial-gold" />
              <h1 className="text-2xl font-bold font-montserrat">Мемориальный комплекс</h1>
            </div>
            <Button variant="outline" className="border-memorial-gold text-memorial-gold hover:bg-memorial-gold hover:text-memorial-dark">
              <Icon name="Phone" className="w-4 h-4 mr-2" />
              Связаться с нами
            </Button>
          </div>
          
          <nav className="flex flex-wrap gap-2">
            {navigationItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                className="text-memorial-white hover:bg-memorial-gray/20 hover:text-memorial-gold transition-colors"
              >
                <Icon name={item.icon} className="w-4 h-4 mr-2" />
                {item.name}
              </Button>
            ))}
          </nav>
        </div>
      </header>

      {/* Основной контент */}
      <main className="container mx-auto px-4 py-8">
        {/* Поиск */}
        <div className="mb-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-memorial-dark mb-2 font-montserrat">
              Поиск захоронений
            </h2>
            <p className="text-memorial-gray">
              Найдите место захоронения ваших близких и родственников
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Input
                type="text"
                placeholder="Введите имя, фамилию или отчество..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 text-lg border-memorial-border focus:border-memorial-gold focus:ring-memorial-gold/20"
              />
              <Icon 
                name="Search" 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-memorial-gray w-5 h-5" 
              />
            </div>
          </div>
        </div>

        {/* Фильтры по поколениям */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <Button
            variant="default"
            className="bg-stellar-soul hover:bg-stellar-soul/80 text-stellar-white"
          >
            Все поколения
          </Button>
          <Button
            variant="outline"
            className="border-stellar-connection hover:bg-stellar-connection/30 text-stellar-white"
          >
            Первое поколение
          </Button>
          <Button
            variant="outline"
            className="border-stellar-connection hover:bg-stellar-connection/30 text-stellar-white"
          >
            Второе поколение
          </Button>
        </div>

        {/* Генеалогическое дерево */}
        <div className="mb-12">
          <Card className="bg-stellar-deep/30 border-stellar-connection/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-stellar-white font-montserrat flex items-center gap-2">
                <Icon name="GitBranch" className="w-6 h-6 text-stellar-light" />
                Генеалогическое дерево — Созвездие семьи
              </CardTitle>
              <CardDescription className="text-stellar-white/70">
                Связи между душами, объединенные любовью и памятью
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative h-96 overflow-hidden rounded-lg bg-stellar-void/20">
                {/* Связи между звездами-родственниками */}
                <svg className="absolute inset-0 w-full h-full">
                  {connections.map((connection) => (
                    <line
                      key={connection.id}
                      x1={`${connection.from.x}%`}
                      y1={`${connection.from.y}%`}
                      x2={`${connection.to.x}%`}
                      y2={`${connection.to.y}%`}
                      stroke="hsl(var(--stellar-soul))"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      className="animate-pulse"
                      opacity="0.6"
                    />
                  ))}
                </svg>

                {/* Звезды-родственники */}
                {familyData.map((person) => (
                  <div
                    key={person.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                    style={{
                      left: `${person.position.x}%`,
                      top: `${person.position.y}%`
                    }}
                    onClick={() => setSelectedPerson(selectedPerson === person.id ? null : person.id)}
                  >
                    <div className="relative">
                      <div className="w-6 h-6 bg-stellar-soul rounded-full animate-pulse shadow-lg shadow-stellar-soul/50" />
                      <div className="absolute inset-0 w-6 h-6 bg-stellar-soul rounded-full animate-ping opacity-75" />
                    </div>
                    
                    {/* Информация о душе */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <div className="bg-stellar-deep/90 backdrop-blur-sm text-stellar-white px-4 py-3 rounded-lg border border-stellar-connection/30 whitespace-nowrap">
                        <div className="font-semibold font-montserrat">
                          {person.firstName} {person.lastName}
                        </div>
                        <div className="text-stellar-light text-sm">
                          {person.birthDate} - {person.deathDate}
                        </div>
                        <div className="text-stellar-white/70 text-xs mt-1">
                          {person.section}-{person.row}-{person.grave}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Легенда */}
                <div className="absolute bottom-4 left-4 bg-stellar-deep/80 backdrop-blur-sm rounded-lg p-3 border border-stellar-connection/30">
                  <div className="text-stellar-white text-sm font-montserrat mb-2">Легенда:</div>
                  <div className="flex items-center gap-2 text-stellar-white/70 text-xs mb-1">
                    <div className="w-3 h-3 bg-stellar-soul rounded-full animate-pulse" />
                    <span>Душа усопшего</span>
                  </div>
                  <div className="flex items-center gap-2 text-stellar-white/70 text-xs">
                    <div className="w-4 h-px bg-stellar-soul opacity-60" style={{ borderTop: '2px dashed' }} />
                    <span>Родственная связь</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Результаты поиска */}
        {searchQuery && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredPeople.map((person) => (
              <Card 
                key={person.id} 
                className="bg-stellar-deep/30 border-stellar-connection/30 hover:border-stellar-soul/50 transition-all duration-300 group backdrop-blur-sm"
              >
                <CardHeader className="p-0">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={person.photo} 
                      alt={`${person.firstName} ${person.lastName}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stellar-void/80 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4 bg-stellar-deep/80 text-stellar-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                      {person.section}-{person.row}-{person.grave}
                    </div>
                    <div className="absolute bottom-4 left-4 text-stellar-white">
                      <h3 className="font-bold font-montserrat text-lg">
                        {person.firstName} {person.lastName}
                      </h3>
                      <p className="text-stellar-light text-sm">
                        {person.birthDate} - {person.deathDate}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-stellar-white/70 text-sm mb-4 line-clamp-3">
                    {person.biography}
                  </p>

                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      className="bg-stellar-soul hover:bg-stellar-soul/80 text-stellar-white flex-1"
                    >
                      Светлая память
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-stellar-connection hover:bg-stellar-connection/30 text-stellar-light"
                    >
                      <Icon name="Users" className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Общая информация */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-memorial-border">
            <CardHeader>
              <CardTitle className="text-memorial-dark font-montserrat flex items-center gap-2">
                <Icon name="Info" className="w-5 h-5 text-memorial-gold" />
                О кладбище
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-memorial-gray mb-4">
                Городское кладбище основано в 1887 году. Здесь покоятся выдающиеся деятели 
                города, ветераны войн, простые труженики. Общая площадь составляет 15 гектаров.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Icon name="Clock" className="w-4 h-4 text-memorial-gold" />
                  <span className="text-sm">Режим работы: 8:00 - 18:00</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" className="w-4 h-4 text-memorial-gold" />
                  <span className="text-sm">г. Москва, ул. Мемориальная, 15</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-memorial-border">
            <CardHeader>
              <CardTitle className="text-memorial-dark font-montserrat flex items-center gap-2">
                <Icon name="Map" className="w-5 h-5 text-memorial-gold" />
                Карта кладбища
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-48 bg-memorial-light rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <Icon name="Map" className="w-12 h-12 text-memorial-gold mx-auto mb-2" />
                  <p className="text-memorial-gray">
                    Интерактивная карта
                  </p>
                  <p className="text-memorial-gray text-sm">
                    Показывает расположение секций и захоронений
                  </p>
                </div>
              </div>
              <Button className="w-full bg-memorial-gold hover:bg-memorial-gold/80 text-memorial-dark">
                Открыть карту
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Футер */}
      <footer className="bg-memorial-dark text-memorial-white mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-4 font-montserrat">Контакты</h3>
              <div className="space-y-2 text-memorial-gray">
                <p>+7 (495) 123-45-67</p>
                <p>info@memorial.ru</p>
                <p>г. Москва, ул. Мемориальная, 15</p>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4 font-montserrat">Услуги</h3>
              <div className="space-y-2 text-memorial-gray">
                <p>Захоронение</p>
                <p>Уход за могилами</p>
                <p>Ритуальные услуги</p>
                <p>Изготовление памятников</p>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4 font-montserrat">Информация</h3>
              <div className="space-y-2 text-memorial-gray">
                <p>Режим работы</p>
                <p>Правила посещения</p>
                <p>История кладбища</p>
                <p>Генеалогические услуги</p>
              </div>
            </div>
          </div>
          <Separator className="my-6 bg-memorial-gray" />
          <div className="text-center text-memorial-gray">
            <p>&copy; 2024 Мемориальный комплекс. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;