import { useState } from "react";
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
        toast({
          title: "Заявка отправлена!",
          description: "Мы свяжемся с вами в ближайшее время",
        });

        // Очищаем форму
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
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 bg-primary text-white">
              <h2 className="text-2xl font-bold mb-6">Оставить заявку</h2>
              <p className="mb-6">
                Заполните форму, и наш менеджер свяжется с вами в ближайшее
                время для уточнения деталей заказа.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 flex items-center justify-center mr-3 mt-0.5">
                    <Icon name="Phone" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium">Телефон</h3>
                    <p>+7 999 592 51 55</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 flex items-center justify-center mr-3 mt-0.5">
                    <Icon name="Mail" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p>cargo6705@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 p-8">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <Label htmlFor="name">Имя</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Введите ваше имя"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <Label htmlFor="car-type">Тип автомобиля</Label>
                  <Select
                    onValueChange={(value) =>
                      handleInputChange("carType", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите тип автомобиля" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0.5">Каблук 0.5т</SelectItem>
                      <SelectItem value="1.5">Газель 1.5т</SelectItem>
                      <SelectItem value="3">Грузовик 3т</SelectItem>
                      <SelectItem value="5">Грузовик 5т</SelectItem>
                      <SelectItem value="10">Грузовик 10т</SelectItem>
                      <SelectItem value="20">Фура 20т</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="mb-4">
                  <Label htmlFor="loaders">Количество грузчиков</Label>
                  <Select
                    onValueChange={(value) =>
                      handleInputChange("loaders", value)
                    }
                  >
                    <SelectTrigger>
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
                <div className="mb-4">
                  <Label htmlFor="hydroboard">Нужен ли гидроборт?</Label>
                  <Select
                    onValueChange={(value) =>
                      handleInputChange("needHydroboard", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите вариант" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="no">Не требуется</SelectItem>
                      <SelectItem value="yes">Требуется</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="mb-4">
                  <Label htmlFor="rokla">Нужна ли рокла?</Label>
                  <Select
                    onValueChange={(value) =>
                      handleInputChange("needRokla", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите вариант" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="no">Не требуется</SelectItem>
                      <SelectItem value="yes">Требуется</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Информация о грузе */}
                <div className="mb-4">
                  <Label htmlFor="cargoType">Тип груза</Label>
                  <Select
                    onValueChange={(value) =>
                      handleInputChange("cargoType", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите тип груза" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="furniture">Мебель</SelectItem>
                      <SelectItem value="appliances">
                        Бытовая техника
                      </SelectItem>
                      <SelectItem value="construction">
                        Стройматериалы
                      </SelectItem>
                      <SelectItem value="food">Продукты питания</SelectItem>
                      <SelectItem value="documents">Документы</SelectItem>
                      <SelectItem value="equipment">Оборудование</SelectItem>
                      <SelectItem value="personal">Личные вещи</SelectItem>
                      <SelectItem value="other">Другое</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="mb-4">
                  <Label htmlFor="cargoQuantity">Количество груза</Label>
                  <Input
                    id="cargoQuantity"
                    type="text"
                    placeholder="Например: 5 коробок, 1 диван, 20 паллет"
                    value={formData.cargoQuantity}
                    onChange={(e) =>
                      handleInputChange("cargoQuantity", e.target.value)
                    }
                  />
                </div>

                <div className="mb-4">
                  <Label htmlFor="cargoWeight">Примерный вес груза (кг)</Label>
                  <Input
                    id="cargoWeight"
                    type="number"
                    placeholder="Введите вес в килограммах"
                    value={formData.cargoWeight}
                    onChange={(e) =>
                      handleInputChange("cargoWeight", e.target.value)
                    }
                  />
                </div>

                {/* Адреса */}
                <div className="mb-4">
                  <Label htmlFor="loadingAddress">Адрес загрузки</Label>
                  <Input
                    id="loadingAddress"
                    type="text"
                    placeholder="Улица, дом, квартира/офис"
                    value={formData.loadingAddress}
                    onChange={(e) =>
                      handleInputChange("loadingAddress", e.target.value)
                    }
                  />
                </div>

                <div className="mb-4">
                  <Label htmlFor="loadingFloor">
                    Этаж загрузки / Есть ли лифт?
                  </Label>
                  <Select
                    onValueChange={(value) =>
                      handleInputChange("loadingFloor", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите условия загрузки" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ground">1 этаж / Земля</SelectItem>
                      <SelectItem value="elevator">
                        Высокий этаж + лифт
                      </SelectItem>
                      <SelectItem value="stairs-2">2 этаж без лифта</SelectItem>
                      <SelectItem value="stairs-3">3 этаж без лифта</SelectItem>
                      <SelectItem value="stairs-4">4 этаж без лифта</SelectItem>
                      <SelectItem value="stairs-5plus">
                        5+ этаж без лифта
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="mb-4">
                  <Label htmlFor="unloadingAddress">Адрес выгрузки</Label>
                  <Input
                    id="unloadingAddress"
                    type="text"
                    placeholder="Улица, дом, квартира/офис"
                    value={formData.unloadingAddress}
                    onChange={(e) =>
                      handleInputChange("unloadingAddress", e.target.value)
                    }
                  />
                </div>

                <div className="mb-4">
                  <Label htmlFor="unloadingFloor">
                    Этаж выгрузки / Есть ли лифт?
                  </Label>
                  <Select
                    onValueChange={(value) =>
                      handleInputChange("unloadingFloor", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите условия выгрузки" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ground">1 этаж / Земля</SelectItem>
                      <SelectItem value="elevator">
                        Высокий этаж + лифт
                      </SelectItem>
                      <SelectItem value="stairs-2">2 этаж без лифта</SelectItem>
                      <SelectItem value="stairs-3">3 этаж без лифта</SelectItem>
                      <SelectItem value="stairs-4">4 этаж без лифта</SelectItem>
                      <SelectItem value="stairs-5plus">
                        5+ этаж без лифта
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="mb-6">
                  <Label htmlFor="date">Дата и время</Label>
                  <Input
                    id="date"
                    type="datetime-local"
                    value={formData.date}
                    onChange={(e) => handleInputChange("date", e.target.value)}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Отправляем..." : "Отправить заявку"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;
