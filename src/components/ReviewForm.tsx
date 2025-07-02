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
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [selectedVideos, setSelectedVideos] = useState<File[]>([]);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [videoUrls, setVideoUrls] = useState<string[]>([]);

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const validImages = files.filter((file) => file.type.startsWith("image/"));

    if (validImages.length !== files.length) {
      toast({
        title: "Неверный формат",
        description: "Выберите только изображения",
        variant: "destructive",
      });
      return;
    }

    setSelectedImages((prev) => [...prev, ...validImages].slice(0, 5));

    // Создаем URL для предпросмотра
    validImages.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageUrls((prev) =>
          [...prev, e.target?.result as string].slice(0, 5),
        );
      };
      reader.readAsDataURL(file);
    });
  };

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const validVideos = files.filter((file) => file.type.startsWith("video/"));

    if (validVideos.length !== files.length) {
      toast({
        title: "Неверный формат",
        description: "Выберите только видео",
        variant: "destructive",
      });
      return;
    }

    setSelectedVideos((prev) => [...prev, ...validVideos].slice(0, 3));

    // Создаем URL для предпросмотра
    validVideos.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setVideoUrls((prev) =>
          [...prev, e.target?.result as string].slice(0, 3),
        );
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index: number) => {
    setSelectedImages((prev) => prev.filter((_, i) => i !== index));
    setImageUrls((prev) => prev.filter((_, i) => i !== index));
  };

  const removeVideo = (index: number) => {
    setSelectedVideos((prev) => prev.filter((_, i) => i !== index));
    setVideoUrls((prev) => prev.filter((_, i) => i !== index));
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
        images: imageUrls.length > 0 ? imageUrls : undefined,
        videos: videoUrls.length > 0 ? videoUrls : undefined,
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
      setSelectedImages([]);
      setSelectedVideos([]);
      setImageUrls([]);
      setVideoUrls([]);
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
              Поделитесь своим мнением о наших услугах. Добавьте фото или видео!
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

              {/* Загрузка фотографий */}
              <div className="space-y-2">
                <Label htmlFor="images">Фотографии (до 5 шт.)</Label>
                <div className="flex items-center space-x-4">
                  <Input
                    id="images"
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageChange}
                    className="flex-1"
                    disabled={selectedImages.length >= 5}
                  />
                  <Icon name="Camera" size={20} className="text-gray-400" />
                </div>
                {imageUrls.length > 0 && (
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    {imageUrls.map((url, index) => (
                      <div key={index} className="relative">
                        <img
                          src={url}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-20 object-cover rounded border"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs hover:bg-red-600"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Загрузка видео */}
              <div className="space-y-2">
                <Label htmlFor="videos">Видео (до 3 шт.)</Label>
                <div className="flex items-center space-x-4">
                  <Input
                    id="videos"
                    type="file"
                    multiple
                    accept="video/*"
                    onChange={handleVideoChange}
                    className="flex-1"
                    disabled={selectedVideos.length >= 3}
                  />
                  <Icon name="Video" size={20} className="text-gray-400" />
                </div>
                {videoUrls.length > 0 && (
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {videoUrls.map((url, index) => (
                      <div key={index} className="relative">
                        <video
                          src={url}
                          className="w-full h-24 object-cover rounded border"
                          controls={false}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded">
                          <Icon name="Play" size={16} className="text-white" />
                        </div>
                        <button
                          type="button"
                          onClick={() => removeVideo(index)}
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs hover:bg-red-600"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                )}
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
