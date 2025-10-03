import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-8 px-4 border-t border-gray-200">
      <div className="container mx-auto text-center">
        <p className="text-sm mb-3">© 2024 FilmPrint.ru. Все права защищены.</p>
        <div className="flex items-center justify-center gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <button className="text-sm text-black/70 hover:text-black underline">
                Договор оферты
              </button>
            </DialogTrigger>
          <DialogContent className="max-w-3xl max-h-[80vh]">
            <DialogHeader>
              <DialogTitle className="text-2xl">Договор публичной оферты</DialogTitle>
            </DialogHeader>
            <ScrollArea className="h-[60vh] pr-4">
              <div className="space-y-4 text-sm">
                <section>
                  <h3 className="font-semibold text-lg mb-2">1. Общие положения</h3>
                  <p className="text-muted-foreground">
                    1.1. Настоящий документ является публичной офертой в соответствии со статьёй 437 Гражданского кодекса Российской Федерации.
                  </p>
                  <p className="text-muted-foreground mt-2">
                    1.2. Исполнителем услуг по настоящему договору является ИП FilmPrint (далее — «Исполнитель»).
                  </p>
                  <p className="text-muted-foreground mt-2">
                    1.3. Заказчиком является физическое или юридическое лицо, принявшее условия настоящей оферты (далее — «Заказчик»).
                  </p>
                </section>

                <section>
                  <h3 className="font-semibold text-lg mb-2">2. Предмет договора</h3>
                  <p className="text-muted-foreground">
                    2.1. Исполнитель обязуется оказать Заказчику услуги широкоформатной печати, а Заказчик обязуется принять и оплатить эти услуги.
                  </p>
                  <p className="text-muted-foreground mt-2">
                    2.2. Перечень услуг и их стоимость указаны в прайс-листе на сайте filmprint.ru и могут быть изменены Исполнителем в одностороннем порядке.
                  </p>
                </section>

                <section>
                  <h3 className="font-semibold text-lg mb-2">3. Порядок оказания услуг</h3>
                  <p className="text-muted-foreground">
                    3.1. Заказчик направляет заявку на оказание услуг любым доступным способом: по телефону, электронной почте или через форму на сайте.
                  </p>
                  <p className="text-muted-foreground mt-2">
                    3.2. Исполнитель рассматривает заявку и согласовывает с Заказчиком стоимость, сроки и технические требования.
                  </p>
                  <p className="text-muted-foreground mt-2">
                    3.3. После согласования условий Заказчик предоставляет макет для печати в электронном виде.
                  </p>
                  <p className="text-muted-foreground mt-2">
                    3.4. Исполнитель выполняет работы в согласованные сроки и уведомляет Заказчика о готовности.
                  </p>
                </section>

                <section>
                  <h3 className="font-semibold text-lg mb-2">4. Стоимость и порядок оплаты</h3>
                  <p className="text-muted-foreground">
                    4.1. Стоимость услуг определяется на основании прайс-листа и согласовывается с Заказчиком до начала работ.
                  </p>
                  <p className="text-muted-foreground mt-2">
                    4.2. Оплата производится наличным или безналичным расчётом по согласованию сторон.
                  </p>
                  <p className="text-muted-foreground mt-2">
                    4.3. Для юридических лиц оплата производится на основании выставленного счёта.
                  </p>
                </section>

                <section>
                  <h3 className="font-semibold text-lg mb-2">5. Права и обязанности сторон</h3>
                  <p className="text-muted-foreground">
                    5.1. Исполнитель обязуется выполнить работы качественно и в согласованные сроки.
                  </p>
                  <p className="text-muted-foreground mt-2">
                    5.2. Заказчик обязуется предоставить корректный макет и своевременно оплатить услуги.
                  </p>
                  <p className="text-muted-foreground mt-2">
                    5.3. Исполнитель не несёт ответственности за качество предоставленного Заказчиком макета.
                  </p>
                </section>

                <section>
                  <h3 className="font-semibold text-lg mb-2">6. Гарантии и ответственность</h3>
                  <p className="text-muted-foreground">
                    6.1. Исполнитель гарантирует соответствие выполненных работ техническим требованиям печати.
                  </p>
                  <p className="text-muted-foreground mt-2">
                    6.2. Претензии по качеству принимаются в течение 3 дней с момента получения заказа.
                  </p>
                  <p className="text-muted-foreground mt-2">
                    6.3. Исполнитель не несёт ответственности за задержку выполнения заказа по вине Заказчика.
                  </p>
                </section>

                <section>
                  <h3 className="font-semibold text-lg mb-2">7. Конфиденциальность</h3>
                  <p className="text-muted-foreground">
                    7.1. Стороны обязуются не разглашать конфиденциальную информацию, полученную в ходе сотрудничества.
                  </p>
                  <p className="text-muted-foreground mt-2">
                    7.2. Макеты и файлы Заказчика хранятся в течение 30 дней после выполнения заказа, после чего удаляются.
                  </p>
                </section>

                <section>
                  <h3 className="font-semibold text-lg mb-2">8. Срок действия договора</h3>
                  <p className="text-muted-foreground">
                    8.1. Настоящий договор вступает в силу с момента принятия Заказчиком условий оферты и действует до полного исполнения обязательств сторонами.
                  </p>
                </section>

                <section>
                  <h3 className="font-semibold text-lg mb-2">9. Реквизиты исполнителя</h3>
                  <p className="text-muted-foreground">
                    ИП FilmPrint
                  </p>
                  <p className="text-muted-foreground mt-1">
                    Адрес: г. Москва, ул. Краснобогатырская, д. 2 стр. 53
                  </p>
                  <p className="text-muted-foreground mt-1">
                    Телефон: +7 (965) 354-82-82
                  </p>
                  <p className="text-muted-foreground mt-1">
                    Email: zakaz@filmprint.ru
                  </p>
                </section>
              </div>
            </ScrollArea>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <button className="text-sm text-black hover:text-black/70 underline">
              Политика конфиденциальности
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl max-h-[80vh]">
            <DialogHeader>
              <DialogTitle className="text-2xl">Политика конфиденциальности</DialogTitle>
            </DialogHeader>
            <ScrollArea className="h-[60vh] pr-4">
              <div className="space-y-4 text-sm">
                <section>
                  <h3 className="font-semibold text-lg mb-2">1. Общие положения</h3>
                  <p className="text-muted-foreground">
                    1.1. Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сайта filmprint.ru.
                  </p>
                  <p className="text-muted-foreground mt-2">
                    1.2. Оператором персональных данных является ИП Якубов Айвар Дамирович (далее — «Оператор»).
                  </p>
                  <p className="text-muted-foreground mt-2">
                    1.3. Используя сайт filmprint.ru, вы соглашаетесь с условиями настоящей Политики конфиденциальности.
                  </p>
                </section>

                <section>
                  <h3 className="font-semibold text-lg mb-2">2. Персональные данные</h3>
                  <p className="text-muted-foreground">
                    2.1. Персональные данные — любая информация, относящаяся к прямо или косвенно определённому физическому лицу.
                  </p>
                  <p className="text-muted-foreground mt-2">
                    2.2. Мы собираем следующие данные:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1 ml-4">
                    <li>ФИО</li>
                    <li>Контактный телефон</li>
                    <li>Адрес электронной почты</li>
                    <li>Данные о заказах и услугах</li>
                  </ul>
                </section>

                <section>
                  <h3 className="font-semibold text-lg mb-2">3. Цели обработки данных</h3>
                  <p className="text-muted-foreground">
                    3.1. Персональные данные используются для:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1 ml-4">
                    <li>Обработки заказов и оказания услуг</li>
                    <li>Связи с клиентами по вопросам заказов</li>
                    <li>Информирования о новых услугах и акциях (при наличии согласия)</li>
                    <li>Улучшения качества услуг</li>
                  </ul>
                </section>

                <section>
                  <h3 className="font-semibold text-lg mb-2">4. Правовые основания обработки</h3>
                  <p className="text-muted-foreground">
                    4.1. Обработка персональных данных осуществляется на основании:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1 ml-4">
                    <li>Федерального закона № 152-ФЗ «О персональных данных»</li>
                    <li>Вашего согласия на обработку персональных данных</li>
                    <li>Договора на оказание услуг</li>
                  </ul>
                </section>

                <section>
                  <h3 className="font-semibold text-lg mb-2">5. Защита данных</h3>
                  <p className="text-muted-foreground">
                    5.1. Оператор принимает необходимые меры для защиты персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения.
                  </p>
                  <p className="text-muted-foreground mt-2">
                    5.2. Доступ к персональным данным имеют только уполномоченные сотрудники Оператора.
                  </p>
                  <p className="text-muted-foreground mt-2">
                    5.3. Персональные данные хранятся в защищённых базах данных с ограниченным доступом.
                  </p>
                </section>

                <section>
                  <h3 className="font-semibold text-lg mb-2">6. Передача данных третьим лицам</h3>
                  <p className="text-muted-foreground">
                    6.1. Оператор не передаёт персональные данные третьим лицам без вашего согласия, за исключением случаев, предусмотренных законодательством РФ.
                  </p>
                  <p className="text-muted-foreground mt-2">
                    6.2. Данные могут быть переданы:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1 ml-4">
                    <li>Государственным органам по официальному запросу</li>
                    <li>Партнёрам для выполнения заказов (с соблюдением конфиденциальности)</li>
                  </ul>
                </section>

                <section>
                  <h3 className="font-semibold text-lg mb-2">7. Права субъектов данных</h3>
                  <p className="text-muted-foreground">
                    7.1. Вы имеете право:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1 ml-4">
                    <li>Получать информацию об обработке ваших персональных данных</li>
                    <li>Требовать уточнения, блокирования или уничтожения данных</li>
                    <li>Отозвать согласие на обработку данных</li>
                    <li>Обжаловать действия Оператора в Роскомнадзоре или суде</li>
                  </ul>
                </section>

                <section>
                  <h3 className="font-semibold text-lg mb-2">8. Файлы cookie</h3>
                  <p className="text-muted-foreground">
                    8.1. Сайт использует файлы cookie для улучшения работы и анализа посещаемости.
                  </p>
                  <p className="text-muted-foreground mt-2">
                    8.2. Вы можете отключить cookie в настройках браузера, но это может ограничить функциональность сайта.
                  </p>
                </section>

                <section>
                  <h3 className="font-semibold text-lg mb-2">9. Изменения в политике</h3>
                  <p className="text-muted-foreground">
                    9.1. Оператор вправе вносить изменения в настоящую Политику конфиденциальности.
                  </p>
                  <p className="text-muted-foreground mt-2">
                    9.2. Новая редакция вступает в силу с момента размещения на сайте.
                  </p>
                </section>

                <section>
                  <h3 className="font-semibold text-lg mb-2">10. Контакты</h3>
                  <p className="text-muted-foreground">
                    По вопросам обработки персональных данных обращайтесь:
                  </p>
                  <p className="text-muted-foreground mt-2">
                    Email: zakaz@filmprint.ru
                  </p>
                  <p className="text-muted-foreground mt-1">
                    Телефон: +7 (965) 354-82-82
                  </p>
                  <p className="text-muted-foreground mt-1">
                    Адрес: 143968, Россия, Московская область, город Реутов, улица Реутовских ополченцев, дом 14, кв 311
                  </p>
                </section>
              </div>
            </ScrollArea>
          </DialogContent>
        </Dialog>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
