import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Icon name="Cross" size={32} className="text-slate-700" />
              <h1 className="text-2xl font-bold text-slate-800 font-montserrat">
                Вечная Память
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-slate-600 hover:text-slate-800 transition-colors"
              >
                Главная
              </a>
              <a
                href="#catalog"
                className="text-slate-600 hover:text-slate-800 transition-colors"
              >
                Каталог
              </a>
              <a
                href="#about"
                className="text-slate-600 hover:text-slate-800 transition-colors"
              >
                О нас
              </a>
              <a
                href="#contact"
                className="text-slate-600 hover:text-slate-800 transition-colors"
              >
                Контакты
              </a>
            </nav>
            <Button className="bg-slate-700 hover:bg-slate-800">
              <Icon name="Phone" size={16} className="mr-2" />
              Консультация
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-5xl font-bold mb-6 font-montserrat">
              Достойная память о близких
            </h2>
            <p className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto font-open-sans">
              Изготавливаем памятники из гранита, мрамора и композитных
              материалов. Индивидуальный подход, качественная гравировка, полный
              цикл услуг.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 text-white"
              >
                <Icon name="Eye" size={20} className="mr-2" />
                Смотреть каталог
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-800"
              >
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-800 mb-4 font-montserrat">
              Наши услуги
            </h3>
            <p className="text-lg text-slate-600 font-open-sans">
              Полный комплекс услуг по изготовлению памятников
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon
                  name="Hammer"
                  size={48}
                  className="mx-auto mb-4 text-slate-600"
                />
                <CardTitle className="font-montserrat">Изготовление</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 font-open-sans">
                  Создаем памятники по индивидуальным эскизам с использованием
                  современных технологий обработки камня
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon
                  name="Wrench"
                  size={48}
                  className="mx-auto mb-4 text-slate-600"
                />
                <CardTitle className="font-montserrat">Установка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 font-open-sans">
                  Профессиональная установка памятников с соблюдением всех
                  технических требований и норм
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon
                  name="PenTool"
                  size={48}
                  className="mx-auto mb-4 text-slate-600"
                />
                <CardTitle className="font-montserrat">Гравировка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 font-open-sans">
                  Художественная гравировка портретов, текстов и орнаментов с
                  использованием лазерных технологий
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section id="catalog" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-800 mb-4 font-montserrat">
              Материалы
            </h3>
            <p className="text-lg text-slate-600 font-open-sans">
              Работаем с лучшими материалами для долговечности памятников
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square bg-gray-200 relative">
                <img
                  src="/img/46494370-367a-4f33-9740-3a24f0f9c923.jpg"
                  alt="Гранитный памятник"
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-amber-600">
                  Популярный
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="font-montserrat">Гранит</CardTitle>
                <CardDescription className="font-open-sans">
                  Самый прочный и долговечный материал
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600 font-open-sans">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mr-2"
                    />
                    Устойчив к погодным условиям
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mr-2"
                    />
                    Не требует особого ухода
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mr-2"
                    />
                    Разнообразие цветов и текстур
                  </li>
                </ul>
                <Button className="w-full mt-4 bg-slate-700 hover:bg-slate-800">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square bg-gray-200 relative">
                <img
                  src="/img/6d9e68bd-8127-43b4-a716-c7cd6eb746cb.jpg"
                  alt="Мраморный памятник"
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-blue-600">
                  Классический
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="font-montserrat">Мрамор</CardTitle>
                <CardDescription className="font-open-sans">
                  Благородный материал с богатой историей
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600 font-open-sans">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mr-2"
                    />
                    Изысканная текстура
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mr-2"
                    />
                    Отличная полировка
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mr-2"
                    />
                    Подходит для сложной резьбы
                  </li>
                </ul>
                <Button className="w-full mt-4 bg-slate-700 hover:bg-slate-800">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square bg-gray-200 relative">
                <img
                  src="/img/49174892-46f5-446d-8e24-a19437888fcd.jpg"
                  alt="Композитный памятник"
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-green-600">
                  Современный
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="font-montserrat">Композит</CardTitle>
                <CardDescription className="font-open-sans">
                  Инновационный материал нового поколения
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600 font-open-sans">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mr-2"
                    />
                    Доступная цена
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mr-2"
                    />
                    Легкий вес
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mr-2"
                    />
                    Устойчив к сколам
                  </li>
                </ul>
                <Button className="w-full mt-4 bg-slate-700 hover:bg-slate-800">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Special Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-800 mb-4 font-montserrat">
              Особые услуги
            </h3>
            <p className="text-lg text-slate-600 font-open-sans">
              Индивидуальный подход к каждому заказу
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <Icon name="Palette" size={32} className="text-amber-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2 font-montserrat">
                    Индивидуальные заказы
                  </h4>
                  <p className="text-slate-600 font-open-sans">
                    Создаем уникальные памятники по вашим эскизам и пожеланиям.
                    Работаем с дизайнерами для создания особенных проектов.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Icon name="RefreshCw" size={32} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2 font-montserrat">
                    Реставрация
                  </h4>
                  <p className="text-slate-600 font-open-sans">
                    Восстанавливаем и обновляем старые памятники. Чистка,
                    полировка, восстановление надписей и изображений.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-slate-800 mb-6 font-montserrat">
                О нашей компании
              </h3>
              <p className="text-lg text-slate-600 mb-6 font-open-sans">
                Более 15 лет мы создаем памятники, которые достойно хранят
                память о ваших близких. Наша команда состоит из опытных
                мастеров, художников и дизайнеров.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-800 mb-2">
                    500+
                  </div>
                  <div className="text-slate-600 font-open-sans">
                    Памятников изготовлено
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-800 mb-2">
                    15
                  </div>
                  <div className="text-slate-600 font-open-sans">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-800 mb-2">
                    100%
                  </div>
                  <div className="text-slate-600 font-open-sans">
                    Довольных клиентов
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-800 mb-2">
                    30
                  </div>
                  <div className="text-slate-600 font-open-sans">
                    Дней изготовления
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-slate-800 mb-4 font-montserrat">
                Наши принципы
              </h4>
              <ul className="space-y-3 font-open-sans">
                <li className="flex items-start">
                  <Icon
                    name="Heart"
                    size={20}
                    className="text-red-500 mr-3 mt-1"
                  />
                  <span className="text-slate-600">
                    Бережное отношение к памяти усопших
                  </span>
                </li>
                <li className="flex items-start">
                  <Icon
                    name="Award"
                    size={20}
                    className="text-amber-500 mr-3 mt-1"
                  />
                  <span className="text-slate-600">
                    Высокое качество материалов и работы
                  </span>
                </li>
                <li className="flex items-start">
                  <Icon
                    name="Users"
                    size={20}
                    className="text-blue-500 mr-3 mt-1"
                  />
                  <span className="text-slate-600">
                    Индивидуальный подход к каждому клиенту
                  </span>
                </li>
                <li className="flex items-start">
                  <Icon
                    name="Clock"
                    size={20}
                    className="text-green-500 mr-3 mt-1"
                  />
                  <span className="text-slate-600">
                    Соблюдение сроков изготовления
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 font-montserrat">
              Свяжитесь с нами
            </h3>
            <p className="text-lg text-slate-300 font-open-sans">
              Мы готовы помочь вам в трудную минуту
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-slate-700 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Icon name="Phone" size={24} className="text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2 font-montserrat">
                Телефон
              </h4>
              <p className="text-slate-300 font-open-sans">
                +7 (999) 123-45-67
              </p>
              <p className="text-slate-300 font-open-sans">
                Работаем круглосуточно
              </p>
            </div>
            <div className="text-center">
              <div className="bg-slate-700 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Icon name="MapPin" size={24} className="text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2 font-montserrat">Адрес</h4>
              <p className="text-slate-300 font-open-sans">ул. Мастеров, 15</p>
              <p className="text-slate-300 font-open-sans">г. Москва, 123456</p>
            </div>
            <div className="text-center">
              <div className="bg-slate-700 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Icon name="Mail" size={24} className="text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2 font-montserrat">Email</h4>
              <p className="text-slate-300 font-open-sans">
                info@vecnayapamyat.ru
              </p>
              <p className="text-slate-300 font-open-sans">
                Ответим в течение часа
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Cross" size={24} className="text-slate-400" />
              <span className="text-lg font-bold font-montserrat">
                Вечная Память
              </span>
            </div>
            <div className="text-slate-400 text-sm font-open-sans">
              © 2024 Вечная Память. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
