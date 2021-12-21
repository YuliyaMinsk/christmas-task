export interface Toy {
  id: string;
  name: string;
  count: string;
  year: string;
  shape: 'шар' | 'фигурка' | 'снежинка' | 'шишка' | 'колокольчик';
  color: 'белый' | 'красный' | 'желтый' | 'синий' | 'зелёный';
  size: 'большой' | 'средний' | 'малый';
  favorite: boolean;
  select: boolean;
}
