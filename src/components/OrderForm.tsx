import { useState, useRef } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { sendToTelegram } from "@/lib/telegram";
import { useToast } from "@/hooks/use-toast";

const OrderForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    carType: "",
    loaders: "",
    date: "",
    needHydroboard: "",
    needRokla: "",
    cargoType: "",
    cargoQuantity: "",
    cargoWeight: "",
    loadingAddress: "",
    unloadingAddress: "",
    loadingFloor: "",
    unloadingFloor: "",
  });

  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    if (cleaned.length > 0) {
      let formattedValue = "+7";
      if (cleaned.length > 1) {
        formattedValue += " (" + cleaned.substring(1, 4);
      }
      if (cleaned.length > 4) {
        formattedValue += ") " + cleaned.substring(4, 7);
      }
      if (cleaned.length > 7) {
        formattedValue += "-" + cleaned.substring(7, 9);
      }
      if (cleaned.length > 9) {
        formattedValue += "-" + cleaned.substring(9, 11);
      }
      return formattedValue;
    }
    return value;
  };

  const handleInputChange = (field: string, value: string) => {
    if (field === "phone") {
      value = formatPhoneNumber(value);
    }
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните имя и телефон",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const success = await sendToTelegram(formData);

      if (success) {
        setIsSuccess(true);
        
        toast({
          title: "Заявка отправлена!",
          description: "Мы свяжемся с вами в ближайшее время",
        });

        // Сброс через 3 секунды
        setTimeout(() => {
          setIsSuccess(false);
          setFormData({
            name: "",
            phone: "",
            carType: "",
            loaders: "",
            date: "",
            needHydroboard: "",
            needRokla: "",
            cargoType: "",
            cargoQuantity: "",
            cargoWeight: "",
            loadingAddress: "",
            unloadingAddress: "",
            loadingFloor: "",
            unloadingFloor: "",
          });
        }, 3000);
      } else {
        toast({
          title: "Ошибка отправки",
          description: "Попробуйте еще раз или позвоните нам",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Ошибка отправки",
        description: "Попробуйте еще раз или позвоните нам",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
      {/* Анимированный фон */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary rounded-full animate-pulse-soft blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent rounded-full animate-float blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-green-500 rounded-full animate-bounce-gentle blur-xl"></div>
        
        {/* Плавающие частицы */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.3}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-medium mb-6 animate-fadeInUp">
            <Icon name="Truck" size={20} className="animate-bounce-gentle" />
            Быстрый заказ
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fadeInUp">
            Заказать грузоперевозку
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fadeInUp">
            Заполните форму и получите расчет стоимости за 2 минуты
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div 
            ref={formRef}
            className={`bg-card border border-border rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 overflow-hidden relative ${
              isSuccess ? 'animate-bounce-gentle' : ''
            }`}
          >
            {/* Успешная отправка */}
            {isSuccess && (
              <div className="absolute inset-0 bg-green-500/90 backdrop-blur-sm flex items-center justify-center z-50 rounded-3xl">
                <div className="text-center text-white animate-fadeInUp">
                  <Icon name="CheckCircle" size={64} className="mx-auto mb-4 animate-bounce-gentle" />
                  <h3 className="text-3xl font-bold mb-2">Заявка отправлена!</h3>
                  <p className="text-xl">Мы свяжемся с вами в течение 5 минут</p>
                </div>
              </div>
            )}

            {/* Анимированный градиент-фон */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-50 animate-pulse-soft"></div>
            
            <div className="flex flex-col lg:flex-row relative z-10">
              
              {/* Левая часть - информация */}
              <div className="lg:w-2/5 p-8 bg-gradient-to-br from-primary via-blue-600 to-accent text-white relative overflow-hidden">
                
                {/* Декоративные элементы */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full animate-float blur-2xl"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent/30 rounded-full animate-pulse-soft blur-xl"></div>
                
                <div className="relative z-10">
                  <div className="mb-8 animate-fadeInUp">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6 animate-bounce-gentle">
                      <Icon name="Send" size={32} className="text-white" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Оставить заявку</h2>
                    <p className="text-lg text-white/90 leading-relaxed">
                      Заполните форму, и наш менеджер свяжется с вами в ближайшее время для уточнения деталей заказа.
                    </p>
                  </div>
                  
                  <div className="space-y-6 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
                    {[
                      { icon: "Phone", title: "Телефон", value: "+7 999 592 51 55", color: "text-green-300" },
                      { icon: "Mail", title: "Email", value: "cargo6705@gmail.com", color: "text-blue-300" },
                      { icon: "Clock", title: "Режим работы", value: "Круглосуточно", color: "text-yellow-300" },
                      { icon: "MapPin", title: "Зона работы", value: "Москва и область", color: "text-purple-300" }
                    ].map((contact, index) => (
                      <div key={index} className="group flex items-start hover:bg-white/10 rounded-xl p-3 transition-all duration-300 cursor-pointer">
                        <div className="w-12 h-12 flex items-center justify-center bg-white/15 rounded-xl mr-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                          <Icon name={contact.icon} size={20} className={contact.color} />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-1 group-hover:text-accent transition-colors duration-300">{contact.title}</h3>
                          <p className="text-white/90 group-hover:text-white transition-colors duration-300">{contact.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Правая часть - форма */}
              <div className="lg:w-3/5 p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Основная информация */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group animate-fadeInUp">
                      <Label htmlFor="name" className="text-foreground font-medium mb-2 block group-hover:text-primary transition-colors duration-300">
                        <Icon name="User" size={16} className="inline mr-2" />
                        Ваше имя *
                      </Label>
                      <div className="relative">
                        <Input
                          id="name"
                          type="text"
                          placeholder="Введите ваше имя"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          className={`transition-all duration-500 ${
                            focusedField === 'name' 
                              ? 'border-primary shadow-lg shadow-primary/20 scale-105' 
                              : 'hover:border-primary/50'
                          }`}
                          required
                        />
                        <div className={`absolute inset-0 rounded-md bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 transition-opacity duration-500 -z-10 blur ${
                          focusedField === 'name' ? 'opacity-100' : ''
                        }`}></div>
                      </div>
                    </div>

                    <div className="group animate-fadeInUp" style={{ animationDelay: '100ms' }}>
                      <Label htmlFor="phone" className="text-foreground font-medium mb-2 block group-hover:text-primary transition-colors duration-300">
                        <Icon name="Phone" size={16} className="inline mr-2" />
                        Телефон *
                      </Label>
                      <div className="relative">
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+7 (___) ___-__-__"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          onFocus={() => setFocusedField('phone')}
                          onBlur={() => setFocusedField(null)}
                          className={`transition-all duration-500 ${
                            focusedField === 'phone' 
                              ? 'border-primary shadow-lg shadow-primary/20 scale-105' 
                              : 'hover:border-primary/50'
                          }`}
                          required
                        />
                        <div className={`absolute inset-0 rounded-md bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 transition-opacity duration-500 -z-10 blur ${
                          focusedField === 'phone' ? 'opacity-100' : ''
                        }`}></div>
                      </div>
                    </div>
                  </div>

                  {/* Транспорт и грузчики */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group animate-fadeInUp" style={{ animationDelay: '200ms' }}>
                      <Label htmlFor="car-type" className="text-foreground font-medium mb-2 block group-hover:text-primary transition-colors duration-300">
                        <Icon name="Truck" size={16} className="inline mr-2" />
                        Тип автомобиля
                      </Label>
                      <Select onValueChange={(value) => handleInputChange("carType", value)}>
                        <SelectTrigger className="hover:border-primary/50 transition-colors duration-300">
                          <SelectValue placeholder="Выберите тип автомобиля" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0.5">🚐 Каблук 0.5т</SelectItem>
                          <SelectItem value="1.5">🚚 Газель 1.5т</SelectItem>
                          <SelectItem value="3">🚛 Грузовик 3т</SelectItem>
                          <SelectItem value="5">🚜 Грузовик 5т</SelectItem>
                          <SelectItem value="10">🚛 Грузовик 10т</SelectItem>
                          <SelectItem value="20">🚚 Фура 20т</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="group animate-fadeInUp" style={{ animationDelay: '300ms' }}>
                      <Label htmlFor="loaders" className="text-foreground font-medium mb-2 block group-hover:text-primary transition-colors duration-300">
                        <Icon name="Users" size={16} className="inline mr-2" />
                        Количество грузчиков
                      </Label>
                      <Select onValueChange={(value) => handleInputChange("loaders", value)}>
                        <SelectTrigger className="hover:border-primary/50 transition-colors duration-300">
                          <SelectValue placeholder="Выберите количество" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0">Не требуются</SelectItem>
                          <SelectItem value="1">1 грузчик</SelectItem>
                          <SelectItem value="2">2 грузчика</SelectItem>
                          <SelectItem value="3">3 грузчика</SelectItem>
                          <SelectItem value="4">4 грузчика</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Дополнительные услуги */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group animate-fadeInUp" style={{ animationDelay: '400ms' }}>
                      <Label htmlFor="hydroboard" className="text-foreground font-medium mb-2 block group-hover:text-primary transition-colors duration-300">
                        <Icon name="Settings" size={16} className="inline mr-2" />
                        Нужен ли гидроборт?
                      </Label>
                      <Select onValueChange={(value) => handleInputChange("needHydroboard", value)}>
                        <SelectTrigger className="hover:border-primary/50 transition-colors duration-300">
                          <SelectValue placeholder="Выберите вариант" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="no">❌ Не требуется</SelectItem>
                          <SelectItem value="yes">✅ Требуется</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="group animate-fadeInUp" style={{ animationDelay: '500ms' }}>
                      <Label htmlFor="rokla" className="text-foreground font-medium mb-2 block group-hover:text-primary transition-colors duration-300">
                        <Icon name="Package" size={16} className="inline mr-2" />
                        Нужна ли рокла?
                      </Label>
                      <Select onValueChange={(value) => handleInputChange("needRokla", value)}>
                        <SelectTrigger className="hover:border-primary/50 transition-colors duration-300">
                          <SelectValue placeholder="Выберите вариант" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="no">❌ Не требуется</SelectItem>
                          <SelectItem value="yes">✅ Требуется</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Информация о грузе */}
                  <div className="space-y-6 p-6 bg-muted/30 rounded-2xl border border-border/50">
                    <h3 className="text-xl font-bold text-foreground flex items-center gap-2 animate-fadeInUp" style={{ animationDelay: '600ms' }}>
                      <Icon name="Package" size={20} className="text-primary" />
                      Информация о грузе
                    </h3>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="group animate-fadeInUp" style={{ animationDelay: '700ms' }}>
                        <Label htmlFor="cargoType" className="text-foreground font-medium mb-2 block group-hover:text-primary transition-colors duration-300">
                          Тип груза
                        </Label>
                        <Select onValueChange={(value) => handleInputChange("cargoType", value)}>
                          <SelectTrigger className="hover:border-primary/50 transition-colors duration-300">
                            <SelectValue placeholder="Выберите тип" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="furniture">🪑 Мебель</SelectItem>
                            <SelectItem value="appliances">📺 Бытовая техника</SelectItem>
                            <SelectItem value="construction">🧱 Стройматериалы</SelectItem>
                            <SelectItem value="food">🍕 Продукты питания</SelectItem>
                            <SelectItem value="documents">📄 Документы</SelectItem>
                            <SelectItem value="equipment">⚙️ Оборудование</SelectItem>
                            <SelectItem value="personal">👕 Личные вещи</SelectItem>
                            <SelectItem value="other">📦 Другое</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="group animate-fadeInUp" style={{ animationDelay: '800ms' }}>
                        <Label htmlFor="cargoQuantity" className="text-foreground font-medium mb-2 block group-hover:text-primary transition-colors duration-300">
                          Количество
                        </Label>
                        <Input
                          id="cargoQuantity"
                          type="text"
                          placeholder="5 коробок, 1 диван..."
                          value={formData.cargoQuantity}
                          onChange={(e) => handleInputChange("cargoQuantity", e.target.value)}
                          className="hover:border-primary/50 transition-colors duration-300"
                        />
                      </div>

                      <div className="group animate-fadeInUp" style={{ animationDelay: '900ms' }}>
                        <Label htmlFor="cargoWeight" className="text-foreground font-medium mb-2 block group-hover:text-primary transition-colors duration-300">
                          Вес (кг)
                        </Label>
                        <Input
                          id="cargoWeight"
                          type="number"
                          placeholder="Примерный вес"
                          value={formData.cargoWeight}
                          onChange={(e) => handleInputChange("cargoWeight", e.target.value)}
                          className="hover:border-primary/50 transition-colors duration-300"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Адреса */}
                  <div className="space-y-6 p-6 bg-muted/30 rounded-2xl border border-border/50">
                    <h3 className="text-xl font-bold text-foreground flex items-center gap-2 animate-fadeInUp" style={{ animationDelay: '1000ms' }}>
                      <Icon name="MapPin" size={20} className="text-primary" />
                      Адреса и этажность
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="group animate-fadeInUp" style={{ animationDelay: '1100ms' }}>
                          <Label htmlFor="loadingAddress" className="text-foreground font-medium mb-2 block group-hover:text-primary transition-colors duration-300">
                            <Icon name="MapPin" size={16} className="inline mr-2 text-green-500" />
                            Адрес загрузки
                          </Label>
                          <Input
                            id="loadingAddress"
                            type="text"
                            placeholder="Улица, дом, квартира/офис"
                            value={formData.loadingAddress}
                            onChange={(e) => handleInputChange("loadingAddress", e.target.value)}
                            className="hover:border-green-500/50 focus:border-green-500 transition-colors duration-300"
                          />
                        </div>

                        <div className="group animate-fadeInUp" style={{ animationDelay: '1200ms' }}>
                          <Label htmlFor="loadingFloor" className="text-foreground font-medium mb-2 block group-hover:text-primary transition-colors duration-300">
                            Этаж загрузки / Лифт
                          </Label>
                          <Select onValueChange={(value) => handleInputChange("loadingFloor", value)}>
                            <SelectTrigger className="hover:border-green-500/50 transition-colors duration-300">
                              <SelectValue placeholder="Условия загрузки" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="ground">🏢 1 этаж / Земля</SelectItem>
                              <SelectItem value="elevator">🛗 Высокий этаж + лифт</SelectItem>
                              <SelectItem value="stairs-2">🚶‍♂️ 2 этаж без лифта</SelectItem>
                              <SelectItem value="stairs-3">🚶‍♂️ 3 этаж без лифта</SelectItem>
                              <SelectItem value="stairs-4">🚶‍♂️ 4 этаж без лифта</SelectItem>
                              <SelectItem value="stairs-5plus">🏃‍♂️ 5+ этаж без лифта</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="group animate-fadeInUp" style={{ animationDelay: '1300ms' }}>
                          <Label htmlFor="unloadingAddress" className="text-foreground font-medium mb-2 block group-hover:text-primary transition-colors duration-300">
                            <Icon name="MapPin" size={16} className="inline mr-2 text-red-500" />
                            Адрес выгрузки
                          </Label>
                          <Input
                            id="unloadingAddress"
                            type="text"
                            placeholder="Улица, дом, квартира/офис"
                            value={formData.unloadingAddress}
                            onChange={(e) => handleInputChange("unloadingAddress", e.target.value)}
                            className="hover:border-red-500/50 focus:border-red-500 transition-colors duration-300"
                          />
                        </div>

                        <div className="group animate-fadeInUp" style={{ animationDelay: '1400ms' }}>
                          <Label htmlFor="unloadingFloor" className="text-foreground font-medium mb-2 block group-hover:text-primary transition-colors duration-300">
                            Этаж выгрузки / Лифт
                          </Label>
                          <Select onValueChange={(value) => handleInputChange("unloadingFloor", value)}>
                            <SelectTrigger className="hover:border-red-500/50 transition-colors duration-300">
                              <SelectValue placeholder="Условия выгрузки" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="ground">🏢 1 этаж / Земля</SelectItem>
                              <SelectItem value="elevator">🛗 Высокий этаж + лифт</SelectItem>
                              <SelectItem value="stairs-2">🚶‍♂️ 2 этаж без лифта</SelectItem>
                              <SelectItem value="stairs-3">🚶‍♂️ 3 этаж без лифта</SelectItem>
                              <SelectItem value="stairs-4">🚶‍♂️ 4 этаж без лифта</SelectItem>
                              <SelectItem value="stairs-5plus">🏃‍♂️ 5+ этаж без лифта</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Дата и время */}
                  <div className="group animate-fadeInUp" style={{ animationDelay: '1500ms' }}>
                    <Label htmlFor="date" className="text-foreground font-medium mb-2 block group-hover:text-primary transition-colors duration-300">
                      <Icon name="Calendar" size={16} className="inline mr-2" />
                      Дата и время
                    </Label>
                    <Input
                      id="date"
                      type="datetime-local"
                      value={formData.date}
                      onChange={(e) => handleInputChange("date", e.target.value)}
                      className="hover:border-primary/50 transition-colors duration-300"
                    />
                  </div>

                  {/* Кнопка отправки */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className={`group w-full h-14 bg-gradient-to-r from-primary via-blue-600 to-accent text-white font-bold text-lg overflow-hidden relative transition-all duration-500 hover:shadow-2xl hover:shadow-primary/30 animate-fadeInUp ${
                      isSubmitting 
                        ? 'animate-pulse cursor-not-allowed' 
                        : 'hover:scale-105 active:scale-95'
                    }`}
                    style={{ animationDelay: '1600ms' }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3 group-hover:scale-105 transition-transform duration-300">
                      {isSubmitting ? (
                        <>
                          <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Отправляем заявку...
                        </>
                      ) : (
                        <>
                          <Icon name="Send" size={20} className="group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" />
                          Отправить заявку
                          <Icon name="ArrowRight" size={20} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                        </>
                      )}
                    </span>
                    
                    {!isSubmitting && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                        <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary via-blue-600 to-accent rounded-lg blur-lg opacity-0 group-hover:opacity-50 animate-glow transition-opacity duration-500 -z-10"></div>
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;