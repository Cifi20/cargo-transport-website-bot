import { useState, useRef } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { sendToTelegram } from "@/lib/telegram";
import { useToast } from "@/hooks/use-toast";

import FormField from "./OrderForm/FormField";
import TruckTypeSelector from "./OrderForm/TruckTypeSelector";
import CargoSection from "./OrderForm/CargoSection";
import AddressSection from "./OrderForm/AddressSection";
import FormSidebar from "./OrderForm/FormSidebar";

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
    outsideMkad: "",
    mkadDistance: "",
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
            outsideMkad: "",
            mkadDistance: "",
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

  const loadersOptions = [
    { value: "0", label: "Не требуются" },
    { value: "1", label: "1 грузчик" },
    { value: "2", label: "2 грузчика" },
    { value: "3", label: "3 грузчика" },
    { value: "4", label: "4 грузчика" }
  ];

  const yesNoOptions = [
    { value: "no", label: "❌ Не требуется" },
    { value: "yes", label: "✅ Требуется" }
  ];

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
        
        {/* Заголовок */}
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
              <FormSidebar />
              
              {/* Правая часть - форма */}
              <div className="lg:w-3/5 p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Основная информация */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      id="name"
                      label="Ваше имя"
                      icon="User"
                      type="text"
                      placeholder="Введите ваше имя"
                      value={formData.name}
                      onChange={(value) => handleInputChange("name", value)}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      focusedField={focusedField}
                      required
                      className="animate-fadeInUp"
                    />

                    <FormField
                      id="phone"
                      label="Телефон"
                      icon="Phone"
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(value) => handleInputChange("phone", value)}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      focusedField={focusedField}
                      required
                      className="animate-fadeInUp"
                    />
                  </div>

                  {/* Транспорт */}
                  <TruckTypeSelector
                    value={formData.carType}
                    onChange={(value) => handleInputChange("carType", value)}
                  />

                  {/* Грузчики */}
                  <FormField
                    id="loaders"
                    label="Количество грузчиков"
                    icon="Users"
                    type="select"
                    value={formData.loaders}
                    onChange={(value) => handleInputChange("loaders", value)}
                    placeholder="Выберите количество"
                    options={loadersOptions}
                    className="animate-fadeInUp"
                  />

                  {/* Дополнительные услуги */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      id="needHydroboard"
                      label="Нужен ли гидроборт?"
                      icon="Settings"
                      type="select"
                      value={formData.needHydroboard}
                      onChange={(value) => handleInputChange("needHydroboard", value)}
                      placeholder="Выберите вариант"
                      options={yesNoOptions}
                      className="animate-fadeInUp"
                    />

                    <FormField
                      id="needRokla"
                      label="Нужна ли рокла?"
                      icon="Package"
                      type="select"
                      value={formData.needRokla}
                      onChange={(value) => handleInputChange("needRokla", value)}
                      placeholder="Выберите вариант"
                      options={yesNoOptions}
                      className="animate-fadeInUp"
                    />
                  </div>

                  {/* Информация о грузе */}
                  <CargoSection
                    formData={{
                      cargoType: formData.cargoType,
                      cargoQuantity: formData.cargoQuantity,
                      cargoWeight: formData.cargoWeight,
                    }}
                    onInputChange={handleInputChange}
                  />

                  {/* Адреса */}
                  <AddressSection
                    formData={{
                      loadingAddress: formData.loadingAddress,
                      unloadingAddress: formData.unloadingAddress,
                      loadingFloor: formData.loadingFloor,
                      unloadingFloor: formData.unloadingFloor,
                    }}
                    onInputChange={handleInputChange}
                    focusedField={focusedField}
                    setFocusedField={setFocusedField}
                  />

                  {/* Выезд за МКАД */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      id="outsideMkad"
                      label="Выезд за МКАД?"
                      icon="MapPin"
                      type="select"
                      value={formData.outsideMkad}
                      onChange={(value) => handleInputChange("outsideMkad", value)}
                      placeholder="Выберите вариант"
                      options={yesNoOptions}
                      className="animate-fadeInUp"
                    />

                    {formData.outsideMkad === "yes" && (
                      <FormField
                        id="mkadDistance"
                        label="Расстояние от МКАД (км)"
                        icon="Route"
                        type="number"
                        placeholder="Укажите км"
                        value={formData.mkadDistance}
                        onChange={(value) => handleInputChange("mkadDistance", value)}
                        onFocus={() => setFocusedField('mkadDistance')}
                        onBlur={() => setFocusedField(null)}
                        focusedField={focusedField}
                        className="animate-fadeInUp"
                      />
                    )}
                  </div>

                  {/* Дата и время */}
                  <FormField
                    id="date"
                    label="Дата и время"
                    icon="Calendar"
                    type="datetime-local"
                    value={formData.date}
                    onChange={(value) => handleInputChange("date", value)}
                    className="animate-fadeInUp"
                  />

                  {/* Кнопка отправки */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className={`group w-full h-14 bg-gradient-to-r from-primary via-blue-600 to-accent text-white font-bold text-lg overflow-hidden relative transition-all duration-500 hover:shadow-2xl hover:shadow-primary/30 animate-fadeInUp ${
                      isSubmitting 
                        ? 'animate-pulse cursor-not-allowed' 
                        : 'hover:scale-105 active:scale-95'
                    }`}
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