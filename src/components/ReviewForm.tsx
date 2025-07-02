import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

interface ReviewFormProps {
  onReviewSubmit: (review: any) => void;
}

const ReviewForm = ({ onReviewSubmit }: ReviewFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    service: "",
    rating: "",
    comment: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.service ||
      !formData.rating ||
      !formData.comment
    ) {
      toast({
        title: "Заполните все поля",
        description: "Все поля обязательны для заполнения",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const newReview = {
        id: Date.now().toString(),
        name: formData.name,
        service: formData.service,
        rating: parseInt(formData.rating),
        comment: formData.comment,
        date: new Date().toLocaleDateString("ru-RU"),
      };

      onReviewSubmit(newReview);

      toast({
        title: "Отзыв отправлен!",
        description: "Спасибо за ваш отзыв",
      });

      // Очищаем форму
      setFormData({
        name: "",
        service: "",
        rating: "",
        comment: "",
      });
    } catch (error) {
      toast({
        title: "Ошибка отправки",
        description: "Попробуйте еще раз",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Оставить отзыв</h2>
            <p className="text-gray-600">
              Поделитесь своим мнением о наших услугах
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Ваше имя</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Введите ваше имя"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">Услуга</Label>
                <Select
                  onValueChange={(value) => handleInputChange("service", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите услугу" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Каблук 0.5т">Каблук 0.5т</SelectItem>
                    <SelectItem value="Газель 1.5т">Газель 1.5т</SelectItem>
                    <SelectItem value="Грузовик 3т">Грузовик 3т</SelectItem>
                    <SelectItem value="Грузовик 5т">Грузовик 5т</SelectItem>
                    <SelectItem value="Грузовик 10т">Грузовик 10т</SelectItem>
                    <SelectItem value="Услуги грузчиков">
                      Услуги грузчиков
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="rating">Оценка</Label>
                <Select
                  onValueChange={(value) => handleInputChange("rating", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Поставьте оценку" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">⭐⭐⭐⭐⭐ Отлично</SelectItem>
                    <SelectItem value="4">⭐⭐⭐⭐ Хорошо</SelectItem>
                    <SelectItem value="3">⭐⭐⭐ Нормально</SelectItem>
                    <SelectItem value="2">⭐⭐ Плохо</SelectItem>
                    <SelectItem value="1">⭐ Очень плохо</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="comment">Отзыв</Label>
                <Textarea
                  id="comment"
                  placeholder="Расскажите о вашем опыте..."
                  rows={4}
                  value={formData.comment}
                  onChange={(e) => handleInputChange("comment", e.target.value)}
                />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Icon
                      name="Loader2"
                      size={16}
                      className="mr-2 animate-spin"
                    />
                    Отправляем...
                  </>
                ) : (
                  <>
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить отзыв
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewForm;
